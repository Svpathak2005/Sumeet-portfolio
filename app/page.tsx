import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Journey from "@/components/journey"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import GithubSection from "@/components/github-section"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        {/* Section divider line */}
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <About />
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <Journey />
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <Skills />
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <Projects />
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <GithubSection />
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <Achievements />
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
