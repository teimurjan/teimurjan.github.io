import { FadeIn } from '@/components/ui/fade-in'
import { MediaRow } from '@/components/ui/media-row'
import { InterviewSketch } from '@/components/ui/sketch-icons'
import type { InterviewsData } from '@/lib/sections'
import { prettyDate } from '@teimurjan/utils'
import Image from 'next/image'

interface InterviewsSectionProps {
  data: InterviewsData
}

export function InterviewsSection({ data }: InterviewsSectionProps) {
  if (data.interviews.length === 0) {
    return (
      <FadeIn>
        <p>No interviews yet.</p>
      </FadeIn>
    )
  }

  return (
    <FadeIn>
      {data.interviews.map((it) => {
        const meta = prettyDate(it.date)

        if (it.videoEmbed) {
          return (
            <MediaRow
              key={it.id}
              title={it.title}
              meta={meta}
              thumb={
                <iframe
                  src={it.videoEmbed.url}
                  title={it.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                  {...(it.videoEmbed.iframeOptions ?? {})}
                />
              }
            />
          )
        }

        const thumb = it.imageUrl ? (
          <Image
            src={it.imageUrl}
            alt={it.title}
            width={140}
            height={79}
            unoptimized
            className="w-full h-full object-cover"
          />
        ) : (
          <InterviewSketch />
        )

        return (
          <MediaRow
            key={it.id}
            href={it.link ?? undefined}
            title={it.title}
            meta={meta}
            thumb={thumb}
          />
        )
      })}
    </FadeIn>
  )
}
