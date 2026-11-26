import type { Contact } from '../header/Header'

const LINK = /^\[([^\]]+)\]\(([^)\s]+)\)$/

/** Contact lines are `·`-separated, each part plain text or one markdown link. */
export const parseContacts = (lines: string[]): Contact[] =>
  lines
    .flatMap((line) => line.split(' · '))
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const link = part.match(LINK)
      return link ? { label: link[1] ?? part, href: link[2] } : { label: part }
    })
