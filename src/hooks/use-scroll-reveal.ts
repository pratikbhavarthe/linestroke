"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { useReducedMotion } from "@/hooks/use-reduced-motion"

gsap.registerPlugin(ScrollTrigger)

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

interface ScrollRevealOptions {
  distance?: number | "element"
  easing?: "linear" | "ease-out"
}

/**
 * Tracks scroll progress (0 → 1) as `ref`'s element enters the viewport from
 * the bottom. ScrollTrigger keeps this in sync with ScrollSmoother's
 * transformed content. The value is written directly to a CSS custom property,
 * so scrolling never triggers a re-render.
 */
function useScrollReveal<T extends HTMLElement>({
  distance = 500,
  easing = "ease-out",
}: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (reducedMotion) {
      node.style.setProperty("--scroll-progress", "1")
      node.style.setProperty("--scroll-reveal-y", "0%")
      return
    }

    const trigger = ScrollTrigger.create({
      trigger: node,
      start: "top bottom",
      end: distance === "element" ? () => `+=${node.offsetHeight}` : `+=${distance}`,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = easing === "linear" ? self.progress : easeOutCubic(self.progress)
        node.style.setProperty("--scroll-progress", String(progress))
        node.style.setProperty("--scroll-reveal-y", `${(1 - progress) * 110}%`)
      },
    })

    return () => {
      trigger.kill()
    }
  }, [distance, easing, reducedMotion])

  return ref
}

export { useScrollReveal }
