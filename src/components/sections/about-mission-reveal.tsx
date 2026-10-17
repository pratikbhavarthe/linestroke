"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const mission =
  "We turn ambitious ideas into physical products that are resolved in form, engineered for reality, and ready to manufacture."
const missionWords = mission.split(" ")

function AboutMissionReveal() {
  const scope = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const words = gsap.utils.toArray<HTMLElement>("[data-mission-word]")
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

      if (reducedMotion) {
        gsap.set(words, { color: "#c9e4ff" })
        return
      }

      gsap.set(words, { color: "rgba(201, 228, 255, 0.14)" })

      const trigger = ScrollTrigger.create({
        trigger: scope.current,
        start: "top 82%",
        end: "bottom 35%",
        scrub: 1,
        onUpdate: (self) => {
          words.forEach((word, index) => {
            const wordProgress = Math.min(1, Math.max(0, self.progress * words.length - index))
            const alpha = 0.14 + wordProgress * 0.86
            gsap.set(word, { color: `rgba(201, 228, 255, ${alpha})` })
          })
        },
      })

      return () => trigger.kill()
    },
    { scope }
  )

  return (
    <div ref={scope} className="flex flex-col gap-8 md:pl-36">
      <p className="font-mono text-meta uppercase text-muted-foreground">Our mission</p>
      <p className="max-w-4xl font-display text-[clamp(1.65rem,2.8vw,3.25rem)] leading-[1.04] font-medium tracking-[-0.035em]">
        {missionWords.map((word, index) => (
          <span key={`${word}-${index}`} data-mission-word>
            {word}{index < missionWords.length - 1 ? " " : ""}
          </span>
        ))}
      </p>
    </div>
  )
}

export { AboutMissionReveal }
