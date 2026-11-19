'use client'

import { useLayoutEffect, useRef } from 'react'
import {
  type BufferGeometry,
  Color,
  type ColorRepresentation,
  Euler,
  type InstancedMesh,
  type Material,
  Matrix4,
  Quaternion,
  Vector3,
} from 'three'
import type { Vec3 } from './layout'

export interface Placement {
  position: Vec3
  rotation?: Vec3
  scale?: Vec3
  color?: ColorRepresentation
}

interface InstancedPlacementsProps {
  geometry: BufferGeometry
  material: Material
  placements: readonly Placement[]
  castShadow?: boolean
  receiveShadow?: boolean
}

const UNIT_SCALE: Vec3 = [1, 1, 1]
const NO_ROTATION: Vec3 = [0, 0, 0]

const placementMatrix = ({
  position,
  rotation = NO_ROTATION,
  scale = UNIT_SCALE,
}: Placement): Matrix4 =>
  new Matrix4().compose(
    new Vector3(...position),
    new Quaternion().setFromEuler(new Euler(...rotation)),
    new Vector3(...scale)
  )

export const nestPlacement = (parent: Placement, child: Placement): Placement => {
  const matrix = placementMatrix(parent).multiply(placementMatrix(child))
  const position = new Vector3()
  const quaternion = new Quaternion()
  const scale = new Vector3()
  matrix.decompose(position, quaternion, scale)
  const rotation = new Euler().setFromQuaternion(quaternion)
  return {
    position: [position.x, position.y, position.z],
    rotation: [rotation.x, rotation.y, rotation.z],
    scale: [scale.x, scale.y, scale.z],
    color: child.color ?? parent.color,
  }
}

export function InstancedPlacements({
  geometry,
  material,
  placements,
  castShadow,
  receiveShadow,
}: InstancedPlacementsProps) {
  const meshRef = useRef<InstancedMesh>(null)

  useLayoutEffect(() => {
    const mesh = meshRef.current
    if (!mesh) return
    placements.forEach((placement, index) => {
      mesh.setMatrixAt(index, placementMatrix(placement))
      if (placement.color !== undefined) mesh.setColorAt(index, new Color(placement.color))
    })
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
    mesh.computeBoundingSphere()
  }, [placements])

  return (
    <instancedMesh
      ref={meshRef}
      args={[geometry, material, placements.length]}
      castShadow={castShadow}
      receiveShadow={receiveShadow}
    />
  )
}
