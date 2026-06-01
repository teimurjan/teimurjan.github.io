import { IDEShell } from '@/components/ide/ide-shell'
import { getSections } from '@/lib/get-sections'
import { BASE_URL } from '@/lib/routes'
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
  const { fullName, headline } = await getSections()

  return {
    title: `${fullName} — ${headline}`,
    description: headline,
    metadataBase: URL.parse(BASE_URL),
    alternates: { canonical: '/' },
    icons: ['/logo.png'],
    openGraph: {
      images: ['/logo.png'],
      title: fullName,
      description: headline,
      url: BASE_URL,
    },
    twitter: {
      images: ['/logo.png'],
      card: 'summary_large_image',
      title: fullName,
    },
  }
}

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { folders, fullName, headline } = await getSections()

  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${caveat.variable}`}>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="f312ce9d-5eb0-4a08-8331-320723dfdaed"
      />
      <body>
        <IDEShell folders={folders} fullName={fullName} headline={headline}>
          {children}
        </IDEShell>
      </body>
    </html>
  )
}
