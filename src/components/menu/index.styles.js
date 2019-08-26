import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { mediaSizeLessThan, sizes } from '../../media'
import { PrimaryLink, PrimaryALink } from '../link/index.styles'

export const MenuWrapper = styled.div``
export const MenuIcon = styled.i`
  display: none !important;

  ${mediaSizeLessThan(sizes.md)} {
    color: var(--primaryColor);
    display: block !important;
  }

  &:focus {
    outline: 0;
    outline-color: transparent;
    outline-style: none;
  }
`
export const MenuDropdown = styled.div`
  display: flex;
  align-items: center;

  ${mediaSizeLessThan(sizes.md)} {
    transition: all 200ms ease-in-out;
    transform-origin: top center;
    width: 100%;
    right: 0;
    margin-top: 14px;
    transform: scaleY(${props => (props.open ? 1 : 0)});
    position: absolute;
    flex-direction: column;
    height: 100vh;
    background: var(--mobileMenuBackground);
  }
`

const menuItemCSS = css`
  padding: 0 1rem;
  text-transform: uppercase;

  ${mediaSizeLessThan(sizes.md)} {
    padding: 1rem 0 0.5rem 0;
    width: 100%;
    text-align: center;
  }
`

export const MenuItem = styled.div`
  ${menuItemCSS}
`
export const MenuItemLink = styled(PrimaryLink)`
  ${menuItemCSS}
`

export const MenuItemA = styled(PrimaryALink)`
  ${menuItemCSS}
`
