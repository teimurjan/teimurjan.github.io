import { Octokit } from '@octokit/rest'

const getClient = (auth: string) => {
  const client = new Octokit({
    auth,
  })
  return client
}

export default getClient
