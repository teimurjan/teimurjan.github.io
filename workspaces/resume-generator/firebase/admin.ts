import type { App } from 'firebase-admin/app'

let adminApp: App | null = null

export const getAdmin = async (): Promise<App> => {
  if (adminApp) return adminApp

  const { cert, getApp, getApps, initializeApp } = await import('firebase-admin/app')

  adminApp =
    getApps().length === 0
      ? initializeApp({
          credential: cert({
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY,
          }),
        })
      : getApp()

  return adminApp
}
