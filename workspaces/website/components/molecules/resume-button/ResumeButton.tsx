'use client'
import dynamic from 'next/dynamic'
import Button from '../../atoms/button'
import gqlClient from '@/gql-client'

const ResumeButtonLive = dynamic(
  async () => {
    const Component = (await import('../../atoms/resume-button-live')).default
    const props = await gqlClient.Resume()

    return () => <Component {...props} />
  },
  {
    loading: () => <Button>Get resume</Button>,
    ssr: false,
  },
)

const ResumeButton = () => {
  return process.env.NODE_ENV === 'development' ? (
    <ResumeButtonLive />
  ) : (
    <Button.Link href="/resume.pdf" prefetch={false}>
      Get resume
    </Button.Link>
  )
}

export default ResumeButton
