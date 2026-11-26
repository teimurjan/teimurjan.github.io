export interface Bio {
  fullName: string
  headline: string
  location: string
  about: string
  phoneNumber: string
  email: string
}

export interface Education {
  id: string
  school: string
  degree: string
  areaOfStudy: string
  startDate: string
  endDate: string | null
  bullets: string[]
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string | null
  location: string
  locationIcon: string
  /** Path under the website's `public/`, such as `/media/experiences/klarna.png`. */
  logo: string
  /** Inline markdown: `**bold**` and `[label](url)`. */
  bullets: string[]
}

export interface Skill {
  id: string
  title: string
  yearsOfExperience: number
  logo: string
}

export interface Product {
  id: string
  name: string
  link: string | null
  description: string
  logo: string
}

export interface Publication {
  id: string
  title: string
  link: string
  date: string
}

export interface VideoEmbed {
  link: string
  iframeOptions: Record<string, unknown> | null
}

export interface Appearance {
  id: string
  title: string
  link: string | null
  date: string
  image: string | null
  videoEmbed: VideoEmbed | null
}

export interface Conference extends Appearance {
  topic: string
}

export type Interview = Appearance

export interface SiteData {
  bio: Bio
  educations: Education[]
  experiences: Experience[]
  skills: Skill[]
  products: Product[]
  publications: Publication[]
  conferences: Conference[]
  interviews: Interview[]
}
