'use client'

import { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

// So lange nach einem Seitenwechsel wird die Position oben gehalten. Deckt u. a. das
// mobile Menü ab: dessen Scroll-Lock stellt beim Schließen (nach der Exit-Animation)
// die alte Scrollposition wieder her.
const HOLD_MS = 1500

function forceScrollTop() {
  const html = document.documentElement
  // scroll-behavior: smooth würde das Zurücksetzen animieren und unterbrechbar machen
  const previous = html.style.scrollBehavior
  html.style.scrollBehavior = 'auto'
  window.scrollTo(0, 0)
  html.scrollTop = 0
  document.body.scrollTop = 0
  html.style.scrollBehavior = previous
}

export default function ScrollToTop() {
  const pathname = usePathname()

  // Disable browser scroll restoration so it doesn't fight us
  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  // Scroll to top on every route change
  useLayoutEffect(() => {
    forceScrollTop()

    // Oben halten, bis Menü/Lenis fertig sind – aber sofort aufhören, sobald der Nutzer selbst scrollt
    const start = performance.now()
    let frame = 0
    let stopped = false

    const stop = () => {
      stopped = true
      cancelAnimationFrame(frame)
    }

    const hold = () => {
      if (stopped) return
      if (window.scrollY !== 0) forceScrollTop()
      if (performance.now() - start < HOLD_MS) frame = requestAnimationFrame(hold)
    }
    frame = requestAnimationFrame(hold)

    const events = ['touchstart', 'wheel', 'keydown', 'mousedown'] as const
    events.forEach((e) => window.addEventListener(e, stop, { passive: true, once: true }))

    return () => {
      stop()
      events.forEach((e) => window.removeEventListener(e, stop))
    }
  }, [pathname])

  return null
}
