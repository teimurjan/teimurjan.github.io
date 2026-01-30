import type { ConferencesData } from '@/lib/sections'
import { prettyDate } from '@teimurjan/utils'
import { Presentation } from 'lucide-react'
import { MediaCard } from './media-card'

interface ConferencesSectionProps {
  data: ConferencesData
}

export function ConferencesSection({ data }: ConferencesSectionProps) {
  if (data.conferences.length === 0) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Conferences</h1>
        <p className="text-muted-foreground">No conference talks yet.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Conferences</h1>

      <div className="grid gap-4">
        {data.conferences.map((conf) => (
          <MediaCard
            key={conf.id}
            id={conf.id}
            title={`"${conf.topic}"`}
            subtitle={`${conf.title} — ${prettyDate(conf.date)}`}
            imageUrl={conf.imageUrl}
            link={conf.link}
            videoEmbedUrl={conf.videoEmbed?.url ?? null}
            iframeOptions={conf.videoEmbed?.iframeOptions ?? null}
            fallbackIcon={Presentation}
          />
        ))}
      </div>
    </div>
  )
}
