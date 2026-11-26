import { Fragment, type ReactNode } from 'react'

const MARK = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g

/** Renders the inline markdown wiki lines use: `**bold**` and `[label](url)`. */
const render = (text: string, keyPrefix: string): ReactNode[] => {
  const nodes: ReactNode[] = []
  let cursor = 0
  for (const match of text.matchAll(MARK)) {
    const start = match.index ?? 0
    const key = `${keyPrefix}-${start}`
    if (start > cursor)
      nodes.push(<Fragment key={`${key}-text`}>{text.slice(cursor, start)}</Fragment>)
    const [, strong, label, href] = match
    nodes.push(
      strong !== undefined ? (
        <b key={key}>{render(strong, key)}</b>
      ) : (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-rule underline-offset-[3px] transition-colors duration-150 hover:decoration-ink"
        >
          {label}
        </a>
      )
    )
    cursor = start + match[0].length
  }
  if (cursor < text.length)
    nodes.push(<Fragment key={`${keyPrefix}-end`}>{text.slice(cursor)}</Fragment>)
  return nodes
}

export function InlineMarkdown({ text }: { text: string }) {
  return <>{render(text, 'md')}</>
}
