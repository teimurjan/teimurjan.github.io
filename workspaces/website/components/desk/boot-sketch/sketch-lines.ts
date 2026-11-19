import { KEYBOARD_FRONT, MOUSE_POSITION, MOUSE_YAW } from '../scene/hero-desk/arrangement'
import { DESK_TOP_Y, SCREEN_CENTER, type Vec3 } from '../scene/layout'
import { KEYBOARD, MAC, MOUSE } from '../scene/macintosh/dimensions'
import { FACE_Z, SLAB_BACK_Z, bodyRect, rearRectAt, rearZAt } from '../scene/macintosh/profile'
import { type Point2, type RoundedRect, roundedRectPoints } from '../scene/rounded-rect'

export interface SketchStroke {
  points: Vec3[]
  isClosed: boolean
  isFine: boolean
}

type Place = (x: number, y: number, z: number) => Vec3
type Corner = 'topLeft' | 'topRight' | 'bottomLeft'

const CORNER_SEGMENTS = 3
const ARC_MIDPOINT_INSET = 1 - Math.SQRT1_2
const REAR_TRAVELS = [0, 0.3, 0.55, 0.8, 1] as const
const KEY_ROWS = 5
const CURSOR = { halfWidth: 0.006, halfHeight: 0.0095 } as const

const onMac: Place = (x, y, z) => [SCREEN_CENTER[0] + x, SCREEN_CENTER[1] + y, SCREEN_CENTER[2] + z]

const onKeyboard: Place = (x, y, z) => [
  KEYBOARD_FRONT[0] + x,
  DESK_TOP_Y + y * Math.cos(KEYBOARD.tilt) - z * Math.sin(KEYBOARD.tilt),
  KEYBOARD_FRONT[2] + y * Math.sin(KEYBOARD.tilt) + z * Math.cos(KEYBOARD.tilt),
]

const onMouse: Place = (x, y, z) => [
  MOUSE_POSITION[0] + x * Math.cos(MOUSE_YAW) + z * Math.sin(MOUSE_YAW),
  DESK_TOP_Y + y,
  MOUSE_POSITION[2] - x * Math.sin(MOUSE_YAW) + z * Math.cos(MOUSE_YAW),
]

const outline = (points: Vec3[]): SketchStroke => ({ points, isClosed: false, isFine: false })

const detail = (points: Vec3[], isClosed = false): SketchStroke => ({
  points,
  isClosed,
  isFine: true,
})

const ringAt = (rect: RoundedRect, z: number): Vec3[] =>
  roundedRectPoints(rect, CORNER_SEGMENTS).map(([x, y]: Point2) => onMac(x, y, z))

const cornerOf = (rect: RoundedRect, corner: Corner, z: number): Vec3 => {
  const inset = rect.radius * ARC_MIDPOINT_INSET
  const side = corner === 'topRight' ? 1 : -1
  const lift = corner === 'bottomLeft' ? -1 : 1
  return onMac(
    (rect.centerX ?? 0) + side * (rect.width / 2 - inset),
    (rect.centerY ?? 0) + lift * (rect.height / 2 - inset),
    z
  )
}

const receding = (corner: Corner) =>
  outline([
    cornerOf(bodyRect, corner, FACE_Z),
    cornerOf(bodyRect, corner, SLAB_BACK_Z),
    ...REAR_TRAVELS.map((travel) => cornerOf(rearRectAt(travel), corner, rearZAt(travel))),
  ])

const leftEdge = (rect: RoundedRect, z: number) =>
  outline([cornerOf(rect, 'topLeft', z), cornerOf(rect, 'bottomLeft', z)])

