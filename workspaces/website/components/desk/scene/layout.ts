import { MAC } from './macintosh/dimensions'

export type Vec3 = readonly [x: number, y: number, z: number]

export const DESK_TOP_Y = 0.74

export const SCREEN_CENTER: Vec3 = [0, DESK_TOP_Y + MAC.screenCenterHeight, 0]

export const ROOM = {
  halfWidth: 6.5,
  back: -15,
  front: 3.5,
  height: 3.6,
} as const
