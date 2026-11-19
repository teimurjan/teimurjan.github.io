'use client'

import { useThree } from '@react-three/fiber'
import { useCallback, useRef } from 'react'

export const MAX_PIXEL_RATIO = 1.5

const MIN_PIXEL_RATIO = 0.75
const PIXEL_RATIO_STEP = 0.25
const MIN_SAMPLE_FRAMES = 20
const SLOW_FRAME_SECONDS = 1 / 42
const VERY_SLOW_FRAME_SECONDS = 1 / 30
const UNUSABLE_FRAME_SECONDS = 1 / 18
const HITCH_SECONDS = 0.25

interface Sample {
  frames: number
  slowFrames: number
  verySlowFrames: number
  unusableFrames: number
}

const EMPTY_SAMPLE: Sample = { frames: 0, slowFrames: 0, verySlowFrames: 0, unusableFrames: 0 }

const isMostOf = (count: number, { frames }: Sample) => count > frames / 2

export function useAdaptiveResolution(onUnderpowered: () => void) {
  const setDpr = useThree((state) => state.setDpr)
  const pixelRatio = useRef(Math.min(window.devicePixelRatio, MAX_PIXEL_RATIO))
  const sample = useRef<Sample>(EMPTY_SAMPLE)

  const recordFrame = useCallback((frameSeconds: number) => {
    if (frameSeconds > HITCH_SECONDS) return
    const { frames, slowFrames, verySlowFrames, unusableFrames } = sample.current
    sample.current = {
      frames: frames + 1,
      slowFrames: slowFrames + (frameSeconds > SLOW_FRAME_SECONDS ? 1 : 0),
      verySlowFrames: verySlowFrames + (frameSeconds > VERY_SLOW_FRAME_SECONDS ? 1 : 0),
      unusableFrames: unusableFrames + (frameSeconds > UNUSABLE_FRAME_SECONDS ? 1 : 0),
    }
  }, [])

  const settle = useCallback(() => {
    const measured = sample.current
    sample.current = EMPTY_SAMPLE
    if (measured.frames < MIN_SAMPLE_FRAMES || !isMostOf(measured.slowFrames, measured)) return
    if (pixelRatio.current <= MIN_PIXEL_RATIO) {
      if (isMostOf(measured.unusableFrames, measured)) onUnderpowered()
      return
    }
    const steps = isMostOf(measured.verySlowFrames, measured) ? 2 : 1
    pixelRatio.current = Math.max(MIN_PIXEL_RATIO, pixelRatio.current - steps * PIXEL_RATIO_STEP)
    setDpr(pixelRatio.current)
  }, [setDpr, onUnderpowered])

  return { recordFrame, settle }
}
