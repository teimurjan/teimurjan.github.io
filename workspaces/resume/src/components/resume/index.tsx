import { resolve } from 'path'
import { Font } from '@react-pdf/renderer'
import { ResumeSsrQuery } from '@teimurjan/gql-types'
import Resume from './Resume'

Font.register({
  family: 'ShareTech',
  format: 'truetype',
  src:
    typeof window === 'undefined'
      ? resolve(__dirname, '../../assets/fonts/ShareTech-Regular.ttf')
      : '/assets/fonts/ShareTech-Regular.ttf',
})
Font.register({
  family: 'ShareTechMono',
  format: 'truetype',
  src:
    typeof window === 'undefined'
      ? resolve(__dirname, '../../assets/fonts/ShareTechMono-Regular.ttf')
      : '/assets/fonts/ShareTechMono-Regular.ttf',
})

const ResumeNode = (props: ResumeSsrQuery) => <Resume {...props} />

export default ResumeNode
