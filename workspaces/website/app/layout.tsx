import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import gqlClient from '@/gql-client'
import { PersonaContextProvider } from '@/context'
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

const initialVisibilityIds = Object.values(Anchor)

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="f312ce9d-5eb0-4a08-8331-320723dfdaed"
      />
      <body className={roboto.className}>
        <VisibilityContextProvider initialIds={initialVisibilityIds}>
          <PersonaContextProvider>{children}</PersonaContextProvider>
        </VisibilityContextProvider>
      </body>
    </html>
  )
}

export default Layout
