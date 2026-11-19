import { type CanvasTexture, RepeatWrapping } from 'three'
import { type Random, between, pick, seededRandom } from '../random'
import { canvasTexture } from './canvas-texture'

interface TowerLayer {
  count: number
  silhouette: string
  minHeight: number
  maxHeight: number
  litChance: number
  glow: number
}

const WINDOW_TINTS = ['#ffd9a0', '#ffe9c8', '#cfe3ff', '#ffc27a', '#9fd8e8'] as const
const LAYERS: readonly TowerLayer[] = [
  {
    count: 22,
    silhouette: '#111a33',
    minHeight: 0.25,
    maxHeight: 0.62,
    litChance: 0.14,
    glow: 0.5,
  },
  { count: 14, silhouette: '#0a1124', minHeight: 0.2, maxHeight: 0.82, litChance: 0.2, glow: 0.8 },
  { count: 8, silhouette: '#050914', minHeight: 0.1, maxHeight: 0.42, litChance: 0.26, glow: 1 },
]
const CELL = { width: 13, height: 17, gapX: 9, gapY: 13 } as const

const paintSky = (context: CanvasRenderingContext2D, width: number, height: number) => {
  const sky = context.createLinearGradient(0, 0, 0, height)
  sky.addColorStop(0, '#04060f')
  sky.addColorStop(0.55, '#0c1630')
  sky.addColorStop(0.85, '#22284a')
  sky.addColorStop(1, '#3a2c44')
  context.fillStyle = sky
  context.fillRect(0, 0, width, height)
}

const paintTower = (
  context: CanvasRenderingContext2D,
  random: Random,
  layer: TowerLayer,
  left: number,
  towerWidth: number,
  canvasHeight: number
) => {
  const towerHeight = between(random, layer.minHeight, layer.maxHeight) * canvasHeight
  const top = canvasHeight - towerHeight
  context.globalAlpha = 1
  context.fillStyle = layer.silhouette
  context.fillRect(left, top, towerWidth, towerHeight)

  const columns = Math.floor((towerWidth - CELL.gapX) / (CELL.width + CELL.gapX))
  const rows = Math.floor((towerHeight - CELL.gapY) / (CELL.height + CELL.gapY))
  const floorIsDark = Array.from({ length: rows }, () => random() < 0.3)
  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      if (floorIsDark[row] || random() > layer.litChance) continue
      context.globalAlpha = between(random, 0.35, 1) * layer.glow
      context.fillStyle = pick(random, WINDOW_TINTS)
      context.fillRect(
        left + CELL.gapX + column * (CELL.width + CELL.gapX),
        top + CELL.gapY + row * (CELL.height + CELL.gapY),
        CELL.width,
        CELL.height
      )
    }
  }

  if (random() < 0.22) {
    context.globalAlpha = 1
    context.fillStyle = '#ff5a4a'
    context.fillRect(left + towerWidth / 2 - 4, top - 22, 9, 9)
  }
}

const paintedSkylines = new Map<string, CanvasTexture>()

const paintSkyline = (seed: number) =>
  canvasTexture(2048, 1024, (context, width, height) => {
    const random = seededRandom(seed)
    paintSky(context, width, height)
    for (const layer of LAYERS) {
      for (let tower = 0; tower < layer.count; tower += 1) {
        const towerWidth = between(random, 90, 290)
        paintTower(context, random, layer, random() * width - towerWidth / 2, towerWidth, height)
      }
    }
    context.globalAlpha = 1
  })

const repeatAcross = (texture: CanvasTexture, repeats: number) => {
  texture.wrapS = RepeatWrapping
  texture.repeat.x = repeats
  return texture
}

export const skylineTexture = (seed: number, repeats: number): CanvasTexture => {
  const key = `${seed}:${repeats}`
  const painted = paintedSkylines.get(key) ?? repeatAcross(paintSkyline(seed), repeats)
  paintedSkylines.set(key, painted)
  return painted
}
