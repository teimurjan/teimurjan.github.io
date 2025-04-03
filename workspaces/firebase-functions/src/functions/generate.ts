import { onRequest } from 'firebase-functions/v2/https'
import { onInit } from 'firebase-functions/v2/core'
import * as logger from 'firebase-functions/logger'
import { defineSecret } from 'firebase-functions/params'
import OpenAI from 'openai'
import { Receiver } from '@upstash/qstash'
import { updateJobApplication } from '../db/admin'
import { getClient, ResumeQuery, Sdk } from '@teimurjan/gql-client'
import { prompt } from '../openai/prompt'
import { verifySignature } from '../upstash/signature'

const qstashCurrentSigningKey = defineSecret('QSTASH_CURRENT_SIGNING_KEY')
const qstashNextSigningKey = defineSecret('QSTASH_NEXT_SIGNING_KEY')
const openaiApiKey = defineSecret('OPENAI_API_KEY')
const hygraphUrl = defineSecret('HYGRAPH_URL')

let receiver: Receiver
let openaiClient: OpenAI
let gqlClient: Sdk

onInit(async () => {
  receiver = new Receiver({
    currentSigningKey: qstashCurrentSigningKey.value(),
    nextSigningKey: qstashNextSigningKey.value(),
  })
  openaiClient = new OpenAI({
    apiKey: openaiApiKey.value(),
  })
  gqlClient = getClient(hygraphUrl.value())
})

export const generate = onRequest(
  {
    secrets: [
      'QSTASH_CURRENT_SIGNING_KEY',
      'QSTASH_NEXT_SIGNING_KEY',
      'OPENAI_API_KEY',
      'HYGRAPH_URL',
    ],
  },
  async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).send('Method Not Allowed')
      return
    }

    if (process.env.NODE_ENV !== 'development') {
      await verifySignature(req, receiver)
    }

    const { jobApplicationId, jobDescription } = req.body
    try {
      await updateJobApplication(jobApplicationId, {
        status: 'processing',
      })

      const resume = await gqlClient.Resume()

      const response = await prompt(openaiClient, jobDescription, resume)

      await updateJobApplication(jobApplicationId, {
        resume: response.resume as ResumeQuery,
        coverLetter: response.coverLetter,
        status: 'completed',
      })

      res.status(200).json({ success: true })
    } catch (error) {
      if (jobApplicationId) {
        await updateJobApplication(jobApplicationId, {
          status: 'failed',
        })
      }

      logger.error('Error generating resume', error)
      res.status(500).json({ error: 'Something went wrong' })
    }
  },
)
