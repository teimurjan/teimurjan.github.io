import React from 'react'
import PropTypes from 'prop-types'
import {
  MenuWrapper,
  MenuIcon,
  MenuDropdown,
  MenuIconBar,
} from './index.styles'

const MenuHamburger = ({ isOpen, ...props }) => (
  <MenuIcon isOpen={isOpen} {...props}>
    <MenuIconBar />
    <MenuIconBar />
    <MenuIconBar />
  </MenuIcon>
)

export const Menu = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = React.useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])
  const close = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <MenuWrapper>
      <MenuHamburger isOpen={isOpen} onClick={toggle} />
      <MenuDropdown onClick={close} isOpen={isOpen}>
        {children}
      </MenuDropdown>
    </MenuWrapper>
  )
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
}
