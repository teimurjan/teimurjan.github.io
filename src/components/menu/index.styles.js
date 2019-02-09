import styled from '@emotion/styled'
import { mediaSizeLessThan, sizes } from '../../media'
import { PrimaryLink, PrimaryALink } from '../link/index.styles'

export const MenuWrapper = styled.div``
export const MenuIcon = styled.i`
  display: none !important;

  ${mediaSizeLessThan(sizes.md)} {
    color: ${props => props.theme.primaryColor};
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
    transition: all 150ms ease-in;
    transform-origin: top right;
    width: 100%;
    right: 0;
    margin-top: 7px;
    transform: scale(${props => (props.open ? 1 : 0)});
    position: absolute;
    flex-direction: column;
  }
`
export const MenuItem = styled(PrimaryLink)`
  padding: 0 1rem;
  text-transform: uppercase;

  ${mediaSizeLessThan(sizes.md)} {
    padding: 0.5rem 0;
    width: 100%;
    text-align: center;
    background: ${props => props.theme.backgroundSecondaryColor};
  }
`

export const MenuItemA = MenuItem.withComponent(PrimaryALink)
