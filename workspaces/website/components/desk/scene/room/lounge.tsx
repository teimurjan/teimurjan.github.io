'use client'

import { Glow } from '../glow'
import type { Vec3 } from '../layout'
import {
  PALETTE,
  blackSteel,
  brass,
  lampShadeLinen,
  paleWood,
  rugWool,
  sofaFabric,
} from '../materials'
import { RoundedBox } from '../rounded-box'

const SOFA = { width: 2.1, depth: 0.9, seatHeight: 0.42, backHeight: 0.82 } as const
const FLOOR_LAMP_HEIGHT = 1.55

function Sofa({ position, rotation }: { position: Vec3; rotation: Vec3 }) {
  return (
    <group position={position} rotation={rotation}>
      <RoundedBox
        args={[SOFA.width, 0.24, SOFA.depth]}
        radius={0.05}
        position={[0, 0.2, 0]}
        material={sofaFabric}
      />
      <RoundedBox
        args={[SOFA.width, SOFA.backHeight - 0.2, 0.24]}
        radius={0.07}
        position={[0, (SOFA.backHeight + 0.2) / 2, -SOFA.depth / 2 + 0.12]}
        material={sofaFabric}
      />
      {[-1, 1].map((side) => (
        <group key={side}>
          <RoundedBox
            args={[0.22, 0.46, SOFA.depth]}
            radius={0.07}
            position={[side * (SOFA.width / 2 - 0.11), 0.39, 0]}
            material={sofaFabric}
          />
          <RoundedBox
            args={[SOFA.width / 2 - 0.26, 0.16, SOFA.depth - 0.3]}
            radius={0.06}
            position={[side * (SOFA.width / 4 - 0.12), SOFA.seatHeight, 0.1]}
            material={sofaFabric}
          />
        </group>
      ))}
    </group>
  )
}

function FloorLamp({ position }: { position: Vec3 }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.012, 0]} material={blackSteel}>
        <cylinderGeometry args={[0.16, 0.17, 0.024, 32]} />
      </mesh>
      <mesh position={[0, FLOOR_LAMP_HEIGHT / 2, 0]} material={brass}>
        <cylinderGeometry args={[0.011, 0.011, FLOOR_LAMP_HEIGHT, 10]} />
      </mesh>
      <mesh position={[0, FLOOR_LAMP_HEIGHT, 0]} material={lampShadeLinen}>
        <cylinderGeometry args={[0.2, 0.25, 0.3, 32, 1, true]} />
      </mesh>
      <pointLight
        position={[0, FLOOR_LAMP_HEIGHT - 0.05, 0]}
        color={PALETTE.lampGlow}
        intensity={4.2}
        distance={7}
        decay={2}
      />
      <Glow position={[0, 0.02, 0]} size={[3.4, 3.4]} color={PALETTE.lampGlow} opacity={0.3} />
    </group>
  )
}

export function Lounge({ position }: { position: Vec3 }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.006, 0]} rotation={[-Math.PI / 2, 0, 0]} material={rugWool}>
        <planeGeometry args={[3.3, 3]} />
      </mesh>
      <Sofa position={[-1.35, 0, 0.1]} rotation={[0, Math.PI / 2, 0]} />
      <Sofa position={[0.25, 0, -1.75]} rotation={[0, -0.12, 0]} />
      <group position={[0.1, 0, 0.15]}>
        <mesh position={[0, 0.36, 0]} material={paleWood}>
          <cylinderGeometry args={[0.46, 0.46, 0.035, 40]} />
        </mesh>
        <mesh position={[0, 0.18, 0]} material={blackSteel}>
          <cylinderGeometry args={[0.03, 0.2, 0.34, 20]} />
        </mesh>
      </group>
      <FloorLamp position={[1.2, 0, -1.9]} />
    </group>
  )
}
