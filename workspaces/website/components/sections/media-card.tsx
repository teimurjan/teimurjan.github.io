'use client'

import { cn } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Image from 'next/image'

interface MediaCardProps {
  id: string
  title: string
  subtitle?: string
  imageUrl: string | null
  link: string | null
  videoEmbedUrl?: string | null
  iframeOptions?: {
    autoplay?: boolean
    controls?: boolean
    loop?: boolean
    muted?: boolean
    playsinline?: boolean
    preload?: 'auto' | 'metadata' | 'none'
  } | null
  fallbackIcon: LucideIcon
}


export function MediaCard({
  id,
  title,
  subtitle,
  imageUrl,
  link,
  videoEmbedUrl,
  iframeOptions,
  fallbackIcon: FallbackIcon,
}: MediaCardProps) {

  const hasVideo = !!videoEmbedUrl
  const hasLink = !!link || hasVideo


  const mediaContent = (
    <>
      {videoEmbedUrl ? (
        <div className="relative w-full sm:w-48 h-32 shrink-0 bg-black overflow-hidden rounded-lg">
          <iframe
            src={videoEmbedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            {...iframeOptions}
          />
        </div>
      ) : imageUrl ? (
        <div className="relative w-full sm:w-48 h-32 shrink-0 bg-secondary overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 192px"
          />
        </div>
      ) : (
        <div className="relative w-full sm:w-48 h-32 shrink-0 bg-secondary flex items-center justify-center overflow-hidden rounded-lg">
          <FallbackIcon className="w-8 h-8 text-muted-foreground" />
        </div>
      )}

      <div className="mt-2 sm:ml-4 flex flex-col min-w-0">
        <h2 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
          <span className="line-clamp-2">{title}</span>
          {hasLink && (
            <ExternalLink className="w-3 h-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </h2>
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      </div>
    </>
  )

  const className = cn(
    'group overflow-hidden rounded-lg bg-secondary/30 flex flex-col sm:flex-row gap-0',
    hasLink && 'hover:bg-secondary/50 transition-colors'
  )

  if (link) {
    return (
      <a
        key={id}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {mediaContent}
      </a>
    )
  }

  if (hasVideo) {
    return (
      <button
        key={id}
        type="button"
        className={cn(className, 'text-left w-full')}
      >
        {mediaContent}
      </button>
    )
  }

  return (
    <div key={id} className={className}>
      {mediaContent}
    </div>
  )
}
