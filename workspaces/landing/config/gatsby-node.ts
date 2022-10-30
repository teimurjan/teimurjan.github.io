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

const onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        stream: 'stream-browserify',
        zlib: 'browserify-zlib',
        util: require.resolve('util/'),
        assert: require.resolve('assert/'),
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

      const opengraphData = await fetch(link)
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
