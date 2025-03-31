import { firebase } from '@/firebase/firebase'
import { getAuth } from 'firebase/auth'

const auth = getAuth(firebase)

export { auth }
