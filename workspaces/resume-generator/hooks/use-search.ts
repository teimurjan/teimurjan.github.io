'use client'
import Fuse from 'fuse.js'
import { useMemo, useState } from 'react'
import { useDebounce } from './use-debounce'

interface Props<T extends object> {
  items: T[]
  keys: string[]
  debounceMs?: number
}

export const useSearch = <T extends object>({
  items,
  keys,
  debounceMs = 300,
}: Props<T>) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const debouncedSearchQuery = useDebounce(searchQuery, debounceMs)

  const fuse = useMemo(() => new Fuse(items, { keys, threshold: 0.5 }), [items, keys])
  const searchResults = useMemo(() => {
    if (!debouncedSearchQuery) {
      return items
    }
    return fuse.search(debouncedSearchQuery).map((result) => result.item)
  }, [fuse, items, debouncedSearchQuery])

  return {
    searchResults,
    isSearching,
    setIsSearching,
    setSearchQuery,
    searchQuery,
  }
}
