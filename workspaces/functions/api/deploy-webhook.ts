import type { VercelRequest, VercelResponse } from '@vercel/node'
import crypto from 'crypto'

const HYGRAPH_SECRET = process.env.HYGRAPH_SECRET!
const GITHUB_WORKFLOW_URL = process.env.GITHUB_WORKFLOW_URL!
const GITHUB_TOKEN = process.env.GITHUB_TOKEN!


export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const signature = req.headers['gcms-signature'] as string
  const [rawSign, rawEnv, rawTimestamp] = signature.split(', ')

  const sign = rawSign.replace('sign=', '')
  const env = rawEnv.replace('env=', '')
  const timestamp = parseInt(rawTimestamp.replace('t=', ''))
  const payload = JSON.stringify({
    Body: JSON.stringify(req.body),
    EnvironmentName: env,
    TimeStamp: timestamp,
  })
  const hash = crypto
    .createHmac('sha256', HYGRAPH_SECRET)
    .update(payload)
    .digest('base64')

  if (sign !== hash) {
    return res.status(403).json({ message: 'Invalid signature' })
  }

  try {
    const response = await fetch(GITHUB_WORKFLOW_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({ ref: 'main' }),
    })

    if (!response.ok) {
      throw new Error(`Failed to trigger workflow: ${response.statusText}`)
    }

    return res.status(200).json({ message: 'Deployment triggered' })
  } catch (error) {
    return res.status(500).json({ error: (error as unknown as Error).message })
  }
}
