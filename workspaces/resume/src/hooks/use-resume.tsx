import CustomResume from '../components/custom/resume'
import HarvardResume from '../components/harvard/resume'
import { CustomResumeProps } from '../components/custom/types'
import { HarvardResumeProps } from '../components/harvard/types'
import useOpenPdf from './use-open-pdf'

const useResume = <P extends CustomResumeProps | HarvardResumeProps>(
  resumeProps: P | undefined,
  style: 'custom' | 'harvard' = 'custom',
) => {
  const Resume = style === 'custom' ? CustomResume : HarvardResume

  const { openPdf } = useOpenPdf(Resume, resumeProps, 'resume')

  return {
    openResume: openPdf,
  }
}

export default useResume
