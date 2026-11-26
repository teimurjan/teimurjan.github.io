// Renders a CV from `wiki view <cv> --json` on stdin with the Harvard template to the PDF path in argv.
import { HarvardCv, parseCvDocument, renderToFile } from '../src'

const readStdin = async () => {
  const chunks: Buffer[] = []
  for await (const chunk of process.stdin) chunks.push(chunk as Buffer)
  return Buffer.concat(chunks).toString('utf8')
}

const main = async () => {
  const outputPath = process.argv[2]
  if (!outputPath) {
    console.error('usage: bun cmd/render-cv.tsx <output.pdf> < cv.json')
    process.exit(1)
  }

  const parsed = parseCvDocument(JSON.parse(await readStdin()))
  if (!parsed.ok) {
    console.error(parsed.error)
    process.exit(1)
  }

  await renderToFile(<HarvardCv cv={parsed.value} />, outputPath)
  console.log(outputPath)
}

main()
