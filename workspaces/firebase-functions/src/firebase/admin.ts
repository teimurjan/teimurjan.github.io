import { getApps, getApp, initializeApp, cert } from 'firebase-admin/app'

export const admin =
  getApps().length === 0
    ? initializeApp(
        process.env.NODE_ENV === 'development'
          ? {
              credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY,
              }),
            }
          : undefined,
      )
    : getApp()
