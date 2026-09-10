import { prettyDate, prettyRange } from '@teimurjan/utils'
import { PROFILE_LINKS, RESUME_PATH } from './links'
import { BASE_URL, hrefForSection } from './routes'
import type { Section, SiteContent } from './sections'

export const LLMS_TXT_PATH = '/llms.txt'
export const LLMS_FULL_TXT_PATH = '/llms-full.txt'
export const markdownHrefForSection = (id: string) => `/llms/${id}.md`

const absolute = (path: string) => `${BASE_URL}${path}`

const titleCase = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

const joinLines = (lines: string[]) =>
  `${lines
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()}\n`

// A one-line hint of what a page holds, so an agent can pick the pages it needs
// instead of pulling the whole site.
function summarize(section: Section): string {
  switch (section.type) {
    case 'about':
      return 'Bio, current focus, location and contact details'
    case 'experience': {
      const { experiences } = section.data
      const [latest] = experiences
      if (!latest) return 'Work history'
      const range = prettyRange(latest.startDate, latest.endDate ?? undefined)
      return `${experiences.length} roles, most recently ${latest.position} at ${latest.company} (${range})`
    }
    case 'skills': {
      const { skills, maxYears } = section.data
      const top = skills.slice(0, 3).map((skill) => skill.title)
      return `${skills.length} technologies with years of experience, up to ${maxYears}y — led by ${top.join(', ')}`
    }
    case 'education': {
      const { educations } = section.data
      const schools = educations.map((education) => education.school)
      return schools.length > 0 ? `Degrees from ${schools.join(', ')}` : 'Education history'
    }
    case 'projects': {
      const { repositories } = section.data
      const stars = repositories.reduce((total, repo) => total + repo.stargazerCount, 0)
      return `${repositories.length} open-source repositories owned or contributed to, ${stars.toLocaleString()} stars combined`
    }
    case 'publications': {
      const { publications } = section.data
      const [latest] = publications
      if (!latest) return 'Written articles'
      return `${publications.length} articles, latest "${latest.title}" (${prettyDate(latest.date)})`
    }
    case 'conferences': {
      const { conferences } = section.data
      const [latest] = conferences
      if (!latest) return 'Conference talks'
      return `${conferences.length} talks, latest "${latest.topic}" at ${latest.title} (${prettyDate(latest.date)})`
    }
    case 'interviews': {
      const { interviews } = section.data
      const [latest] = interviews
      if (!latest) return 'Interviews and podcasts'
      return `${interviews.length} interviews and podcasts, latest "${latest.title}" (${prettyDate(latest.date)})`
    }
  }
}

const findAbout = (sections: Section[]) =>
  sections.find((section) => section.type === 'about')?.data

/** Index file following the llms.txt convention: https://llmstxt.org */
export function buildLlmsTxt({ folders, fullName, headline }: SiteContent): string {
  const about = findAbout(folders.flatMap((folder) => folder.sections))

  const contacts = about ? [`- Location: ${about.location}`, `- Email: ${about.email}`] : []
  const profiles = Object.values(PROFILE_LINKS).map((link) => `- ${link.label}: ${link.url}`)

  const pages = folders.map((folder) => {
    const entries = folder.sections.map(
      (section) =>
        `- [${section.title}](${absolute(markdownHrefForSection(section.id))}): ${summarize(section)}`
    )
    return `## ${titleCase(folder.name)}\n\n${entries.join('\n')}`
  })

  return joinLines([
    `# ${fullName}`,
    '',
    `> ${headline}`,
    '',
    about?.about ?? '',
    '',
    ...contacts,
    ...profiles,
    '',
    `Every page below is a Markdown mirror of a page on ${BASE_URL} — the HTML version of \`/llms/<page>.md\` lives at \`/<page>\` (\`about\` is the home page).`,
    '',
    ...pages.map((page) => `${page}\n`),
    '## Optional',
    '',
    `- [Everything in one file](${absolute(LLMS_FULL_TXT_PATH)}): every page above concatenated`,
    `- [Résumé](${absolute(RESUME_PATH)}): the same career history as a PDF`,
    `- [Sitemap](${absolute('/sitemap.xml')}): the HTML pages`,
  ])
}

/** Every page's Markdown in one file, for agents that prefer a single fetch. */
export function buildLlmsFullTxt({ folders, fullName, headline }: SiteContent): string {
  const sections = folders.flatMap((folder) => folder.sections)

  const documents = sections.map((section) =>
    [`Source: ${absolute(hrefForSection(section.id))}`, '', section.markdown].join('\n')
  )

  return joinLines([
    `# ${fullName}`,
    '',
    `> ${headline}`,
    '',
    `Full content of ${BASE_URL}, one document per page.`,
    '',
    ...documents.map((document) => `---\n\n${document}\n`),
  ])
}

/** `<link rel="alternate">` targets that point crawlers at the Markdown mirrors. */
export const llmsAlternateTypes = (sectionId: string) => ({
  'text/plain': LLMS_TXT_PATH,
  'text/markdown': markdownHrefForSection(sectionId),
})
