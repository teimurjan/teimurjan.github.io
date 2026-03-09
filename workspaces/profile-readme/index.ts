import fs from 'node:fs'
import path from 'node:path'
import { config } from 'dotenv'

config()

import {
  type ContributedRepository,
  getClient as getGithubClient,
  getRepositoriesContributedTo,
  getUserCreatedAt,
} from '@teimurjan/github-client'
import { getClient } from '@teimurjan/gql-client'

const GITHUB_USERNAME = 'teimurjan'
const WEBSITE_URL = 'https://teimurjan.github.io'
const MAINTAINED_PROJECTS = ['blazediff', 'avatune']

const index = async () => {
  if (!process.env.HYGRAPH_URL) {
    throw new Error('HYGRAPH_URL is not defined')
  }
  if (!process.env.GQL_API_GITHUB_TOKEN) {
    throw new Error('GQL_API_GITHUB_TOKEN is not defined')
  }

  const gqlClient = getClient(process.env.HYGRAPH_URL)
  const githubToken = process.env.GQL_API_GITHUB_TOKEN

  const [data, userCreatedAt] = await Promise.all([
    gqlClient.ProfileReadme(),
    getUserCreatedAt(GITHUB_USERNAME, { auth: githubToken }),
  ])

  const now = new Date()
  now.setHours(0, 0, 0, 0)

  const repos = await getRepositoriesContributedTo(
    { login: GITHUB_USERNAME, from: new Date(userCreatedAt), to: now },
    { auth: githubToken }
  )

  const octokit = getGithubClient(githubToken)

  const maintainedRepos = await Promise.all(
    MAINTAINED_PROJECTS.map(async (name) => {
      const contributed = repos.find((r) =>
        r.nameWithOwner.toLowerCase().includes(name.toLowerCase())
      )
      if (contributed) return contributed

      // fallback: fetch directly (e.g. org repos)
      const { data: ghRepo } = await octokit.rest.repos.get({
        owner: name,
        repo: name,
      })
      return {
        nameWithOwner: ghRepo.full_name,
        description: ghRepo.description,
        url: ghRepo.html_url,
        stargazerCount: ghRepo.stargazers_count,
      } satisfies Pick<
        ContributedRepository,
        'nameWithOwner' | 'description' | 'url' | 'stargazerCount'
      >
    })
  )

  const lines: string[] = []

  // header
  lines.push(`# ${data.bios[0].fullName}`)
  lines.push('')
  lines.push(data.bios[0].about)
  lines.push('')
  lines.push('---')
  lines.push('')

  // recent work (top 3)
  lines.push('### Recent Work')
  lines.push('')
  data.experiences.slice(0, 3).forEach((exp) => {
    lines.push(`- **${exp.company}** -- ${exp.location} ${exp.locationIcon}`)
  })
  lines.push('')

  // projects I maintain
  if (maintainedRepos.length > 0) {
    lines.push('### Projects I Maintain')
    lines.push('')
    maintainedRepos.forEach((repo) => {
      const desc = repo.description ? ` -- ${repo.description}` : ''
      lines.push(`- **[${repo.nameWithOwner}](${repo.url})**${desc}`)
    })
    lines.push('')
  }

  // writing & speaking summary
  const articleCount = data.publications.length
  const talkCount = data.conferences.length
  lines.push('### Writing & Speaking')
  lines.push('')
  lines.push(`${articleCount} articles published, ${talkCount} conference talks.`)
  lines.push(`[more on my website](${WEBSITE_URL})`)
  lines.push('')
  lines.push('---')
  lines.push('')
  lines.push('*Open to offers and collaborations*')

  fs.writeFileSync(path.resolve('./README.md'), lines.join('\n'))
}

index()
