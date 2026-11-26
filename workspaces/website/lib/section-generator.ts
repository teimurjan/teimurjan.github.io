import opengraphs from '@/__generated__/opengraphs'
import {
  type ContributedRepository,
  getRepositoriesContributedTo,
  getUserCreatedAt,
} from '@teimurjan/github-client'
import type {
  Bio,
  Conference,
  Education,
  Experience,
  Interview,
  Product,
  Publication,
  SiteData,
  Skill,
} from '@teimurjan/site-data'
import { dateSorter } from '@teimurjan/utils'
import { sectionToMarkdown } from './section-markdown'
import type { FolderStructure, Section, SiteContent } from './sections'

const bulletText = (bullets: string[]): string => bullets.map((bullet) => `- ${bullet}`).join('\n')

type SectionDraft = Omit<Section, 'markdown'>

function withMarkdown(draft: SectionDraft): Section {
  const section = { ...draft, markdown: '' } as Section
  section.markdown = sectionToMarkdown(section)
  return section
}

function generateAbout(bio: Bio): Section {
  return withMarkdown({
    type: 'about',
    id: 'about',
    filename: 'about.md',
    title: 'About',
    folder: 'personal',
    data: {
      fullName: bio.fullName,
      headline: bio.headline,
      about: bio.about,
      email: bio.email,
      location: bio.location,
    },
  })
}

function generateExperience(experiences: Experience[]): Section {
  return withMarkdown({
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
        description: bulletText(exp.bullets),
        bullets: exp.bullets,
        logoUrl: exp.logo,
      })),
    },
  })
}

function generateSkills(skills: Skill[]): Section {
  const maxYears = Math.max(...skills.map((s) => s.yearsOfExperience))

  return withMarkdown({
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
        logoUrl: skill.logo,
      })),
      maxYears,
    },
  })
}

function generateEducation(educations: Education[]): Section {
  return withMarkdown({
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
        description: edu.bullets.length > 0 ? bulletText(edu.bullets) : null,
        bullets: edu.bullets,
      })),
    },
  })
}

function generateProducts(products: Product[]): Section {
  return withMarkdown({
    type: 'products',
    id: 'products',
    filename: 'products.md',
    title: 'Products',
    folder: 'contribution',
    data: {
      products: products.map((product) => ({
        id: product.id,
        name: product.name,
        link: product.link || null,
        description: product.description,
        logoUrl: product.logo,
      })),
    },
  })
}

function generateProjects(repositories: ContributedRepository[], username: string): Section {
  return withMarkdown({
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
  })
}

function generatePublications(publications: Publication[]): Section {
  const sorted = [...publications].sort((a, b) => dateSorter(a.date, b.date))

  return withMarkdown({
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
  })
}

function generateConferences(conferences: Conference[]): Section {
  const sorted = [...conferences].sort((a, b) => dateSorter(a.date, b.date))

  return withMarkdown({
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
        imageUrl: conf.image,
      })),
    },
  })
}

function generateInterviews(interviews: Interview[]): Section {
  const sorted = [...interviews].sort((a, b) => dateSorter(a.date, b.date))

  return withMarkdown({
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
        imageUrl: interview.image,
      })),
    },
  })
}

interface GenerateAllSectionsParams {
  siteData: SiteData
  githubToken: string
  githubUsername: string
  minStars?: number
}

export async function generateAllSections({
  siteData,
  githubToken,
  githubUsername,
  minStars = 50,
}: GenerateAllSectionsParams): Promise<SiteContent> {
  const { bio } = siteData

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
        generateExperience(siteData.experiences),
        generateSkills(siteData.skills),
        generateEducation(siteData.educations),
      ],
    },
    {
      name: 'contribution',
      sections: [
        generateProducts(siteData.products),
        generateProjects(filteredRepos, githubUsername),
        generatePublications(siteData.publications),
        generateConferences(siteData.conferences),
        generateInterviews(siteData.interviews),
      ],
    },
  ]

  return { folders, fullName: bio.fullName, headline: bio.headline }
}
