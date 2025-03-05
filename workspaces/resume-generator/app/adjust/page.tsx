import { AdjustForm } from '@/components/custom/adjust-form'
import gqlClient from '@/gql-client'

const Adjust = async () => {
  const data = await gqlClient.Resume()

  return <AdjustForm data={data} />
}

export default Adjust