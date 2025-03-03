import type { VercelRequest, VercelResponse } from '@vercel/node'
import crypto from 'crypto'

const HYGRAPH_SECRET = process.env.HYGRAPH_SECRET!
const GITHUB_WORKFLOW_URL = process.env.GITHUB_WORKFLOW_URL!
const GITHUB_TOKEN = process.env.GITHUB_TOKEN!

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const signature = req.headers['x-hygraph-signature'] as string
  const payload = JSON.stringify(req.body)

  const hmac = crypto.createHmac('sha256', HYGRAPH_SECRET)
  hmac.update(payload)
  const expectedSignature = `sha256=${hmac.digest('hex')}`

  if (signature !== expectedSignature) {
    return res.status(403).json({ message: 'Invalid signature' })
  }

  try {
    const response = await fetch(GITHUB_WORKFLOW_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
      body: JSON.stringify({ event_type: 'content_updated' }),
    })

    if (!response.ok) {
      throw new Error(`Failed to trigger workflow: ${response.statusText}`)
    }

    return res.status(200).json({ message: 'Deployment triggered' })
  } catch (error) {
    return res.status(500).json({ error: (error as unknown as Error).message })
  }
}
