import { firebase } from '@/firebase/firebase'
import { getFirestore } from 'firebase/firestore'

export const db = getFirestore(firebase)
