'use client'

import type { FolderStructure } from '@/lib/sections'
import {
  type ChatCompletionMessageParam,
  CreateWebWorkerMLCEngine,
  type InitProgressReport,
  type WebWorkerMLCEngine,
} from '@mlc-ai/web-llm'
import { useCallback, useRef, useState } from 'react'

const MODEL_ID = 'Qwen3-0.6B-q4f16_1-MLC'

type ModelStatus = 'idle' | 'loading' | 'ready' | 'error' | 'unsupported'

interface UsePortfolioQAResult {
  loadModel: () => void
  ask: (question: string) => Promise<void>
  status: ModelStatus
  progress: number
  error: string | null
  streamingResponse: string
  isGenerating: boolean
}

interface PortfolioContext {
  folders: FolderStructure[]
  fullName: string
}

function buildSystemPrompt(context: PortfolioContext): string {
  const { folders, fullName } = context

  let aboutInfo = ''
  let skills: string[] = []
  let currentRole = ''
  let location = ''
  let experiences: string[] = []
  let education: string[] = []
  let projects: string[] = []

  for (const folder of folders) {
    for (const section of folder.sections) {
      switch (section.type) {
        case 'about':
          aboutInfo = section.data.about
          location = section.data.location
          break
        case 'skills':
          skills = section.data.skills.map((s) => `${s.title} (${s.yearsOfExperience}+ years)`)
          break
        case 'experience': {
          const exps = section.data.experiences
          if (exps.length > 0) {
            const current = exps[0]
            currentRole = `${current.position} at ${current.company}`
          }
          experiences = exps.slice(0, 3).map((e) => {
            const dates = e.endDate ? `${e.startDate} - ${e.endDate}` : `${e.startDate} - Present`
            return `${e.position} at ${e.company} (${dates})`
          })
          break
        }
        case 'education':
          education = section.data.educations.map((e) => {
            const degree = e.degree ? `${e.degree} in ` : ''
            return `${degree}${e.areaOfStudy} at ${e.school}`
          })
          break
        case 'projects':
          projects = section.data.repositories.slice(0, 5).map((r) => {
            const ownership = r.isOwned ? 'Created' : 'Contributed to'
            return `${ownership} ${r.nameWithOwner}${r.primaryLanguage ? ` (${r.primaryLanguage})` : ''}`
          })
          break
      }
    }
  }

  return `You are an AI assistant on ${fullName}'s portfolio website. Answer questions about ${fullName} based on the following information. Keep responses concise (2-3 sentences max). Be friendly and helpful.

**About:** ${aboutInfo}
**Location:** ${location}
**Current Role:** ${currentRole}
**Skills:** ${skills.join(', ')}
**Experience:** ${experiences.join('; ')}
**Education:** ${education.join('; ')}
**Notable Projects:** ${projects.join('; ')}

If asked something not covered in this information, politely say you don't have that specific information but suggest what you can help with.`
}

export function usePortfolioQA(context: PortfolioContext): UsePortfolioQAResult {
  const [status, setStatus] = useState<ModelStatus>('idle')
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [streamingResponse, setStreamingResponse] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const engineRef = useRef<WebWorkerMLCEngine | null>(null)
  const loadPromiseRef = useRef<Promise<void> | null>(null)
  const systemPromptRef = useRef<string>('')

  const loadModel = useCallback(() => {
    if (loadPromiseRef.current || status === 'ready' || status === 'unsupported') {
      return
    }

    // Check WebGPU support before attempting to load
    if (typeof navigator === 'undefined' || !('gpu' in navigator)) {
      setStatus('unsupported')
      setError('Your browser does not support WebGPU')
      return
    }

    systemPromptRef.current = buildSystemPrompt(context)

    const initProgressCallback = (report: InitProgressReport) => {
      const percentMatch = report.text.match(/(\d+(?:\.\d+)?)%/)
      if (percentMatch) {
        setProgress(Math.round(Number.parseFloat(percentMatch[1])))
      }
    }

    loadPromiseRef.current = (async () => {
      setStatus('loading')
      setError(null)
      setProgress(0)

      try {
        // Verify WebGPU is fully functional (not just present)
        const adapter = await navigator.gpu.requestAdapter()
        if (!adapter) {
          throw new Error('WebGPU adapter not available')
        }

        // Request device to verify GPU actually works (catches iOS Safari issues)
        const device = await adapter.requestDevice()
        if (!device) {
          throw new Error('WebGPU device not available')
        }
        device.destroy()

        const worker = new Worker(new URL('../lib/webllm-worker.ts', import.meta.url), {
          type: 'module',
        })

        const engine = await CreateWebWorkerMLCEngine(worker, MODEL_ID, {
          initProgressCallback,
        })

        engineRef.current = engine
        setStatus('ready')
        setProgress(100)
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to load model'

        if (message.toLowerCase().includes('webgpu') || message.includes('adapter')) {
          setError('WebGPU not available')
          setStatus('unsupported')
        } else {
          setError(message)
          setStatus('error')
        }

        loadPromiseRef.current = null
      }
    })()
  }, [context, status])

  const ask = useCallback(async (question: string): Promise<void> => {
    const engine = engineRef.current
    if (!engine) return

    setIsGenerating(true)
    setStreamingResponse('')

    const messages: ChatCompletionMessageParam[] = [
      { role: 'system', content: systemPromptRef.current },
      { role: 'user', content: question },
    ]

    try {
      const stream = await engine.chat.completions.create({
        messages,
        stream: true,
        max_tokens: 512,
        temperature: 0.7,
      })

      let fullResponse = ''

      for await (const chunk of stream) {
        const delta = chunk.choices[0]?.delta?.content ?? ''
        fullResponse += delta

        // Strip <think>...</think> blocks from visible output
        const visibleResponse = fullResponse
          .replace(/<think>[\s\S]*?<\/think>/g, '')
          .replace(/<think>[\s\S]*$/, '')

        setStreamingResponse(visibleResponse.trim())
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to generate response'
      const lowerMessage = message.toLowerCase()

      // Detect WebGPU/GPU-related failures during inference
      if (
        lowerMessage.includes('gpu') ||
        lowerMessage.includes('webgpu') ||
        lowerMessage.includes('device lost') ||
        lowerMessage.includes('validation error') ||
        lowerMessage.includes('out of memory')
      ) {
        setStatus('unsupported')
        setError('GPU inference failed')
        setStreamingResponse('')
        engineRef.current = null
      } else {
        setStreamingResponse(`Error: ${message}`)
      }
    } finally {
      setIsGenerating(false)
    }
  }, [])

  return {
    loadModel,
    ask,
    status,
    progress,
    error,
    streamingResponse,
    isGenerating,
  }
}
