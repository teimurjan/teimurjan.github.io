import puppeteer, { Browser } from 'puppeteer'
import path from 'path'
import fs from 'fs'
import prettier from 'prettier'

import existingOpengraphs from '../__generated__/opengraphs.ts'
import gqlClient from '../gql-client'

type OpengraphData = Record<string, string | null>

const getPublicationLinks = async () => {
  const { publications } = await gqlClient.Media()
  return publications.map((publication) => publication.link)
}

const getOpengraph = async (link: string, browser: Browser) => {
  const page = await browser.newPage()

  try {
    page.goto(link)

    await page.waitForRequest(link)

    const openGraphData = await page.evaluate(() => {
      const metaTags = Array.from(document.querySelectorAll('meta'))
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

      metaTags.forEach((tag) => {
        const property =
          tag.getAttribute('property') || tag.getAttribute('name')
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
      })

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
  const linksToGenerate = publicationLinks.filter(
    (link) => !existingOpengraphs[link],
  )
  if (linksToGenerate.length === 0) {
    console.log('generate-opengraph: no links to generate')
    return
  }

  console.log('generate-opengraph: launching puppeteer...')
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--disable-gpu', '--no-sandbox'],
  })

  const opengraphs: Record<string, OpengraphData> = {}
  for (const link of linksToGenerate) {
    console.log(`generate-opengraph: getting missing opengraph for ${link}...`)
    // Wait for 1 second to avoid spamming the server
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
  const prettierRcPath = path.resolve(__dirname, '../../../.prettierrc.mjs')
  const prettierConfig = await prettier.resolveConfig(prettierRcPath)

  const output = prettierConfig
    ? await prettier.format(rawOutput, {
        ...prettierConfig,
        parser: 'typescript',
      })
    : rawOutput

  if (fs.existsSync(outputPath)) {
    const existingContent = fs.readFileSync(outputPath, 'utf-8')
    if (existingContent !== output) {
      console.log('generate-opengraph: content changed, updating file...')
      fs.writeFileSync(outputPath, output)
    } else {
      console.log('generate-opengraph: content did not change, skipping...')
    }
  }

  console.log('generate-opengraph: closing puppeteer...')
  await browser.close()

  console.log('generate-opengraph: generated successfully')
}

main()
