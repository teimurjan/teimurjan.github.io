import { Receiver } from '@upstash/qstash'
import type { Request } from 'firebase-functions/v2/https'

export const verifySignature = async (req: Request, receiver: Receiver) => {
  try {
    const signature = req.headers['upstash-signature']
    if (typeof signature !== 'string') {
      throw new Error('Invalid signature type')
    }

    return await receiver.verify({
      body: req.rawBody.toString(),
      signature,
      url: req.headers.origin,
    })
  } catch (error) {
    throw new Error('Signature verification failed:\n\n' + error)
  }
}
