import { Font } from '@react-pdf/renderer'
import Resume from './Resume'
import { HarvardResumeProps } from '../types'

Font.registerHyphenationCallback((word: string) => {
  return [word]
})

const Resume_ = (props: HarvardResumeProps) => <Resume {...props} />

export default Resume_
