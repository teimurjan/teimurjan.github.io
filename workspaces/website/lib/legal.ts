import { readFile, readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { marked } from 'marked'
import { notFound } from 'next/navigation'

export type LegalDoc = 'privacy' | 'terms'

const LEGAL_DIR = join(process.cwd(), 'content/legal')

const INDEX_TITLES: Record<LegalDoc, string> = {
  privacy: 'Privacy Policies',
  terms: 'Terms of Service',
}

// GitHub Pages serves /x from x.html and /x/ from x/index.html, but the dev server only accepts clean URLs.
const toStaticPath = (project?: string): string[] => {
  if (process.env.NODE_ENV === 'development') return project ? [project] : []
  return [`${project ?? 'index'}.html`]
}

const projectFromPath = (path: string[] = []): string | undefined => {
  const page = path[0]?.replace(/\.html$/, '')
  return page === 'index' ? undefined : page
}

const readDoc = (project: string, doc: LegalDoc): Promise<string | null> =>
  readFile(join(LEGAL_DIR, project, `${doc}.md`), 'utf8').catch(() => null)

const listProjects = async (doc: LegalDoc): Promise<string[]> => {
  const files = await readdir(LEGAL_DIR, { recursive: true })
  return files.filter((file) => file.endsWith(`/${doc}.md`)).map((file) => file.split('/')[0])
}

const titleOf = (markdown: string): string => markdown.match(/^# (.+)$/m)?.[1] ?? ''

const buildIndex = async (doc: LegalDoc): Promise<string> => {
  const projects = await listProjects(doc)
  const links = await Promise.all(
    projects.map(async (project) => {
      const markdown = await readDoc(project, doc)
      return `- [${titleOf(markdown ?? '')}](/${doc}/${project})`
    })
  )
  return `# ${INDEX_TITLES[doc]}\n\n${links.join('\n')}\n`
}

export const listLegalPagePaths = async (doc: LegalDoc): Promise<string[][]> => {
  const projects = await listProjects(doc)
  return [toStaticPath(), ...projects.map(toStaticPath)]
}

export const readLegalPage = (doc: LegalDoc, path?: string[]): Promise<string | null> => {
  const project = projectFromPath(path)
  return project ? readDoc(project, doc) : buildIndex(doc)
}

const renderLegalPage = (markdown: string): string => {
  const body = marked.parse(markdown, { async: false })
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${titleOf(markdown)}</title>
<link rel="icon" href="/logo.png">
</head>
<body>
${body}</body>
</html>
`
}

// A route handler skips the root layout, so the page has no site shell.
export const legalPageResponse = (markdown: string | null): Response => {
  if (markdown === null) notFound()

  return new Response(renderLegalPage(markdown), {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
