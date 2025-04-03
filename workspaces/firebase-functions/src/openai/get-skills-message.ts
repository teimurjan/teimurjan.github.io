import { ChatCompletionMessageParam } from 'openai/resources'

export const getSkillsMessage = (): ChatCompletionMessageParam => {
  return {
    role: 'user',
    content: `Enhance skills:
- Add any relevant complementary skills that strengthen my candidacy
- Add id to each new skill
- Remove skills that aren't relevant to this role
- Order skills logically by category/domain`,
  }
}
