import { RepeatWrapping } from 'three'
import { between, seededRandom } from '../random'
import { canvasTexture } from './canvas-texture'

export const woodTexture = (base: string, grain: string, seed = 7) => {
  const texture = canvasTexture(1024, 512, (context, width, height) => {
    const random = seededRandom(seed)
    context.fillStyle = base
    context.fillRect(0, 0, width, height)
    context.strokeStyle = grain
    for (let streak = 0; streak < 260; streak += 1) {
      const y = random() * height
      const wobble = between(random, 2, 9)
      context.globalAlpha = between(random, 0.04, 0.22)
      context.lineWidth = between(random, 0.6, 2.4)
      context.beginPath()
      context.moveTo(0, y)
      context.bezierCurveTo(
        width * 0.3,
        y + between(random, -wobble, wobble),
        width * 0.7,
        y + between(random, -wobble, wobble),
        width,
        y + between(random, -wobble, wobble)
      )
      context.stroke()
    }
  })
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  return texture
}
