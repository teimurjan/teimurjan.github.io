import type { InterviewsData } from '@/lib/sections'
import { prettyDate } from '@teimurjan/utils'
import { Mic } from 'lucide-react'
import { MediaCard } from './media-card'

interface InterviewsSectionProps {
  data: InterviewsData
}

export function InterviewsSection({ data }: InterviewsSectionProps) {
  if (data.interviews.length === 0) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Interviews</h1>
        <p className="text-muted-foreground">No interviews yet.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Interviews</h1>

      <div className="grid gap-4">
        {data.interviews.map((interview) => (
          <MediaCard
            key={interview.id}
            id={interview.id}
            title={interview.title}
            subtitle={prettyDate(interview.date)}
            imageUrl={interview.imageUrl}
            link={interview.link}
            videoEmbedUrl={interview.videoEmbed?.url ?? null}
            iframeOptions={interview.videoEmbed?.iframeOptions ?? null}
            fallbackIcon={Mic}
          />
        ))}
      </div>
    </div>
  )
}
