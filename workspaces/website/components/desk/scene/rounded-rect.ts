export interface RoundedRect {
  width: number
  height: number
  radius: number
  centerX?: number
  centerY?: number
}

export type Point2 = readonly [x: number, y: number]

const CORNER_SEGMENTS = 8
const MIN_RADIUS = 0.0004

export const insetRect = (rect: RoundedRect, inset: number): RoundedRect => ({
  ...rect,
  width: rect.width - inset * 2,
  height: rect.height - inset * 2,
  radius: Math.max(rect.radius - inset, MIN_RADIUS),
})

export const roundedRectPoints = (
  { width, height, radius, centerX = 0, centerY = 0 }: RoundedRect,
  cornerSegments = CORNER_SEGMENTS
): Point2[] => {
  const halfWidth = width / 2
  const halfHeight = height / 2
  const cornerRadius = Math.min(radius, halfWidth, halfHeight)
  const cornerCenters = [
    [halfWidth - cornerRadius, halfHeight - cornerRadius],
    [-halfWidth + cornerRadius, halfHeight - cornerRadius],
    [-halfWidth + cornerRadius, -halfHeight + cornerRadius],
    [halfWidth - cornerRadius, -halfHeight + cornerRadius],
  ]
  return cornerCenters.flatMap(([cornerX, cornerY], cornerIndex) =>
    Array.from({ length: cornerSegments + 1 }, (_, step): Point2 => {
      const angle = (cornerIndex + step / cornerSegments) * (Math.PI / 2)
      return [
        centerX + cornerX + Math.cos(angle) * cornerRadius,
        centerY + cornerY + Math.sin(angle) * cornerRadius,
      ]
    })
  )
}
