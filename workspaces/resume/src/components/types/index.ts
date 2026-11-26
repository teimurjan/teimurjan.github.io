import type { DocumentProps } from '@react-pdf/renderer'

/** What the Harvard resume reads. Older callers send the same shape from Hygraph's `Resume` query. */
export interface ResumeData {
  bios: {
    fullName: string
    headline: string
    about: string
    location: string
    phoneNumber: string
    email: string
  }[]
  educations: {
    id: string
    school: string
    degree?: string | null
    areaOfStudy: string
    startDate: string
    endDate?: string | null
  }[]
  skills: { id: string; title: string }[]
  experiences: {
    id: string
    company: string
    position: string
    startDate: string
    endDate?: string | null
    description: { html: string }
  }[]
  publications: { id: string }[]
  conferences: { id: string }[]
}

export interface ResumeProps extends ResumeData, DocumentProps {}
