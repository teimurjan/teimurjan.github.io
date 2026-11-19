import type { Placement } from '../instanced-placements'
import type { Vec3 } from '../layout'
import { between, seededRandom } from '../random'

export const BENCH = { width: 2.8, depth: 1.5, height: 0.74, thickness: 0.04 } as const
export const PENDANT_HEIGHT = 1.8

interface Seat {
  chair: Placement
  monitor: Placement | null
  isMonitorLit: boolean
}

interface Pendant {
  position: Vec3
  isLit: boolean
  castsLight: boolean
}

const BENCH_CENTERS: readonly Vec3[] = [
  [3.2, 0, -3.4],
  [3.2, 0, -6.6],
  [3.2, 0, -9.8],
  [3.2, 0, -13],
  [-3.4, 0, -9.6],
  [-3.4, 0, -12.9],
]
const SEAT_OFFSETS_X = [-0.72, 0.72] as const
const SIDES = [1, -1] as const
const LIT_PENDANTS = new Set([1, 3, 4, 7, 8, 11])
const LIGHT_CASTING_PENDANTS = new Set([1, 3, 8])
const LIT_MONITOR_SEATS = new Set([2, 6, 8, 14, 18, 20])

const random = seededRandom(404)

const seatAt = (
  [benchX, , benchZ]: Vec3,
  offsetX: number,
  side: 1 | -1,
  isMonitorLit: boolean
): Seat => {
  const pushedBack = between(random, 0.28, 0.62)
  const facing = side === 1 ? Math.PI : 0
  const hasMonitor = isMonitorLit || random() < 0.82
  return {
    chair: {
      position: [
        benchX + offsetX + between(random, -0.12, 0.12),
        0,
        benchZ + side * (BENCH.depth / 2 + pushedBack),
      ],
      rotation: [0, facing + between(random, -0.7, 0.7), 0],
    },
    monitor: hasMonitor
      ? {
          position: [
            benchX + offsetX + between(random, -0.08, 0.08),
            BENCH.height,
            benchZ + side * 0.2,
          ],
          rotation: [0, (side === 1 ? 0 : Math.PI) + between(random, -0.16, 0.16), 0],
        }
      : null,
    isMonitorLit,
  }
}

const SEATS: readonly Seat[] = BENCH_CENTERS.flatMap((center) =>
  SEAT_OFFSETS_X.flatMap((offsetX) => SIDES.map((side) => ({ center, offsetX, side })))
).map(({ center, offsetX, side }, seat) =>
  seatAt(center, offsetX, side, LIT_MONITOR_SEATS.has(seat))
)

export const BENCHES: readonly Placement[] = BENCH_CENTERS.map((position) => ({ position }))

export const CHAIRS: readonly Placement[] = SEATS.map((seat) => seat.chair)

export const DARK_MONITORS: readonly Placement[] = SEATS.flatMap((seat) =>
  seat.monitor && !seat.isMonitorLit ? [seat.monitor] : []
)

export const LIT_MONITORS: readonly Placement[] = SEATS.flatMap((seat) =>
  seat.monitor && seat.isMonitorLit ? [seat.monitor] : []
)

export const PENDANTS: readonly Pendant[] = BENCH_CENTERS.flatMap(([benchX, , benchZ], bench) =>
  SEAT_OFFSETS_X.map((offsetX, slot) => {
    const index = bench * SEAT_OFFSETS_X.length + slot
    return {
      position: [benchX + offsetX, PENDANT_HEIGHT, benchZ] as Vec3,
      isLit: LIT_PENDANTS.has(index),
      castsLight: LIGHT_CASTING_PENDANTS.has(index),
    }
  })
)
