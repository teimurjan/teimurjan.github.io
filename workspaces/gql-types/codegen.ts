import type { CodegenConfig } from '@graphql-codegen/cli'
import path from 'path'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://api-eu-central-1.hygraph.com/v2/ckuqwop6l1gvq01xqb8y0dsj3/master',
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
