import { NextRequest, NextResponse } from 'next/server'
import { RateLimiterMemory } from 'rate-limiter-flexible'
import { Client } from '@upstash/qstash'
import { Timestamp } from 'firebase-admin/firestore'
import { generateFormSchema } from '@/schema/generate-form'
import { db } from '@/firebase/admin-firestore'

console.log('QSTASH_URL', process.env.QSTASH_URL)
const client = new Client({
  baseUrl: process.env.QSTASH_URL!,
  token: process.env.QSTASH_TOKEN!,
})

const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 requests
  duration: 60, // per 60 seconds
})

export async function POST(request: NextRequest) {
  try {
    await rateLimiter.consume(
      request.headers.get('x-forwarded-for') ||
        request.headers.get('x-real-ip') ||
        request.headers.get('x-client-ip') ||
        '',
    )
  } catch (_error) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 },
    )
  }

  try {
    const body = await request.json()
    const parsed = generateFormSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors }, { status: 400 })
    }
    const jobApplicationRef = await db.collection('jobApplications').add({
      jobDescription: parsed.data.jobDescription,
      status: 'pending',
      createdAt: Timestamp.now(),
    })

    const { messageId } = await client.publishJSON({
      url: `${request.nextUrl.origin}/api/generate/queue`,
      body: {
        jobApplicationId: jobApplicationRef.id,
        data: parsed.data,
      },
    })

    return NextResponse.json({
      jobApplicationId: jobApplicationRef.id,
      messageId,
      status: 'pending',
    })
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 })
  }
}
