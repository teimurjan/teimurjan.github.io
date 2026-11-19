'use client'

import { BackSide } from 'three'
import { AimedSpotLight } from '../aimed-spot-light'
import type { Vec3 } from '../layout'
import { PALETTE, blackSteel, brass } from '../materials'

const STEM_HEIGHT = 0.44
const ARM = { length: 0.2, rise: 0.035 } as const
const SHADE = { topRadius: 0.014, bottomRadius: 0.058, height: 0.07 } as const
const HEAD: Vec3 = [-ARM.length, STEM_HEIGHT + ARM.rise - 0.02, 0]

interface DeskLampProps {
  position: Vec3
  rotation?: Vec3
  aimAt: Vec3
}

export function DeskLamp({ position, rotation, aimAt }: DeskLampProps) {
  const armAngle = Math.atan2(ARM.rise, ARM.length)
  const armSpan = Math.hypot(ARM.length, ARM.rise)

  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0.006, 0]} material={blackSteel} castShadow>
        <cylinderGeometry args={[0.058, 0.064, 0.012, 40]} />
      </mesh>
      <mesh position={[0, STEM_HEIGHT / 2 + 0.012, 0]} material={brass}>
        <cylinderGeometry args={[0.0048, 0.0048, STEM_HEIGHT, 12]} />
      </mesh>
      <mesh
        position={[-ARM.length / 2, STEM_HEIGHT + 0.012 + ARM.rise / 2, 0]}
        rotation={[0, 0, Math.PI / 2 - armAngle]}
        material={brass}
      >
        <cylinderGeometry args={[0.0048, 0.0048, armSpan, 12]} />
      </mesh>
      <group position={HEAD}>
        <mesh material={brass}>
          <cylinderGeometry
            args={[SHADE.topRadius, SHADE.bottomRadius, SHADE.height, 40, 1, true]}
          />
        </mesh>
        <mesh scale={0.985}>
          <cylinderGeometry
            args={[SHADE.topRadius, SHADE.bottomRadius, SHADE.height, 40, 1, true]}
          />
          <meshBasicMaterial color={[1.6, 1, 0.5]} side={BackSide} toneMapped={false} />
        </mesh>
        <mesh position={[0, SHADE.height / 2, 0]} material={brass}>
          <cylinderGeometry args={[SHADE.topRadius, SHADE.topRadius, 0.006, 24]} />
        </mesh>
        <mesh position={[0, -0.012, 0]}>
          <sphereGeometry args={[0.015, 20, 14]} />
          <meshBasicMaterial color={[5, 3.6, 2.1]} toneMapped={false} />
        </mesh>
      </group>
      <AimedSpotLight
        position={[HEAD[0], HEAD[1] - 0.03, HEAD[2]]}
        aimAt={aimAt}
        color={PALETTE.lampGlow}
        intensity={0.95}
        distance={2.4}
        angle={1.02}
        penumbra={0.85}
        decay={2}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0006}
        shadow-normalBias={0.006}
        shadow-radius={5}
        shadow-camera-near={0.05}
        shadow-camera-far={2}
      />
    </group>
  )
}
