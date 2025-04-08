import { AdjustApplicationForm } from '@/components/widgets/adjust-application-form/adjust-application-form'
import gqlClient from '@/gql-client'

const Adjust = async () => {
  const data = await gqlClient.Resume()

  return (
    <AdjustApplicationForm
      application={{
        resume: data,
        coverLetter: '',
      }}
    />
  )
}

export default Adjust
