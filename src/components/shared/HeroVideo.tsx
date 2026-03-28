'use client'

import { useRef, useCallback, useState, useEffect } from 'react'

const videos = ['/videos/herovideo.mp4', '/videos/herovideo1.mp4']

export default function HeroVideo() {
  const videoARefs = useRef<HTMLVideoElement>(null)
  const videoBRefs = useRef<HTMLVideoElement>(null)
  // 0 = video A is active, 1 = video B is active
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0)
  const sequenceRef = useRef(0) // tracks which video in the list plays next

  // Set playback speed for the first video
  useEffect(() => {
    if (videoARefs.current) videoARefs.current.playbackRate = 1.5
  }, [])

  const handleEnded = useCallback(() => {
    const next = sequenceRef.current === 0 ? 1 : 0
    sequenceRef.current = next

    const nextSlotIsB = activeSlot === 0
    const nextVideo = nextSlotIsB ? videoBRefs.current : videoARefs.current

    if (!nextVideo) return

    // Set src and playback rate for the upcoming video
    nextVideo.src = videos[next]
    nextVideo.playbackRate = next === 0 ? 1.5 : 1
    nextVideo.play()

    // Crossfade by swapping active slot
    setActiveSlot(nextSlotIsB ? 1 : 0)
  }, [activeSlot])

  return (
    <>
      {/* Video A */}
      <video
        ref={videoARefs}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        src={videos[0]}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
        style={{ opacity: activeSlot === 0 ? 1 : 0 }}
      />

      {/* Video B */}
      <video
        ref={videoBRefs}
        muted
        playsInline
        preload="auto"
        onEnded={handleEnded}
        src={videos[1]}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
        style={{ opacity: activeSlot === 1 ? 1 : 0 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#040810]/60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 40%, rgba(4,8,16,0.1) 0%, rgba(4,8,16,0.4) 100%)',
        }}
      />
    </>
  )
}
