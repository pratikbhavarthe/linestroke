"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import type { HeroImage } from "@/data/hero-images"

const EASE = [0.16, 1, 0.3, 1] as const

interface HeroCarouselProps {
  images: HeroImage[]
  intervalMs?: number
}

function HeroCarousel({ images, intervalMs = 6500 }: HeroCarouselProps) {
  const [index, setIndex] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || images.length <= 1) return

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, intervalMs)

    return () => clearInterval(id)
  }, [reducedMotion, images.length, intervalMs])

  const current = images[index]

  if (reducedMotion) {
    return (
      <Image
        src={current.src}
        alt={current.alt}
        fill
        preload
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: current.focus ?? "center" }}
      />
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        key={index}
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.8, ease: EASE }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: intervalMs / 1000 + 1.8, ease: "linear" }}
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            preload={index === 0}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: current.focus ?? "center" }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export { HeroCarousel }
