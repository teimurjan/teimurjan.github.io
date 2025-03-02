'use client'
import { useEffect, useState } from 'react'
import useIsClient from './use-is-client'

const useWindowScroll = () => {
  const isClient = useIsClient()

  const shouldUpdate = typeof window !== 'undefined' && isClient

  const [scrollTop, setScrollTop] = useState(shouldUpdate ? window.scrollY : 0)

  useEffect(() => {
    if (shouldUpdate) {
      const listener = () => {
        setScrollTop(window.scrollY)
      }
      window.addEventListener('scroll', listener)

      return () => window.removeEventListener('scroll', listener)
    }
  }, [shouldUpdate])

  return scrollTop
}

export default useWindowScroll
