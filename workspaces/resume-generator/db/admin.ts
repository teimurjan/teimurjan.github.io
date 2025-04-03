import { Timestamp } from 'firebase-admin/firestore'
import { db } from '@/firebase/admin-firestore'
import { JobApplication } from './types'

export async function createJobApplication(
  data: Pick<JobApplication, 'jobDescription'>,
) {
  const jobApplicationRef = await db.collection('jobApplications').add({
    jobDescription: data.jobDescription,
    status: 'pending',
    createdAt: Timestamp.now(),
  })

  return jobApplicationRef.id
}
