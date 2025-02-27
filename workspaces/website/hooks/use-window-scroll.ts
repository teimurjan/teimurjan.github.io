'use client'
import { useEffect, useState } from 'react'

const useWindowScroll = () => {
  const [scrollTop, setScrollTop] = useState(
    typeof window === 'undefined' ? 0 : window.scrollY,
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const listener = () => {
        setScrollTop(window.scrollY)
      }
      window.addEventListener('scroll', listener)

      return () => window.removeEventListener('scroll', listener)
    }
  }, [])

  return scrollTop
}

export default useWindowScroll
