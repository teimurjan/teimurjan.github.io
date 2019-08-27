import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { mediaSizeLessThan, sizes } from '../../media'
import { PrimaryLink, PrimaryALink } from '../link/index.styles'

export const MenuWrapper = styled.div``

const menuIconBarsCount = 3
const menuIconBarHeight = 3
const menuIconBarSpacing = 6
const menuIconBarWidth = 25

export const MenuIconBar = styled.div`
  position: absolute;
  left: 0;
  height: ${menuIconBarHeight}px;
  width: ${menuIconBarWidth}px;
  background: var(--primaryColor);
`

export const MenuIcon = styled.div`
  margin-top: ${menuIconBarSpacing}px;
  position: relative;
  width: ${menuIconBarWidth}px;
  height: ${(menuIconBarHeight + menuIconBarSpacing) * menuIconBarsCount}px;

  display: none !important;
  @media ${mediaSizeLessThan(sizes.md)} {
    display: block !important;
  }

  &:focus {
    outline: 0;
    outline-color: transparent;
    outline-style: none;
  }

  ${MenuIconBar} {
    transition: all 300ms ease-in-out;
  }

  & > div:nth-of-type(1) {
    top: 0;
    transform: ${props => (props.isOpen ? 'rotateZ(-45deg)' : undefined)};
    transform-origin: center right;
  }

  & > div:nth-of-type(2) {
    top: ${menuIconBarSpacing + menuIconBarHeight}px;
    opacity: ${props => (props.isOpen ? 0 : 1)};
  }

  & > div:nth-of-type(3) {
    top: ${(menuIconBarSpacing + menuIconBarHeight) * 2}px;
    transform: ${props => (props.isOpen ? 'rotateZ(45deg)' : undefined)};
    transform-origin: center right;
  }
`

export const MenuDropdown = styled.div`
  align-items: center;
  display: none;

  @media ${mediaSizeLessThan(sizes.md)} {
    display: flex;
    transition: all 200ms ease-in-out;
    transform-origin: top center;
    width: 100%;
    right: 0;
    padding: 10px 0;
    transform: scaleY(${props => (props.isOpen ? 1 : 0)});
    position: absolute;
    flex-direction: column;
    height: 100vh;
    background: var(--mobileMenuBackground);
  }
`

const menuItemCSS = css`
  padding: 0 1rem;
  text-transform: uppercase;

  @media ${mediaSizeLessThan(sizes.md)} {
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
