"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MapPin, ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "AI Enthusiast",
  "Problem Solver",
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else if (isDeleting) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40)
    } else {
      timeout = setTimeout(
        () => setText(currentRole.slice(0, text.length + 1)),
        80
      )
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden grid-bg"
    >
      {/* Glow Orbs */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0">
        <div className="h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 flex justify-center lg:justify-start"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary" />
              <span>Mumbai, India</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {"Hi, I'm "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent glow-text">
              Sumeet Pathak
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mb-8 flex h-10 items-center justify-center lg:justify-start"
          >
            <span className="font-mono text-lg text-muted-foreground sm:text-xl lg:text-2xl">
              {text}
              <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-primary text-transparent">
                |
              </span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            Second-year Computer Engineering student building scalable products
            with the MERN stack and integrating AI into real-world solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 -translate-x-full bg-accent/30 transition-transform duration-300 group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-secondary"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-secondary"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mt-10 flex items-center justify-center gap-5 lg:justify-start"
          >
            <a
              href="https://github.com/Svpathak05"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sumeet-pathak-94295b28b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:svpathak5@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative shrink-0"
        >
          <div className="relative flex items-center justify-center">
            {/* Animated ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, #06b6d4, transparent, #22d3ee, transparent)",
                opacity: 0.4,
              }}
            />
            <div className="absolute -inset-4 rounded-full bg-background/60 backdrop-blur-sm" />

            {/* Photo container - taller aspect ratio to show face properly */}
            <div className="relative h-64 w-56 overflow-hidden rounded-3xl border-2 border-primary/20 sm:h-80 sm:w-64">
              <Image
                src="/images/profile.png"
                alt="Sumeet Pathak - Full Stack Developer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 224px, 256px"
                priority
              />
              {/* Subtle bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating status badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-border glass px-3 py-1.5 whitespace-nowrap"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-foreground">
                Open to work
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
