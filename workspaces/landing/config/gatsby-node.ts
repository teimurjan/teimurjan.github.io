import { createElement, ReactElement } from 'react'
import webpack from 'webpack'
import { CreatePagesArgs, CreateWebpackConfigArgs } from 'gatsby'
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

export { onCreateWebpackConfig, createPages }
