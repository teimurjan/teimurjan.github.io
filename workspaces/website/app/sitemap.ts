import { getAllSections } from '@/lib/get-sections'
import { BASE_URL, hrefForSection } from '@/lib/routes'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sections = await getAllSections()

  return sections.map((section) => {
    const path = hrefForSection(section.id)
    return {
      url: `${BASE_URL}${path}`,
      changeFrequency: 'monthly',
      priority: path === '/' ? 1 : 0.8,
    }
  })
}
