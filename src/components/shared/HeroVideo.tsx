'use client'

import { useRef, useCallback, useState, useEffect } from 'react'
import { preload } from 'react-dom'

const videos = ['/videos/herovideo.mp4', '/videos/herovideo1.mp4']
const posters = ['/videos/herovideo-poster.webp', '/videos/herovideo1-poster.webp']

export default function HeroVideo() {
  // Das Poster ist das groesste Element beim ersten Aufruf (LCP) — frueh und
  // mit hoher Prioritaet laden.
  preload(posters[0], { as: 'image', fetchPriority: 'high' })

  const videoARefs = useRef<HTMLVideoElement>(null)
  const videoBRefs = useRef<HTMLVideoElement>(null)
  // 0 = video A is active, 1 = video B is active
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0)
  // Video B wird erst geladen, wenn A laeuft — sonst konkurrieren beide
  // Downloads um die Bandbreite des ersten Seitenaufrufs und verzoegern den LCP.
  const [preloadB, setPreloadB] = useState(false)
  // Auch Video A startet erst nach dem load-Event: bis dahin steht das Poster,
  // und die 500 KB konkurrieren auf dem Handy nicht mit JS, Schrift und Bildern.
  const [loadA, setLoadA] = useState(false)
  const sequenceRef = useRef(0) // tracks which video in the list plays next

  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoadA(true)
      return
    }
    const onLoad = () => setLoadA(true)
    window.addEventListener('load', onLoad, { once: true })
    return () => window.removeEventListener('load', onLoad)
  }, [])

  // Set playback speed for the first video (defaultPlaybackRate, weil das
  // Setzen von src playbackRate wieder zuruecksetzt)
  useEffect(() => {
    const video = videoARefs.current
    if (!video || !loadA) return
    video.defaultPlaybackRate = 1.5
    video.playbackRate = 1.5
  }, [loadA])

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
        preload={loadA ? 'auto' : 'none'}
        poster={posters[0]}
        aria-hidden="true"
        onPlaying={() => setPreloadB(true)}
        onEnded={handleEnded}
        src={loadA ? videos[0] : undefined}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
        style={{ opacity: activeSlot === 0 ? 1 : 0 }}
      />

      {/* Video B — laedt erst nach, sobald A sichtbar spielt */}
      <video
        ref={videoBRefs}
        muted
        playsInline
        preload={preloadB ? 'auto' : 'none'}
        poster={posters[1]}
        aria-hidden="true"
        onEnded={handleEnded}
        src={preloadB ? videos[1] : undefined}
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
