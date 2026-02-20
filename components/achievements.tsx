"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Trophy, Rocket, Award } from "lucide-react"
import SectionHeading from "./section-heading"

interface Achievement {
  icon: typeof Trophy
  title: string
  description: string
  metric?: string
}

const achievements: Achievement[] = [
  {
    icon: Trophy,
    title: "1st Place - Data Analytics Hackathon",
    description:
      "Won first place in a competitive data analytics hackathon with innovative data-driven insights and visualization.",
    metric: "#1",
  },
  {
    icon: Rocket,
    title: "1st Place - Startup Bootcamp Hackathon",
    description:
      "Secured first place with a scalable startup idea, pitching to judges and building an MVP in 24 hours.",
    metric: "#1",
  },
  {
    icon: Award,
    title: "GDSC Associate",
    description:
      "Active member of Google Developer Student Clubs, contributing to community events and workshops.",
  },
]

function Counter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  const numericValue = parseInt(target.replace(/\D/g, "")) || 0

  useEffect(() => {
    if (!isInView || numericValue === 0) return
    const duration = 1500
    const steps = 30
    const increment = numericValue / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, numericValue])

  if (numericValue === 0) return null

  return (
    <span ref={ref} className="font-mono text-3xl font-bold text-primary glow-text">
      {target.startsWith("#") ? "#" : ""}
      {count}
      {suffix}
    </span>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Achievements" subtitle="Milestones and recognitions" />

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group glass flex gap-5 rounded-xl p-6 transition-all hover:border-primary/30 hover:glow-box"
            >
              <div className="flex shrink-0 flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <item.icon size={24} />
                </div>
                {item.metric && (
                  <Counter
                    target={item.metric}
                    suffix={item.metric.includes("+") ? "+" : ""}
                  />
                )}
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
