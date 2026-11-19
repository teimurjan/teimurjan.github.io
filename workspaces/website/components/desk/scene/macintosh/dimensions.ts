const raster = { width: 0.186, height: 0.124 }
const glassMargin = 0.0045
const recessRun = 0.0055
const recessDepth = 0.0105
const sideBorder = 0.014
const topBorder = 0.015
const chin = 0.132
const footHeight = 0.004

const glass = {
  width: raster.width + glassMargin * 2,
  height: raster.height + glassMargin * 2,
  radius: 0.009,
}
const opening = {
  width: glass.width + recessRun * 2,
  height: glass.height + recessRun * 2,
  radius: 0.014,
}
const bodyTop = opening.height / 2 + topBorder
const bodyBottom = -opening.height / 2 - chin
const bodyWidth = opening.width + sideBorder * 2

export const MAC = {
  raster,
  glass,
  opening,
  recessDepth,
  footHeight,
  chin,
  body: {
    width: bodyWidth,
    height: bodyTop - bodyBottom,
    top: bodyTop,
    bottom: bodyBottom,
    centerY: (bodyTop + bodyBottom) / 2,
    radius: 0.011,
    edgeRound: 0.0035,
  },
  frontSlabDepth: 0.03,
  seamDepth: 0.0028,
  seamInset: 0.0035,
  rearDepth: 0.212,
  rearTaper: { width: 0.8, height: 0.86 },
  screenCenterHeight: footHeight - bodyBottom,
  slot: {
    x: bodyWidth * 0.17,
    y: -opening.height / 2 - chin * 0.6,
    width: 0.094,
    height: 0.0054,
    grooveInset: 0.007,
  },
  badge: { x: -bodyWidth / 2 + 0.024, y: bodyBottom + 0.026, size: 0.0125 },
  vents: { travels: [0.42, 0.5, 0.58, 0.66, 0.74], drop: 0.075, height: 0.085 },
} as const

export const KEYBOARD = { width: 0.326, depth: 0.134, height: 0.022, tilt: 0.09 } as const

export const MOUSE = { width: 0.056, height: 0.024, depth: 0.092 } as const
