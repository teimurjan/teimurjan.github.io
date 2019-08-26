import React from 'react'

export const useTheme = () => {
  const [theme, setTheme] = React.useState(
    typeof window !== 'undefined' ? window.__theme : undefined
  )

  React.useEffect(() => {
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  const toggleTheme = React.useCallback(() => {
    window.__setTheme(theme === 'light' ? 'dark' : 'light')
  })

  return [theme, toggleTheme]
}
