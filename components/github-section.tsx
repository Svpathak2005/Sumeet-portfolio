"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Star, GitFork, ExternalLink } from "lucide-react"
import SectionHeading from "./section-heading"

interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
}

const languageColors: Record<string, string> = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3572a5",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C++": "#f34b7d",
  C: "#555555",
}

export default function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.github.com/users/Svpathak05/repos?sort=updated&per_page=6")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data)
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="GitHub Repositories" subtitle="My open source contributions" />

        {loading ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="glass animate-pulse rounded-xl p-6"
              >
                <div className="mb-3 h-5 w-32 rounded bg-secondary" />
                <div className="mb-2 h-3 w-full rounded bg-secondary" />
                <div className="h-3 w-2/3 rounded bg-secondary" />
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group glass flex flex-col rounded-xl p-5 transition-all hover:border-primary/30"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="truncate font-mono text-sm font-semibold text-foreground group-hover:text-primary">
                    {repo.name}
                  </h3>
                  <ExternalLink
                    size={14}
                    className="shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {repo.description || "No description available."}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            languageColors[repo.language] || "#8b8b8b",
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={12} />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} />
                    {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/Svpathak05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"
          >
            View all repositories
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
