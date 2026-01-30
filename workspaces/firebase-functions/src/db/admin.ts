import { db } from '../firebase/admin-firestore'
import type { JobApplication } from './types'

export async function updateJobApplication(
  id: string,
  data: Pick<JobApplication, 'status' | 'resume' | 'coverLetter'>
) {
  await db.collection('jobApplications').doc(id).update(data)
}
