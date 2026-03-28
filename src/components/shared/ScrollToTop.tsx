'use client'

import { useEffect, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const pathname = usePathname()

  // Use useLayoutEffect to scroll before browser paint
  useLayoutEffect(() => {
    // Immediately scroll to top
    window.scrollTo(0, 0)

    // Also scroll after a short delay to override any GSAP ScrollTrigger restoration
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 50)

    return () => clearTimeout(timeout)
  }, [pathname])

  return null
}
