"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Mail } from "lucide-react"
import SectionHeading from "./section-heading"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Svpathak05",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sumeet-pathak-94295b28b",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:svpathak5@gmail.com",
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Get In Touch" subtitle="Let's build something great together" />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass flex flex-col gap-5 rounded-xl p-6"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                className="rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                className="rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="resize-none rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50"
            >
              {submitted ? (
                "Message Sent!"
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              {"Let's Connect"}
            </h3>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!"}
            </p>

            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg border border-border bg-secondary/30 px-5 py-4 transition-all hover:border-primary/30 hover:bg-secondary/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <link.icon size={20} />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary">
                      {link.label}
                    </span>
                    <p className="text-xs text-muted-foreground">
                      {link.href.replace("mailto:", "").replace("https://", "").replace("www.", "")}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
