import { IDEWindow } from '@/components/ide/ide-window'
import gqlClient from '@/gql-client'
import { generateAllSections } from '@/lib/section-generator'

export default async function Page() {
  if (!process.env.GQL_API_GITHUB_TOKEN) {
    throw new Error('GQL_API_GITHUB_TOKEN is not defined')
  }

  const { folders, fullName, headline } = await generateAllSections({
    gqlClient,
    githubToken: process.env.GQL_API_GITHUB_TOKEN,
    githubUsername: 'teimurjan',
  })

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <IDEWindow folders={folders} fullName={fullName} headline={headline} />
      </div>
    </main>
  )
}
