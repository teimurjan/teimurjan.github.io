import { ResumeQuery } from '@teimurjan/gql-client'
import { Timestamp } from 'firebase/firestore'

export type JobApplicationStatus =
  | 'pending'
  | 'processing'
  | 'completed'
  | 'failed'

export type JobApplication = {
  id?: string
  resume?: ResumeQuery
  coverLetter?: string
  jobDescription: string
  createdAt: Timestamp
  status?: JobApplicationStatus
}
