interface SectionBase {
  id: string
  filename: string
  title: string
  folder: string
}

export interface AboutData {
  about: string
  email: string
}

export interface ContactData {
  email: string
  location: string
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string | null
  startDate: string
  endDate: string | null
  description: string
  logoUrl: string
}

export interface ExperienceData {
  experiences: Experience[]
}

export interface Skill {
  id: string
  title: string
  yearsOfExperience: number
  logoUrl: string
}

export interface SkillsData {
  skills: Skill[]
  maxYears: number
}

export interface Education {
  id: string
  school: string
  degree: string | null
  areaOfStudy: string
  startDate: string
  endDate: string | null
  description: string | null
}

export interface EducationData {
  educations: Education[]
}

export interface Repository {
  id: string
  nameWithOwner: string
  description: string | null
  url: string
  stargazerCount: number
  primaryLanguage: string | null
  ownerAvatarUrl: string
  isOwned: boolean
}

export interface ProjectsData {
  repositories: Repository[]
}

export interface Publication {
  id: string
  title: string
  link: string
  date: string
  imageUrl: string | null
}

export interface PublicationsData {
  publications: Publication[]
}

export interface Conference {
  id: string
  title: string
  topic: string
  link: string | null
  videoEmbed: {
    url: string
    iframeOptions: {
      autoplay?: boolean
      controls?: boolean
      loop?: boolean
      muted?: boolean
    } | null
  } | null
  date: string
  imageUrl: string | null
}

export interface ConferencesData {
  conferences: Conference[]
}

export interface Interview {
  id: string
  title: string
  link: string | null
  videoEmbed: {
    url: string
    iframeOptions: {
      autoplay?: boolean
      controls?: boolean
      loop?: boolean
      muted?: boolean
    } | null
  } | null
  date: string
  imageUrl: string | null
}

export interface InterviewsData {
  interviews: Interview[]
}

export type Section =
  | (SectionBase & { type: 'about'; data: AboutData & ContactData })
  | (SectionBase & { type: 'experience'; data: ExperienceData })
  | (SectionBase & { type: 'skills'; data: SkillsData })
  | (SectionBase & { type: 'education'; data: EducationData })
  | (SectionBase & { type: 'projects'; data: ProjectsData })
  | (SectionBase & { type: 'publications'; data: PublicationsData })
  | (SectionBase & { type: 'conferences'; data: ConferencesData })
  | (SectionBase & { type: 'interviews'; data: InterviewsData })

export interface FolderStructure {
  name: string
  sections: Section[]
}
