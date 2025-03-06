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
    I am applying for the following job:
    "${parsed.data.jobDescription}"
    
    This is the current JSON data for my resume:
    ${JSON.stringify(parsed.data.resume)}
    
    I need you to do the following:
    1. Update the experiences' descriptions and skills to match the job.
    2. Update the most recent experience's job title to match the job.
    3. Update the bio headline to reflect the job position.
    4. Create a short, unusual cover letter that starts with a bold, emotionally resonant hook to capture attention. Make sure the cover letter feels natural and personal by:
      - Using plain, everyday language with a conversational tone.
      - Including a small personal detail or anecdote to add authenticity.
      - Allowing for a bit of informal phrasing or minor imperfections that reflect real human writing.
      - Keeping it 3-5 sentences long and adding 1-2 emojis sparingly.
    
    Criteria:
    1. Do not change the structure of the JSON data.
    2. The last 3 experiences should have at least 3 bullet points each.
    3. The resume language must be active, results-focused, and written in a natural, human tone.
    4. Ensure there is no plagiarism.
    5. Respond with a JSON object that has keys "resume" (value will be the updated JSON structure) and "coverletter" (value will be a string) only.
    `;
    const completion = await client.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content:
            "You're a first-class resume creator with expert knowledge in updating resumes, bios, and cover letters. You always craft natural, engaging, and precise content that highlights measurable achievements.",
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
