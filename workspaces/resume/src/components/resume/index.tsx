import { ResumeQuery } from '../../../../gql-client/src'
import { Font } from '@react-pdf/renderer'
import Resume from './Resume'

Font.registerEmojiSource({
  format: 'png',
  url: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/',
})

const Resume_ = (props: ResumeQuery) => <Resume {...props} />

export default Resume_
