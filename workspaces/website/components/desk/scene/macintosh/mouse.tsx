'use client'

import { useMemo } from 'react'
import { cableGeometry } from '../geometry'
import type { Vec3 } from '../layout'
import { beigePlastic, keycapPlastic, seamPlastic } from '../materials'
import { RoundedBox } from '../rounded-box'
import { MOUSE as BODY } from './dimensions'

const CABLE_PATH: Vec3[] = [
  [0, 0.011, -0.046],
  [0.012, 0.004, -0.12],
  [-0.02, 0.003, -0.24],
  [-0.1, 0.003, -0.38],
  [-0.14, 0.003, -0.5],
]

export function Mouse({ position, rotation }: { position: Vec3; rotation?: Vec3 }) {
  const cable = useMemo(() => cableGeometry(CABLE_PATH, 0.002), [])

  return (
    <group position={position} rotation={rotation}>
      <RoundedBox
        args={[BODY.width, BODY.height, BODY.depth]}
        radius={0.006}
        position={[0, BODY.height / 2, 0]}
        material={beigePlastic}
        castShadow
      />
      <RoundedBox
        args={[BODY.width - 0.01, 0.003, 0.03]}
        radius={0.001}
        position={[0, BODY.height + 0.0006, -0.024]}
        material={keycapPlastic}
      />
      <mesh position={[0, BODY.height + 0.0003, -0.006]} material={seamPlastic}>
        <boxGeometry args={[BODY.width - 0.008, 0.0005, 0.0012]} />
      </mesh>
      <mesh geometry={cable} material={beigePlastic} />
    </group>
  )
}
