import { type RoundedRect, insetRect } from '../rounded-rect'
import { MAC } from './dimensions'

const { body, recessDepth, frontSlabDepth, seamDepth, seamInset, rearDepth, rearTaper } = MAC

const REAR_BACK_RADIUS = 0.022

export const FACE_Z = recessDepth
export const SLAB_BACK_Z = FACE_Z - frontSlabDepth
export const REAR_FRONT_Z = SLAB_BACK_Z - seamDepth

export const bodyRect: RoundedRect = {
  width: body.width,
  height: body.height,
  radius: body.radius,
  centerY: body.centerY,
}

export const seamRect = insetRect(bodyRect, seamInset)

export const rearRectAt = (travel: number): RoundedRect => {
  const amount = travel ** 1.25
  const height = body.height * (1 - (1 - rearTaper.height) * amount)
  return {
    width: (body.width - 0.002) * (1 - (1 - rearTaper.width) * amount),
    height,
    radius: body.radius + (REAR_BACK_RADIUS - body.radius) * amount,
    centerY: body.bottom + height / 2,
  }
}

export const rearZAt = (travel: number) => REAR_FRONT_Z - rearDepth * travel
