import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../header'
import './index.css'
import './index.override.css'
import { LayoutWrapper, LayoutContent } from './index.styles'
import { ThemeProvider } from 'emotion-theming'
import { darkTheme } from '../../theme'
import { mediaSizeLessThan, sizes } from '../../media'
import favicon from '../../../favicon.ico'
import Footer from '../footer'

const theme = darkTheme

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
          @import url('https://fonts.googleapis.com/css?family=Bungee');
          @import url('https://use.fontawesome.com/releases/v5.6.3/css/all.css');

          hr {
            background: ${theme.primaryColor};
          }

          html,
          body {
            background: ${theme.backgroundColor};
            color: ${theme.fontOnBackgroundColor};
          }

          .gatsby-highlight {
            margin-bottom: 1rem;
          }

          code[class*='language-'],
          pre[class*='language-'] {
            font-family: 'Source Code Pro', monospace;
            font-size: 16px;
            line-height: 1.35;
            direction: ltr;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            -moz-tab-size: 4;
            -o-tab-size: 4;
            tab-size: 4;
            -webkit-hyphens: none;
            -ms-hyphens: none;
            hyphens: none;
            background: ${theme.codeBackgroundColor};
            color: white;
          }
          pre[class*='language-']::-moz-selection,
          pre[class*='language-'] ::-moz-selection,
          code[class*='language-']::-moz-selection,
          code[class*='language-'] ::-moz-selection {
            text-shadow: none;
            background: ${theme.primaryDarkColor};
          }
          pre[class*='language-']::selection,
          pre[class*='language-'] ::selection,
          code[class*='language-']::selection,
          code[class*='language-'] ::selection {
            text-shadow: none;
            background: ${theme.primaryDarkColor};
          }
          pre[class*='language-'] {
            padding: 1em;
            margin: 0.5em 0;
            overflow: auto;
          }
          :not(pre) > code[class*='language-'] {
            padding: 0.1em;
            border-radius: 0.3em;
          }
          .token.comment,
          .token.prolog,
          .token.doctype,
          .token.cdata {
            color: #6c6783;
          }
          .token.punctuation {
            color: #6c6783;
          }
          .token.namespace {
            opacity: 0.7;
          }
          .token.tag,
          .token.operator,
          .token.number {
            color: #e09142;
          }
          .token.property,
          .token.function {
            color: ${theme.codeSecondaryColor};
          }
          .token.tag-id,
          .token.selector,
          .token.atrule-id {
            color: #eeebff;
          }
          code.language-javascript,
          .token.attr-name {
            color: ${theme.codeSecondaryColor};
          }
          code.language-css,
          code.language-scss,
          .token.boolean,
          .token.string,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .language-scss .token.string,
          .style .token.string,
          .token.attr-value,
          .token.keyword,
          .token.control,
          .token.directive,
          .token.unit,
          .token.statement,
          .token.regex,
          .token.atrule {
            color: ${theme.codePrimaryColor};
          }
          .token.placeholder,
          .token.variable {
            color: ${theme.codePrimaryColor};
          }
          .token.deleted {
            text-decoration: line-through;
          }
          .token.inserted {
            border-bottom: 1px dotted #eeebff;
            text-decoration: none;
          }
          .token.italic {
            font-style: italic;
          }
          .token.important,
          .token.bold {
            font-weight: bold;
          }
          .token.important {
            color: ${theme.codeSecondaryColor};
          }
          .token.entity {
            cursor: help;
          }
          pre > code.highlight {
            outline: 0.4em solid #8a75f5;
            outline-offset: 0.4em;
          }
          .line-numbers .line-numbers-rows {
            border-right-color: #2c2937;
          }
          .line-numbers-rows > span:before {
            color: #3c3949;
          }
          .line-highlight {
            background: rgba(224, 145, 66, 0.2);
            background: -webkit-gradient(
              linear,
              left top,
              right top,
              color-stop(70%, rgba(224, 145, 66, 0.2)),
              to(rgba(224, 145, 66, 0))
            );
            background: linear-gradient(
              to right,
              rgba(224, 145, 66, 0.2) 70%,
              rgba(224, 145, 66, 0)
            );
          }

          ${mediaSizeLessThan(sizes.md)} {
            h1 {
              font-size: 1.75rem !important;
            }

            h2 {
              font-size: 1.42671rem !important;
            }
          }

          .gatsby-image-outer-wrapper {
            height: 100%;
          }

          .remark-anchor {
            margin-left: 0;
            text-decoration: none;
          }
        `}
      />
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <LayoutWrapper>
            <Helmet
              title={data.site.siteMetadata.title}
              link={[
                {
                  rel: 'icon',
                  href: `${favicon}`,
                },
              ]}
              meta={[
                {
                  name: 'theme-color',
                  value: theme.backgroundColor,
                },
              ]}
            />
            <Header siteTitle={data.site.siteMetadata.title} />
            <LayoutContent>{children}</LayoutContent>
            <Footer />
          </LayoutWrapper>
        )}
      />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
