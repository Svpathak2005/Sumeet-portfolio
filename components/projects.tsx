"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import SectionHeading from "./section-heading"

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  live?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "Talent Hunt",
    description:
      "Automated team formation and mentorship platform with role-based dashboards and intelligent matching for hackathons and events.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/Svpathak05",
    live: "https://talenthunt-frontend.vercel.app/",
    featured: true,
  },
  {
    title: "OSINT Search",
    description:
      "Intelligent keyword search engine across Twitter, Instagram, news websites and more. Authenticates news sources and validates information authenticity using advanced algorithms.",
    tech: ["MERN Stack", "Web Scraping", "API Integration", "NLP Authentication"],
    github: "https://github.com/Svpathak05",
    featured: true,
  },
  {
    title: "AI Chatbot for PDF",
    description:
      "LLM-powered chatbot that processes PDF documents and enables intelligent Q&A interactions with document content through natural language understanding.",
    tech: ["React", "Node.js", "LLM APIs", "PDF Processing"],
    github: "https://github.com/Svpathak05",
    featured: true,
  },
  {
    title: "Zippy",
    description:
      "Location-based offline shop finder with real-time inventory tracking, advanced filters, and seamless search experience.",
    tech: ["MERN Stack", "Python", "Maps API"],
    github: "https://github.com/Svpathak05",
    live: "#",
    featured: true,
  },
  {
    title: "BharatBhushan",
    description:
      "AI-based animal breed and health prediction system using image recognition achieving 85% accuracy on diverse datasets.",
    tech: ["Python", "Machine Learning", "TensorFlow"],
    github: "https://github.com/Svpathak05",
    featured: true,
  },
  {
    title: "Real-Time Chat App",
    description:
      "Socket.io based chat system with user rooms, live messaging, read receipts, and typing indicators.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/Svpathak05",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Projects" subtitle="Some things I've built" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group glass flex flex-col rounded-xl p-6 transition-all hover:border-primary/30 hover:glow-box"
            >
              {/* Header */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                  >
                    <path d="M2 6l10.5-3L23 6l-10.5 3L2 6z" />
                    <path d="M2 6v12l10.5 3V9" />
                    <path d="M23 6v12l-10.5 3V9" />
                  </svg>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github size={18} />
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Featured badge */}
              {project.featured && (
                <div className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Featured
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
