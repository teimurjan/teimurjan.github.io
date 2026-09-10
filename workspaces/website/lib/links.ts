export interface ProfileLink {
  label: string
  url: string
}

export const PROFILE_LINKS = {
  github: { label: 'GitHub', url: 'https://github.com/teimurjan' },
  linkedin: { label: 'LinkedIn', url: 'https://www.linkedin.com/in/teimur-gasanov' },
  toptal: { label: 'Toptal', url: 'https://www.toptal.com/resume/teimur-gasanov' },
  mentorship: {
    label: 'Mentorship on ADPList',
    url: 'https://adplist.org/mentors/teimur-gasanov?session=70480-mentorship-session',
  },
} as const satisfies Record<string, ProfileLink>

export const RESUME_PATH = '/resume.pdf'
