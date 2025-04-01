import { getFirestore } from 'firebase-admin/firestore'
import { admin } from './admin'

export const db = getFirestore(admin)
