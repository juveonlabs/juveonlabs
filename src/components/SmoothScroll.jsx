import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Ensure all anchor link clicks use lenis scroll
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (target) {
        e.preventDefault()
        const id = target.getAttribute('href')
        if (id === '#') return
        const element = document.querySelector(id)
        if (element) {
          lenis.scrollTo(element)
        }
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      lenis.destroy()
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return children
}
