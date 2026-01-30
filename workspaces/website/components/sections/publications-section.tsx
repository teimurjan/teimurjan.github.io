import type { PublicationsData } from '@/lib/sections'
import { prettyDate } from '@teimurjan/utils'
import { FileText } from 'lucide-react'
import { MediaCard } from './media-card'

interface PublicationsSectionProps {
  data: PublicationsData
}

export function PublicationsSection({ data }: PublicationsSectionProps) {
  if (data.publications.length === 0) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Publications</h1>
        <p className="text-muted-foreground">No publications yet.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Publications</h1>

      <div className="grid gap-4">
        {data.publications.map((pub) => (
          <MediaCard
            key={pub.id}
            id={pub.id}
            title={pub.title}
            subtitle={prettyDate(pub.date)}
            imageUrl={pub.imageUrl}
            link={pub.link}
            fallbackIcon={FileText}
          />
        ))}
      </div>
    </div>
  )
}
