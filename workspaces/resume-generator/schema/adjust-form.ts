import { z } from 'zod'
import { resumeSchema } from './generate-form'

export const adjustFormSchema = z.object({
  companyName: z.string().nonempty('Company name is required'),
  jobTitle: z.string().nonempty('Job title is required'),
  coverLetter: z.string(),
  resume: resumeSchema,
  style: z.enum(['custom', 'harvard']),
  config: z
    .object({
      skills: z.enum(['row', 'column']),
      location: z.boolean(),
    })
    .optional(),
})
