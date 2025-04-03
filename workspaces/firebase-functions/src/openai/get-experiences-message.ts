import { ChatCompletionMessageParam } from 'openai/resources'

export const getExperiencesMessage = (): ChatCompletionMessageParam => {
  return {
    role: 'user',
    content: `Enhance experiences:
- For 3 most recent roles, add an additional bullet point to match the job description
- Add the other experiences intact to the end of the resume
- Ensure the new bullet points show achievements and impact with metrics where possible`,
  }
}
