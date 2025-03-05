import type { CodegenConfig } from '@graphql-codegen/cli'
import path from 'path'

if (!process.env.HYGRAPH_URL) {
  throw new Error('HYGRAPH_URL is not defined')
}

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.HYGRAPH_URL,
  documents: path.resolve(__dirname, '../website/documents/*.graphql'),
  ignoreNoDocuments: true,
  generates: {
    './src/get-sdk.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
      ],
      config: {
        useTypeImports: true,
      },
    },
  },
}

export default config
