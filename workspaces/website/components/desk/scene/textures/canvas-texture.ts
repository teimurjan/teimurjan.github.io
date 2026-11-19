import { CanvasTexture, SRGBColorSpace } from 'three'

type Paint = (context: CanvasRenderingContext2D, width: number, height: number) => void

export const canvasTexture = (width: number, height: number, paint: Paint): CanvasTexture => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d')
  if (!context) throw new Error('2D canvas context is unavailable')
  paint(context, width, height)
  const texture = new CanvasTexture(canvas)
  texture.colorSpace = SRGBColorSpace
  texture.anisotropy = 8
  return texture
}
