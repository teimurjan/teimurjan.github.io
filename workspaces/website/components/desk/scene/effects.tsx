'use client'

import { useFrame } from '@react-three/fiber'
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  ToneMapping,
  Vignette,
} from '@react-three/postprocessing'
import { BlendFunction, type DepthOfFieldEffect, ToneMappingMode } from 'postprocessing'
import { useRef } from 'react'
import { HalfFloatType, Vector3 } from 'three'
import { SCREEN_CENTER } from './layout'

const FOCUS_POINT = new Vector3(...SCREEN_CENTER)
const NEAR_FOCUS = { distance: 0.24, range: 0.9, bokeh: 3.2 }
const FAR_FOCUS = { distance: 0.94, range: 9, bokeh: 1.5 }

const mix = (from: number, to: number, amount: number) => from + (to - from) * amount

export function Effects() {
  const depthOfField = useRef<DepthOfFieldEffect>(null)

  useFrame(({ camera }) => {
    const effect = depthOfField.current
    if (!effect) return
    const distance = camera.position.distanceTo(FOCUS_POINT)
    const pullBack = Math.min(
      Math.max((distance - NEAR_FOCUS.distance) / (FAR_FOCUS.distance - NEAR_FOCUS.distance), 0),
      1
    )
    effect.cocMaterial.focusDistance = distance
    effect.cocMaterial.focusRange = mix(NEAR_FOCUS.range, FAR_FOCUS.range, pullBack)
    effect.bokehScale = mix(NEAR_FOCUS.bokeh, FAR_FOCUS.bokeh, pullBack)
  })

  return (
    <EffectComposer multisampling={4} frameBufferType={HalfFloatType}>
      <DepthOfField
        ref={depthOfField}
        focusDistance={NEAR_FOCUS.distance}
        focusRange={NEAR_FOCUS.range}
        bokehScale={NEAR_FOCUS.bokeh}
        resolutionScale={0.5}
      />
      <Bloom
        mipmapBlur
        luminanceThreshold={1.1}
        luminanceSmoothing={0.25}
        intensity={0.6}
        radius={0.72}
      />
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      <Vignette offset={0.3} darkness={0.7} />
      <Noise blendFunction={BlendFunction.SOFT_LIGHT} opacity={0.22} />
    </EffectComposer>
  )
}
