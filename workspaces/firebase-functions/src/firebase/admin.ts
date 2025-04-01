import { getApps, getApp, initializeApp, cert } from 'firebase-admin/app'

export const admin =
  getApps().length === 0
    ? initializeApp(
        process.env.NODE_ENV === 'development'
          ? {
              credential: cert({
                projectId: process.env.PROJECT_ID,
                clientEmail: process.env.CLIENT_EMAIL,
                privateKey: process.env.PRIVATE_KEY,
              }),
            }
          : undefined,
      )
    : getApp()
