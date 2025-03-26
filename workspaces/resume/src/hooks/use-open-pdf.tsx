import { pdf } from '@react-pdf/renderer'
import { useCallback, useRef } from 'react'

const useOpenPdf = <T extends object>(
  Component: React.ComponentType<T>,
  props: T | undefined,
  filename: string
) => {
  const currentPdfUrl = useRef<string | undefined>(undefined)

  const initializePdfUrl = useCallback(async () => {
    if (!props) {
      return undefined
    }

    const blob = await pdf(<Component {...props} />).toBlob()
    const url = URL.createObjectURL(blob)

    const response = await fetch(url)
    const blobData = await response.blob()
    const blobUrl = window.URL.createObjectURL(blobData)

    if (currentPdfUrl.current) {
      URL.revokeObjectURL(currentPdfUrl.current)
    }

    currentPdfUrl.current = blobUrl
  }, [Component, props])

  const openPdf = useCallback(
    async (download = false) => {
      if (!props) {
        return
      }

      await initializePdfUrl()
      if (!currentPdfUrl.current) {
        return
      }

      const link = document.createElement('a')
      link.href = currentPdfUrl.current
      if (download) {
        link.download = `${filename}-${Date.now()}.pdf`
      } else {
        link.target = '_blank'
      }
      link.click()
    },
    [initializePdfUrl, props, filename],
  )

  return { openPdf }
}

export default useOpenPdf
