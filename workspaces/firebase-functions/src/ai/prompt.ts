import { anthropic } from '@ai-sdk/anthropic'
import type { ResumeQuery } from '@teimurjan/gql-client'
import { Output, generateText } from 'ai'
import { generateSchema } from '../schema/schema'

const MODEL = 'claude-opus-4-7'

const systemPrompt = `You are a senior resume editor. The reader is a hiring manager scanning for 6 seconds. They are drowning in AI-generated CVs that all read the same. Yours must not.

Hard rules
- Every rewritten experience bullet maps to a concrete need in the job description. If the JD asks for X, at least one bullet must prove X with a number.
- Each bullet = [strong verb] + [specific thing you shipped, named] + [measurable outcome with a number or proper-noun scope].
- 12 to 18 words. One achievement per bullet. No compound sentences stitched with "and".
- Use proper nouns: product names, team sizes, tool names, user counts. "React Native onboarding library used by 3+ teams" beats "reusable mobile component".
- Numbers are non-negotiable. Use %, counts, time saved, revenue, users, team size, or a specific named scope.

Banned vocabulary (reject every instance, in any form)
leveraged, spearheaded, synergies, robust, seamless, cutting-edge, world-class, innovative, passionate, empower, elevate, harness, delve, landscape, transformative, impactful, orchestrate, ecosystem (as filler), streamline (as filler), in today's [anything], responsible for, worked on, helped with, involved in, contributed to, assisted with, successfully, expertly, effectively.

Banned patterns
- Adjective stacks ("scalable, maintainable, robust solutions").
- Self-praise ("successfully shipped", "expertly built").
- Vague scope ("various projects", "multiple teams", "several technologies").
- Buzzword endings ("...at scale", "...driving business value", "...end-to-end").
- Rhetorical contrast ("not just X, but Y", "not only X but also Y").
- Restating responsibilities. Only outcomes.

Banned characters (zero tolerance, applies everywhere including HTML descriptions and the cover letter)
- Em dash and en dash. Use a plain hyphen, a comma, or reword.
- Curly or smart quotes. Use straight quotes only.
- Ellipsis character. Use three dots if you truly need it.
- Non-breaking space. Use a regular space.

Banned stylistic tells
- "deep dive", "dive into", "a testament to", "in the realm of", "at the intersection of".
- "think of it like" openers.
- Opening a sentence with "Moreover," "Furthermore," or "Additionally,".

Gold standard (this is the target voice)
- "Launched React Native onboarding library used by 3+ teams, cutting onboarding time by 40%."
- "Integrated intent-aware Siri Shortcuts into the Klarna app, boosting return-to-app rate by 10%."
- "Created an automated testing Google Sheets plugin, reducing manual testing hours by 50%."`

