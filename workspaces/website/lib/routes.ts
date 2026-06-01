export const BASE_URL = 'https://teimurjan.dev'

// The about section is the landing page; every other section gets its own slug.
export const hrefForSection = (id: string): string => (id === 'about' ? '/' : `/${id}`)

export const sectionIdFromPath = (pathname: string): string => {
  const slug = pathname.replace(/^\/+/, '').replace(/\/+$/, '')
  return slug === '' ? 'about' : slug
}
