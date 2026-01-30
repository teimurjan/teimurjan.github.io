import CoverLetter, { type CoverLetterProps } from '../components/cover-letter'
import useOpenPdf from './use-open-pdf'

const useCoverLetter = (coverLetterProps: CoverLetterProps | undefined) => {
  const { openPdf, generatePdfUrl } = useOpenPdf(CoverLetter, coverLetterProps, 'cover-letter')

  return {
    openCoverLetter: openPdf,
    generateCoverLetterUrl: generatePdfUrl,
  }
}

export default useCoverLetter
