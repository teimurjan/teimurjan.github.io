import { useEffect, useState } from 'react'

const useMedia = <T>(queries: string[], values: T[], defaultValue: T) => {
  const mediaQueryLists = queries.map(q =>
    typeof window === 'undefined' ? undefined : window.matchMedia(q)
  )
  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => mql?.matches)
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue
  }

  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    const handler = () => {
      setValue(getValue)
    }

    handler()
    mediaQueryLists.forEach(mql => mql?.addEventListener('change', handler))

    return () =>
      mediaQueryLists.forEach(mql =>
        mql?.removeEventListener('change', handler)
      )
  }, [])

  return value
}

export default useMedia
