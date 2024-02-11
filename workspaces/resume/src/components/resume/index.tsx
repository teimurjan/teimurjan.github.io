import { ResumeSsrQuery } from '@teimurjan/gql-types'
import { Font } from '@react-pdf/renderer'
import Resume from './Resume'

Font.registerEmojiSource({
  format: 'png',
  url: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/',
})

const ResumeNode = (props: ResumeSsrQuery) => <Resume {...props} />

export default ResumeNode
