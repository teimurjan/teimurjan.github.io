import { ChatCompletionMessageParam } from 'openai/resources'

export const getCoverLetterMessage = (): ChatCompletionMessageParam => {
  return {
    role: 'user',
    content: `Generate cover letter that:
- Opens with an unexpected, emotionally resonant hook
- Uses conversational, human language (like you're talking to a friend)
- Includes natural pauses and authentic voice
- Keeps structure loose and organic (4-5 sentences max)
- Strategically uses 1-2 emoji to add personality
- Focuses on connection over formality
- Avoids complex punctuation (max 1-2 commas, no dashes)
- Ends with energy and enthusiasm`,
  }
}
