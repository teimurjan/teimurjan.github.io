'use client'
import { Button } from '@/components/atoms'
import { ResumeQuery } from '@teimurjan/gql-client'
import { useResume } from '@teimurjan/resume'

export type Props = {
  data: ResumeQuery
}

const ResumeButtonLive = ({ data }: Props) => {
  const { openResume } = useResume(data)
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()

        openResume()
      }}
    >
      Get resume
    </Button>
  )
}

export default ResumeButtonLive
