import { SectionDoc } from '@/components/ide/section-doc'
import { getSectionById } from '@/lib/get-sections'
import { notFound } from 'next/navigation'

export default async function Page() {
  const section = await getSectionById('about')
  if (!section) notFound()

  return <SectionDoc section={section} />
}
