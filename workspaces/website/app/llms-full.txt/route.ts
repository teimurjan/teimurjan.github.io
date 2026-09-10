import { getSections } from '@/lib/get-sections'
import { buildLlmsFullTxt } from '@/lib/llms-txt'

export const dynamic = 'force-static'

export async function GET() {
  return new Response(buildLlmsFullTxt(await getSections()), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
