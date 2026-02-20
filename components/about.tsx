"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Code2, Trophy } from "lucide-react"
import SectionHeading from "./section-heading"

const highlights = [
  {
    icon: GraduationCap,
    title: "Computer Engineering",
    description: "Second-year student at FRCRCE with a CGPA of 7.9, passionate about software engineering.",
  },
  {
    icon: MapPin,
    title: "Based in Mumbai",
    description: "Building innovative solutions from the heart of India's tech hub.",
  },
  {
    icon: Code2,
    title: "Full Stack Developer",
    description: "Experienced in MERN stack development and AI-powered applications.",
  },
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "Multiple first-place wins in data analytics and startup competitions.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {"I'm a second-year Computer Engineering student (graduating 2027) from Mumbai, with hands-on experience in full-stack web development and AI-based applications."}
            </p>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              I thrive on building scalable products using the MERN stack and
              integrating AI into real-world solutions. As a GDSC Associate, I
              actively participate in the developer community and love sharing
              knowledge.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              When I{"'"}m not coding, you{"'"}ll find me exploring new
              technologies, competing in hackathons, or collaborating on
              open-source projects.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group glass rounded-xl p-5 transition-all hover:border-primary/30 hover:glow-box"
              >
                <item.icon
                  size={24}
                  className="mb-3 text-primary transition-transform group-hover:scale-110"
                />
                <h3 className="mb-1 font-serif text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
