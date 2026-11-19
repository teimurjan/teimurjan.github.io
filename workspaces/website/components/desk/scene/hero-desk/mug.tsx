'use client'

import type { Vec3 } from '../layout'
import { ceramic, coffee } from '../materials'

const RADIUS = 0.039
const HEIGHT = 0.09

export function Mug({ position, rotation }: { position: Vec3; rotation?: Vec3 }) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, HEIGHT / 2, 0]} material={ceramic} castShadow>
        <cylinderGeometry args={[RADIUS, RADIUS * 0.92, HEIGHT, 40]} />
      </mesh>
      <mesh position={[0, HEIGHT - 0.008, 0]} rotation={[-Math.PI / 2, 0, 0]} material={coffee}>
        <circleGeometry args={[RADIUS - 0.004, 40]} />
      </mesh>
      <mesh position={[RADIUS + 0.012, HEIGHT / 2, 0]} material={ceramic}>
        <torusGeometry args={[0.022, 0.0055, 12, 28, Math.PI * 1.25]} />
      </mesh>
    </group>
  )
}
