'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface UseFrameSequenceOptions {
  frameCount: number
  basePath: string
  padLength?: number
  extension?: string
  batchSize?: number
  priorityCount?: number
}

interface UseFrameSequenceReturn {
  images: (HTMLImageElement | null)[]
  progress: number
  isReady: boolean
}

export function useFrameSequence({
  frameCount,
  basePath,
  padLength = 4,
  extension = 'webp',
  batchSize = 10,
  priorityCount = 30,
}: UseFrameSequenceOptions): UseFrameSequenceReturn {
  const [progress, setProgress] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const imagesRef = useRef<(HTMLImageElement | null)[]>([])
  const loadedCountRef = useRef(0)

  const getFramePath = useCallback(
    (index: number) => {
      const num = String(index).padStart(padLength, '0')
      return `${basePath}${num}.${extension}`
    },
    [basePath, padLength, extension]
  )

  useEffect(() => {
    imagesRef.current = new Array(frameCount).fill(null)
    loadedCountRef.current = 0
    let cancelled = false

    const loadImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        if (cancelled) { resolve(); return }
        const img = new Image()
        img.onload = () => {
          if (!cancelled) {
            imagesRef.current[index] = img
            loadedCountRef.current++
            setProgress(loadedCountRef.current / frameCount)
          }
          resolve()
        }
        img.onerror = () => resolve()
        img.src = getFramePath(index + 1) // frames are 1-indexed
      })
    }

    const loadAll = async () => {
      // Phase 1: load priority frames (first N)
      const priorityPromises: Promise<void>[] = []
      const count = Math.min(priorityCount, frameCount)
      for (let i = 0; i < count; i++) {
        priorityPromises.push(loadImage(i))
      }
      await Promise.all(priorityPromises)

      if (cancelled) return

      // Phase 2: load remaining in batches
      for (let i = count; i < frameCount; i += batchSize) {
        if (cancelled) return
        const batch: Promise<void>[] = []
        for (let j = i; j < Math.min(i + batchSize, frameCount); j++) {
          batch.push(loadImage(j))
        }
        await Promise.all(batch)
      }

      if (!cancelled) {
        setIsReady(true)
      }
    }

    loadAll()

    return () => {
      cancelled = true
    }
  }, [frameCount, getFramePath, batchSize, priorityCount])

  return { images: imagesRef.current, progress, isReady }
}
