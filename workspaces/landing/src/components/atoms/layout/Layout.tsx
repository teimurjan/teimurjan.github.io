import { css, Global } from '@emotion/react'
import { ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { MetaQuery } from '@teimurjan/gql-types'
import { AppContextProvider } from '../../../context'

export interface Props {
  children: ReactNode
}

const query = graphql`
  query Meta {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }: Props) => {
  const { site } = useStaticQuery<MetaQuery>(query)

  return (
    <div
      css={css`
        overflow-x: hidden;
      `}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{site?.siteMetadata?.title}</title>
      </Helmet>
      <Global
        styles={css`
          * {
            font-family: Roboto Mono, sans-serif;
            box-sizing: border-box;
            overflow-anchor: none;
          }

          body {
            margin: 0;
            overflow-x: hidden;
          }

          iframe {
            border: none;
            max-width: 100%;
          }
        `}
      />
      <AppContextProvider>{children}</AppContextProvider>
    </div>
  )
}

export default Layout
