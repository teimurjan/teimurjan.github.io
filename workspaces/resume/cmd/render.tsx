// Renders the Harvard resume from resume JSON on stdin to the PDF path in argv.
import { HarvardResume, type ResumeData, renderToFile } from '../src'

const readStdin = async () => {
  const chunks: Buffer[] = []
  for await (const chunk of process.stdin) chunks.push(chunk as Buffer)
  return Buffer.concat(chunks).toString('utf8')
}

const main = async () => {
  const outputPath = process.argv[2]
  if (!outputPath) {
    console.error('usage: bun cmd/render.tsx <output.pdf> < resume.json')
    process.exit(1)
  }

  const data = JSON.parse(await readStdin()) as ResumeData
  await renderToFile(<HarvardResume {...data} />, outputPath)
  console.log(outputPath)
}

main()
