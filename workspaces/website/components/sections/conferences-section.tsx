import { FadeIn } from '@/components/ui/fade-in'
import { MediaRow } from '@/components/ui/media-row'
import { ConfSketch } from '@/components/ui/sketch-icons'
import type { ConferencesData } from '@/lib/sections'
import { prettyDate } from '@teimurjan/utils'
import Image from 'next/image'

interface ConferencesSectionProps {
  data: ConferencesData
}

export function ConferencesSection({ data }: ConferencesSectionProps) {
  if (data.conferences.length === 0) {
    return (
      <FadeIn>
        <p>No conference talks yet.</p>
      </FadeIn>
    )
  }

  return (
    <FadeIn>
      {data.conferences.map((c) => {
        const title = `"${c.topic}"`
        const meta = `${c.title} — ${prettyDate(c.date)}`

        if (c.videoEmbed) {
          return (
            <MediaRow
              key={c.id}
              title={title}
              meta={meta}
              thumb={
                <iframe
                  src={c.videoEmbed.url}
                  title={c.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                  {...(c.videoEmbed.iframeOptions ?? {})}
                />
              }
            />
          )
        }

        const thumb = c.imageUrl ? (
          <Image
            src={c.imageUrl}
            alt={c.title}
            width={140}
            height={79}
            unoptimized
            className="w-full h-full object-cover"
          />
        ) : (
          <ConfSketch />
        )

        return (
          <MediaRow key={c.id} href={c.link ?? undefined} title={title} meta={meta} thumb={thumb} />
        )
      })}
    </FadeIn>
  )
}
