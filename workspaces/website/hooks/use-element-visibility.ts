'use client'
import { useEffect, useMemo, useRef, useState } from 'react'

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
      new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            console.log(entry.target.id, entry.isIntersecting, id)
            if (entry.target.id === id) {
              setVisibility(entry.isIntersecting)
            }
          }
        },
        { threshold },
      ),
    [id, threshold],
  )

  useEffect(() => {
    const element = document.getElementById(id)
    if (!observer || !element) {
      return
    }

    observer.observe(element)

    return () => observer.unobserve(element)
  }, [id, observer])

  return { visible, appearedOnce: appearedOnce.current }
}

export default useElementVisibility
