import { Font } from '@react-pdf/renderer'
import type { CustomResumeProps } from '../types'
import Resume from './Resume'

Font.registerEmojiSource({
  format: 'png',
  url: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.1.2/img/apple/64/',
})

Font.registerHyphenationCallback((word: string) => {
  return [word]
})

const Resume_ = (props: CustomResumeProps) => <Resume {...props} />

export default Resume_
