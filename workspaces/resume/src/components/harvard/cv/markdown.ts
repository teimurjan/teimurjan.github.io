const MARK = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** The inline markdown wiki lines use, `**bold**` and `[label](url)`, as HTML. */
export const inlineHtml = (source: string): string => {
  let html = ''
  let cursor = 0
  for (const match of source.matchAll(MARK)) {
    const start = match.index ?? 0
    html += escapeHtml(source.slice(cursor, start))
    const [, strong, label, href] = match
    html +=
      strong !== undefined
        ? `<b>${inlineHtml(strong)}</b>`
        : `<a href="${escapeHtml(href ?? '')}">${escapeHtml(label ?? '')}</a>`
    cursor = start + match[0].length
  }
  return html + escapeHtml(source.slice(cursor))
}

export const listHtml = (items: string[]): string =>
  `<ul>${items.map((item) => `<li>${inlineHtml(item)}</li>`).join('')}</ul>`

export const paragraphsHtml = (items: string[]): string =>
  items.map((item) => `<p>${inlineHtml(item)}</p>`).join('')
