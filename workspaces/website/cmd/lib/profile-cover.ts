import fs from 'node:fs'
import path from 'node:path'
import { loadSiteData } from '@teimurjan/site-data'
import { chromium } from 'playwright'

const SCALE = 2

const DESIGN_HEIGHT = 500

export interface ProfileCoverSpec {
  name: string
  width: number
  height: number
  outputFile: string
}

interface ShippedProduct {
  name: string
  logoUrl: string
}

const MIME: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
}

/** The cover renders from a blank page, so a public asset goes in as a data URL. */
const publicAsDataUrl = (publicPath: string) => {
  const file = path.resolve(__dirname, '../../public', `.${publicPath}`)
  const mime = MIME[path.extname(file)] ?? 'image/png'
  return `data:${mime};base64,${fs.readFileSync(file).toString('base64')}`
}

const getShippedProducts = async (): Promise<ShippedProduct[]> => {
  const { products } = loadSiteData()
  if (products.length === 0) throw new Error('profile-cover: no products found')

  return products.map(({ name, logo }) => ({ name, logoUrl: publicAsDataUrl(logo) }))
}

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const HAND_CIRCLE = `<svg class="circle" aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M58 6 C 22 2, 4 30, 8 56 C 12 84, 44 98, 70 90 C 94 82, 98 46, 86 24 C 76 8, 52 2, 36 10" /></svg>`

const renderHeadline = () =>
  `<h1>launching products<br />with <span class="zero">0${HAND_CIRCLE}</span> headcount.</h1>`

const renderShipped = (products: ShippedProduct[]) => `
  <div class="shipped">
    <span class="so-far">so far:</span>
    <ul>
      ${products
        .map(
          ({ name, logoUrl }) => `
        <li>
          <img src="${escapeHtml(logoUrl)}" alt="" />
          <span>${escapeHtml(name)}</span>
        </li>`
        )
        .join('')}
    </ul>
  </div>`

const buildHtml = (
  { width, height }: ProfileCoverSpec,
  products: ShippedProduct[]
) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=JetBrains+Mono:wght@500;800&display=swap" rel="stylesheet" />
<style>
  :root {
    --paper: #ece6d8;
    --ink: #141413;
    --ink-dim: #3d3a35;
    --mono: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;
    --hand: "Caveat", cursive;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    width: ${width / SCALE}px;
    height: ${height / SCALE}px;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--mono);
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }

  .frame {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 88px;
  }

  .content {
    zoom: ${height / SCALE / DESIGN_HEIGHT};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }

  h1 {
    font-size: 100px;
    font-weight: 800;
    letter-spacing: -0.035em;
    line-height: 1.02;
  }

  .zero {
    position: relative;
    display: inline-block;
    padding: 0 0.08em;
  }
  .circle {
    position: absolute;
    left: -0.12em;
    top: -0.06em;
    width: calc(100% + 0.24em);
    height: calc(100% + 0.14em);
    transform: rotate(-6deg);
    overflow: visible;
  }
  .circle path {
    fill: none;
    stroke: var(--ink);
    stroke-width: 4;
    stroke-linecap: round;
    vector-effect: non-scaling-stroke;
  }

  .shipped {
    display: flex;
    align-items: center;
    gap: 40px;
    color: var(--ink-dim);
    font-size: 30px;
    font-weight: 500;
  }
  .so-far {
    font-family: var(--hand);
    font-size: 46px;
    font-weight: 600;
    transform: rotate(-3deg);
  }
  .shipped ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 44px;
  }
  .shipped li {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .shipped img {
    width: 72px;
    height: 72px;
    border-radius: 16px;
    box-shadow: 0 0 0 1.5px rgba(20, 20, 19, 0.14);
  }

</style>
</head>
<body>
  <div class="frame">
    <div class="content">
      ${renderHeadline()}
      ${renderShipped(products)}
    </div>
  </div>
</body>
</html>`

export const generateProfileCover = async (spec: ProfileCoverSpec) => {
  console.log(`${spec.name}: fetching products...`)
  const products = await getShippedProducts()

  console.log(`${spec.name}: launching playwright...`)
  const browser = await chromium.launch()
  const page = await browser.newPage({
    viewport: { width: spec.width / SCALE, height: spec.height / SCALE },
    deviceScaleFactor: SCALE,
  })

  await page.setContent(buildHtml(spec, products), { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)

  const outputPath = path.resolve(__dirname, '../../public', spec.outputFile)
  await page.screenshot({ path: outputPath })

  await browser.close()
  console.log(`${spec.name}: wrote ${outputPath} (${spec.width}x${spec.height})`)
}
