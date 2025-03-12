import { pdf } from '@react-pdf/renderer'
import Resume, { ResumeProps } from '../components/resume'
import { useCallback, useRef } from 'react'

const useResume = (resumeProps: ResumeProps | undefined) => {
  const currentResumeUrl = useRef<string | undefined>(undefined)

  const initializeResumeUrl = useCallback(async () => {
    if (!resumeProps) {
      return undefined
    }

    const blob = await pdf(<Resume {...resumeProps} />).toBlob()
    const url = URL.createObjectURL(blob)

    const response = await fetch(url)
    const blobData = await response.blob()
    const blobUrl = window.URL.createObjectURL(blobData)

    if (currentResumeUrl.current) {
      URL.revokeObjectURL(currentResumeUrl.current)
    }

    currentResumeUrl.current = blobUrl
  }, [resumeProps])

  const openResume = useCallback(
    async (download = false) => {
      if (!resumeProps) {
        return
      }

      await initializeResumeUrl()
      if (!currentResumeUrl.current) {
        return
      }

      const link = document.createElement('a')
      link.href = currentResumeUrl.current
      if (download) {
        link.download = `resume-${Date.now()}.pdf`
      } else {
        link.target = '_blank'
      }
      link.click()
    },
    [initializeResumeUrl, resumeProps],
  )

  return { openResume }
}

export default useResume
