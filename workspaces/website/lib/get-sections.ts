import gqlClient from '@/gql-client'
import { unstable_cache } from 'next/cache'
import { cache } from 'react'
import { generateAllSections } from './section-generator'
import type { Section } from './sections'

// Persisted in Next's Data Cache: fetched once across all route renders at build
// time, and reused across navigations/refreshes in `next dev` (no refetch per page).
const loadSections = unstable_cache(
  async () => {
    const githubToken = process.env.GQL_API_GITHUB_TOKEN
    if (!githubToken) {
      throw new Error('GQL_API_GITHUB_TOKEN is not defined')
    }

    return generateAllSections({
      gqlClient,
      githubToken,
      githubUsername: 'teimurjan',
    })
  },
  ['sections'],
  { revalidate: 3600, tags: ['sections'] }
)

// React cache() collapses the repeat calls within a single render to one lookup.
export const getSections = cache(loadSections)

export const getAllSections = async (): Promise<Section[]> => {
  const { folders } = await getSections()
  return folders.flatMap((folder) => folder.sections)
}

export const getSectionById = async (id: string): Promise<Section | undefined> => {
  const sections = await getAllSections()
  return sections.find((section) => section.id === id)
}
