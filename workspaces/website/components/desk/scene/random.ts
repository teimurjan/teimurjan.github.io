export type Random = () => number

export const seededRandom = (seed: number): Random => {
  let state = seed >>> 0
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    const mixed = Math.imul(state ^ (state >>> 15), state | 1)
    const scrambled = mixed ^ (mixed + Math.imul(mixed ^ (mixed >>> 7), mixed | 61))
    return ((scrambled ^ (scrambled >>> 14)) >>> 0) / 4294967296
  }
}

export const between = (random: Random, min: number, max: number) => min + random() * (max - min)

export const pick = <Item>(random: Random, items: readonly Item[]): Item =>
  items[Math.floor(random() * items.length)]
