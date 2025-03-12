import { ResumeQuery } from '@teimurjan/gql-client'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINH_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
})

const db = getFirestore(app)

export type JobApplication = {
  id?: string // Firestore uses string IDs
  resume: ResumeQuery
  coverLetter: string
  jobDescription: string
  createdAt: Timestamp
}

export const useJobApplications = () => {
  const [applications, setApplications] = useState<JobApplication[]>([])

  useEffect(() => {
    const jobAppsCollection = collection(db, 'jobApplications')
    const q = query(jobAppsCollection, orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const apps: JobApplication[] = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...(docSnap.data() as Omit<JobApplication, 'id'>),
      }))
      setApplications(apps)
    })
    return unsubscribe
  }, [])

  return applications
}

export const useJobApplication = (id: string) => {
  const [application, setApplication] = useState<JobApplication | null>(null)

  useEffect(() => {
    const docRef = doc(db, 'jobApplications', id)
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setApplication({
          id: docSnap.id,
          ...(docSnap.data() as Omit<JobApplication, 'id'>),
        })
      } else {
        setApplication(null)
      }
    })
    return unsubscribe
  }, [id])

  return application
}

export const useAddJobApplication = () => {
  return async (data: JobApplication) => {
    const { id, ...rest } = data
    const docRef = await addDoc(collection(db, 'jobApplications'), rest)
    return docRef.id
  }
}

export const useRemoveJobApplication = () => {
  return async (id: string) => {
    await deleteDoc(doc(db, 'jobApplications', id))
  }
}
