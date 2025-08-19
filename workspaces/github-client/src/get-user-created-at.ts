import getClient from './get-client'
import { RequestOptions } from './types'

const QUERY = `
  query($login: String!) {
    user(login: $login) {
      createdAt
    }
  }
`

const getUserCreatedAt = async (login: string, options: RequestOptions) => {
  const client = getClient(options.auth)

  const res = await client.graphql<{ user: { createdAt: string } }>(QUERY, {
    login,
  })
  return res.user.createdAt
}

export default getUserCreatedAt
