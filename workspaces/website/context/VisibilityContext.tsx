'use client'
import {
  createContext,
  useState,
  useRef,
  useEffect,
  useContext,
  PropsWithChildren,
  useCallback,
} from 'react'

type ElementToCheck = {
  id: string
  threshold: number
}

const VisibilityContext = createContext({
  registerElement: (_element: ElementToCheck) => {},
  unregisterElement: (_element: ElementToCheck) => {},
  isElementVisible: (_id: string) => false as boolean,
})

type ProviderProps = PropsWithChildren<{
  elements: ElementToCheck[]
}>

export const VisibilityContextProvider = ({
  elements,
  children,
}: ProviderProps) => {
  const [visibilityById, setVisibilityById] = useState<Record<string, boolean>>(
    {},
  )
  const elementsByIdRef = useRef(new Map())
  const observerByThresholdRef = useRef(new Map<string, IntersectionObserver>())

  const getObserver = useCallback((threshold: number) => {
    const existingObserver = observerByThresholdRef.current.get(
      threshold.toString(),
    )
    if (existingObserver) {
      return existingObserver
    }

    const newObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          if (!id) {
            return
          }

          setVisibilityById((prev) => ({ ...prev, [id]: entry.isIntersecting }))
        })
      },
      { threshold },
    )

    observerByThresholdRef.current.set(threshold.toString(), newObserver)
    return newObserver
  }, [])

  useEffect(() => {
    return () => {
      if (observerByThresholdRef.current) {
        observerByThresholdRef.current.values().forEach((observer) => {
          observer.disconnect()
        })
      }
    }
  }, [])

  const registerElement = useCallback(
    ({ id, threshold }: ElementToCheck) => {
      const element = document.getElementById(id)
      if (!element) {
        return
      }

      const observer = getObserver(threshold)
      if (observer) {
        observer.observe(element)
        elementsByIdRef.current.set(id, element)
      }
    },
    [getObserver],
  )

  const unregisterElement = useCallback(
    ({ id, threshold }: ElementToCheck) => {
      const element = elementsByIdRef.current.get(id)
      const observer = getObserver(threshold)
      if (element && observer) {
        observer.unobserve(element)
      }
      elementsByIdRef.current.delete(id)
      setVisibilityById((prev) => ({ ...prev, [id]: false }))
    },
    [getObserver],
  )

  useEffect(() => {
    elements.forEach((element) => {
      registerElement(element)
    })

    return () => {
      elements.forEach((element) => {
        unregisterElement(element)
      })
    }
  }, [elements, registerElement, unregisterElement])

  const isElementVisible = useCallback(
    (id: string) => visibilityById[id] ?? false,
    [visibilityById],
  )

  return (
    <VisibilityContext.Provider
      value={{ registerElement, unregisterElement, isElementVisible }}
    >
      {children}
    </VisibilityContext.Provider>
  )
}

export const useVisibilityContext = () => useContext(VisibilityContext)
