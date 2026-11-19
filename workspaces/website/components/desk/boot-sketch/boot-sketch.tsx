import type { CSSProperties } from 'react'
import { poseAt } from '../scene/framing'
import type { Vec3 } from '../scene/layout'
import { projectorFor } from '../scene/pinhole'
import type { Point2 } from '../scene/rounded-rect'
import { SKETCH, type SketchStroke } from './sketch-lines'

interface Box {
  left: number
  top: number
  width: number
  height: number
}

const UNITS_PER_VIEWPORT_HEIGHT = 100
const HALF_CANVAS = UNITS_PER_VIEWPORT_HEIGHT / 2
const STROKE_STAGGER_SECONDS = 0.03
const STROKE_PADDING = 0.5
const HAND_WOBBLE = 0.16
const DRAW_SECONDS = { base: 0.28, perUnit: 0.012, min: 0.3, max: 0.7 } as const
const NOTE = { arrow: { x: 2, y: -7, width: 11, height: 7 }, text: { x: 12.6, y: -7.4 } } as const
const OPENING_POSE = poseAt(
  { viewportWidth: 1, viewportHeight: 1, slotCenterX: 0.5, slotCenterY: 0.5, slotHeight: 1 },
  0,
  { x: 0, y: 0 }
)
const project = projectorFor(OPENING_POSE)

const toSketch = (point: Vec3): Point2 => {
  const [x, y] = project(point)
  return [x * UNITS_PER_VIEWPORT_HEIGHT, y * UNITS_PER_VIEWPORT_HEIGHT]
}

const wobble = ([x, y]: Point2): Point2 => [
  x + HAND_WOBBLE * Math.sin(0.9 * y + 1.7 * Math.sin(0.31 * x)),
  y + HAND_WOBBLE * Math.sin(0.8 * x + 1.3 * Math.sin(0.37 * y) + 2),
]

const midpoint = (from: Point2, to: Point2): Point2 => [
  (from[0] + to[0]) / 2,
  (from[1] + to[1]) / 2,
]

const written = ([x, y]: Point2) => `${x.toFixed(2)} ${y.toFixed(2)}`

const boxAround = (points: readonly Point2[], padding: number): Box => {
  const xs = points.map(([x]) => x)
  const ys = points.map(([, y]) => y)
  const left = Math.min(...xs) - padding
  const top = Math.min(...ys) - padding
  return {
    left,
    top,
    width: Math.max(...xs) + padding - left,
    height: Math.max(...ys) + padding - top,
  }
}

const placed = ({ left, top, width, height }: Box): CSSProperties => ({
  left: `${(left + HALF_CANVAS).toFixed(2)}%`,
  top: `${(top + HALF_CANVAS).toFixed(2)}%`,
  width: `${width.toFixed(2)}%`,
  height: `${height.toFixed(2)}%`,
})

const viewBoxOf = ({ left, top, width, height }: Box) =>
  [left, top, width, height].map((value) => value.toFixed(2)).join(' ')

const handDrawn = ({ points, isClosed, isFine }: SketchStroke, order: number) => {
  const flat = points.map(toSketch)
  const route = isClosed ? [...flat, flat[0]] : flat
  const stops = route.map(wobble)
  const bends = route.slice(1).map((end, index) => wobble(midpoint(route[index], end)))
  const box = boxAround([...stops, ...bends], STROKE_PADDING)
  const reach = Math.max(box.width, box.height)
  const drawSeconds = Math.min(
    Math.max(DRAW_SECONDS.base + reach * DRAW_SECONDS.perUnit, DRAW_SECONDS.min),
    DRAW_SECONDS.max
  )
  return {
    path: `M${written(stops[0])}${bends.map((bend, index) => `Q${written(bend)} ${written(stops[index + 1])}`).join('')}`,
    viewBox: viewBoxOf(box),
    axis: box.width >= box.height ? 'x' : 'y',
    isFine,
    style: {
      ...placed(box),
      zIndex: SKETCH.strokes.length - order,
      '--delay': `${(order * STROKE_STAGGER_SECONDS).toFixed(3)}s`,
      '--draw': `${drawSeconds.toFixed(2)}s`,
    } as CSSProperties,
  }
}

const STROKES = SKETCH.strokes.map(handDrawn)
const CURSOR_CORNERS = SKETCH.cursor.map(toSketch)
const CURSOR_BOX = boxAround(CURSOR_CORNERS, 0)
const [NOTE_X, NOTE_Y] = toSketch(SKETCH.noteAnchor)
const ARROW_BOX: Box = {
  left: NOTE_X + NOTE.arrow.x,
  top: NOTE_Y + NOTE.arrow.y,
  width: NOTE.arrow.width,
  height: NOTE.arrow.height,
}
const PLACEMENT: CSSProperties = {
  left: `${50 - OPENING_POSE.viewOffsetX * 100}vw`,
  top: `${50 - OPENING_POSE.viewOffsetY * 100}vh`,
}

export function BootSketch() {
  return (
    <div className="boot-sketch" style={PLACEMENT} role="status" aria-label="Starting up">
      {STROKES.map(({ path, viewBox, axis, isFine, style }) => (
        <div key={path} className="boot-sketch-stroke" data-axis={axis} style={style}>
          <svg viewBox={viewBox} aria-hidden="true">
            <path d={path} data-fine={isFine} />
          </svg>
          <i className="boot-sketch-cover" />
        </div>
      ))}
      <svg
        className="boot-sketch-cursor"
        viewBox={viewBoxOf(CURSOR_BOX)}
        style={placed(CURSOR_BOX)}
        aria-hidden="true"
      >
        <path d={`M${CURSOR_CORNERS.map(written).join('L')}Z`} />
      </svg>
      <svg
        className="boot-sketch-note"
        viewBox={`0 0 ${NOTE.arrow.width} ${NOTE.arrow.height}`}
        style={placed(ARROW_BOX)}
        aria-hidden="true"
      >
        <path d="M9.6 1.6C6.4 0.4 2.6 2.4 0.6 6.1M0.3 3.4L0.5 6.3L3.2 5.5" data-fine />
      </svg>
      <div
        className="boot-sketch-note boot-sketch-caption font-hand"
        style={{
          left: `${(NOTE_X + NOTE.text.x + HALF_CANVAS).toFixed(2)}%`,
          top: `${(NOTE_Y + NOTE.text.y + HALF_CANVAS).toFixed(2)}%`,
        }}
        aria-hidden="true"
      >
        booting…
      </div>
    </div>
  )
}
