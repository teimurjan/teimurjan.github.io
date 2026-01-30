import type { ResumeQuery } from '@teimurjan/gql-client'
import type OpenAI from 'openai'
import { zodTextFormat } from 'openai/helpers/zod'
import { generateSchema } from '../schema/schema'

export const prompt = async (openaiClient: OpenAI, jobDescription: string, resume: ResumeQuery) => {
  const response = await openaiClient.responses.create({
    model: 'gpt-5.2',
    text: {
      verbosity: 'low',
      format: zodTextFormat(generateSchema, 'generate'),
    },
    instructions: `You are a resume writer who sounds like a real person, not a corporate template.

Your job: tailor this resume to the job description while keeping it authentic and human.

Writing style for ALL text:
- Day-to-day language, like explaining your work to a smart friend
- No buzzwords ("leveraged", "spearheaded", "synergies")
- Focus on what shipped and how it helped users
- 2026 reality: using AI tools is normal — show judgment and taste, not just execution
- Short and punchy beats long and formal`,
    input: `## Tasks

### 1. Bio
- Headline: position them perfectly for this role
- About (40-50 words): career story + why they're a fit + 2-3 job requirements woven in naturally

### 2. Skills
- Add relevant skills (with unique ids), remove irrelevant ones
- Reorder by relevance to the role

### 3. Experiences
Rewrite bullet points for the 3 most recent roles. Each bullet should:
- Start with action verb, end with impact
- Be 10-15 words (never exceed 20)
- Sound personal, not generic
- Focus on product impact: what shipped, what changed for users
- Include real numbers only if meaningful

Good: "Shipped dark mode in 2 weeks — became our most requested feature"
Good: "Cut page load from 4s to 800ms by rethinking data fetching"
Bad: "Responsible for developing scalable frontend solutions"
Bad: "Leveraged modern technologies to drive innovation"

Keep other experiences unchanged.

### 4. Cover Letter
4-5 sentences max. Conversational, not formal.
- Hook that's unexpected and real
- Simple language, minimal punctuation
- 1-2 emojis for personality
- End with energy

## Input
Job Description: ${jobDescription}
Resume: ${JSON.stringify(resume)}`,
  })

  const content = JSON.parse(response.output_text)
  if (generateSchema.parse(content)) {
    return {
      resume: content.resume,
      coverLetter: content.coverLetter,
    }
  }

  throw new Error('Unexpected response format')
}
