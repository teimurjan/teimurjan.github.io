import { firebase } from '@/firebase/firebase'
import { ResumeQuery } from '@teimurjan/gql-client'
import { getFirestore, Timestamp } from 'firebase/firestore'

export const db = getFirestore(firebase)

export type JobApplication = {
  id?: string // Firestore uses string IDs
  resume: ResumeQuery
  coverLetter: string
  jobDescription: string
  createdAt: Timestamp
}
