import React from 'react'
import PropTypes from 'prop-types'
import {
  HeaderWrapper,
  HeaderInner,
  HeaderTitle,
  HeaderLink,
} from './index.styles'
import { Container } from '../container/index.styles'
import { Menu } from '../menu'
import { MenuItem, MenuItemA } from '../menu/index.styles'

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container>
      <HeaderInner>
        <HeaderTitle>
          <HeaderLink to="/">{siteTitle}</HeaderLink>
        </HeaderTitle>
        <Menu>
          <MenuItem to="/blog">Blog</MenuItem>
          <MenuItemA target="_blank" href="/cv.pdf">
            Get resume
          </MenuItemA>
        </Menu>
      </HeaderInner>
    </Container>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
