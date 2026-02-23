import { createJobApplication } from '@/db/admin'
import { generateFormSchema } from '@/schema/generate-form'
import { Client } from '@upstash/qstash'
import { type NextRequest, NextResponse } from 'next/server'
import { RateLimiterMemory } from 'rate-limiter-flexible'

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
        ''
    )
  } catch (_error) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  const token = request.headers.get('Authorization')?.split('Bearer ')[1]
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const verifyResponse = await fetch(`${request.nextUrl.origin}/api/verify-token`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!verifyResponse.ok) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const parsed = generateFormSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues.map((issue) => issue.message).join(', ') },
        { status: 400 }
      )
    }

    const jobApplicationId = await createJobApplication(parsed.data)

    const { messageId } = await client.publishJSON({
      url: process.env.FIREBASE_GENERATE_FUNCTION_URL!,
      retries: 0,
      body: {
        jobApplicationId,
        jobDescription: parsed.data.jobDescription,
      },
    })

    return NextResponse.json({
      jobApplicationId,
      messageId,
    })
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 })
  }
}
