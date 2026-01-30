import { getDb } from '@/firebase/admin-firestore'
import type { JobApplication } from './types'

export async function createJobApplication(
  data: Pick<JobApplication, 'jobDescription' | 'companyName' | 'jobTitle'>
) {
  const db = await getDb()
  const { Timestamp } = await import('firebase-admin/firestore')

  const jobApplicationRef = await db.collection('jobApplications').add({
    jobDescription: data.jobDescription,
    companyName: data.companyName,
    jobTitle: data.jobTitle,
    status: 'pending',
    createdAt: Timestamp.now(),
  })

  return jobApplicationRef.id
}
