'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  type EmbeddingsData,
  formatSearchResults,
  searchEmbeddings,
} from '@/lib/semantic-search'

type Pipeline = Awaited<ReturnType<typeof import('@huggingface/transformers').pipeline>>

interface UsePortfolioQAResult {
  ask: (question: string) => Promise<string>
  isLoading: boolean
  isModelLoading: boolean
  error: string | null
}

export function usePortfolioQA(): UsePortfolioQAResult {
  const [isLoading, setIsLoading] = useState(false)
  const [isModelLoading, setIsModelLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const embedderRef = useRef<Pipeline | null>(null)
  const embeddingsRef = useRef<EmbeddingsData | null>(null)
  const initPromiseRef = useRef<Promise<void> | null>(null)

  const initialize = useCallback(async () => {
    if (initPromiseRef.current) {
      return initPromiseRef.current
    }

    initPromiseRef.current = (async () => {
      setIsModelLoading(true)
      setError(null)

      try {
        const [{ pipeline }, embeddingsModule] = await Promise.all([
          import('@huggingface/transformers'),
          import('@/__generated__/embeddings.json'),
        ])

        embeddingsRef.current = embeddingsModule.default as EmbeddingsData

        embedderRef.current = await pipeline(
          'feature-extraction',
          'Xenova/all-MiniLM-L6-v2',
          { dtype: 'fp32' }
        )
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to initialize'
        setError(message)
        initPromiseRef.current = null
        throw err
      } finally {
        setIsModelLoading(false)
      }
    })()

    return initPromiseRef.current
  }, [])

  const ask = useCallback(
    async (question: string): Promise<string> => {
      if (!question.trim()) {
        return 'Please enter a question.'
      }

      setIsLoading(true)
      setError(null)

      try {
        await initialize()

        if (!embedderRef.current || !embeddingsRef.current) {
          throw new Error('Model not initialized')
        }

        const output = await embedderRef.current(question, {
          pooling: 'mean',
          normalize: true,
        })

        const queryEmbedding = Array.from(output.data as Float32Array)
        const results = searchEmbeddings(queryEmbedding, embeddingsRef.current, 3)
        return formatSearchResults(results)
      } catch (err) {
        const message = err instanceof Error ? err.message : 'An error occurred'
        setError(message)
        return `Error: ${message}`
      } finally {
        setIsLoading(false)
      }
    },
    [initialize]
  )

  useEffect(() => {
    return () => {
      embedderRef.current = null
      embeddingsRef.current = null
      initPromiseRef.current = null
    }
  }, [])

  return { ask, isLoading, isModelLoading, error }
}
