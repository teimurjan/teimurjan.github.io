'use client'

import { AimedSpotLight } from './aimed-spot-light'
import { SCREEN_CENTER } from './layout'
import { PALETTE } from './materials'
import { ReflectionEnvironment } from './reflection-environment'

const [screenX, screenY, screenZ] = SCREEN_CENTER

export function Lighting() {
  return (
    <>
      <hemisphereLight args={['#273049', '#120d09', 0.7]} />
      <AimedSpotLight
        position={[screenX - 0.8, screenY + 1.3, screenZ + 1.1]}
        aimAt={[screenX, screenY - 0.1, screenZ + 0.08]}
        color="#ffe2c2"
        intensity={0.9}
        distance={5}
        angle={0.4}
        penumbra={1}
        decay={2}
      />
      <pointLight
        position={[screenX, screenY - 0.01, screenZ + 0.06]}
        color={PALETTE.screenGlow}
        intensity={0.02}
        distance={0.7}
        decay={2}
      />
      <directionalLight position={[6, 4.5, -11]} color={PALETTE.coolLight} intensity={0.55} />
      <ReflectionEnvironment />
    </>
  )
}
