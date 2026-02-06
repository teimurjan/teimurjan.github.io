'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'

interface SkeletonImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function SkeletonImage({ src, alt, width, height, className }: SkeletonImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative" style={{ width, height }}>
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-secondary/50 rounded animate-pulse"
          style={{ width, height }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn('transition-opacity duration-200', isLoaded ? 'opacity-100' : 'opacity-0', className)}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}

interface FillSkeletonImageProps {
  src: string
  alt: string
  sizes?: string
  className?: string
}

export function FillSkeletonImage({ src, alt, sizes, className }: FillSkeletonImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded && <div className="absolute inset-0 bg-secondary/50 animate-pulse" />}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={cn(
          'object-cover transition-opacity duration-200',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  )
}
