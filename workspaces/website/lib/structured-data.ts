import { PROFILE_LINKS } from './links'
import { BASE_URL } from './routes'
import type { SiteContent } from './sections'

const stripEmphasis = (text: string) => text.replace(/\*\*(.+?)\*\*/g, '$1')

/** schema.org Person node — the machine-readable summary of who the site is about. */
export function buildPersonJsonLd({ folders, fullName, headline }: SiteContent) {
  const sections = folders.flatMap((folder) => folder.sections)
  const about = sections.find((section) => section.type === 'about')?.data
  const experiences = sections.find((section) => section.type === 'experience')?.data.experiences
  const skills = sections.find((section) => section.type === 'skills')?.data.skills
  const educations = sections.find((section) => section.type === 'education')?.data.educations

  const currentRole = experiences?.find((experience) => !experience.endDate)

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: fullName,
    url: BASE_URL,
    image: `${BASE_URL}/logo.png`,
    jobTitle: headline,
    description: about ? stripEmphasis(about.about) : undefined,
    email: about ? `mailto:${about.email}` : undefined,
    address: about ? { '@type': 'PostalAddress', addressLocality: about.location } : undefined,
    sameAs: Object.values(PROFILE_LINKS).map((link) => link.url),
    knowsAbout: skills?.map((skill) => skill.title),
    worksFor: currentRole ? { '@type': 'Organization', name: currentRole.company } : undefined,
    alumniOf: educations?.map((education) => ({
      '@type': 'EducationalOrganization',
      name: education.school,
    })),
  }
}
