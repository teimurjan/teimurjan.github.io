'use client'

import type { ThreeElements } from '@react-three/fiber'
import { useMemo } from 'react'
import { Object3D } from 'three'
import type { Vec3 } from './layout'

type AimedSpotLightProps = Omit<ThreeElements['spotLight'], 'target'> & { aimAt: Vec3 }

export function AimedSpotLight({ aimAt, ...light }: AimedSpotLightProps) {
  const target = useMemo(() => new Object3D(), [])

  return (
    <>
      <spotLight target={target} {...light} />
      <primitive object={target} position={aimAt} />
    </>
  )
}
