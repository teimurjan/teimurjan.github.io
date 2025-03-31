import { admin } from '@/firebase/admin'
import { getFirestore } from 'firebase-admin/firestore'

export const db = getFirestore(admin)
