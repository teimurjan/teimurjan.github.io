import { onRequest } from 'firebase-functions/v2/https'
import { onInit } from 'firebase-functions/v2/core'
import * as logger from 'firebase-functions/logger'
import { defineSecret } from 'firebase-functions/params'
import OpenAI from 'openai'
import { Receiver } from '@upstash/qstash'
import { extractOpenAIJSON } from '../utils/extract-openai-json'
import { db } from '../firebase/admin-firestore'

const qstashCurrentSigningKey = defineSecret('QSTASH_CURRENT_SIGNING_KEY')
const qstashNextSigningKey = defineSecret('QSTASH_NEXT_SIGNING_KEY')
const openaiApiKey = defineSecret('OPENAI_API_KEY')

let receiver: Receiver
let client: OpenAI

onInit(() => {
  receiver = new Receiver({
    currentSigningKey: qstashCurrentSigningKey.value(),
    nextSigningKey: qstashNextSigningKey.value(),
  })
  client = new OpenAI({
    apiKey: openaiApiKey.value(),
  })
})

export const generate = onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed')
    return
  }

  const signature = req.headers['upstash-signature']
  if (typeof signature !== 'string') {
    logger.error('Invalid signature type', signature)
    res.status(400).send('Invalid signature')
    return
  }

  try {
    const isVerified = await receiver.verify({
      body: req.rawBody.toString(),
      signature,
      url: req.headers.referer,
    })
    if (!isVerified) {
      res.status(401).send('Unauthorized')
      return
    }
  } catch (error) {
    logger.error('Signature verification failed', error)
    res.status(401).send('Unauthorized')
    return
  }

  const { jobApplicationId, data } = req.body
  try {
    await db.collection('jobApplications').doc(jobApplicationId).update({
      status: 'processing',
    })

    const prompt = `
    I am applying for the following job: ${data.jobDescription}
    
    I have the following JSON data for my resume: ${JSON.stringify(data.resume)}
    
    I need you to optimize my resume and create a cover letter that will maximize my chances of getting an interview. Please:

    1. Enhance the experiences section:
      - Keep all existing experiences intact
      - For the 2-3 most recent roles, craft 3-4 impactful bullet points that:
        * Incorporate relevant keywords from the job description
        * Lead with strong action verbs
        * Quantify achievements with metrics where possible (%, $, team size, etc.)
        * Highlight outcomes and business impact

    2. Optimize skills section:
      - Prioritize technical and soft skills mentioned in the job posting
      - Add any relevant complementary skills that strengthen my candidacy
      - Add id to each new skill
      - Remove skills that aren't relevant to this role
      - Order skills logically by category/domain

    3. Craft a compelling personal brand:
      - Create a punchy headline that positions me perfectly for this role
      - Write an "about" section that:
        * Tells a coherent career story
        * Highlights my unique value proposition
        * Demonstrates cultural fit
        * Incorporates 2-3 key requirements from the job

    4. Generate an attention-grabbing cover letter that:
      - Opens with an unexpected, emotionally resonant hook
      - Uses conversational, human language (like you're talking to a friend)
      - Includes natural pauses and authentic voice
      - Keeps structure loose and organic (4-5 sentences max)
      - Strategically uses 1-2 emoji to add personality
      - Focuses on connection over formality
      - Avoids complex punctuation (max 1-2 commas, no dashes)
      - Ends with energy and enthusiasm

    5. Return only a JSON object with:
      - "resume": The enhanced resume data maintaining the original structure (important: do not change the original structure or remove any fields)
      - "coverLetter": The compelling cover letter as a string

    Important: Maintain authenticity while optimizing for impact. The goal is to present my true experience in the most compelling way possible for this specific role.
    `

    const completion = await client.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content:
            "You're a resume creator with deep expertise in updating resumes, bios, and cover letters.",
        },
        { role: 'user', content: prompt },
      ],
    })

    const rawResponse = completion.choices[0].message.content
    const json = rawResponse ? extractOpenAIJSON(rawResponse) : rawResponse
    const parsedJson = json ? JSON.parse(json) : {}

    await db.collection('jobApplications').doc(jobApplicationId).update({
      resume: parsedJson.resume,
      coverLetter: parsedJson.coverLetter,
      status: 'completed',
    })

    res.status(200).json({ success: true })
  } catch (error) {
    logger.error('Error generating resume', error)
    if (jobApplicationId) {
      await db.collection('jobApplications').doc(jobApplicationId).update({
        status: 'failed',
      })
    }

    res.status(500).json({ error: 'Something went wrong' })
  }
})
