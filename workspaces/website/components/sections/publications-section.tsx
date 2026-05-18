import { FadeIn } from '@/components/ui/fade-in'
import { MediaRow } from '@/components/ui/media-row'
import { PubScribbleSketch } from '@/components/ui/sketch-icons'
import type { PublicationsData } from '@/lib/sections'
import { prettyDate } from '@teimurjan/utils'
import Image from 'next/image'

interface PublicationsSectionProps {
  data: PublicationsData
}

export function PublicationsSection({ data }: PublicationsSectionProps) {
  if (data.publications.length === 0) {
    return (
      <FadeIn>
        <p>No publications yet.</p>
      </FadeIn>
    )
  }

  return (
    <FadeIn>
      {data.publications.map((pub) => (
        <MediaRow
          key={pub.id}
          href={pub.link}
          title={pub.title}
          meta={prettyDate(pub.date)}
          thumb={
            pub.imageUrl ? (
              <Image
                src={pub.imageUrl}
                alt={pub.title}
                width={140}
                height={79}
                unoptimized
                className="w-full h-full object-cover"
              />
            ) : (
              <PubScribbleSketch />
            )
          }
        />
      ))}
    </FadeIn>
  )
}
