import { getSdk } from '@teimurjan/gql-types'
import { GraphQLClient } from 'graphql-request'

const URL =
  'https://api-eu-central-1.hygraph.com/v2/ckuqwop6l1gvq01xqb8y0dsj3/master'

const client = new GraphQLClient(URL)

export default getSdk(client)
