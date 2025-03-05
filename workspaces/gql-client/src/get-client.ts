import { getSdk } from './get-sdk'
import { GraphQLClient } from 'graphql-request'

const getClient = (url: string) => {
  const client = new GraphQLClient(url)
  return getSdk(client)
}

export default getClient
