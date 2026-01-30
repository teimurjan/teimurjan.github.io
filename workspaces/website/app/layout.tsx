import Aurora from '@/components/ui/aurora'
import gqlClient from '@/gql-client'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export async function generateMetadata(): Promise<Metadata> {
  const {
    bios: [{ fullName, headline }],
  } = await gqlClient.Bio()

  return {
    title: fullName,
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
    <html lang="en" className="dark">
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="f312ce9d-5eb0-4a08-8331-320723dfdaed"
      />
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased relative`}>
        <div className="fixed inset-0 w-full h-full overflow-hidden">
          <Aurora colorStops={['#6678ff', '#B19EEF', '#3d14e1']} />
        </div>
        {children}
      </body>
    </html>
  )
}
