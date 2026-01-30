interface EmbeddingChunk {
  id: string
  section: string
  text: string
  embedding: number[]
}

interface EmbeddingsData {
  model: string
  generatedAt: string
  chunks: EmbeddingChunk[]
}

interface SearchResult {
  chunk: EmbeddingChunk
  score: number
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dotProduct = 0
  let normA = 0
  let normB = 0

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i]
    normA += a[i] * a[i]
    normB += b[i] * b[i]
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB))
}

export function searchEmbeddings(
  queryEmbedding: number[],
  embeddings: EmbeddingsData,
  topK = 3
): SearchResult[] {
  const results: SearchResult[] = embeddings.chunks.map((chunk) => ({
    chunk,
    score: cosineSimilarity(queryEmbedding, chunk.embedding),
  }))

  results.sort((a, b) => b.score - a.score)

  return results.slice(0, topK)
}

export function formatSearchResults(results: SearchResult[]): string {
  if (results.length === 0) {
    return "I couldn't find relevant information for that question."
  }

  const relevantResults = results.filter((r) => r.score > 0.3)

  if (relevantResults.length === 0) {
    return "I couldn't find a strong match for that question. Try asking about experience, skills, education, or projects."
  }

  return relevantResults.map((r) => r.chunk.text).join('\n\n')
}

export type { EmbeddingsData, SearchResult }
