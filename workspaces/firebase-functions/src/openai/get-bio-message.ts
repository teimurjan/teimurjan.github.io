import { ChatCompletionMessageParam } from 'openai/resources'

export const getBioMessage = (): ChatCompletionMessageParam => {
  return {
    role: 'user',
    content: `Update bios:
- Create a punchy headline that positions me perfectly for this role
- Write an "about" section that will summarize my career story in 40-50 words, highlighting my unique value proposition, demonstrates cultural fit and incorporates 2-3 key requirements from the job description`,
  }
}
