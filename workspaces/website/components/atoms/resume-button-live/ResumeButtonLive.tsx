'use client'
import { Button } from '@/components/atoms'
import { useIsClient } from '@/hooks'
import { ResumeQuery } from '@teimurjan/gql-types'
import Resume, { PDFDownloadLink } from '@teimurjan/resume'

export type Props = {
  data: ResumeQuery
}

const ResumeButtonLive = ({ data }: Props) => {
  const isClient = useIsClient()
  return isClient ? (
    <PDFDownloadLink document={<Resume {...data} />} fileName="resume.pdf">
      {({ url, loading }) => (
        <Button
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            if (url) {
              window.open(url, '_blank')
            }
          }}
          disabled={loading}
        >
          Get resume
        </Button>
      )}
    </PDFDownloadLink>
  ) : (
    <Button disabled>Get resume</Button>
  )
}

export default ResumeButtonLive
