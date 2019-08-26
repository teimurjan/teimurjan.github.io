/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import {
  HeaderWrapper,
  HeaderInner,
  HeaderTitle,
  HeaderLink,
} from './index.styles'
import { Container } from '../container/index.styles'
import { Menu } from '../menu'
import { MenuItemLink, MenuItemA, MenuItem } from '../menu/index.styles'
import ThemeSwitcher from '../theme-switcher'
import { mediaSizeLessThan, sizes } from '../../media'

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container>
      <HeaderInner>
        <HeaderTitle>
          <HeaderLink to="/">{siteTitle}</HeaderLink>
        </HeaderTitle>
        <Menu>
          <MenuItemLink to="/blog">Blog</MenuItemLink>
          <MenuItemA target="_blank" href="/cv.pdf">
            Get resume
          </MenuItemA>
          <MenuItem>
            <ThemeSwitcher
              css={css`
                ${mediaSizeLessThan(sizes.sm)} {
                  margin: 0 auto;
                }
              `}
            />
          </MenuItem>
        </Menu>
      </HeaderInner>
    </Container>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
