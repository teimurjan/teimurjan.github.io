export const DESK_MEDIA_QUERY =
  '(min-width: 1280px) and (min-height: 680px) and (hover: hover) and (pointer: fine)'

export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

export type DeskPhase = 'loading' | 'intro' | 'focused' | 'overview'

type DeskAttribute = 'boot' | 'on'

export const INTRO = { holdSeconds: 0.55, travelSeconds: 2.2, revealAt: 0.6 } as const

export const canRenderDesk = (): boolean =>
  !navigator.webdriver && 'WebGL2RenderingContext' in window

export const deskBootScript = `if((${canRenderDesk.toString()})()&&matchMedia(${JSON.stringify(DESK_MEDIA_QUERY)}).matches)document.documentElement.dataset.desk='boot'`

export const applyDeskAttribute = (value: DeskAttribute | null) => {
  const root = document.documentElement
  if (value === null) {
    delete root.dataset.desk
    return
  }
  root.dataset.desk = value
}
