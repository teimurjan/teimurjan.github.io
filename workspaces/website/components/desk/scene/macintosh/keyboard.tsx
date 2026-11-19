'use client'

import { useMemo } from 'react'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { InstancedPlacements, type Placement } from '../instanced-placements'
import type { Vec3 } from '../layout'
import { beigePlastic, keycapPlastic, seamPlastic } from '../materials'
import { RoundedBox } from '../rounded-box'
import { KEYBOARD } from './dimensions'

const KEY = { size: 0.0168, height: 0.008, pitch: 0.0196 } as const
const ROWS = [
  { keys: 14, shift: 0 },
  { keys: 14, shift: 0.004 },
  { keys: 13, shift: 0.009 },
  { keys: 12, shift: 0.014 },
] as const
const BACK_ROW_Z = -KEYBOARD.depth + 0.028
const SPACE_BAR_WIDTH = 0.118
const KEY_TOP_Y = KEYBOARD.height + KEY.height / 2 - 0.002

const keyPlacements: Placement[] = ROWS.flatMap((row, rowIndex) =>
  Array.from({ length: row.keys }, (_, keyIndex) => ({
    position: [
      (keyIndex - (row.keys - 1) / 2) * KEY.pitch + row.shift - 0.006,
      KEY_TOP_Y,
      BACK_ROW_Z + rowIndex * KEY.pitch,
    ] as Vec3,
  }))
)

export function Keyboard({ position }: { position: Vec3 }) {
  const keyGeometry = useMemo(
    () => new RoundedBoxGeometry(KEY.size, KEY.height, KEY.size, 2, 0.0018),
    []
  )

  return (
    <group position={position} rotation={[KEYBOARD.tilt, 0, 0]}>
      <RoundedBox
        args={[KEYBOARD.width, KEYBOARD.height, KEYBOARD.depth]}
        radius={0.005}
        position={[0, KEYBOARD.height / 2, -KEYBOARD.depth / 2]}
        material={beigePlastic}
        castShadow
        receiveShadow
      />
      <mesh
        position={[0, KEYBOARD.height + 0.0002, -KEYBOARD.depth / 2 + 0.004]}
        material={seamPlastic}
      >
        <boxGeometry args={[KEYBOARD.width - 0.026, 0.0006, KEYBOARD.depth - 0.03]} />
      </mesh>
      <InstancedPlacements
        geometry={keyGeometry}
        material={keycapPlastic}
        placements={keyPlacements}
        castShadow
      />
      <RoundedBox
        args={[SPACE_BAR_WIDTH, KEY.height, KEY.size]}
        radius={0.0018}
        position={[-0.004, KEY_TOP_Y, BACK_ROW_Z + ROWS.length * KEY.pitch]}
        material={keycapPlastic}
        castShadow
      />
    </group>
  )
}
