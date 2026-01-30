import opengraphs from '@/__generated__/opengraphs'
import {
  type ContributedRepository,
  getRepositoriesContributedTo,
  getUserCreatedAt,
} from '@teimurjan/github-client'
import type {
  BioQuery,
  EducationQuery,
  ExperienceHistoryQuery,
  MediaQuery,
  SkillsQuery,
} from '@teimurjan/gql-client'
import type { Sdk } from '@teimurjan/gql-client'
import { dateSorter } from '@teimurjan/utils'
import type { FolderStructure, Section } from './sections'

function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/li>\s*<li>/gi, '\n- ')
    .replace(/<li>/gi, '- ')
    .replace(/<\/li>/gi, '')
    .replace(/<ul>/gi, '\n')
    .replace(/<\/ul>/gi, '\n')
    .replace(/<ol>/gi, '\n')
    .replace(/<\/ol>/gi, '\n')
    .replace(/<p>/gi, '')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<strong>/gi, '')
    .replace(/<\/strong>/gi, '')
    .replace(/<b>/gi, '')
    .replace(/<\/b>/gi, '')
    .replace(/<em>/gi, '')
    .replace(/<\/em>/gi, '')
    .replace(/<i>/gi, '')
    .replace(/<\/i>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function generateAbout(bio: BioQuery['bios'][0]): Section {
  return {
    type: 'about',
    id: 'about',
    filename: 'about.md',
    title: 'About',
    folder: 'personal',
    data: {
      about: bio.about,
      email: bio.email,
      location: bio.location,
    },
  }
}

function generateExperience(experiences: ExperienceHistoryQuery['experiences']): Section {
  return {
    type: 'experience',
    id: 'experience',
    filename: 'experience.md',
    title: 'Experience',
    folder: 'career',
    data: {
      experiences: experiences.map((exp) => ({
        id: exp.id,
        company: exp.company,
        position: exp.position,
        location: exp.location ?? null,
        startDate: exp.startDate,
        endDate: exp.endDate ?? null,
        description: stripHtml(exp.description.html),
        logoUrl: exp.logo.url,
      })),
    },
  }
}

function generateSkills(skills: SkillsQuery['skills']): Section {
  const maxYears = Math.max(...skills.map((s) => s.yearsOfExperience))

  return {
    type: 'skills',
    id: 'skills',
    filename: 'skills.md',
    title: 'Skills',
    folder: 'career',
    data: {
      skills: skills.map((skill) => ({
        id: skill.id,
        title: skill.title,
        yearsOfExperience: skill.yearsOfExperience,
        logoUrl: skill.logo.url,
      })),
      maxYears,
    },
  }
}

function generateEducation(educations: EducationQuery['educations']): Section {
  return {
    type: 'education',
    id: 'education',
    filename: 'education.md',
    title: 'Education',
    folder: 'career',
    data: {
      educations: educations.map((edu) => ({
        id: edu.id,
        school: edu.school,
        degree: edu.degree ?? null,
        areaOfStudy: edu.areaOfStudy,
        startDate: edu.startDate,
        endDate: edu.endDate ?? null,
        description: edu.description?.html ? stripHtml(edu.description.html) : null,
      })),
    },
  }
}

function generateProjects(repositories: ContributedRepository[], username: string): Section {
  return {
    type: 'projects',
    id: 'projects',
    filename: 'projects.md',
    title: 'Projects',
    folder: 'contribution',
    data: {
      repositories: repositories.map((repo) => ({
        id: repo.id,
        nameWithOwner: repo.nameWithOwner,
        description: repo.description,
        url: repo.url,
        stargazerCount: repo.stargazerCount,
        primaryLanguage: repo.primaryLanguage?.name ?? null,
        ownerAvatarUrl: repo.owner.avatarUrl,
        isOwned: repo.owner.login.toLowerCase() === username.toLowerCase(),
      })),
    },
  }
}

function generatePublications(publications: MediaQuery['publications']): Section {
  const sorted = [...publications].sort((a, b) => dateSorter(a.date, b.date))

  return {
    type: 'publications',
    id: 'publications',
    filename: 'publications.md',
    title: 'Publications',
    folder: 'contribution',
    data: {
      publications: sorted.map((pub) => {
        const og = opengraphs[pub.link]
        return {
          id: pub.id,
          title: pub.title,
          link: pub.link,
          date: pub.date,
          imageUrl: og?.ogImage ?? null,
        }
      }),
    },
  }
}

function generateConferences(conferences: MediaQuery['conferences']): Section {
  const sorted = [...conferences].sort((a, b) => dateSorter(a.date, b.date))

  return {
    type: 'conferences',
    id: 'conferences',
    filename: 'conferences.md',
    title: 'Conferences',
    folder: 'contribution',
    data: {
      conferences: sorted.map((conf) => ({
        id: conf.id,
        title: conf.title,
        topic: conf.topic,
        link: conf.link || null,
        videoEmbed: conf.videoEmbed
          ? {
              url: conf.videoEmbed.link,
              iframeOptions: conf.videoEmbed.iframeOptions ?? null,
            }
          : null,
        date: conf.date,
        imageUrl: conf.image?.url ?? null,
      })),
    },
  }
}

function generateInterviews(interviews: MediaQuery['interviews']): Section {
  const sorted = [...interviews].sort((a, b) => dateSorter(a.date, b.date))

  return {
    type: 'interviews',
    id: 'interviews',
    filename: 'interviews.md',
    title: 'Interviews',
    folder: 'contribution',
    data: {
      interviews: sorted.map((interview) => ({
        id: interview.id,
        title: interview.title,
        link: interview.link || null,
        videoEmbed: interview.videoEmbed
          ? {
              url: interview.videoEmbed.link,
              iframeOptions: interview.videoEmbed.iframeOptions ?? null,
            }
          : null,
        date: interview.date,
        imageUrl: interview.image?.url ?? null,
      })),
    },
  }
}

interface GenerateAllSectionsParams {
  gqlClient: Sdk
  githubToken: string
  githubUsername: string
  minStars?: number
}

export async function generateAllSections({
  gqlClient,
  githubToken,
  githubUsername,
  minStars = 50,
}: GenerateAllSectionsParams): Promise<{
  folders: FolderStructure[]
  fullName: string
  headline: string
}> {
  const [bioData, educationData, experienceData, skillsData, mediaData] = await Promise.all([
    gqlClient.Bio(),
    gqlClient.Education(),
    gqlClient.ExperienceHistory(),
    gqlClient.Skills(),
    gqlClient.Media(),
  ])

  const bio = bioData.bios[0]

  const now = new Date()
  now.setHours(0, 0, 0, 0)

  const userCreatedAt = await getUserCreatedAt(githubUsername, {
    auth: githubToken,
  })

  const popularRepos = await getRepositoriesContributedTo(
    { login: githubUsername, from: new Date(userCreatedAt), to: now },
    { auth: githubToken }
  )

  const filteredRepos = popularRepos.filter((repo) => repo.stargazerCount >= minStars)

  const folders: FolderStructure[] = [
    {
      name: 'personal',
      sections: [generateAbout(bio)],
    },
    {
      name: 'career',
      sections: [
        generateExperience(experienceData.experiences),
        generateSkills(skillsData.skills),
        generateEducation(educationData.educations),
      ],
    },
    {
      name: 'contribution',
      sections: [
        generateProjects(filteredRepos, githubUsername),
        generatePublications(mediaData.publications),
        generateConferences(mediaData.conferences),
        generateInterviews(mediaData.interviews),
      ],
    },
  ]

  return { folders, fullName: bio.fullName, headline: bio.headline }
}
