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
    I am applying for the following job: ${parsed.data.jobDescription}
    
    I have the following JSON data for my resume: ${JSON.stringify(parsed.data.resume)}
    
    I need you to:
    1. Update the experiences.
      - Do not remove any experience
      - Most recent experiences' descriptions should have 3-4 bullet points
      - Update 1-2 experiences' descriptions to match the job using active, results-focused, and written in a natural, human tone language.
    2. Update skills to match the job.
    3. Update the bio headline and about to reflect the job position.
    4. Create a short, unusual cover letter with a bold emotionally resonant hook to grab attention. The cover letter should feel very personal and written in a spontaneous, off-the-cuff manner by:
      - Using plain, everyday language and a conversational tone.
      - Using max 1-2 commas and 0 dashes even if they're required grammarly.
      - Allowing for natural hesitations or slight imperfections that show real human writing.
      - Keeping it to 4-5 sentences. Use 1-2 emoji if it feels natural.
      - Structuring it randomly, with no set format or structure.
    5. Respond with a JSON object that has keys "resume" (value will be the updated JSON structure) and "coverLetter" (value will be a string) only. Do not change the structure of the JSON data.
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
    const json = rawResponse ? extractJSON(rawResponse) : rawResponse
    const parsedJson = json ? JSON.parse(json) : {}
    return NextResponse.json(parsedJson)
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 })
  }
}
