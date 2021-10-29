import { useEffect } from 'react'

type Handler = (event: MouseEvent | TouchEvent) => void

const useOnClickOutside = <T extends HTMLElement>(
  element: T | null,
  handler: Handler
) => {
  useEffect(() => {
    const listener: Handler = (event) => {
      if (!element || element.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [element, handler])
}

export default useOnClickOutside
