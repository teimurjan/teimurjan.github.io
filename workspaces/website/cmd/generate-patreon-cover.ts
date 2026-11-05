import path from 'node:path'
import { chromium } from 'playwright'

// Patreon cover spec (recommended 1600x400, 4:1). Rendered at half size with a
// 2x device scale so text stays crisp while the output lands at the exact pixels.
const WIDTH = 3200
const HEIGHT = 800
const SCALE = 2

// Single centered line — Patreon crops the sides hard, so keep it middle-weighted.
const TAGLINE = 'building products with headcount 0'

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const buildHtml = (tagline: string) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
<style>
  :root {
    --paper: #0d0d0f;
    --paper-2: #131316;
    --ink: #ece6d8;
    --ink-dim: #9c968a;
    --ink-faint: #5a5650;
    --rule: #2a2823;
    --mono: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    width: ${WIDTH / SCALE}px;
    height: ${HEIGHT / SCALE}px;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--mono);
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
    background-image:
      radial-gradient(ellipse at top left, rgba(236, 230, 216, 0.025), transparent 50%),
      radial-gradient(ellipse at bottom right, rgba(236, 230, 216, 0.02), transparent 60%);
  }

  /* film-grain noise overlay, lifted from the site's globals.css */
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.93  0 0 0 0 0.90  0 0 0 0 0.85  0 0 0 0.04 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
    opacity: 0.5;
    mix-blend-mode: screen;
    z-index: 1;
  }

  .frame {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 90px;
  }

  h1 {
    position: relative;
    display: inline-block;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.05;
    white-space: nowrap;
  }
  /* hand-drawn underline — the site's brand mark */
  h1::after {
    content: "";
    position: absolute;
    left: -6px; right: -6px; bottom: -14px;
    height: 16px;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 10' preserveAspectRatio='none'><path d='M2 6 C 20 2, 40 9, 60 5 S 100 2, 120 6 S 160 9, 198 4' fill='none' stroke='%23ece6d8' stroke-width='1.6' stroke-linecap='round'/></svg>");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    opacity: 0.75;
  }
</style>
</head>
<body>
  <div class="frame">
    <h1>${escapeHtml(tagline)}</h1>
  </div>
</body>
</html>`

const main = async () => {
  console.log('generate-patreon-cover: launching playwright...')
  const browser = await chromium.launch()
  const page = await browser.newPage({
    viewport: { width: WIDTH / SCALE, height: HEIGHT / SCALE },
    deviceScaleFactor: SCALE,
  })

  await page.setContent(buildHtml(TAGLINE), { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)

  const outputPath = path.resolve(__dirname, '../public/patreon-cover.png')
  await page.screenshot({ path: outputPath })

  await browser.close()
  console.log(`generate-patreon-cover: wrote ${outputPath} (${WIDTH}x${HEIGHT})`)
}

main()
