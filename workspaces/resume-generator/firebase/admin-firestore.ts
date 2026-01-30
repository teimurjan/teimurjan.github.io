import { getAdmin } from '@/firebase/admin'
import type { Firestore } from 'firebase-admin/firestore'

let firestoreDb: Firestore | null = null

export const getDb = async (): Promise<Firestore> => {
  if (firestoreDb) return firestoreDb

  const admin = await getAdmin()
  const { getFirestore } = await import('firebase-admin/firestore')
  firestoreDb = getFirestore(admin)

  return firestoreDb
}
