'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
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
import { useCookie } from '@/hooks/use-cookie'

interface AuthContextType {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  logout: () => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const auth = getAuth(firebase)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  const tokenFromCookie = useCookie('token')
  const decodedTokenFromCookie = useMemo(() => {
    return tokenFromCookie ? jwtDecode<IdTokenResult>(tokenFromCookie) : null
  }, [tokenFromCookie])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken()
        document.cookie = `token=${token}; path=/;`
      }

      setLoading(false)
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    const syncUser = async () => {
      const shouldUpdateToken =
        !decodedTokenFromCookie ||
        (decodedTokenFromCookie?.expirationTime &&
          new Date(decodedTokenFromCookie.expirationTime).getTime() <
            Date.now())

      if (!shouldUpdateToken) {
        return
      }

      if (auth.currentUser) {
        setLoading(true)
        const token = await auth.currentUser.getIdToken(true)
        document.cookie = `token=${token}; path=/;`
        return
      }

      return
    }

    syncUser()
  }, [decodedTokenFromCookie])

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
        user: decodedTokenFromCookie ? auth.currentUser : null,
        signIn,
        signInWithGoogle,
        logout,
        loading,
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
