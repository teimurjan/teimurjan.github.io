'use client'
import Button from '../../atoms/button'
import { useResume, type ResumeProps, HarvardResume } from '@teimurjan/resume'

export type Props = ResumeProps

const ResumeButtonLive = (props: Props) => {
  const { openResume } = useResume(HarvardResume, props)
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
