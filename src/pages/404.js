import React from 'react'
import {
  NotFoundPageWrapper,
  NotFoundPageTitle,
} from '../pages-styles/404.styles'
import { PrimaryButtonLink } from '../components/button-link/index.styles'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <NotFoundPageWrapper>
      <NotFoundPageTitle>NOT FOUND</NotFoundPageTitle>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <PrimaryButtonLink to="/">GO TO MAIN</PrimaryButtonLink>
    </NotFoundPageWrapper>
  </Layout>
)

export default NotFoundPage
