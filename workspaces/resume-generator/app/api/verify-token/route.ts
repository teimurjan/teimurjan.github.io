import { admin } from '@/firebase/admin'
import { getAuth } from 'firebase-admin/auth'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  const token = authHeader?.split('Bearer ')[1]
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const decoded = await getAuth(admin).verifyIdToken(token)
    return NextResponse.json({ uid: decoded.uid })
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
}
