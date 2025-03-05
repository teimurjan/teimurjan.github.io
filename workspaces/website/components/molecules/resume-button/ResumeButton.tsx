import { Button } from '@/components/atoms'
import { ResumeButtonLive } from '@/components/atoms'
import { ResumeQuery } from '@teimurjan/gql-client'

export type Props = {
  data: ResumeQuery
}

const ResumeButton = ({ data }: Props) => {
  return process.env.NODE_ENV === 'development' ? (
    <ResumeButtonLive data={data} />
  ) : (
    <Button.Link href="/resume.pdf">Get resume</Button.Link>
  )
}

export default ResumeButton
