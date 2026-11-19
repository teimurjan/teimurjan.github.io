import { type Random, between, pick, seededRandom } from '../random'
import { canvasTexture } from './canvas-texture'

const SYNTAX_TINTS = ['#7fd4c1', '#f2c57c', '#c9a7ff', '#8fb8ff', '#e6e1d3', '#ff9c8a'] as const
const LINE_HEIGHT = 11

const paintCodeLine = (
  context: CanvasRenderingContext2D,
  random: Random,
  top: number,
  rightEdge: number
) => {
  const tokens = Math.floor(between(random, 1, 5))
  let left = 52 + Math.floor(random() * 4) * 14
  for (let token = 0; token < tokens; token += 1) {
    const tokenWidth = between(random, 14, 62)
    if (left + tokenWidth > rightEdge) return
    context.fillStyle = pick(random, SYNTAX_TINTS)
    context.fillRect(left, top, tokenWidth, 4)
    left += tokenWidth + 7
  }
}

export const codeScreenTexture = (seed: number) =>
  canvasTexture(384, 224, (context, width, height) => {
    const random = seededRandom(seed)
    context.fillStyle = '#0b1020'
    context.fillRect(0, 0, width, height)
    context.fillStyle = '#131a30'
    context.fillRect(0, 0, 40, height)
    context.fillRect(0, 0, width, 14)
    context.globalAlpha = 0.9
    for (let top = 24; top < height - 10; top += LINE_HEIGHT) {
      if (random() < 0.16) continue
      paintCodeLine(context, random, top, width - 14)
    }
    context.globalAlpha = 1
  })
