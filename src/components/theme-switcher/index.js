import React from 'react'
import { ThemeSwitcherWrapper } from './index.styles'
import { useTheme } from '../../theme'

const ThemeSwitcher = ({ className }) => {
  const [_, toggleTheme] = useTheme()

  const onToggleClick = React.useCallback(
    e => {
      e.stopPropagation()
      toggleTheme()
    },
    [toggleTheme]
  )

  return (
    <ThemeSwitcherWrapper className={className} onClick={onToggleClick}>
      <div id="themeSwitcherCircle" />
    </ThemeSwitcherWrapper>
  )
}

export default ThemeSwitcher
