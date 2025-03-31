export const extractOpenAIJSON = (text: string) => {
  const jsonRegex = /```json\s*([\s\S]*?)\s*```/
  const match = jsonRegex.exec(text)
  return match && match[1] ? match[1] : text
}
