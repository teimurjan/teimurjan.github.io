import { useEffect, useMemo, useRef, useState } from 'react'

const useElementVisibility = (
  element: HTMLElement | null,
  threshold?: number
) => {
  const appearedOnce = useRef(false)
  const [visible, setVisibility] = useState(false)

  if (visible) {
    appearedOnce.current = true
  }

  const observer = useMemo(
    () =>
      typeof window !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                if (entry.target === element) {
                  setVisibility(entry.isIntersecting)
                  break
                }
              }
            },
            { threshold }
          )
        : null,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useEffect(() => {
    if (!observer || !element) {
      return
    }

    observer.observe(element)

    return observer.disconnect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!element])

  return { visible, appearedOnce: appearedOnce.current }
}

export default useElementVisibility