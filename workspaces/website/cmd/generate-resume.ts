import path from 'node:path'
import { HarvardResume, type ResumeData, listHtml, renderToFile } from '@teimurjan/resume'
import { type SiteData, loadSiteData } from '@teimurjan/site-data'
import { type ReactElement, createElement } from 'react'

const toResumeData = (site: SiteData): ResumeData => ({
  bios: [site.bio],
  educations: site.educations,
  skills: site.skills,
  experiences: site.experiences.map((experience) => ({
    ...experience,
    description: { html: listHtml(experience.bullets) },
  })),
  publications: site.publications,
  conferences: site.conferences,
})

const main = async () => {
  console.log('generate-resume: generating resume...')

  console.log('generate-resume: getting resume data...')
  const data = toResumeData(loadSiteData())

  const outputPath = path.resolve(__dirname, '../public/resume.pdf')

  console.log('generate-resume: rendering to file...')
  await renderToFile(createElement(HarvardResume, data) as ReactElement, outputPath)

  console.log('generate-resume: generated successfully')
}

main()
