import { getClient } from '@teimurjan/gql-client'

if (!process.env.NEXT_PUBLIC_HYGRAPH_URL) {
  throw new Error('NEXT_PUBLIC_HYGRAPH_URL is not defined')
}

export default getClient(process.env.NEXT_PUBLIC_HYGRAPH_URL)
