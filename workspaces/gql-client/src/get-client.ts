import { GraphQLClient } from 'graphql-request'
import { getSdk } from './get-sdk'

const getClient = (url: string) => {
  const client = new GraphQLClient(url)
  return getSdk(client)
}

export default getClient
