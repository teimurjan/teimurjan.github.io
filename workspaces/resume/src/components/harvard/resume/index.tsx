import { Font } from '@react-pdf/renderer'
import type { HarvardResumeProps } from '../types'
import Resume from './Resume'

Font.registerHyphenationCallback((word: string) => {
  return [word]
})

const Resume_ = (props: HarvardResumeProps) => <Resume {...props} />

export default Resume_
