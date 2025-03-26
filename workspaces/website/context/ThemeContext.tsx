'use client'
import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export const ThemeContextProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export { useTheme } from 'next-themes'
