import { Font } from '@react-pdf/renderer'
import CoverLetter, { CoverLetterProps } from './CoverLetter'

Font.registerEmojiSource({
  format: 'png',
  url: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.1.2/img/apple/64/',
})

Font.registerHyphenationCallback((word: string) => {
  return [word]
})

const CoverLetter_ = (props: CoverLetterProps) => <CoverLetter {...props} />

export default CoverLetter_

export type { CoverLetterProps }
