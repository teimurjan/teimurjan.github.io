import { GenerateForm } from '@/components/custom/generate-form'
import { RecentJobApplications } from '@/components/custom/recent-job-applications'
import { Separator } from '@/components/ui/separator'
import gqlClient from '@/gql-client'

const Home = async () => {
  const data = await gqlClient.Resume()

  return (
    <div className="flex flex-col gap-4 h-full">
      <GenerateForm
        application={{
          resume: data,
        }}
      />
      <Separator />
      <h4>Recent job applications</h4>
      <RecentJobApplications className="flex-1" />
    </div>
  )
}

export default Home
