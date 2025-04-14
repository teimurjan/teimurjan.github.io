'use client'
import Button from '../../atoms/button'
import { useResume, type ResumeProps } from '@teimurjan/resume'

export type Props = ResumeProps

const ResumeButtonLive = (resumeProps: Props) => {
  const { openResume } = useResume(resumeProps, 'harvard')
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
