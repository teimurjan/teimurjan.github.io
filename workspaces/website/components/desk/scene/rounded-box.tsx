'use client'

import type { ThreeElements } from '@react-three/fiber'
import { useMemo } from 'react'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'

type RoundedBoxProps = Omit<ThreeElements['mesh'], 'args' | 'geometry'> & {
  args: readonly [width: number, height: number, depth: number]
  radius: number
}

const CORNER_SEGMENTS = 4

export function RoundedBox({ args: [width, height, depth], radius, ...mesh }: RoundedBoxProps) {
  const geometry = useMemo(
    () => new RoundedBoxGeometry(width, height, depth, CORNER_SEGMENTS, radius),
    [width, height, depth, radius]
  )

  return <mesh geometry={geometry} {...mesh} />
}
