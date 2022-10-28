import { useEffect, useMemo, useRef, useState } from 'react'
import useLazyInitialization from './use-lazy-initialization'

const useElementVisibility = (id: string, threshold?: number) => {
  const appearedOnce = useRef(false)
  const [visible, setVisibility] = useState(false)

  useEffect(() => {
    if (visible) {
      appearedOnce.current = true
    }
  }, [visible])

  const observer = useMemo(
    () =>
      typeof window !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                if (entry.target.id === id) {
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

  const { value: lazyObserver } = useLazyInitialization(observer, null)

  useEffect(() => {
    const element = document.getElementById(id)
    if (!lazyObserver || !element) {
      return
    }

    lazyObserver.observe(element)

    return lazyObserver.disconnect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lazyObserver])

  return { visible, appearedOnce: appearedOnce.current }
}

export default useElementVisibility
