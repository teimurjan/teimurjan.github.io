import path from 'node:path'
import { HarvardResume, renderToFile } from '@teimurjan/resume'
import { type ReactElement, createElement } from 'react'
import gqlClient from '../gql-client'

const main = async () => {
  console.log('generate-resume: generating resume...')

  console.log('generate-resume: getting resume data...')
  const data = await gqlClient.Resume()

  const outputPath = path.resolve(__dirname, '../public/resume.pdf')

  console.log('generate-resume: rendering to file...')
  await renderToFile(createElement(HarvardResume, data) as ReactElement, outputPath)

  console.log('generate-resume: generated successfully')
}

main()