const boxSeenFromFrontLeft = (
  {
    halfWidth,
    height,
    front,
    back,
  }: { halfWidth: number; height: number; front: number; back: number },
  place: Place
): SketchStroke[] => {
  const topFrontLeft = place(-halfWidth, height, front)
  const topFrontRight = place(halfWidth, height, front)
  const topBackLeft = place(-halfWidth, height, back)
  const bottomFrontLeft = place(-halfWidth, 0, front)
  return [
    {
      ...outline([topFrontLeft, topFrontRight, place(halfWidth, height, back), topBackLeft]),
      isClosed: true,
    },
    outline([topFrontLeft, bottomFrontLeft, place(halfWidth, 0, front), topFrontRight]),
    outline([bottomFrontLeft, place(-halfWidth, 0, back), topBackLeft]),
  ]
}

const { raster, opening, slot, badge, vents, body } = MAC

const macintosh: SketchStroke[] = [
  { ...outline(ringAt(bodyRect, FACE_Z)), isClosed: true },
  receding('topLeft'),
  receding('bottomLeft'),
  leftEdge(rearRectAt(1), rearZAt(1)),
  leftEdge(bodyRect, SLAB_BACK_Z),
  { ...outline(ringAt(opening, FACE_Z)), isClosed: true },
  { ...outline(ringAt({ ...raster, radius: 0.006 }, 0)), isClosed: true },
  detail(
    ringAt(
      {
        width: slot.width,
        height: slot.height,
        radius: slot.height / 2,
        centerX: slot.x,
        centerY: slot.y,
      },
      FACE_Z
    ),
    true
  ),
  detail([
    onMac(-body.width / 2 + slot.grooveInset, slot.y, FACE_Z),
    onMac(slot.x - slot.width / 2, slot.y, FACE_Z),
  ]),
  detail([
    onMac(slot.x + slot.width / 2, slot.y, FACE_Z),
    onMac(body.width / 2 - slot.grooveInset, slot.y, FACE_Z),
  ]),
  detail(
    ringAt(
      { width: badge.size, height: badge.size, radius: 0.001, centerX: badge.x, centerY: badge.y },
      FACE_Z
    ),
    true
  ),
  ...vents.travels.map((travel) => {
    const rect = rearRectAt(travel)
    const middle = (rect.centerY ?? 0) + rect.height / 2 - vents.drop
    return detail([
      onMac(-rect.width / 2, middle + vents.height / 2, rearZAt(travel)),
      onMac(-rect.width / 2, middle - vents.height / 2, rearZAt(travel)),
    ])
  }),
]

const keyboard: SketchStroke[] = [
  ...boxSeenFromFrontLeft(
    { halfWidth: KEYBOARD.width / 2, height: KEYBOARD.height, front: 0, back: -KEYBOARD.depth },
    onKeyboard
  ),
  ...Array.from({ length: KEY_ROWS }, (_, row) => {
    const z = -KEYBOARD.depth + 0.026 + (row / (KEY_ROWS - 1)) * (KEYBOARD.depth - 0.05)
    const reach = KEYBOARD.width / 2 - 0.022
    return detail([onKeyboard(-reach, KEYBOARD.height, z), onKeyboard(reach, KEYBOARD.height, z)])
  }),
]

const mouse: SketchStroke[] = [
  ...boxSeenFromFrontLeft(
    {
      halfWidth: MOUSE.width / 2,
      height: MOUSE.height,
      front: MOUSE.depth / 2,
      back: -MOUSE.depth / 2,
    },
    onMouse
  ),
  detail([
    onMouse(-MOUSE.width / 2, MOUSE.height, -0.006),
    onMouse(MOUSE.width / 2, MOUSE.height, -0.006),
  ]),
]

export const SKETCH = {
  strokes: [...macintosh, ...keyboard, ...mouse],
  cursor: [
    onMac(-CURSOR.halfWidth, CURSOR.halfHeight, 0),
    onMac(CURSOR.halfWidth, CURSOR.halfHeight, 0),
    onMac(CURSOR.halfWidth, -CURSOR.halfHeight, 0),
    onMac(-CURSOR.halfWidth, -CURSOR.halfHeight, 0),
  ],
  noteAnchor: cornerOf(bodyRect, 'topRight', FACE_Z),
} as const