const buildUserPrompt = (jobDescription: string, resume: ResumeQuery) => `## Step 0 (silent, do not output)

Before rewriting anything, internally do this:
a) Summarise the core role vector in one line: what is this role actually about? (e.g. "internationalisation-heavy growth frontend at a consumer scale-up", "payments infra with Kafka and Go", "LLM agent tooling for devs").
b) List the top 3 JD signals in priority order (named tech, domain, scale, outcome type).
c) Scan every experience in the resume and rank achievements against those signals. Tag each candidate achievement with (role_recency, JD_signal_match, metric_strength).
d) Pick the single strongest proof point for the headline. Tie-break toward the most recent role. Never default to an older, neater metric when a more recent role has a stronger JD-aligned achievement.

Do not print Step 0. It exists to drive the choices below.

## Tasks

### 1. Bio
- headline: "<role title> | <one proof point with a number>". The proof point MUST come from the winner of Step 0(d). If the most recent role has a stronger JD-aligned achievement than older roles, the headline MUST use it, even if an older role reads more cleanly.
  Examples of the recency + magnitude choice the model must make:
  - Most recent role: "doubled international traffic, shipped 44 locales". Older role: "shipped growth features to 100k+ users across 5 products". For an i18n/growth JD, pick the first.
  - Most recent role: pure maintenance work. Older role: "cut checkout latency 10x". Pick the second only when recency is genuinely weaker on JD fit.
- about: 30 to 40 words, plain English, about how the candidate works, approach, expertise areas, what drives the work. No specific achievements (those live in bullets). No banned vocabulary.

Good about: "I design and ship production systems on LLMs and agent architectures, staying close to real user problems and optimising for metrics that actually move the business."
Bad about: "Scaled 5 products to 100k+ users. Reduced build times by 25%." (duplicates bullet points)

### 2. Skills
- Add relevant skills explicitly named in the JD that the resume supports. Assign a fresh unique id.
- Drop skills the JD clearly does not care about.
- Reorder: most JD-relevant first.

### 3. Experiences
Rewrite bullets for the 3 most recent roles only. Leave older roles unchanged.

Each rewritten bullet must:
a) Pass every hard rule and banned-vocabulary check above.
b) Echo a specific requirement from the JD (named tech, domain, scale, outcome type).
c) Contain at least one number. If no hard metric exists, use a named proper-noun scope (e.g. "used by 3 squads", "across iOS and Android apps at Klarna").

Pattern: "[Verb] [specific thing, named] [, outcome with number]."

Good:
- "Launched 5 Web3 dApps on Base and Optimism, scaling to 100k+ weekly actives with under 1% tx failure."
- "Built open-source design-system monorepo, cutting UI duplication across 4 squads by 30%."
- "Led repo migration to Nx monorepo, dropping CI build time from 12 min to 9 min (25%)."
- "Reduced checkout API latency from 2s to 200ms, lifting conversion by 15%."

Bad:
- "Responsible for developing scalable frontend solutions."
- "Worked on various projects using modern technologies."
- "Collaborated with cross-functional teams to deliver features."

The most recent role must carry its strongest JD-aligned achievements as the first 1 to 2 bullets. Do not bury the strongest evidence under generic bullets.

Keep bullet count per role similar to the input. Do not invent achievements: if the source has no number for a bullet, rewrite using a proper-noun scope from the source, never fabricate metrics.

### 4. Cover Letter
3 to 4 sentences. No "Dear Hiring Manager", no sign-off, no "I look forward to".
- Sentence 1: name the specific company and role and a concrete reason tied to their product or problem, not a generic compliment.
- Sentences 2 to 3: connect two candidate strengths to two JD needs. Do not repeat metrics from the bullets.
- Sentence 4: direct close. Confident, no filler.

## Input

Job Description:
${jobDescription}

Resume (JSON):
${JSON.stringify(resume)}`

const AI_TELL_REPLACEMENTS: Array<[RegExp, string]> = [
  [/[—–]/g, '-'],
  [/[‘’‚‛]/g, "'"],
  [/[“”„‟]/g, '"'],
  [/…/g, '...'],
  [/ /g, ' '],
]

const stripAITells = <T>(value: T): T => {
  if (typeof value === 'string') {
    let out: string = value
    for (const [pattern, replacement] of AI_TELL_REPLACEMENTS) {
      out = out.replace(pattern, replacement)
    }
    return out as T
  }
  if (Array.isArray(value)) {
    return value.map((item) => stripAITells(item)) as T
  }
  if (value && typeof value === 'object') {
    const result: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      result[k] = stripAITells(v)
    }
    return result as T
  }
  return value
}

export const prompt = async (jobDescription: string, resume: ResumeQuery) => {
  const { output } = await generateText({
    model: anthropic(MODEL),
    output: Output.object({ schema: generateSchema }),
    system: systemPrompt,
    prompt: buildUserPrompt(jobDescription, resume),
  })

  return stripAITells({
    resume: output.resume,
    coverLetter: output.coverLetter,
  })
}
