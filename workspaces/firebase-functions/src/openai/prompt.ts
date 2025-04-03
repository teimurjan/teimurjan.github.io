import OpenAI from 'openai'
import { ResumeQuery } from '@teimurjan/gql-client'
import { getBioMessage } from './get-bio-message'
import { getSkillsMessage } from './get-skills-message'
import { getCoverLetterMessage } from './get-cover-letter-message'
import { getExperiencesMessage } from './get-experiences-message'
import { zodResponseFormat } from 'openai/helpers/zod'
import { generateSchema } from '../schema/schema'
export const prompt = async (
  openaiClient: OpenAI,
  jobDescription: string,
  resume: ResumeQuery,
) => {
  const completion = await openaiClient.beta.chat.completions.parse({
    model: 'gpt-4o-2024-08-06',
    messages: [
      {
        role: 'system',
        content: `You're a resume creator with deep expertise in updating resumes, bios, and cover letters.
Your goals are to:
1. Update the given resume data based on the job description
2. Create a cover letter
3. Return the original resume data with the updated fields and the cover letter`,
      },
      {
        role: 'system',
        content: `You're given the following job description ${jobDescription} and resume data ${JSON.stringify(resume)}`,
      },
      getBioMessage(),
      getSkillsMessage(),
      getExperiencesMessage(),
      getCoverLetterMessage(),
    ],
    response_format: zodResponseFormat(generateSchema, 'generate'),
  })

  return completion.choices[0].message.parsed
}
