import { useAuth } from '@/providers/auth-provider'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const useAnonymous = () => {
  const { user, loading } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect')

  useEffect(() => {
    if (user && !loading) {
      router.push(redirect || '/')
    }
  }, [user, loading, router, redirect])
}
