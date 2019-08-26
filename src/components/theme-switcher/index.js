import React from 'react'
import { ThemeSwitcherWrapper, ThemeSwitcherCircle } from './index.styles'
import { useTheme } from '../../theme'

const ThemeSwitcher = ({ className }) => {
  const [_, toggleTheme] = useTheme()

  return (
    <ThemeSwitcherWrapper className={className} onClick={toggleTheme}>
      <div id="themeSwitcher" />
    </ThemeSwitcherWrapper>
  )
}

export default ThemeSwitcher
