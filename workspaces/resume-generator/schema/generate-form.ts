import { z } from 'zod'

const bioSchema = z.object({
  fullName: z.string().nonempty('Full name is required'),
  headline: z.string().nonempty('Headline is required'),
  about: z.string().nonempty('About is required'),
  location: z.string().nonempty('Location is required'),
  phoneNumber: z.string().nonempty('Phone number is required'),
  email: z.string().email('Invalid email address'),
})

const educationSchema = z.object({
  id: z.string().nonempty('ID is required'),
  school: z.string().nonempty('School is required'),
  degree: z.string().nullable().optional(),
  areaOfStudy: z.string().nonempty('Area of study is required'),
  startDate: z.string().nonempty('Start date is required'),
  endDate: z.string().nullable().optional(),
})

const skillSchema = z.object({
  id: z.string().nonempty('ID is required'),
  title: z.string().nonempty('Title is required'),
  yearsOfExperience: z
    .number()
    .int('Years of experience must be an integer')
    .nonnegative('Years of experience must be non-negative'),
})

const descriptionSchema = z.object({
  html: z.string().nonempty('HTML description is required'),
})

const experienceSchema = z.object({
  id: z.string().nonempty('ID is required'),
  company: z.string().nonempty('Company is required'),
  position: z.string().nonempty('Position is required'),
  startDate: z.string().nonempty('Start date is required'),
  endDate: z.string().optional().nullable(),
  description: descriptionSchema,
})

const publicationSchema = z.object({
  id: z.string().nonempty('ID is required'),
  title: z.string().nonempty('Title is required'),
  link: z.string().url('Invalid URL'),
  date: z.string().nonempty('Date is required'),
})

const conferenceSchema = z.object({
  id: z.string().nonempty('ID is required'),
  title: z.string().nonempty('Title is required'),
  topic: z.string().nonempty('Topic is required'),
  link: z.string().url('Invalid URL'),
  date: z.string().nonempty('Date is required'),
})

export const resumeSchema = z.object({
  bios: z.array(bioSchema),
  educations: z.array(educationSchema),
  skills: z.array(skillSchema),
  experiences: z.array(experienceSchema),
  publications: z.array(publicationSchema),
  conferences: z.array(conferenceSchema),
})

export const generateFormSchema = z.object({
  jobDescription: z
    .string()
    .nonempty('Job description is required')
    .min(100, 'Job description must be at least 100 characters'),
  resume: resumeSchema,
})
