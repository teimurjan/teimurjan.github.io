import type { DocumentProps } from '@react-pdf/renderer'
import type { ResumeQuery } from '@teimurjan/gql-client'

export interface ResumeProps extends ResumeQuery, DocumentProps {}
