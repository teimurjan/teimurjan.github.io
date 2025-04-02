import { z } from 'zod'

const bioSchema = z.object({
  fullName: z.string(),
  headline: z.string(),
  about: z.string(),
  location: z.string(),
  phoneNumber: z.string(),
  email: z.string(),
})

const educationSchema = z.object({
  id: z.string(),
  school: z.string(),
  degree: z.string(),
  areaOfStudy: z.string(),
  startDate: z.string(),
  endDate: z.string(),
})

const skillSchema = z.object({
  id: z.string(),
  title: z.string(),
  yearsOfExperience: z.number(),
})

const descriptionSchema = z.object({
  html: z.string(),
})

const experienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  position: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  description: descriptionSchema,
})

const publicationSchema = z.object({
  id: z.string(),
  title: z.string(),
  link: z.string(),
  date: z.string(),
})

const conferenceSchema = z.object({
  id: z.string(),
  title: z.string(),
  topic: z.string(),
  link: z.string(),
  date: z.string(),
})

export const openaiResponseSchema = z.object({
  coverLetter: z.string(),
  resume: z.object({
    bios: z.array(bioSchema),
    educations: z.array(educationSchema),
    skills: z.array(skillSchema),
    experiences: z.array(experienceSchema),
    publications: z.array(publicationSchema),
    conferences: z.array(conferenceSchema),
  }),
})
