import Typography from '../../atoms/typography'
import RepositoryCard from '../../molecules/repository-card'
import {
  getRepositoriesContributedTo,
  getUserCreatedAt,
} from '@teimurjan/github-client'
import { Anchor } from '@/utils'
import CardCarousel from '../card-carousel'

interface Props {
  username: string
  minStars?: number
}

const GitHubActivity = async ({ username, minStars = 100 }: Props) => {
  if (!process.env.GQL_API_GITHUB_TOKEN) {
    throw new Error('GQL_API_GITHUB_TOKEN is not defined')
  }

  const lastYear = new Date()
  lastYear.setFullYear(lastYear.getFullYear() - 1)
  const now = new Date()
  now.setHours(0, 0, 0, 0)

  const userCreatedAt = await getUserCreatedAt(username, {
    auth: process.env.GQL_API_GITHUB_TOKEN,
  })

  const popularRepos = await getRepositoriesContributedTo(
    { login: username, from: new Date(userCreatedAt), to: now },
    {
      auth: process.env.GQL_API_GITHUB_TOKEN,
    },
  )

  return (
    <div id={Anchor.Contribution}>
      <Typography.Title className="mb-8" variant="h2">
        Contribution
      </Typography.Title>
      <div className="space-y-12">
        {popularRepos.length > 0 && (
          <CardCarousel controls={false}>
            {popularRepos
              .filter((repo) => repo.stargazerCount >= minStars)
              .map((repo) => (
                <RepositoryCard
                  key={repo.nameWithOwner}
                  repository={repo}
                  className="mx-2"
                />
              ))}
          </CardCarousel>
        )}

        {popularRepos.length === 0 && (
          <div className="p-8 text-center rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
            <Typography.Text className="text-gray-500 dark:text-gray-400">
              No contributed repositories found with {minStars}+ stars.
            </Typography.Text>
          </div>
        )}
      </div>
    </div>
  )
}

export default GitHubActivity
