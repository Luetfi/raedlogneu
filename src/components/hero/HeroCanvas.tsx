'use client'

import { useEffect, useRef, useCallback } from 'react'

const IMAGE_SCALE = 0.85

interface HeroCanvasProps {
  images: (HTMLImageElement | null)[]
  frameIndex: number
}

export default function HeroCanvas({ images, frameIndex }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bgColorRef = useRef('#0a0f1a')
  const lastFrameRef = useRef(-1)

  const sampleBgColor = useCallback((img: HTMLImageElement) => {
    try {
      const sampleCanvas = document.createElement('canvas')
      sampleCanvas.width = 4
      sampleCanvas.height = 4
      const sCtx = sampleCanvas.getContext('2d')
      if (!sCtx) return
      // Sample top-left corner
      sCtx.drawImage(img, 0, 0, 4, 4, 0, 0, 4, 4)
      const data = sCtx.getImageData(0, 0, 1, 1).data
      bgColorRef.current = `rgb(${data[0]},${data[1]},${data[2]})`
    } catch {
      // CORS or other error, keep default
    }
  }, [])

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
      ctx.fillStyle = bgColorRef.current
      ctx.fillRect(0, 0, cw, ch)
      ctx.drawImage(img, dx, dy, dw, dh)
      ctx.restore()

      // Sample bg color periodically
      if (index % 20 === 0) {
        sampleBgColor(img)
      }
    },
    [images, sampleBgColor]
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
