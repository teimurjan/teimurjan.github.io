'use client'

import { useMemo } from 'react'
import { MeshStandardMaterial } from 'three'
import { DESK_TOP_Y } from '../layout'
import { blackSteel } from '../materials'
import { RoundedBox } from '../rounded-box'
import { woodTexture } from '../textures/wood-texture'

const HERO_DESK = {
  width: 1.72,
  depth: 0.82,
  thickness: 0.034,
  centerX: 0.06,
  centerZ: -0.03,
}

const LEG = 0.036
const LEG_INSET_X = 0.12
const LEG_INSET_Z = 0.07

export function Desk() {
  const walnut = useMemo(
    () => new MeshStandardMaterial({ map: woodTexture('#3d2a1c', '#140b06'), roughness: 0.5 }),
    []
  )
  const { width, depth, thickness, centerX, centerZ } = HERO_DESK
  const legHeight = DESK_TOP_Y - thickness
  const legX = width / 2 - LEG_INSET_X
  const legZ = depth / 2 - LEG_INSET_Z

  return (
    <group position={[centerX, 0, centerZ]}>
      <RoundedBox
        args={[width, thickness, depth]}
        radius={0.006}
        position={[0, DESK_TOP_Y - thickness / 2, 0]}
        material={walnut}
        receiveShadow
      />
      {[-legX, legX].map((x) => (
        <group key={x} position={[x, 0, 0]}>
          {[-legZ, legZ].map((z) => (
            <mesh key={z} position={[0, legHeight / 2, z]} material={blackSteel}>
              <boxGeometry args={[LEG, legHeight, LEG]} />
            </mesh>
          ))}
          <mesh position={[0, legHeight - LEG / 2, 0]} material={blackSteel}>
            <boxGeometry args={[LEG, LEG, legZ * 2]} />
          </mesh>
          <mesh position={[0, LEG / 2, 0]} material={blackSteel}>
            <boxGeometry args={[LEG, LEG, legZ * 2]} />
          </mesh>
        </group>
      ))}
    </group>
  )
}
