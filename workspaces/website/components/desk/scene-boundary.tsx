'use client'

import { Component, type ReactNode } from 'react'

interface SceneBoundaryProps {
  onError: () => void
  children: ReactNode
}

interface SceneBoundaryState {
  hasFailed: boolean
}

export class SceneBoundary extends Component<SceneBoundaryProps, SceneBoundaryState> {
  state: SceneBoundaryState = { hasFailed: false }

  static getDerivedStateFromError(): SceneBoundaryState {
    return { hasFailed: true }
  }

  componentDidCatch() {
    this.props.onError()
  }

  render() {
    return this.state.hasFailed ? null : this.props.children
  }
}
