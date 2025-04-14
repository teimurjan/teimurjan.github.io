import { DocumentProps } from '@react-pdf/renderer'
import { ResumeQuery } from '@teimurjan/gql-client'

export interface ResumeProps extends ResumeQuery, DocumentProps {}
