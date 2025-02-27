'use client'
import { Children, ReactNode, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import classNames from 'classnames'

interface CardCarouselProps {
  children: ReactNode
}

const CardCarousel = ({ children }: CardCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    if (!emblaApi) {
      return
    }

    const initScrollSnaps = () => setScrollSnaps(emblaApi.scrollSnapList())
    const initSelection = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    const handleScroll = () => setScrollProgress(emblaApi.scrollProgress())

    initScrollSnaps()
    initSelection()

    emblaApi
      .on('reInit', initScrollSnaps)
      .on('reInit', initSelection)
      .on('select', initSelection)
      .on('scroll', handleScroll)
  }, [emblaApi])

  return (
    <div className="embla overflow-hidden relative" ref={emblaRef}>
      <div className="embla__container flex">
        {Children.map(children, (child) => (
          <div className="embla__slide flex-grow-0 flex-shrink-0 basis-2/5 max-lg:basis-2/3 max-md:basis-full min-w-0">
            {child}
          </div>
        ))}
      </div>

      <div
        className={classNames(
          'max-md:hidden top-2 bottom-12 left-0 w-2 bg-gradient-to-r from-[rgba(0,0,0,0.25)] to-transparent absolute z-10 opacity-0 transition-opacity',
          scrollProgress > 0.03 && 'opacity-100',
        )}
      />
      <div
        className={classNames(
          'max-md:hidden top-2 bottom-12 right-0 w-2 bg-gradient-to-l from-[rgba(0,0,0,0.25)] to-transparent absolute z-10 opacity-0 transition-opacity',
          scrollProgress < 0.97 && 'opacity-100',
        )}
      />

      <div className="embla__controls">
        <div className="embla__dots flex items-center justify-center gap-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={classNames(
                'embla__dot w-4 h-4 rounded-full',
                index === selectedIndex
                  ? 'embla__dot--selected bg-geometry-dark'
                  : 'bg-geometry-light',
              )}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardCarousel
