import { getAllSections, getSectionById } from '@/lib/get-sections'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'

interface MarkdownRouteProps {
  params: Promise<{ file: string }>
}

export async function generateStaticParams() {
  const sections = await getAllSections()
  return sections.map((section) => ({ file: `${section.id}.md` }))
}

export async function GET(_request: Request, { params }: MarkdownRouteProps) {
  const { file } = await params
  const section = await getSectionById(file.replace(/\.md$/, ''))
  if (!section) notFound()

  return new Response(section.markdown, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
