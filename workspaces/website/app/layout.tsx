import gqlClient from '@/gql-client'
import type { Metadata } from 'next'
import { Caveat, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-jetbrains-mono',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-caveat',
})

export async function generateMetadata(): Promise<Metadata> {
  const {
    bios: [{ fullName, headline }],
  } = await gqlClient.Bio()

  return {
    title: `${fullName} — ${headline}`,
    description: headline,
    metadataBase: URL.parse('https://teimurjan.dev'),
    icons: ['/logo.png'],
    openGraph: {
      images: ['/logo.png'],
      title: fullName,
      description: headline,
      url: 'https://teimurjan.dev',
    },
    twitter: {
      images: ['/logo.png'],
      card: 'summary_large_image',
      title: fullName,
    },
  }
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${caveat.variable}`}>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="f312ce9d-5eb0-4a08-8331-320723dfdaed"
      />
      <body>{children}</body>
    </html>
  )
}
