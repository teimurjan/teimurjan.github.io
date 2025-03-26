import Resume, { ResumeProps } from '../components/resume'
import useOpenPdf from './use-open-pdf'

const useResume = (resumeProps: ResumeProps | undefined) => {
  const { openPdf } = useOpenPdf(Resume, resumeProps, 'resume')

  return {
    openResume: openPdf,
  }
}

export default useResume
