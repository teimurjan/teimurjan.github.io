import OpenAI from 'openai'
import { NextRequest, NextResponse } from 'next/server'
import { generateFormSchema } from '@/schema/generate-form'

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const extractJSON = (text: string) => {
  const jsonRegex = /```json\s*([\s\S]*?)\s*```/
  const match = jsonRegex.exec(text)
  return match && match[1] ? match[1] : text
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = generateFormSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors }, { status: 400 })
    }

    const prompt = `
    Given the following job description: "${parsed.data.jobDescription}"
    and the following JSON data for my resume: ${JSON.stringify(parsed.data.resume)},
    update the experience descriptions, skills & bios in the JSON data to match the job description without structure change.
    Also create a concise, unusual cover letter with a touching hook in the beginning written in simple words using a bit of emojis.
    Do not include anything except JSON object with keys "resume" and "coverletter" in the response.
  `
    const completion = await client.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant for resume generation.',
        },
        { role: 'user', content: prompt },
      ],
    })

    const rawResponse = completion.choices[0].message.content
    const json = rawResponse ? extractJSON(rawResponse) : rawResponse
    const parsedJson = json ? JSON.parse(json) : {}
    return NextResponse.json(parsedJson)
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 })
  }
}
