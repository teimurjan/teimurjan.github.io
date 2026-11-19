'use client'

import { useMemo } from 'react'
import { BoxGeometry } from 'three'
import { InstancedPlacements, type Placement, nestPlacement } from '../instanced-placements'
import { blackSteel, charcoalFabric, paleWood } from '../materials'
import { BENCH, BENCHES } from './workstations'

const LEG = 0.045
const LEG_HEIGHT = BENCH.height - BENCH.thickness
const LEG_X = BENCH.width / 2 - 0.16
const LEG_Z = BENCH.depth / 2 - 0.1
const DIVIDER_HEIGHT = 0.3

const TOP: Placement = { position: [0, BENCH.height - BENCH.thickness / 2, 0] }
const DIVIDER: Placement = { position: [0, BENCH.height + DIVIDER_HEIGHT / 2, 0] }
const LEGS: Placement[] = [-LEG_X, LEG_X].flatMap((x) =>
  [-LEG_Z, LEG_Z].map((z) => ({ position: [x, LEG_HEIGHT / 2, z] as const }))
)
const RAILS: Placement[] = [-LEG_X, LEG_X].map((x) => ({ position: [x, 0.12, 0] as const }))

export function Benches() {
  const geometry = useMemo(
    () => ({
      top: new BoxGeometry(BENCH.width, BENCH.thickness, BENCH.depth),
      divider: new BoxGeometry(BENCH.width - 0.3, DIVIDER_HEIGHT, 0.03),
      leg: new BoxGeometry(LEG, LEG_HEIGHT, LEG),
      rail: new BoxGeometry(LEG, LEG, LEG_Z * 2),
    }),
    []
  )
  const placements = useMemo(
    () => ({
      tops: BENCHES.map((bench) => nestPlacement(bench, TOP)),
      dividers: BENCHES.map((bench) => nestPlacement(bench, DIVIDER)),
      legs: BENCHES.flatMap((bench) => LEGS.map((leg) => nestPlacement(bench, leg))),
      rails: BENCHES.flatMap((bench) => RAILS.map((rail) => nestPlacement(bench, rail))),
    }),
    []
  )

  return (
    <>
      <InstancedPlacements
        geometry={geometry.top}
        material={paleWood}
        placements={placements.tops}
      />
      <InstancedPlacements
        geometry={geometry.divider}
        material={charcoalFabric}
        placements={placements.dividers}
      />
      <InstancedPlacements
        geometry={geometry.leg}
        material={blackSteel}
        placements={placements.legs}
      />
      <InstancedPlacements
        geometry={geometry.rail}
        material={blackSteel}
        placements={placements.rails}
      />
    </>
  )
}
