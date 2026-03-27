'use client'

import { useEffect, useRef, useCallback } from 'react'

const IMAGE_SCALE = 0.85
const BG_COLOR = '#0a0f1a'

interface HeroCanvasProps {
  images: (HTMLImageElement | null)[]
  frameIndex: number
}

export default function HeroCanvas({ images, frameIndex }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const lastFrameRef = useRef(-1)

  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const img = images[index]
      if (!img) return

      const dpr = window.devicePixelRatio || 1
      const cw = canvas.width / dpr
      const ch = canvas.height / dpr

      const iw = img.naturalWidth
      const ih = img.naturalHeight
      const scale = Math.max(cw / iw, ch / ih) * IMAGE_SCALE
      const dw = iw * scale
      const dh = ih * scale
      const dx = (cw - dw) / 2
      const dy = (ch - dh) / 2

      ctx.save()
      ctx.scale(dpr, dpr)
      ctx.fillStyle = BG_COLOR
      ctx.fillRect(0, 0, cw, ch)
      ctx.drawImage(img, dx, dy, dw, dh)
      ctx.restore()
    },
    [images]
  )

  // Resize canvas to fill viewport
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      drawFrame(lastFrameRef.current >= 0 ? lastFrameRef.current : 0)
    }

    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [drawFrame])

  // Draw frame on index change
  useEffect(() => {
    if (frameIndex !== lastFrameRef.current) {
      lastFrameRef.current = frameIndex
      requestAnimationFrame(() => drawFrame(frameIndex))
    }
  }, [frameIndex, drawFrame])

  return <canvas ref={canvasRef} className="block w-full h-full" />
}
