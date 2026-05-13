import { prettyDate, prettyRange } from '@teimurjan/utils'
import type {
  AboutData,
  ConferencesData,
  ContactData,
  EducationData,
  ExperienceData,
  FolderStructure,
  InterviewsData,
  ProjectsData,
  PublicationsData,
  Section,
  SkillsData,
} from './sections'

const trimBlankLines = (s: string) => s.replace(/\n{3,}/g, '\n\n').trim()

function aboutToMarkdown(data: AboutData & ContactData): string {
  return trimBlankLines(`# About

${data.about}

**Location:** ${data.location}
**Email:** ${data.email}`)
}

function experienceToMarkdown(data: ExperienceData): string {
  const entries = data.experiences.map((exp) => {
    const range = prettyRange(exp.startDate, exp.endDate ?? undefined)
    const meta = [range, exp.location].filter(Boolean).join(' · ')
    return `## ${exp.position} @ ${exp.company}
*${meta}*

${exp.description}`
  })
  return trimBlankLines(`# Experience\n\n${entries.join('\n\n')}`)
}

function skillsToMarkdown(data: SkillsData): string {
  const lines = data.skills.map((s) => `- **${s.title}** — ${s.yearsOfExperience}y`)
  return trimBlankLines(`# Skills\n\n${lines.join('\n')}`)
}

function educationToMarkdown(data: EducationData): string {
  const entries = data.educations.map((edu) => {
    const degreeLine = edu.degree ? `${edu.degree} in ${edu.areaOfStudy}` : edu.areaOfStudy
    const range = prettyRange(edu.startDate, edu.endDate ?? undefined)
    const body = edu.description ? `\n\n${edu.description}` : ''
    return `## ${edu.school}
*${degreeLine}* · ${range}${body}`
  })
  return trimBlankLines(`# Education\n\n${entries.join('\n\n')}`)
}

function projectsToMarkdown(data: ProjectsData): string {
  const owned = data.repositories.filter((r) => r.isOwned)
  const contributed = data.repositories.filter((r) => !r.isOwned)

  const formatRepo = (r: ProjectsData['repositories'][number]) => {
    const meta = [`⭐ ${r.stargazerCount.toLocaleString()}`, r.primaryLanguage]
      .filter(Boolean)
      .join(' · ')
    const desc = r.description ? `\n  ${r.description}` : ''
    return `- [${r.nameWithOwner}](${r.url}) — ${meta}${desc}`
  }

  const parts: string[] = ['# Projects']
  if (owned.length > 0) parts.push(`## My Projects\n\n${owned.map(formatRepo).join('\n')}`)
  if (contributed.length > 0)
    parts.push(`## Contributions\n\n${contributed.map(formatRepo).join('\n')}`)
  return trimBlankLines(parts.join('\n\n'))
}

function publicationsToMarkdown(data: PublicationsData): string {
  const lines = data.publications.map((p) => `- [${p.title}](${p.link}) — ${prettyDate(p.date)}`)
  return trimBlankLines(`# Publications\n\n${lines.join('\n')}`)
}

function conferencesToMarkdown(data: ConferencesData): string {
  const lines = data.conferences.map((c) => {
    const suffix = c.link ? ` · ${c.link}` : ''
    return `- **"${c.topic}"** at ${c.title} — ${prettyDate(c.date)}${suffix}`
  })
  return trimBlankLines(`# Conferences\n\n${lines.join('\n')}`)
}

function interviewsToMarkdown(data: InterviewsData): string {
  const lines = data.interviews.map((i) => {
    const date = prettyDate(i.date)
    return i.link ? `- [${i.title}](${i.link}) — ${date}` : `- ${i.title} — ${date}`
  })
  return trimBlankLines(`# Interviews\n\n${lines.join('\n')}`)
}

export function sectionToMarkdown(section: Section): string {
  switch (section.type) {
    case 'about':
      return aboutToMarkdown(section.data)
    case 'experience':
      return experienceToMarkdown(section.data)
    case 'skills':
      return skillsToMarkdown(section.data)
    case 'education':
      return educationToMarkdown(section.data)
    case 'projects':
      return projectsToMarkdown(section.data)
    case 'publications':
      return publicationsToMarkdown(section.data)
    case 'conferences':
      return conferencesToMarkdown(section.data)
    case 'interviews':
      return interviewsToMarkdown(section.data)
  }
}

const CV_SECTION_ORDER = [
  'about',
  'experience',
  'skills',
  'education',
  'publications',
  'conferences',
  'interviews',
] as const

export function buildResumeMarkdown(
  folders: FolderStructure[],
  fullName: string,
  headline: string
): string {
  const byType = new Map<string, Section>()
  for (const folder of folders) {
    for (const section of folder.sections) byType.set(section.type, section)
  }

  const sections = CV_SECTION_ORDER.map((type) => byType.get(type))
    .filter((s): s is Section => Boolean(s))
    .map((s) => sectionToMarkdown(s))

  return trimBlankLines(`# ${fullName}\n\n*${headline}*\n\n${sections.join('\n\n')}`)
}
