import { GenerateApplicationForm } from '@/components/widgets/generate-application-form/generate-application-form'
import { RecentJobApplications } from '@/components/widgets/recent-job-applications/recent-job-applications'
import gqlClient from '@/gql-client'

const Generate = async () => {
  const data = await gqlClient.Resume()

  return (
    <div className="flex flex-col gap-4 h-full">
      <GenerateApplicationForm
        application={{
          resume: data,
        }}
      />
      <RecentJobApplications className="flex-1" />
    </div>
  )
}

export default Generate
