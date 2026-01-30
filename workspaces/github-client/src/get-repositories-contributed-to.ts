import getClient from './get-client'
import type {
  ContributedRepository,
  GetRepositoriesContributedToArgs,
  GetRepositoriesContributedToResponse,
  RequestOptions,
} from './types'

const QUERY = `
  query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        commitContributionsByRepository(maxRepositories: 50) {
          repository {
            id
            nameWithOwner
            description
            url
            isPrivate
            stargazerCount
            primaryLanguage { name }
            owner { login avatarUrl }
          }
        }
      }
    }
  }
`

/**
 * Creates date chunks of one year or less from a date range
 */
const createDateChunks = (from: Date, to: Date): Array<{ from: Date; to: Date }> => {
  const chunks: Array<{ from: Date; to: Date }> = []
  let currentFrom = new Date(from)

  while (currentFrom < to) {
    // Calculate one year from current start date
    const nextYear = new Date(currentFrom)
    nextYear.setFullYear(nextYear.getFullYear() + 1)

    // Use the earlier of next year or the end date
    const currentTo = nextYear > to ? to : nextYear

    chunks.push({
      from: new Date(currentFrom),
      to: new Date(currentTo),
    })

    currentFrom = new Date(currentTo)
  }

  return chunks
}

/**
 * Checks if the date range spans more than one year
 */
const isMoreThanOneYear = (from: Date, to: Date): boolean => {
  const oneYearLater = new Date(from)
  oneYearLater.setFullYear(oneYearLater.getFullYear() + 1)
  return to > oneYearLater
}

const getRepositoriesContributedTo = async (
  args: GetRepositoriesContributedToArgs,
  options: RequestOptions
) => {
  const client = getClient(options.auth)
  const byId = new Map<string, ContributedRepository>()

  // Check if we need to chunk the request
  if (isMoreThanOneYear(args.from, args.to)) {
    const dateChunks = createDateChunks(args.from, args.to)

    // Process each chunk sequentially to avoid rate limiting
    for (const chunk of dateChunks) {
      const result = await client.graphql<GetRepositoriesContributedToResponse>(QUERY, {
        login: args.login,
        from: chunk.from.toISOString(),
        to: chunk.to.toISOString(),
      })

      const page = result.user?.contributionsCollection.commitContributionsByRepository
      for (const repo of page ?? []) {
        byId.set(repo.repository.id, repo.repository)
      }
    }
  } else {
    // Single request for date ranges within one year
    const result = await client.graphql<GetRepositoriesContributedToResponse>(QUERY, {
      login: args.login,
      from: args.from.toISOString(),
      to: args.to.toISOString(),
    })

    const page = result.user?.contributionsCollection.commitContributionsByRepository
    for (const repo of page ?? []) {
      byId.set(repo.repository.id, repo.repository)
    }
  }

  // Convert to array and sort (by stars desc, then name)
  const repos = Array.from(byId.values()).sort((a, b) => {
    if (b.stargazerCount !== a.stargazerCount) {
      return b.stargazerCount - a.stargazerCount
    }

    return a.nameWithOwner.localeCompare(b.nameWithOwner)
  })

  return repos
}

export default getRepositoriesContributedTo
