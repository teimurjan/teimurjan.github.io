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
    const json = rawResponse ? extractJSON(rawResponse) : rawResponse
    const parsedJson = json ? JSON.parse(json) : {}
    return NextResponse.json(parsedJson)
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 })
  }
}
