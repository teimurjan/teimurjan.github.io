import { createElement, ReactElement } from 'react'
import webpack from 'webpack'
import {
  CreatePagesArgs,
  CreateWebpackConfigArgs,
  CreateResolversArgs,
  CreateSchemaCustomizationArgs,
} from 'gatsby'
import { fetch } from 'fetch-opengraph'
import Resume, { renderToFile } from '@teimurjan/resume'
import { ResumeSsrQuery } from '@teimurjan/gql-types'
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

puppeteer.use(StealthPlugin())

const onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        stream: 'stream-browserify',
        zlib: 'browserify-zlib',
        util: require.resolve('util'),
        assert: require.resolve('assert'),
        path: require.resolve('path-browserify'),
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      }),
    ],
  })
}

const createPages = async ({ graphql }: CreatePagesArgs) => {
  const query = await graphql<ResumeSsrQuery>(`
    query ResumeSSR {
      gcms {
        bios {
          fullName
          headline
          about
          location
          phoneNumber
          email
        }
        educations(orderBy: startDate_DESC) {
          id
          school
          degree
          areaOfStudy
          startDate
          endDate
        }
        skills(orderBy: yearsOfExperience_DESC) {
          id
          title
          yearsOfExperience
        }
        experiences(orderBy: startDate_DESC) {
          id
          company
          position
          startDate
          endDate
          description {
            html
          }
        }
        publications {
          id
          title
          link
          date
          opengraph {
            description
            image
            ogImage
            ogDescription
            ogTitle
            ogType
            ogUrl
            twitterCard
            twitterDescription
            twitterImageSrc
            twitterTitle
            url
          }
        }
        conferences {
          id
          title
          topic
          link
          date
        }
      }
    }
  `)

  if (query.data) {
    await renderToFile(
      createElement(Resume, query.data) as ReactElement,
      './static/resume.pdf'
    )
  }
}

const createSchemaCustomization = ({
  actions,
  schema,
}: CreateSchemaCustomizationArgs) => {
  const typeDefs = [
    schema.buildObjectType({
      name: 'Opengraph',
      interfaces: ['Node'],
      fields: {
        description: 'String',
        twitterImageSrc: 'String',
        twitterCard: 'String',
        twitterTitle: 'String',
        twitterDescription: 'String',
        ogImage: 'String',
        ogType: 'String',
        ogTitle: 'String',
        ogUrl: 'String',
        ogDescription: 'String',
        image: 'String',
        url: 'String',
      },
    }),
  ]

  actions.createTypes(typeDefs)
}

const fetchOpengraph = async (link: string) => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  try {
    await page.goto(link, {
      waitUntil: 'networkidle2',
    })

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

    await browser.close()
    return openGraphData
  } catch (error) {
    await browser.close()
    throw error
  }
}

const createResolvers = ({ createResolvers }: CreateResolversArgs) => {
  const getOpengraphResolver = <T>(
    getLink: (data: T) => string | undefined
  ) => ({
    type: 'Opengraph!',
    resolve: async (data: T) => {
      const link = getLink(data)
      if (!link) {
        return {}
      }

      const opengraphData = await fetchOpengraph(link)
      const formatKey = (key: string) => {
        let newKey = ''
        let shouldUppercaseNext = false
        for (const char of key) {
          if (char !== ':') {
            if (shouldUppercaseNext) {
              newKey += char.toUpperCase()
              shouldUppercaseNext = false
            } else {
              newKey += char
            }
          } else {
            shouldUppercaseNext = true
          }
        }

        return newKey
      }

      return Object.entries(opengraphData).reduce((acc, [key, value]) => {
        return { ...acc, [formatKey(key)]: value ?? '' }
      }, {})
    },
  })

  const resolvers = {
    GraphCMS_Publication: {
      opengraph: getOpengraphResolver<{ link: string }>(({ link }) => link),
    },
  }
  createResolvers(resolvers)
}

export {
  onCreateWebpackConfig,
  createPages,
  createSchemaCustomization,
  createResolvers,
}
