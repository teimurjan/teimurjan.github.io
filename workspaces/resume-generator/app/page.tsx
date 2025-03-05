import { GenerateForm } from '@/components/custom/generate-form'
import gqlClient from '@/gql-client'

const Home = async () => {
  const data = await gqlClient.Resume()

  return <GenerateForm data={data} />
}

export default Home
