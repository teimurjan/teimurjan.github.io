'use client'

import { useMemo } from 'react'
import { MeshStandardMaterial } from 'three'
import { ROOM } from '../layout'
import { blackSteel, concrete } from '../materials'
import { brickTexture } from '../textures/brick-texture'

const DEPTH = ROOM.front - ROOM.back
const CENTER_Z = (ROOM.front + ROOM.back) / 2
const WIDTH = ROOM.halfWidth * 2
const BRICK_TILE = 2.6
const GROUND = { width: 26, depth: 32, centerX: 4.5, centerZ: -10.5 } as const
export const COLUMNS = [
  [-1.55, -8],
  [1.55, -8],
  [-1.55, -14],
  [1.55, -14],
] as const
const BEAMS_Z = [-1.8, -5, -8.2, -11.4, -14.6] as const
const DUCTS = [
  { x: -1.1, y: 3.18, radius: 0.24 },
  { x: 2.6, y: 3.3, radius: 0.13 },
  { x: -4.6, y: 3.34, radius: 0.09 },
] as const

export function Shell() {
  const brick = useMemo(() => {
    const map = brickTexture()
    map.repeat.set(DEPTH / BRICK_TILE, ROOM.height / BRICK_TILE)
    return new MeshStandardMaterial({ map, roughness: 0.94 })
  }, [])

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[GROUND.centerX, 0, GROUND.centerZ]}>
        <planeGeometry args={[GROUND.width, GROUND.depth]} />
        <meshStandardMaterial
          color="#141418"
          roughness={0.3}
          metalness={0.15}
          opacity={0.84}
          transparent
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, ROOM.height, CENTER_Z]}>
        <planeGeometry args={[WIDTH, DEPTH]} />
        <meshStandardMaterial color="#08080a" roughness={1} />
      </mesh>
      <mesh
        position={[-ROOM.halfWidth, ROOM.height / 2, CENTER_Z]}
        rotation={[0, Math.PI / 2, 0]}
        material={brick}
      >
        <planeGeometry args={[DEPTH, ROOM.height]} />
      </mesh>
      {COLUMNS.map(([x, z]) => (
        <mesh key={`${x}:${z}`} position={[x, ROOM.height / 2, z]} material={concrete}>
          <boxGeometry args={[0.42, ROOM.height, 0.42]} />
        </mesh>
      ))}
      {BEAMS_Z.map((z) => (
        <mesh key={z} position={[0, ROOM.height - 0.16, z]} material={concrete}>
          <boxGeometry args={[WIDTH, 0.32, 0.3]} />
        </mesh>
      ))}
      {DUCTS.map(({ x, y, radius }) => (
        <mesh
          key={x}
          position={[x, y, CENTER_Z]}
          rotation={[Math.PI / 2, 0, 0]}
          material={blackSteel}
        >
          <cylinderGeometry args={[radius, radius, DEPTH, 20, 1, true]} />
        </mesh>
      ))}
    </group>
  )
}
