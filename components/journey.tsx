"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, School } from "lucide-react"
import SectionHeading from "./section-heading"

const milestones = [
  {
    icon: GraduationCap,
    institution:
      "Fr. Conceicao Rodrigues College of Engineering (FRCRCE)",
    degree: "B.E. in Computer Engineering",
    year: "2024 - Present",
    detail: "CGPA: 7.9 | GDSC Associate (Second Year)",
    color: "from-primary/20 to-primary/5",
    borderColor: "group-hover:border-primary/40",
    iconBg: "bg-primary/10 text-primary group-hover:bg-primary/20",
    glowColor: "group-hover:shadow-primary/10",
    isCurrent: true,
  },
  {
    icon: BookOpen,
    institution: "Thakur College of Commerce and Science",
    degree: "HSC (12th Standard)",
    year: "2023",
    detail: "Percentage: 60%",
    color: "from-sky-500/20 to-sky-500/5",
    borderColor: "group-hover:border-sky-500/40",
    iconBg: "bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20",
    glowColor: "group-hover:shadow-sky-500/10",
    isCurrent: false,
  },
  {
    icon: School,
    institution: "St. Lawrence High School",
    degree: "SSC (10th Standard)",
    year: "2021",
    detail: "Completed secondary education",
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "group-hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20",
    glowColor: "group-hover:shadow-emerald-500/10",
    isCurrent: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-primary/3 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          title="My Journey"
          subtitle="Education and academic milestones"
        />

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          {/* Vertical connector line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent sm:left-1/2 sm:block" />

          <div className="flex flex-col gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.institution}
                variants={cardVariants}
                className={`relative flex flex-col sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 z-10 hidden sm:left-1/2 sm:block sm:-translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary/50 bg-background"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </motion.div>
                </div>

                {/* Spacer for timeline alignment */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* Card */}
                <div
                  className={`w-full sm:w-1/2 ${
                    index % 2 === 0 ? "sm:pl-12" : "sm:pr-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-500 ${milestone.borderColor} ${milestone.glowColor} hover:shadow-2xl`}
                  >
                    {/* Gradient top bar */}
                    <div
                      className={`h-1 w-full bg-gradient-to-r ${milestone.color}`}
                    />

                    <div className="p-6">
                      {/* Header row */}
                      <div className="mb-4 flex items-start gap-4">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${milestone.iconBg}`}
                        >
                          <milestone.icon size={22} />
                        </motion.div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex items-center gap-3">
                            <span className="rounded-full border border-border/50 bg-secondary/60 px-3 py-0.5 font-mono text-xs text-muted-foreground">
                              {milestone.year}
                            </span>
                            {milestone.isCurrent && (
                              <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                                <span className="relative flex h-1.5 w-1.5">
                                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                                </span>
                                Current
                              </span>
                            )}
                          </div>
                          <h3 className="text-balance font-serif text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                            {milestone.degree}
                          </h3>
                        </div>
                      </div>

                      {/* Details */}
                      <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
                        {milestone.institution}
                      </p>
                      <p className="text-sm font-medium text-foreground/80">
                        {milestone.detail}
                      </p>
                    </div>

                    {/* Background decoration */}
                    <div
                      className={`pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-tl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${milestone.color}`}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
