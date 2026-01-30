'use client'
import { useAuth } from '@/providers/auth-provider'
import { useRouter } from '@bprogress/next/app'
import { Button } from '../../ui/button'

export const LogoutButton = () => {
  const { logout, user } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    router.push('/login')
  }

  if (!user) {
    return null
  }

  return <Button onClick={handleLogout}>Logout</Button>
}
