import styled from '@emotion/styled'
import { mediaSizeLessThan, sizes } from '../../media'
import { Container } from '../container/index.styles'
import { PrimaryALink } from '../link/index.styles'

export const FooterWrapper = styled.div`
  position: fixed;
  width 100%;
  z-index: 2;
  background: var(--backgroundColor);
  bottom: 0;
  height: 50px;

  ${mediaSizeLessThan(sizes.md)} {
    height: 40px;
  }

  ${Container} {
    height: 100%;
  }
`

export const FooterInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

export const FooterLinkIcon = styled.a`
  line-height: 1;
  color: gray;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: var(--primaryColor);
  }
  font-size: 1.5rem;
  margin: 0 10px;
  ${mediaSizeLessThan(sizes.sm)} {
    font-size: 1.2rem;
    margin: 0 7px;
  }
  text-decoration: none;
  display: inline-flex;
`

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const EmailLink = styled(PrimaryALink)`
  text-transform: uppercase;
  font-size: 0.8rem;

  &:before {
    content: 'teymurgg321@gmail.com';

    ${mediaSizeLessThan(sizes.md)} {
      content: 'email me';
    }
  }
`
