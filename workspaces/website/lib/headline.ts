const ABBREVIATIONS: ReadonlyArray<readonly [RegExp, string]> = [
  [/\bMember of Technical Staff\b/gi, 'MTS'],
]

export const abbreviateHeadline = (headline: string): string =>
  ABBREVIATIONS.reduce(
    (text, [pattern, abbreviation]) => text.replace(pattern, abbreviation),
    headline
  )
