import { useEffect, useState } from 'react'

const getFromCookie = (key: string) => {
  return typeof window !== 'undefined'
    ? document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${key}=`))
        ?.split('=')[1] || null
    : null
}

export const useCookie = (name: string) => {
  const [cookie, setCookie] = useState<string | null>(getFromCookie(name))

  useEffect(() => {
    const interval = setInterval(() => {
      setCookie(getFromCookie(name))
    }, 1000)

    return () => clearInterval(interval)
  }, [name])

  return cookie
}
