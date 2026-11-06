import { legalPageResponse, listLegalPagePaths, readLegalPage } from '@/lib/legal'

export const dynamic = 'force-static'

interface LegalPageRouteProps {
  params: Promise<{ path?: string[] }>
}

export async function generateStaticParams() {
  const paths = await listLegalPagePaths('privacy')
  return paths.map((path) => ({ path }))
}

export async function GET(_request: Request, { params }: LegalPageRouteProps) {
  const { path } = await params
  return legalPageResponse(await readLegalPage('privacy', path))
}
