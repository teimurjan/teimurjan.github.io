'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import {
  User,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  IdTokenResult,
} from 'firebase/auth'
import { firebase } from '@/firebase/firebase'
import { jwtDecode } from 'jwt-decode'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  logout: () => Promise<void>
  syncUser: () => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const auth = getAuth(firebase)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken()
        document.cookie = `token=${token}; path=/;`
      }
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const syncUser = async () => {
    const currentToken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('token='))
      ?.split('=')[1]
    const decodedToken = currentToken
      ? jwtDecode<IdTokenResult>(currentToken)
      : null
    const shouldUpdateToken =
      !decodedToken ||
      (decodedToken?.expirationTime &&
        new Date(decodedToken.expirationTime).getTime() < Date.now())

    if (!shouldUpdateToken) {
      return true
    }

    if (user) {
      const token = await user.getIdToken(true)
      document.cookie = `token=${token}; path=/;`
      return true
    }

    return false
  }

  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  const logout = async () => {
    await signOut(auth)
    document.cookie = 'token=; Max-Age=0; path=/'
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signInWithGoogle,
        logout,
        syncUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
