'use client'
import { ProgressProvider as BProgressProvider } from '@bprogress/next/app'
import { PropsWithChildren } from 'react'

export const ProgressProvider = ({ children }: PropsWithChildren) => {
  return <BProgressProvider color='#ffffff'>{children}</BProgressProvider>
}
