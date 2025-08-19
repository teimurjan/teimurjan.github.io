import { ClientRequestError } from './error'
import getClient from './get-client'
import {
  GetUserWithContributionsArgs,
  GetUserWithContributionsResponse,
  RequestOptions,
} from './types'

const QUERY = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      login
      name
      avatarUrl
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`

const getUserWithContributions = async (
  args: GetUserWithContributionsArgs,
  options: RequestOptions,
) => {
  const client = getClient(options.auth)

  const variables = {
    username: args.username,
    from: args.from.toISOString(),
    to: args.to.toISOString(),
  }

  const response = await client.graphql<GetUserWithContributionsResponse>(
    QUERY,
    variables,
  )

  if (!response.user) {
    throw new ClientRequestError(`User ${args.username} not found`)
  }

  return response
}

export default getUserWithContributions
