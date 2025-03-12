import { DocumentProps } from "@react-pdf/renderer"
import { ResumeQuery } from "@teimurjan/gql-client"

export interface ResumeConfig {
  skills: 'column' | 'row'
}

export interface ResumeProps extends ResumeQuery, DocumentProps {
  config?: ResumeConfig
}