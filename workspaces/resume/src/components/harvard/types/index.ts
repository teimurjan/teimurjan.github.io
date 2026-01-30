import type { ResumeProps } from '../../types'

export interface ResumeConfig {
  location?: boolean
}

export type HarvardResumeProps = ResumeProps & {
  config?: ResumeConfig
}
