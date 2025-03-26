import fs from 'fs'
import path from 'path'

import { getClient } from '@teimurjan/gql-client'

const index = async () => {
  const lines: string[] = []

  if (!process.env.HYGRAPH_URL) {
    throw new Error('HYGRAPH_URL is not defined')
  }

  const gqlClient = getClient(process.env.HYGRAPH_URL)
  const data = await gqlClient.ProfileReadme()

  lines.push(`### Hi there 👋\n`)
  lines.push(`${data.bios[0].about}\n`)

  lines.push(
    `At the time you're reading that, I've worked at the following companies:\n`,
  )
  lines.push('<table>')
  data.experiences.forEach((experience) => {
    lines.push(
      `<tr><td valign="center"><img width="16" src="${experience.logo.url}" />&nbsp; ${experience.company} <code>(${experience.location} ${experience.locationIcon})</code></td></tr>`,
    )
  })
  lines.push('</table>')

  lines.push('<br />')

  lines.push(
    `The knowledge I've got from these companies lets me contribute to the community:\n`,
  )

  lines.push(`|Publications ✏️|Conferences 🎙️|Interviews 📺|`)
  lines.push(`|-|-|-|`)

  const publications: string[] = []
  data.publications.reverse().forEach((publication) => {
    publications.push(`[${publication.title}](${publication.link})`)
  })

  const conferences: string[] = []
  data.conferences.reverse().forEach((conference) => {
    conferences.push(
      `[${conference.title} - ${conference.topic}](${
        conference.videoEmbed?.link || conference.link
      })`,
    )
  })

  const interviews: string[] = []
  data.interviews.reverse().forEach((interview) => {
    interviews.push(`[${interview.title}](${interview.videoEmbed?.link ?? ''})`)
  })

  const rowsCount = Math.max(
    publications.length,
    conferences.length,
    interviews.length,
  )
  for (let index = 0; index < rowsCount; index++) {
    lines.push(
      `|${[publications, conferences, interviews]
        .map((array) => {
          return array[index] ?? ''
        })
        .join('|')}|`,
    )
  }

  lines.push('\n')

  lines.push(
    `Despite the fact that I might be busy, I'm open to any offers/collaboartions and would be happy to reply.`,
  )

  fs.writeFileSync(path.resolve('./README.md'), lines.join('\n'))
}

index()
