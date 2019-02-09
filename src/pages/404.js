import React from 'react'
import { NotFoundPageWrapper, NotFoundPageTitle } from '../pages-styles/404.styles'
import { PrimaryButtonLink } from '../components/button-link/index.styles';

const NotFoundPage = () => (
  <NotFoundPageWrapper>
    <NotFoundPageTitle>NOT FOUND</NotFoundPageTitle>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <PrimaryButtonLink to="/">GO TO MAIN</PrimaryButtonLink>
  </NotFoundPageWrapper>
)

export default NotFoundPage
