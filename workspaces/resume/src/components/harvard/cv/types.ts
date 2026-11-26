export interface CvEntry {
  title: string
  subtitle: string
  dates: string
  note: string
  bullets: string[]
}

export type CvSection =
  | { title: string; kind: 'entries'; entries: CvEntry[] }
  | { title: string; kind: 'bullets' | 'lines'; items: string[] }

export interface CvDocument {
  name: string
  headline: string
  contact: string[]
  summary: string
  sections: CvSection[]
}
