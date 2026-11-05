import { readFile, readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { marked } from 'marked'

const LAB_DIR = join(process.cwd(), 'content/lab')

// GitHub Pages serves /lab/x/privacy from privacy.html, but the dev server only accepts clean URLs.
const toUrlPath = (file: string): string[] =>
  process.env.NODE_ENV === 'development'
    ? file.replace(/(\/index)?\.md$/, '').split('/')
    : file.replace(/\.md$/, '.html').split('/')

export const listLabPagePaths = async (): Promise<string[][]> => {
  const files = await readdir(LAB_DIR, { recursive: true })
  return files.filter((file) => file.endsWith('.md')).map(toUrlPath)
}

export const readLabPage = ([project, page = 'index']: string[]): Promise<string | null> =>
  readFile(join(LAB_DIR, project, `${page.replace(/\.html$/, '')}.md`), 'utf8').catch(() => null)

export const renderLabPage = (markdown: string): string => {
  const title = markdown.match(/^# (.+)$/m)?.[1] ?? ''
  const body = marked.parse(markdown, { async: false })
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<link rel="icon" href="/logo.png">
</head>
<body>
${body}</body>
</html>
`
}
