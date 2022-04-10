import { useState, useEffect } from 'react'

const useLazyInitialization = <T>(actualValue: T, defaultValue: T) => {
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    const timeoutID = setTimeout(() => setTrigger(true), 0)
    return () => clearTimeout(timeoutID)
  }, [])

  const value = trigger ? actualValue : defaultValue

  return { value, isInitialized: trigger }
}

export default useLazyInitialization
