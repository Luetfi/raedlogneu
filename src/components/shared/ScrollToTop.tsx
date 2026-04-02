'use client'

import { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

function forceScrollTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
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

    // Retry after Lenis/GSAP may have restored scroll position
    const t1 = setTimeout(forceScrollTop, 0)
    const t2 = setTimeout(forceScrollTop, 100)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [pathname])

  return null
}
