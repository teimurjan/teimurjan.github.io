import { Font } from '@react-pdf/renderer'
import Resume from './Resume'
import { ResumeProps } from './types'

Font.registerEmojiSource({
  format: 'png',
  url: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/',
})

const Resume_ = (props: ResumeProps) => <Resume {...props} />

export default Resume_

export type { ResumeProps }
