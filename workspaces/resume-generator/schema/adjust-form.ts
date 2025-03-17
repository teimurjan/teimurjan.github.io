import { z } from 'zod'
import { resumeSchema } from './generate-form'

export const adjustFormSchema = z.object({
  coverLetter: z.string(),
  resume: resumeSchema,
  config: z
    .object({
      skills: z.enum(['row', 'column']),
    })
    .optional(),
})
