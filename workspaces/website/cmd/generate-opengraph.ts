import fs from 'node:fs'
import path from 'node:path'
import { Biome } from '@biomejs/js-api/nodejs'
import { chromium, type Browser } from 'playwright'

import existingOpengraphs from '../__generated__/opengraphs.ts'
import gqlClient from '../gql-client'

type OpengraphData = Record<string, string | null>

const biome = new Biome()
const { projectKey } = biome.openProject(path.resolve(__dirname, '../../../'))

const getPublicationLinks = async () => {
  const { publications } = await gqlClient.Media()
  return publications.map((publication) => publication.link)
}

const getOpengraph = async (link: string, browser: Browser) => {
  const page = await browser.newPage()

  try {
    await page.goto(link, { waitUntil: 'domcontentloaded' })

    const openGraphData = await page.evaluate(() => {
      const metaTags = Array.from(document.querySelectorAll('meta'))
      const ogData: Record<string, string | null> = {
        description: null,
        twitterImageSrc: null,
        twitterCard: null,
        twitterTitle: null,
        twitterDescription: null,
        ogImage: null,
        ogType: null,
        ogTitle: null,
        ogUrl: null,
        ogDescription: null,
        image: null,
        url: null,
      }

      for (const tag of metaTags) {
        const property = tag.getAttribute('property') || tag.getAttribute('name')
        const content = tag.getAttribute('content')

        switch (property) {
          case 'og:description':
            ogData.ogDescription = content
            break
          case 'og:image':
            ogData.ogImage = content
            break
          case 'og:type':
            ogData.ogType = content
            break
          case 'og:title':
            ogData.ogTitle = content
            break
          case 'og:url':
            ogData.ogUrl = content
            break
          case 'twitter:image:src':
            ogData.twitterImageSrc = content
            break
          case 'twitter:card':
            ogData.twitterCard = content
            break
          case 'twitter:title':
            ogData.twitterTitle = content
            break
          case 'twitter:description':
            ogData.twitterDescription = content
            break
          case 'description':
            ogData.description = content
            break
          case 'image':
            ogData.image = content
            break
          case 'url':
            ogData.url = content
            break
        }
      }

      return ogData
    })

    return openGraphData
  } catch (error) {
    console.error(error)
    const ogData: OpengraphData = {
      description: null,
      twitterImageSrc: null,
      twitterCard: null,
      twitterTitle: null,
      twitterDescription: null,
      ogImage: null,
      ogType: null,
      ogTitle: null,
      ogUrl: null,
      ogDescription: null,
      image: null,
      url: null,
    }
    return ogData
  } finally {
    await page.close()
  }
}

const main = async () => {
  console.log('generate-opengraph: generating opengraphs...')

  console.log('generate-opengraph: getting publications...')
  const publicationLinks = await getPublicationLinks()
  const linksToGenerate = publicationLinks.filter((link) => !existingOpengraphs[link])
  if (linksToGenerate.length === 0) {
    console.log('generate-opengraph: no links to generate')
    return
  }

  console.log('generate-opengraph: launching playwright...')
  const browser = await chromium.launch({ headless: false })

  const opengraphs: Record<string, OpengraphData> = {}
  for (const link of linksToGenerate) {
    console.log(`generate-opengraph: getting missing opengraph for ${link}...`)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    opengraphs[link] = await getOpengraph(link, browser)
  }

  const outputPath = path.resolve(__dirname, '../__generated__/opengraphs.ts')
  const parsedOutputPath = path.parse(outputPath)
  if (!fs.existsSync(parsedOutputPath.dir)) {
    console.log('generate-opengraph: output folder missing, creating...')
    fs.mkdirSync(parsedOutputPath.dir)
  }
  const rawOutput = `export default ${JSON.stringify({ ...existingOpengraphs, ...opengraphs }, null, 2)} as Record<string, Record<string, string | null>>`

  console.log('generate-opengraph: formatting output...')

  const { content: output } = biome.formatContent(projectKey, rawOutput, {
    filePath: outputPath,
  })

  if (fs.existsSync(outputPath)) {
    const existingContent = fs.readFileSync(outputPath, 'utf-8')
    if (existingContent !== output) {
      console.log('generate-opengraph: content changed, updating file...')
      fs.writeFileSync(outputPath, output)
    } else {
      console.log('generate-opengraph: content did not change, skipping...')
    }
  }

  console.log('generate-opengraph: closing playwright...')
  await browser.close()

  console.log('generate-opengraph: generated successfully')
}

main()
