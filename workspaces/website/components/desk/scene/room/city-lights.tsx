'use client'

import { useFrame } from '@react-three/fiber'
import { useMemo } from 'react'
import {
  AdditiveBlending,
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  type PerspectiveCamera,
  ShaderMaterial,
} from 'three'
import type { Vec3 } from '../layout'
import { between, pick, seededRandom } from '../random'

interface CityLightsProps {
  position: Vec3
  span: number
  seed: number
}

const WINDOW_SIZE = 0.1
const BAND = { bottom: 0.6, top: 2.4 } as const
const DENSITY_PER_METER = 0.7
const TINTS = ['#ffd9a0', '#ffe9c8', '#cfe3ff', '#ffc27a'].map((tint) => new Color(tint))
const BEACON = new Color('#ff4a3a')
const BEACON_SHARE = 0.06

const VERTEX_SHADER = `
  attribute float phase;
  attribute float rate;
  attribute vec3 tint;
  uniform float time;
  uniform float pixelsPerUnit;
  varying vec3 vTint;
  varying float vLit;

  void main() {
    float cycle = fract(time * rate + phase);
    vLit = smoothstep(0.0, 0.03, cycle) * (1.0 - smoothstep(0.45, 0.48, cycle));
    vTint = tint;
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = ${WINDOW_SIZE} * pixelsPerUnit / -viewPosition.z;
    gl_Position = projectionMatrix * viewPosition;
  }
`

const FRAGMENT_SHADER = `
  varying vec3 vTint;
  varying float vLit;

  void main() {
    gl_FragColor = vec4(vTint * 2.4 * vLit, 1.0);
  }
`

const scatterLights = (span: number, seed: number) => {
  const random = seededRandom(seed)
  const count = Math.round(span * DENSITY_PER_METER)
  const lights = Array.from({ length: count }, () => {
    const isBeacon = random() < BEACON_SHARE
    return {
      position: [between(random, -span / 2, span / 2), between(random, BAND.bottom, BAND.top), 0],
      phase: random(),
      rate: isBeacon ? 0.8 : between(random, 0.02, 0.09),
      tint: isBeacon ? BEACON : pick(random, TINTS),
    }
  })
  const geometry = new BufferGeometry()
  geometry.setAttribute(
    'position',
    new Float32BufferAttribute(
      lights.flatMap((light) => light.position),
      3
    )
  )
  geometry.setAttribute(
    'phase',
    new Float32BufferAttribute(
      lights.map((light) => light.phase),
      1
    )
  )
  geometry.setAttribute(
    'rate',
    new Float32BufferAttribute(
      lights.map((light) => light.rate),
      1
    )
  )
  geometry.setAttribute(
    'tint',
    new Float32BufferAttribute(
      lights.flatMap((light) => light.tint.toArray()),
      3
    )
  )
  return geometry
}

export function CityLights({ position, span, seed }: CityLightsProps) {
  const geometry = useMemo(() => scatterLights(span, seed), [span, seed])
  const material = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        uniforms: { time: { value: 0 }, pixelsPerUnit: { value: 1 } },
        blending: AdditiveBlending,
        transparent: true,
        depthWrite: false,
      }),
    []
  )

  useFrame(({ clock, camera, gl }) => {
    const { fov } = camera as PerspectiveCamera
    material.uniforms.time.value = clock.elapsedTime
    material.uniforms.pixelsPerUnit.value =
      gl.domElement.height / (2 * Math.tan((fov * Math.PI) / 360))
  })

  return (
    <points position={position} geometry={geometry} material={material} frustumCulled={false} />
  )
}
