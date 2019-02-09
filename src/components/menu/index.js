import React from 'react'
import { MenuWrapper, MenuIcon, MenuDropdown } from './index.styles'

export class Menu extends React.Component {
  state = {
    open: false,
  }

  toggle = () => this.setState({ open: !this.state.open })

  close = () => this.setState({ open: false })

  render() {
    const { children } = this.props
    const { open } = this.state
    return (
      <MenuWrapper>
        <MenuIcon className="fas fa-bars" onClick={this.toggle} />
        <MenuDropdown onClick={this.close} open={open}>{children}</MenuDropdown>
      </MenuWrapper>
    )
  }
}
