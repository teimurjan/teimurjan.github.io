import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import gqlClient from '@/gql-client'
import { PersonaContextProvider, ThemeContextProvider } from '@/context'
import 'react-tooltip/dist/react-tooltip.css'
import './globals.css'
import { VisibilityContextProvider } from '@/context/VisibilityContext'
import { Anchor } from '@/utils'
import Script from 'next/script'

const roboto = Roboto_Mono({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
})

type Props = object

export async function generateMetadata(_props: Props): Promise<Metadata> {
  const {
    bios: [{ fullName, headline }],
  } = await gqlClient.Seo()

  return {
    title: fullName,
    description: headline,
    metadataBase: URL.parse('https://teimurjan.dev'),
    icons: ['/seo.png'],
    openGraph: {
      images: ['/seo.png'],
      title: fullName,
      description: headline,
      url: 'https://teimurjan.dev',
    },
    twitter: {
      images: ['/seo.png'],
      card: 'summary_large_image',
      title: fullName,
    },
  }
}

const elementsToCheckVisibility = [
  {
    id: Anchor.Experience,
    threshold: 0.5,
  },
  {
    id: Anchor.Skills,
    threshold: 0.5,
  },
  {
    id: Anchor.Education,
    threshold: 0.5,
  },
  {
    id: Anchor.Media,
    threshold: 0.25,
  },
]

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="f312ce9d-5eb0-4a08-8331-320723dfdaed"
      />
      <body className={roboto.className}>
        <ThemeContextProvider
          defaultTheme="light"
          enableSystem={false}
          enableColorScheme={false}
        >
          <VisibilityContextProvider elements={elementsToCheckVisibility}>
            <PersonaContextProvider>{children}</PersonaContextProvider>
          </VisibilityContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}

export default Layout
