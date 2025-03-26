import CoverLetter, { CoverLetterProps } from '../components/cover-letter'
import useOpenPdf from './use-open-pdf'

const useCoverLetter = (coverLetterProps: CoverLetterProps | undefined) => {
  const { openPdf } = useOpenPdf(CoverLetter, coverLetterProps, 'cover-letter')

  return {
    openCoverLetter: openPdf,
  }
}

export default useCoverLetter
