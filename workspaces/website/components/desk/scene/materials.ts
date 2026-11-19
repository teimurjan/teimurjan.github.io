import { Color, MeshBasicMaterial, MeshPhysicalMaterial, MeshStandardMaterial } from 'three'

export const PALETTE = {
  night: '#05060a',
  fog: '#070810',
  warmLight: '#ffcf9a',
  lampGlow: '#ffb86b',
  coolLight: '#8fb4ff',
  screenGlow: '#efe6d2',
  neon: '#ffe9c4',
} as const

export const beigePlastic = new MeshStandardMaterial({ color: '#c9c1ab', roughness: 0.58 })

export const keycapPlastic = new MeshStandardMaterial({ color: '#b1a993', roughness: 0.5 })

export const seamPlastic = new MeshStandardMaterial({ color: '#17140f', roughness: 0.9 })

export const tubeGlass = new MeshPhysicalMaterial({
  color: '#020203',
  roughness: 0.14,
  clearcoat: 1,
  clearcoatRoughness: 0.06,
})

export const blackSteel = new MeshStandardMaterial({
  color: '#0e0e10',
  roughness: 0.45,
  metalness: 0.7,
})

export const darkRubber = new MeshStandardMaterial({ color: '#121214', roughness: 0.85 })

export const paleWood = new MeshStandardMaterial({ color: '#9c8566', roughness: 0.65 })

export const concrete = new MeshStandardMaterial({ color: '#2a2a2e', roughness: 0.85 })

export const ceramic = new MeshStandardMaterial({ color: '#2f4368', roughness: 0.3 })

export const charcoalFabric = new MeshStandardMaterial({ color: '#1d1e22', roughness: 0.95 })

export const leaf = new MeshStandardMaterial({ color: '#1f3a26', roughness: 0.6 })

export const terracotta = new MeshStandardMaterial({ color: '#6a3f2c', roughness: 0.8 })

export const brass = new MeshStandardMaterial({ color: '#b28a45', roughness: 0.3, metalness: 1 })

export const coffee = new MeshStandardMaterial({ color: '#1a0f0a', roughness: 0.25 })

export const diskShell = new MeshStandardMaterial({ color: '#23262e', roughness: 0.5 })

export const brushedMetal = new MeshStandardMaterial({
  color: '#8c8f96',
  roughness: 0.35,
  metalness: 0.9,
})

export const paper = new MeshStandardMaterial({ color: '#e4dccb', roughness: 0.9 })

export const sofaFabric = new MeshStandardMaterial({ color: '#3b3229', roughness: 0.92 })

export const rugWool = new MeshStandardMaterial({ color: '#2b2622', roughness: 1 })

export const lampShadeLinen = new MeshBasicMaterial({
  color: new Color(1.5, 1.02, 0.56),
  toneMapped: false,
})
