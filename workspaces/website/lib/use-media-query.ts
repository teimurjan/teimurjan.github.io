'use client'

import { useCallback, useSyncExternalStore } from 'react'

const matchesOnServer = () => false

export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mediaQueryList = window.matchMedia(query)
      mediaQueryList.addEventListener('change', onChange)
      return () => mediaQueryList.removeEventListener('change', onChange)
    },
    [query]
  )
  const matchesOnClient = useCallback(() => window.matchMedia(query).matches, [query])

  return useSyncExternalStore(subscribe, matchesOnClient, matchesOnServer)
}
