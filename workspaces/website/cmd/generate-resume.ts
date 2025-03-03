import Resume, { renderToFile } from '@teimurjan/resume'
import gqlClient from '../gql-client'
import { createElement, ReactElement } from 'react'
import path from 'path'

const main = async () => {
  console.log('generate-resume: generating resume...')

  console.log('generate-resume: getting resume data...')
  const data = await gqlClient.Resume()

  const outputPath = path.resolve(__dirname, '../public/resume.pdf')

  console.log('generate-resume: rendering to file...')
  await renderToFile(createElement(Resume, data) as ReactElement, outputPath)

  console.log('generate-resume: generated successfully')
}

main()
