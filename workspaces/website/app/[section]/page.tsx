import { SectionDoc } from '@/components/ide/section-doc'
import { getAllSections, getSectionById, getSections } from '@/lib/get-sections'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface SectionPageProps {
  params: Promise<{ section: string }>
}

export async function generateStaticParams() {
  const sections = await getAllSections()
  return sections.filter((s) => s.id !== 'about').map((s) => ({ section: s.id }))
}

export async function generateMetadata({ params }: SectionPageProps): Promise<Metadata> {
  const { section: id } = await params
  const [section, { fullName }] = await Promise.all([getSectionById(id), getSections()])
  if (!section) return {}

  const title = `${section.title} — ${fullName}`
  return {
    title,
    openGraph: { title },
    twitter: { title },
    alternates: { canonical: `/${id}` },
  }
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { section: id } = await params
  const section = await getSectionById(id)
  if (!section || section.id === 'about') notFound()

  return <SectionDoc section={section} />
}
