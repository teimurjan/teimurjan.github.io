import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import path from 'node:path'
import type { SiteData } from './types'

const COLLECTIONS = [
  'educations',
  'experiences',
  'skills',
  'products',
  'publications',
  'conferences',
  'interviews',
] as const

/** `LLM_WIKI_DIR`, or the `llm-wiki` checkout beside this repo when run from a workspace. */
const wikiDir = () => process.env.LLM_WIKI_DIR ?? path.resolve(process.cwd(), '../../../llm-wiki')

const parseSiteData = (value: unknown): SiteData => {
  if (typeof value !== 'object' || value === null) {
    throw new Error('site-data: the website view did not print an object')
  }
  const record = value as Record<string, unknown>
  if (typeof record.bio !== 'object' || record.bio === null) {
    throw new Error('site-data: the website view has no `bio`')
  }
  const missing = COLLECTIONS.filter((name) => !Array.isArray(record[name]))
  if (missing.length > 0) {
    throw new Error(`site-data: the website view has no list for ${missing.join(', ')}`)
  }
  return value as SiteData
}

let cached: SiteData | undefined

/** Runs `wiki view website --json` in the private llm-wiki at build time. */
export const loadSiteData = (): SiteData => {
  if (cached) return cached

  const dir = wikiDir()
  if (!existsSync(dir)) {
    throw new Error(`site-data: no llm-wiki at ${dir}. Clone it there or set LLM_WIKI_DIR.`)
  }

  const output = execFileSync('bun', ['run', '--silent', 'wiki', 'view', 'website', '--json'], {
    cwd: dir,
    encoding: 'utf8',
    maxBuffer: 16 * 1024 * 1024,
  })
  cached = parseSiteData(JSON.parse(output))
  return cached
}
