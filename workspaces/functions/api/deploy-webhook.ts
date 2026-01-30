import crypto from 'node:crypto'
import { Redis } from '@upstash/redis'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const HYGRAPH_SECRET = process.env.HYGRAPH_SECRET!
const GITHUB_WORKFLOW_URL = process.env.GITHUB_WORKFLOW_URL!
const GITHUB_TOKEN = process.env.GITHUB_TOKEN!

const COOLDOWN_PERIOD = 30000 // seconds
const DEPLOY_KEY = 'last_deploy_timestamp'

const redis = Redis.fromEnv()

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const signature = req.headers['gcms-signature'] as string
  const [rawSign, rawEnv, rawTimestamp] = signature.split(', ')

  const sign = rawSign.replace('sign=', '')
  const env = rawEnv.replace('env=', '')
  const timestamp = Number.parseInt(rawTimestamp.replace('t=', ''))
  const payload = JSON.stringify({
    Body: JSON.stringify(req.body),
    EnvironmentName: env,
    TimeStamp: timestamp,
  })
  const hash = crypto.createHmac('sha256', HYGRAPH_SECRET).update(payload).digest('base64')

  if (sign !== hash) {
    return res.status(403).json({ message: 'Invalid signature' })
  }

  try {
    const lastDeployTime = (await redis.get<number>(DEPLOY_KEY)) || 0
    const now = Date.now()
    const timeSinceLastDeploy = now - lastDeployTime

    if (timeSinceLastDeploy < COOLDOWN_PERIOD) {
      return res.status(429).json({
        message: `Deployment already scheduled. Please wait ${Math.round((COOLDOWN_PERIOD - timeSinceLastDeploy) / 1000)} seconds.`,
      })
    }

    await redis.set(DEPLOY_KEY, now)

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
      throw new Error(`Failed to trigger workflow: ${response.statusText} ${await response.text()}`)
    }

    console.log('Deployment triggered')
    return res.status(200).json({ message: 'Deployment triggered' })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
