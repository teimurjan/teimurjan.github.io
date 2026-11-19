'use client'

import type { Vec3 } from '../layout'
import { brushedMetal, diskShell, paper } from '../materials'

const DISK = { width: 0.09, thickness: 0.0033, depth: 0.094 } as const
const STACK = [
  { turn: 0.18, slideX: 0, slideZ: 0 },
  { turn: -0.12, slideX: 0.006, slideZ: -0.004 },
  { turn: 0.42, slideX: -0.004, slideZ: 0.007 },
] as const

export function FloppyStack({ position }: { position: Vec3 }) {
  return (
    <group position={position}>
      {STACK.map(({ turn, slideX, slideZ }, level) => (
        <group
          key={turn}
          position={[slideX, DISK.thickness * (level + 0.5), slideZ]}
          rotation={[0, turn, 0]}
        >
          <mesh material={diskShell} castShadow>
            <boxGeometry args={[DISK.width, DISK.thickness, DISK.depth]} />
          </mesh>
          <mesh position={[0.006, DISK.thickness / 2 + 0.0001, -0.03]} material={brushedMetal}>
            <boxGeometry args={[0.046, 0.0003, 0.03]} />
          </mesh>
          <mesh position={[0, DISK.thickness / 2 + 0.0001, 0.02]} material={paper}>
            <boxGeometry args={[0.07, 0.0003, 0.048]} />
          </mesh>
        </group>
      ))}
    </group>
  )
}
