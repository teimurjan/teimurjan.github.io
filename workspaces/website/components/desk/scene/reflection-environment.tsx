'use client'

import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import {
  CircleGeometry,
  Color,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  PMREMGenerator,
  PlaneGeometry,
  Scene,
} from 'three'
import type { Vec3 } from './layout'

interface Panel {
  shape: 'rect' | 'circle'
  color: string
  intensity: number
  position: Vec3
  size: readonly [width: number, height: number]
}

const INTENSITY = 0.55
const SURROUNDINGS = '#020203'
const FOCUS: Vec3 = [0, 1, 0]
const PANELS: readonly Panel[] = [
  { shape: 'rect', color: '#ffd2a1', intensity: 5, position: [-3, 4, 3], size: [5, 3] },
  { shape: 'rect', color: '#7fa2ff', intensity: 2.2, position: [7, 2.5, -9], size: [8, 4] },
  { shape: 'circle', color: '#ffbf80', intensity: 7, position: [4, 3, -2], size: [1.4, 1.4] },
  { shape: 'rect', color: '#f4ead6', intensity: 0.7, position: [0, 1, 5], size: [4, 2.5] },
]

const buildSurroundings = () => {
  const surroundings = new Scene()
  surroundings.background = new Color(SURROUNDINGS)
  for (const { shape, color, intensity, position, size } of PANELS) {
    const panel = new Mesh(
      shape === 'circle' ? new CircleGeometry(0.5, 32) : new PlaneGeometry(1, 1),
      new MeshBasicMaterial({
        color: new Color(color).multiplyScalar(intensity),
        side: DoubleSide,
        toneMapped: false,
      })
    )
    panel.position.set(...position)
    panel.scale.set(size[0], size[1], 1)
    panel.lookAt(...FOCUS)
    surroundings.add(panel)
  }
  return surroundings
}

const release = (surroundings: Scene) => {
  for (const child of surroundings.children) {
    const panel = child as Mesh<PlaneGeometry | CircleGeometry, MeshBasicMaterial>
    panel.geometry.dispose()
    panel.material.dispose()
  }
}

export function ReflectionEnvironment() {
  const gl = useThree((state) => state.gl)
  const scene = useThree((state) => state.scene)

  useEffect(() => {
    const surroundings = buildSurroundings()
    const generator = new PMREMGenerator(gl)
    const reflections = generator.fromScene(surroundings)
    scene.environment = reflections.texture
    scene.environmentIntensity = INTENSITY
    generator.dispose()
    release(surroundings)

    return () => {
      scene.environment = null
      reflections.dispose()
    }
  }, [gl, scene])

  return null
}
