import { ComponentType } from 'react'
import useOpenPdf from './use-open-pdf'

const useResume = <P extends object>(
  Component: ComponentType<P>,
  props: P | undefined,
) => {
  const { openPdf, generatePdfUrl } = useOpenPdf(Component, props, 'resume')

  return {
    openResume: openPdf,
    generateResumeUrl: generatePdfUrl,
  }
}

export default useResume
