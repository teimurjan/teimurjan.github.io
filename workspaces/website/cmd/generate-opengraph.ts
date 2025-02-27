import puppeteer, { Browser } from 'puppeteer'
import path from 'path'
import fs from 'fs'

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
  const publicationLinks = await getPublicationLinks()
  const browser = await puppeteer.launch({ headless: false })

  const opengraphs: Record<string, OpengraphData> = {}
  for (const link of publicationLinks) {
    opengraphs[link] = await getOpengraph(link, browser)
  }

  const outputPath = path.parse(
    path.resolve(__dirname, '../__generated__/opengraphs.ts'),
  )
  if (!fs.existsSync(outputPath.dir)) {
    fs.mkdirSync(outputPath.dir)
  }
  const output = `export default ${JSON.stringify(opengraphs, null, 2)} as Record<string, Record<string, string | null>>`
  fs.writeFileSync(path.join(outputPath.dir, outputPath.base), output)

  await browser.close()
}

main()
