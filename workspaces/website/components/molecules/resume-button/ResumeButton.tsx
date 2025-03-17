import { Button } from '@/components/atoms'
import { ResumeButtonLive } from '@/components/atoms'
import { ResumeProps } from '@teimurjan/resume'

export type Props = ResumeProps

const ResumeButton = (resumeProps: Props) => {
  return process.env.NODE_ENV === 'development' ? (
    <ResumeButtonLive {...resumeProps} />
  ) : (
    <Button.Link href="/resume.pdf">Get resume</Button.Link>
  )
}

export default ResumeButton
