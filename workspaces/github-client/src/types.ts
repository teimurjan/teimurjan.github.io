export type RequestOptions = {
  auth: string
}

export interface Contribution {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export interface ContributionWeek {
  contributionDays: Contribution[]
}

export interface ContributionCalendar {
  totalContributions: number
  weeks: ContributionWeek[]
}

export interface ContributedRepository {
  id: string
  nameWithOwner: string
  description: string | null
  isPrivate: boolean
  url: string
  viewerPermission: string | null
  stargazerCount: number
  primaryLanguage: {
    name: string
  } | null
  owner: {
    login: string
    avatarUrl: string
  }
}

export interface RepositoriesContributedTo {
  totalCount: number
  pageInfo: {
    hasNextPage: boolean
    endCursor: string | null
  }
  nodes: ContributedRepository[]
}

export interface GetUserWithContributionsResponse {
  user?: {
    login: string
    name: string | null
    avatarUrl: string
    contributionsCollection: {
      contributionCalendar: ContributionCalendar
    }
  }
}

export interface GetRepositoriesContributedToResponse {
  user?: {
    contributionsCollection: {
      commitContributionsByRepository: {
        repository: ContributedRepository
      }[]
    }
  }
}

export interface GetUserWithContributionsArgs {
  username: string
  from: Date
  to: Date
}

export interface GetRepositoriesContributedToArgs {
  login: string
  from: Date
  to: Date
}
