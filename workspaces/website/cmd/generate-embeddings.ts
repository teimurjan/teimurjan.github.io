import fs from 'node:fs'
import path from 'node:path'
import { pipeline } from '@huggingface/transformers'
import gqlClient from '../gql-client'
import { generateAllSections } from '../lib/section-generator'
import type { FolderStructure, Section } from '../lib/sections'

interface EmbeddingChunk {
  id: string
  section: string
  text: string
  embedding: number[]
}

interface EmbeddingsFile {
  model: string
  generatedAt: string
  chunks: EmbeddingChunk[]
}

function extractTextFromSection(section: Section): string[] {
  const chunks: string[] = []

  switch (section.type) {
    case 'about': {
      chunks.push(`About: ${section.data.about}`)
      chunks.push(`Contact: Email ${section.data.email}, Location: ${section.data.location}`)
      break
    }
    case 'experience': {
      for (const exp of section.data.experiences) {
        const dateRange = exp.endDate
          ? `${exp.startDate} - ${exp.endDate}`
          : `${exp.startDate} - Present`
        chunks.push(
          `Experience at ${exp.company}: ${exp.position}. ${dateRange}. ${exp.location ?? ''}. ${exp.description}`
        )
      }
      break
    }
    case 'skills': {
      const skillsList = section.data.skills
        .map((s) => `${s.title} (${s.yearsOfExperience} years)`)
        .join(', ')
      chunks.push(`Skills: ${skillsList}`)
      for (const skill of section.data.skills) {
        chunks.push(`Skill: ${skill.title} with ${skill.yearsOfExperience} years of experience`)
      }
      break
    }
    case 'education': {
      for (const edu of section.data.educations) {
        const degree = edu.degree ? `${edu.degree} in ` : ''
        chunks.push(
          `Education: ${degree}${edu.areaOfStudy} at ${edu.school}. ${edu.description ?? ''}`
        )
      }
      break
    }
    case 'projects': {
      for (const repo of section.data.repositories) {
        const owned = repo.isOwned ? 'Created' : 'Contributed to'
        chunks.push(
          `Project: ${owned} ${repo.nameWithOwner}. ${repo.description ?? ''} ${repo.primaryLanguage ? `Built with ${repo.primaryLanguage}.` : ''} ${repo.stargazerCount} stars.`
        )
      }
      break
    }
    case 'publications': {
      for (const pub of section.data.publications) {
        chunks.push(`Publication: "${pub.title}" published on ${pub.date}. Link: ${pub.link}`)
      }
      break
    }
    case 'conferences': {
      for (const conf of section.data.conferences) {
        chunks.push(
          `Conference talk: "${conf.title}" about ${conf.topic} on ${conf.date}.${conf.link ? ` Link: ${conf.link}` : ''}`
        )
      }
      break
    }
    case 'interviews': {
      for (const interview of section.data.interviews) {
        chunks.push(
          `Interview: "${interview.title}" on ${interview.date}.${interview.link ? ` Link: ${interview.link}` : ''}`
        )
      }
      break
    }
  }

  return chunks
}

function extractAllChunks(folders: FolderStructure[], fullName: string): { id: string; section: string; text: string }[] {
  const allChunks: { id: string; section: string; text: string }[] = []

  allChunks.push({
    id: 'name',
    section: 'identity',
    text: `This portfolio belongs to ${fullName}.`,
  })

  let chunkIndex = 0
  for (const folder of folders) {
    for (const section of folder.sections) {
      const texts = extractTextFromSection(section)
      for (const text of texts) {
        allChunks.push({
          id: `${section.id}-${chunkIndex++}`,
          section: section.id,
          text,
        })
      }
    }
  }

  return allChunks
}

async function main() {
  const githubToken = process.env.GQL_API_GITHUB_TOKEN
  if (!githubToken) {
    throw new Error('GQL_API_GITHUB_TOKEN is required')
  }

  console.log('generate-embeddings: fetching portfolio data...')
  const { folders, fullName } = await generateAllSections({
    gqlClient,
    githubToken,
    githubUsername: 'teimurjan',
  })

  console.log('generate-embeddings: extracting text chunks...')
  const textChunks = extractAllChunks(folders, fullName)
  console.log(`generate-embeddings: found ${textChunks.length} chunks`)

  console.log('generate-embeddings: loading embedding model...')
  const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
    dtype: 'fp32',
  })

  console.log('generate-embeddings: generating embeddings...')
  const embeddingChunks: EmbeddingChunk[] = []

  for (let i = 0; i < textChunks.length; i++) {
    const chunk = textChunks[i]
    const output = await embedder(chunk.text, { pooling: 'mean', normalize: true })
    const embedding = Array.from(output.data as Float32Array)

    embeddingChunks.push({
      ...chunk,
      embedding,
    })

    if ((i + 1) % 10 === 0 || i === textChunks.length - 1) {
      console.log(`generate-embeddings: processed ${i + 1}/${textChunks.length} chunks`)
    }
  }

  const outputData: EmbeddingsFile = {
    model: 'Xenova/all-MiniLM-L6-v2',
    generatedAt: new Date().toISOString(),
    chunks: embeddingChunks,
  }

  const outputPath = path.resolve(__dirname, '../__generated__/embeddings.json')
  fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2))

  console.log(`generate-embeddings: saved ${embeddingChunks.length} embeddings to ${outputPath}`)
}

main().catch(console.error)
