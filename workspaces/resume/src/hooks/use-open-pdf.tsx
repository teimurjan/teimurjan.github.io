import { pdf } from '@react-pdf/renderer'
import { useCallback, useRef } from 'react'
import { downloadByUrl, openLinkByUrl } from '../utils'

const useOpenPdf = <T extends object>(
  Component: React.ComponentType<T>,
  props: T | undefined,
  filename: string
) => {
  const currentPdfUrl = useRef<string | undefined>(undefined)

  const generatePdfUrl = useCallback(async () => {
    if (currentPdfUrl.current) {
      URL.revokeObjectURL(currentPdfUrl.current)
    }

    if (!props) {
      return undefined
    }

    const blob = await pdf(<Component {...props} />).toBlob()
    const url = URL.createObjectURL(blob)

    const response = await fetch(url)
    const blobData = await response.blob()
    const blobUrl = window.URL.createObjectURL(blobData)

    currentPdfUrl.current = blobUrl

    return blobUrl
  }, [Component, props])

  const openPdf = useCallback(
    async (download = false) => {
      const url = await generatePdfUrl()
      if (!url) {
        return
      }

      if (!download) {
        openLinkByUrl(url)
        return
      }

      downloadByUrl(url, filename)
    },
    [generatePdfUrl, filename]
  )

  return { openPdf, generatePdfUrl }
}

export default useOpenPdf
