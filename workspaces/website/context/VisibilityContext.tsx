'use client'
import {
  createContext,
  useState,
  useRef,
  useEffect,
  useContext,
  PropsWithChildren,
} from 'react'

const VisibilityContext = createContext({
  registerElement: (_id: string) => {},
  unregisterElement: (_id: string) => {},
  visibleIds: [] as string[],
})

export const VisibilityContextProvider = ({
  initialIds,
  children,
}: PropsWithChildren<{ initialIds: string[] }>) => {
  const [visibleIds, setVisibleIds] = useState<string[]>([])
  const elementsRef = useRef(new Map())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          if (!id) {
            return
          }

          if (entry.isIntersecting) {
            setVisibleIds((prev) => (prev.includes(id) ? prev : [...prev, id]))
          } else {
            setVisibleIds((prev) => prev.filter((item) => item !== id))
          }
        })
      },
      { threshold: 0.5 },
    )

    elementsRef.current.forEach((element) => {
      observerRef.current?.observe(element)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const registerElement = (id: string) => {
    const element = document.getElementById(id)
    if (!element) {
      return
    }

    elementsRef.current.set(id, element)
    element.dataset.visibilityId = id
    if (observerRef.current) {
      observerRef.current.observe(element)
    }
  }

  const unregisterElement = (id: string) => {
    const element = elementsRef.current.get(id)
    if (element && observerRef.current) {
      observerRef.current.unobserve(element)
    }
    elementsRef.current.delete(id)
    setVisibleIds((prev) => prev.filter((item) => item !== id))
  }

  useEffect(() => {
    initialIds.forEach((id) => {
      registerElement(id)
    })

    return () => {
      initialIds.forEach((id) => {
        unregisterElement(id)
      })
    }
  }, [initialIds])

  return (
    <VisibilityContext.Provider
      value={{ registerElement, unregisterElement, visibleIds }}
    >
      {children}
    </VisibilityContext.Provider>
  )
}

export const useVisibilityContext = () => useContext(VisibilityContext)
