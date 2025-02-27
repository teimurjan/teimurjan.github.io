import Resume, { renderToFile } from '@teimurjan/resume'
import gqlClient from '../gql-client'
import { createElement, ReactElement } from 'react'
import path from 'path'

const main = async () => {
  const data = await gqlClient.Resume()

  const outputPath = path.resolve(__dirname, '../public/resume.pdf')
  console.log(createElement(Resume, data))
  await renderToFile(createElement(Resume, data) as ReactElement, outputPath)
}

main()
