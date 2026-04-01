'use client'

import { useEffect, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const pathname = usePathname()

  // Use useLayoutEffect to scroll before browser paint
  useLayoutEffect(() => {
    // Force scroll to top — bypass Lenis smooth scroll
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Retry after Lenis/GSAP may have restored scroll position
    const t1 = setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 50)

    const t2 = setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 150)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [pathname])

  return null
}
