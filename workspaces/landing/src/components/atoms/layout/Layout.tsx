import { css, Global } from '@emotion/react'
import { ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { SeoQuery } from '@teimurjan/gql-types'
import { AppContextProvider } from '../../../context'

export interface Props {
  children: ReactNode
}

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        siteUrl
        image
      }
    }
    gcms {
      bios {
        fullName
        headline
      }
    }
  }
`

const Layout = ({ children }: Props) => {
  const {
    site,
    gcms: {
      bios: [{ fullName, headline }],
    },
  } = useStaticQuery<SeoQuery>(query)

  return (
    <div
      css={css`
        overflow-x: hidden;
      `}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{fullName}</title>
        <meta name="description" content={headline} />
        {site?.siteMetadata?.siteUrl && (
          <meta property="og:siteUrl" content={site?.siteMetadata?.siteUrl} />
        )}
        <meta property="og:title" content={fullName} />
        {headline && <meta property="og:description" content={headline} />}
        {site?.siteMetadata?.image && (
          <meta property="og:image" content={site?.siteMetadata?.image} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullName} />
        {headline && <meta name="twitter:description" content={headline} />}
        {site?.siteMetadata?.image && (
          <meta name="twitter:image" content={site?.siteMetadata?.image} />
        )}
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
