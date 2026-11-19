'use client'

import { AdditiveBlending, type ColorRepresentation, type Texture } from 'three'
import type { Vec3 } from './layout'
import { radialGlowTexture } from './textures/glow-texture'

interface GlowProps {
  position: Vec3
  rotation?: Vec3
  size: readonly [width: number, height: number]
  color: ColorRepresentation
  opacity: number
  texture?: Texture
}

const FACING_UP: Vec3 = [-Math.PI / 2, 0, 0]

export function Glow({ position, rotation = FACING_UP, size, color, opacity, texture }: GlowProps) {
  return (
    <mesh position={position} rotation={rotation} renderOrder={2}>
      <planeGeometry args={[size[0], size[1]]} />
      <meshBasicMaterial
        map={texture ?? radialGlowTexture()}
        color={color}
        opacity={opacity}
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
        toneMapped={false}
      />
    </mesh>
  )
}
