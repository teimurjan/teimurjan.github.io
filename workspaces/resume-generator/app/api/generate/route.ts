import { createJobApplication } from '@/db/admin'
import { generateFormSchema } from '@/schema/generate-form'
import { Client } from '@upstash/qstash'
import { type NextRequest, NextResponse } from 'next/server'
import { RateLimiterMemory } from 'rate-limiter-flexible'

const qstashToken = process.env.QSTASH_TOKEN
const qstashClient = qstashToken
  ? new Client({ baseUrl: process.env.QSTASH_URL!, token: qstashToken })
  : null

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
    const functionUrl = process.env.FIREBASE_GENERATE_FUNCTION_URL!
    const payload = { jobApplicationId, jobDescription: parsed.data.jobDescription }

    if (qstashClient) {
      const { messageId } = await qstashClient.publishJSON({
        url: functionUrl,
        retries: 0,
        body: payload,
      })
      return NextResponse.json({ jobApplicationId, messageId })
    }

    // Local dev without QStash: fire-and-forget to the emulator.
    fetch(functionUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch((err) => console.error('Local generate dispatch failed', err))

    return NextResponse.json({ jobApplicationId, messageId: 'local-dev' })
  } catch (error) {
    console.error('POST /api/generate failed', error)
    return NextResponse.json({ error: `${error}` }, { status: 500 })
  }
}
