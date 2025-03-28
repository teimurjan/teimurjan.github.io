'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import useIsClient from '@/hooks/use-is-client'
import classNames from 'classnames'
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const isClient = useIsClient()

  return (
    <button
      onClick={
        isClient
          ? () => setTheme(theme === 'light' ? 'dark' : 'light')
          : undefined
      }
      className={classNames(
        'p-2 rounded-full hover:bg-outline transition-colors duration-200',
        !isClient && 'invisible',
      )}
      aria-label="Toggle theme"
    >
      {isClient && theme === 'light' ? (
        <Moon className="w-5 h-5 text-dark-foreground" />
      ) : (
        <Sun className="w-5 h-5 text-dark-foreground" />
      )}
    </button>
  )
}

export default ThemeToggle
