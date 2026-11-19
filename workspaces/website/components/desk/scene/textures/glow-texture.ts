import type { CanvasTexture } from 'three'
import { canvasTexture } from './canvas-texture'

const paintRadialGlow = (context: CanvasRenderingContext2D, width: number, height: number) => {
  const glow = context.createRadialGradient(
    width / 2,
    height / 2,
    0,
    width / 2,
    height / 2,
    width / 2
  )
  glow.addColorStop(0, 'rgba(255,255,255,1)')
  glow.addColorStop(0.35, 'rgba(255,255,255,0.42)')
  glow.addColorStop(0.7, 'rgba(255,255,255,0.1)')
  glow.addColorStop(1, 'rgba(255,255,255,0)')
  context.fillStyle = glow
  context.fillRect(0, 0, width, height)
}

const paintBeamFalloff = (context: CanvasRenderingContext2D, width: number, height: number) => {
  const falloff = context.createLinearGradient(0, 0, 0, height)
  falloff.addColorStop(0, 'rgba(255,255,255,0)')
  falloff.addColorStop(0.55, 'rgba(255,255,255,0.25)')
  falloff.addColorStop(1, 'rgba(255,255,255,1)')
  context.fillStyle = falloff
  context.fillRect(0, 0, width, height)
}

const paintWindowPanes = (context: CanvasRenderingContext2D, width: number, height: number) => {
  const columns = 4
  const rows = 3
  const gap = 10
  const paneWidth = (width - gap * (columns + 1)) / columns
  const paneHeight = (height - gap * (rows + 1)) / rows
  context.filter = 'blur(5px)'
  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      context.fillStyle = `rgba(255,255,255,${0.35 + 0.65 * (row / (rows - 1))})`
      context.fillRect(
        gap + column * (paneWidth + gap),
        gap + row * (paneHeight + gap),
        paneWidth,
        paneHeight
      )
    }
  }
}

const once = (create: () => CanvasTexture) => {
  let texture: CanvasTexture | undefined
  return () => {
    texture ??= create()
    return texture
  }
}

export const radialGlowTexture = once(() => canvasTexture(256, 256, paintRadialGlow))

export const beamFalloffTexture = once(() => canvasTexture(8, 256, paintBeamFalloff))

export const windowPanesTexture = once(() => canvasTexture(512, 384, paintWindowPanes))
