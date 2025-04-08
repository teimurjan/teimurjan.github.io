import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { LayoutNavigation } from '@/components/widgets/layout-navigation/layout-navigation'
import { ThemeProvider } from '@/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { QueryProvider } from '@/providers/query-provider'
import { AuthProvider } from '@/providers/auth-provider'
import { LogoutButton } from '@/components/widgets/logout-button/logout-button'

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
  icons: ['/logo.webp'],
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
        <AuthProvider>
          <QueryProvider>
            <Toaster />
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <header className="flex items-center justify-between px-2 h-16 shadow container mx-auto">
                <LayoutNavigation />
                <LogoutButton />
              </header>

              <main className="py-4 h-[calc(100vh-4rem)] overflow-hidden container mx-auto">
                {children}
              </main>
            </ThemeProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

export default Layout
