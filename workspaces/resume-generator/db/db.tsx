import { ResumeQuery } from '@teimurjan/gql-client'
import { initializeApp } from 'firebase/app'
import { getFirestore, Timestamp } from 'firebase/firestore'

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINH_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
})

export const db = getFirestore(app)

export type JobApplication = {
  id?: string // Firestore uses string IDs
  resume: ResumeQuery
  coverLetter: string
  jobDescription: string
  createdAt: Timestamp
}
