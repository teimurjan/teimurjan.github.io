import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { HeaderMenu } from '@/components/custom/header-menu'
import { ThemeProvider } from '@/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { QueryProvider } from '@/providers/query-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "teimurjan's AI resume generator",
  description: 'Create a resume from a job description',
}

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <Toaster />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <header className="flex items-center px-2 h-16 shadow container mx-auto">
              <HeaderMenu />
            </header>

            <main className="py-4 h-[calc(100vh-4rem)] overflow-hidden container mx-auto">
              {children}
            </main>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}

export default Layout
