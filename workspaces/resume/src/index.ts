export { default as CustomResume } from './components/custom/resume'
export { default as HarvardResume } from './components/harvard/resume'
export {
  default as CoverLetter,
  type CoverLetterProps,
} from './components/cover-letter'

export { useResume, useCoverLetter } from './hooks'

export { openLinkByUrl, downloadByUrl } from './utils'

export type { CustomResumeProps } from './components/custom/types'
export type { HarvardResumeProps } from './components/harvard/types'
export type { ResumeProps } from './components/types'

export { renderToFile } from '@react-pdf/renderer'
