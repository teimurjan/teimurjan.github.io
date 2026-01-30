import type { ResumeProps } from '../../types'

export interface ResumeConfig {
  skills: 'column' | 'row'
  location?: boolean
}

export interface CustomResumeProps extends ResumeProps {
  config?: ResumeConfig
}
