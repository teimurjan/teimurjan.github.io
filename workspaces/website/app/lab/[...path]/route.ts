import { listLabPagePaths, readLabPage, renderLabPage } from '@/lib/lab'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'

interface LabPageRouteProps {
  params: Promise<{ path: string[] }>
}

export async function generateStaticParams() {
  const paths = await listLabPagePaths()
  return paths.map((path) => ({ path }))
}

// A route handler skips the root layout, so the page has no site shell.
export async function GET(_request: Request, { params }: LabPageRouteProps) {
  const { path } = await params
  const markdown = await readLabPage(path)
  if (markdown === null) notFound()

  return new Response(renderLabPage(markdown), {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
