"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <h2 className="mb-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="text-muted-foreground">{subtitle}</p>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary/50" />
    </motion.div>
  )
}
