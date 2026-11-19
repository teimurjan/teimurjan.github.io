import { RepeatWrapping } from 'three'
import { between, seededRandom } from '../random'
import { canvasTexture } from './canvas-texture'

const BRICK = { width: 128, height: 40, mortar: 5 } as const

export const brickTexture = () => {
  const texture = canvasTexture(1024, 1024, (context, width, height) => {
    const random = seededRandom(23)
    context.fillStyle = '#100c0a'
    context.fillRect(0, 0, width, height)
    const rows = Math.ceil(height / BRICK.height)
    const columns = Math.ceil(width / BRICK.width) + 1
    for (let row = 0; row < rows; row += 1) {
      const stagger = row % 2 === 0 ? 0 : BRICK.width / 2
      for (let column = 0; column < columns; column += 1) {
        const lightness = between(random, 12, 23)
        context.fillStyle = `hsl(${between(random, 8, 22)} ${between(random, 26, 44)}% ${lightness}%)`
        context.fillRect(
          column * BRICK.width - stagger + BRICK.mortar / 2,
          row * BRICK.height + BRICK.mortar / 2,
          BRICK.width - BRICK.mortar,
          BRICK.height - BRICK.mortar
        )
      }
    }
  })
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  return texture
}
