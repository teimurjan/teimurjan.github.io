import type { CvDocument, CvEntry, CvSection } from './types'

export type ParseResult = { ok: true; value: CvDocument } | { ok: false; error: string }

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const isString = (value: unknown): value is string => typeof value === 'string'

const isStringList = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every(isString)

const isEntry = (value: unknown): value is CvEntry =>
  isRecord(value) &&
  isString(value.title) &&
  isString(value.subtitle) &&
  isString(value.dates) &&
  isString(value.note) &&
  isStringList(value.bullets)

const isSection = (value: unknown): value is CvSection => {
  if (!isRecord(value) || !isString(value.title)) return false
  if (value.kind === 'entries') return Array.isArray(value.entries) && value.entries.every(isEntry)
  return (value.kind === 'bullets' || value.kind === 'lines') && isStringList(value.items)
}

export const parseCvDocument = (value: unknown): ParseResult => {
  if (!isRecord(value)) return { ok: false, error: 'CV JSON must be an object' }
  const { name, headline, contact, summary, sections } = value
  if (!isString(name) || !isString(headline) || !isString(summary) || !isStringList(contact)) {
    return { ok: false, error: 'CV JSON needs name, headline, summary and a contact list' }
  }
  if (!Array.isArray(sections) || !sections.every(isSection)) {
    return { ok: false, error: 'CV JSON has a malformed section' }
  }
  return { ok: true, value: { name, headline, contact, summary, sections } }
}
