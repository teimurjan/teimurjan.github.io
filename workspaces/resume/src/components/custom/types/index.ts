import { ResumeProps } from '../../types'

export interface ResumeConfig {
  skills: 'column' | 'row'
}

export interface CustomResumeProps extends ResumeProps {
  config?: ResumeConfig
}
