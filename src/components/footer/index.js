import React from 'react'
import {
  FooterWrapper,
  FooterIcons,
  FooterLinkIcon,
  FooterInner,
  EmailLink,
} from './index.styles'
import { Container } from '../container/index.styles'

const Footer = () => (
  <FooterWrapper>
    <Container>
      <FooterInner>
        <EmailLink href="mailto: teymurgg321@gmail.com" />
        <FooterIcons>
          <FooterLinkIcon target="_blank" href="https://github.com/teimurjan">
            <i className="fab fa-github" />
          </FooterLinkIcon>
          <FooterLinkIcon
            target="_blank"
            href="https://www.linkedin.com/in/teimur-gasanov"
          >
            <i className="fab fa-linkedin" />
          </FooterLinkIcon>
          <FooterLinkIcon target="_blank" href="https://medium.com/@teimurjan">
            <i className="fab fa-medium" />
          </FooterLinkIcon>
          <FooterLinkIcon target="_blank" href="https://twitter.com/teimurjan">
            <i className="fab fa-twitter" />
          </FooterLinkIcon>
          <FooterLinkIcon className="icon" href="https://codepen.io/teimurjan">
            <i className="fab fa-codepen" />
          </FooterLinkIcon>
        </FooterIcons>
      </FooterInner>
    </Container>
  </FooterWrapper>
)

export default Footer
