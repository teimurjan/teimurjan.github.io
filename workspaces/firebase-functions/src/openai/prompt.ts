import type { ResumeQuery } from '@teimurjan/gql-client'
import type OpenAI from 'openai'
import { zodTextFormat } from 'openai/helpers/zod'
import { generateSchema } from '../schema/schema'

export const prompt = async (openaiClient: OpenAI, jobDescription: string, resume: ResumeQuery) => {
  const response = await openaiClient.responses.create({
    model: 'gpt-5.2',
    text: {
      verbosity: 'low',
      format: zodTextFormat(generateSchema, 'generate'),
    },
    instructions: `You are a resume writer optimizing for the 6-second HR scan.

Your job: make achievements and metrics impossible to miss at first glance.

Writing rules:
- Lead with numbers and outcomes, not responsibilities
- Every bullet = verb + what you built + measurable result
- No filler words, no buzzwords ("leveraged", "spearheaded", "synergies")
- Specific > impressive-sounding ("100k users" beats "significant growth")
- If no hard metric exists, use scope indicators (team size, # of systems, timeline)`,
    input: `## Tasks

### 1. Bio
- Headline: role title + core value prop (e.g., "Senior Engineer | Scaled 3 products to 1M+ users")
- About (30-40 words): what you do + biggest achievements + direct alignment with job requirements. Lead with impact.

Example about: "I design and deploy high-impact systems built on LLMs and agent architectures, shipping production solutions that move core metrics. Scaled 5 products to 100k+ users."

### 2. Skills
- Add relevant skills (with unique ids), remove irrelevant ones
- Reorder by relevance to the role

### 3. Experiences
Rewrite bullet points for the 3 most recent roles. Formula: Action verb + what you did + quantified result.

Pattern: "[Verb] [scope/what], [result with number]"

Good examples:
- "Launched 5 Web3 applications, scaling to 100k+ users with reliable blockchain integrations."
- "Built open-source package ecosystem, reducing code duplication and improving team efficiency by 30%."
- "Led migration to monorepo, cutting build times by 25% while streamlining CI/CD."
- "Reduced API latency from 2s to 200ms, improving conversion rate by 15%."

Bad examples:
- "Responsible for developing scalable frontend solutions"
- "Worked on various projects using modern technologies"
- "Collaborated with cross-functional teams to deliver features"

Rules:
- Every bullet MUST have a number (users, %, time saved, team size, # of X)
- 12-20 words per bullet
- No "responsible for", "worked on", "helped with"
- Keep other experiences unchanged

### 4. Cover Letter
3-4 sentences. Direct and confident.
- Open with your strongest relevant achievement
- Connect 1-2 specific experiences to their needs
- End with clear interest, no fluff

## Input
Job Description: ${jobDescription}
Resume: ${JSON.stringify(resume)}`,
  })

  const content = JSON.parse(response.output_text)
  if (generateSchema.parse(content)) {
    return {
      resume: content.resume,
      coverLetter: content.coverLetter,
    }
  }

  throw new Error('Unexpected response format')
}
