'use client'
import { Button } from '../ui/button'
import { useAuth } from '@/providers/auth-provider'
import { useRouter } from 'next/navigation'
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
