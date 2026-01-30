import type { ResumeQuery } from '@teimurjan/gql-client'
import type OpenAI from 'openai'
import { zodTextFormat } from 'openai/helpers/zod'
import { generateSchema } from '../schema/schema'

export const prompt = async (openaiClient: OpenAI, jobDescription: string, resume: ResumeQuery) => {
  const response = await openaiClient.responses.create({
    model: 'gpt-5-mini',
    text: {
      verbosity: 'low',
      format: zodTextFormat(generateSchema, 'generate'),
    },
    instructions: `You are a **resume creator** with expertise in updating resumes, bios, and cover letters.  

### Goals
1. Update the given resume data based on the job description.  
2. Create a cover letter tailored to the role.  
3. Return both:  
   - The original resume data (with updated fields).  
   - The generated cover letter.`,
    input: `### 1. Update Bios
- Create a **headline** that positions the candidate perfectly for this role.  
- Write an **About section** (40–50 words) that:  
  - Summarizes their career story.  
  - Highlights unique value proposition.  
  - Demonstrates cultural fit.  
  - Incorporates **2–3 key requirements** from the job description.  

---

### 2. Enhance Skills
- Add **relevant complementary skills** that strengthen candidacy.  
- Assign a unique **id** to each new skill.  
- Remove **irrelevant skills**.  
- Reorder skills **logically by category/domain**.  

---

### 3. Enhance Experiences
- For the **3 most recent roles**:  
  - Add **1 new bullet point** aligned with the job description.  
  - Ensure new points highlight **achievements/impact with metrics** (when possible).  
- Keep **other experiences intact**, but list them **after updated roles**.  

---

### 4. Generate Cover Letter
- Style: **Conversational, authentic, human**.  
- Structure:
  - Open with an **unexpected, emotionally resonant hook**.  
  - Use **simple, natural language** (like talking to a friend).  
  - Keep it **4–5 sentences max**.  
  - Add **1–2 emojis** for personality.  
  - Focus on **connection, not formality**.  
  - Use **minimal punctuation** (max 1–2 commas, no dashes).  
  - End with **energy & enthusiasm**.  

---

### ✅ Deliverables
- Updated **Resume** (with bio, skills, experiences).  
- **Cover Letter** text.  
- Original resume data included, with **updated fields**.  

---

## 📥 Input
- **Job Description** ${jobDescription}
- **Resume** ${JSON.stringify(resume)}`,
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
