import type { Section } from '@/lib/sections'
import { AboutSection } from './about-section'
import { ConferencesSection } from './conferences-section'
import { EducationSection } from './education-section'
import { ExperienceSection } from './experience-section'
import { InterviewsSection } from './interviews-section'
import { ProjectsSection } from './projects-section'
import { PublicationsSection } from './publications-section'
import { SkillsSection } from './skills-section'

interface SectionRendererProps {
  section: Section
}

export function SectionRenderer({ section }: SectionRendererProps) {
  switch (section.type) {
    case 'about':
      return <AboutSection data={section.data} />
    case 'experience':
      return <ExperienceSection data={section.data} />
    case 'skills':
      return <SkillsSection data={section.data} />
    case 'education':
      return <EducationSection data={section.data} />
    case 'projects':
      return <ProjectsSection data={section.data} />
    case 'publications':
      return <PublicationsSection data={section.data} />
    case 'conferences':
      return <ConferencesSection data={section.data} />
    case 'interviews':
      return <InterviewsSection data={section.data} />
    default: {
      const _exhaustive: never = section
      return null
    }
  }
}
