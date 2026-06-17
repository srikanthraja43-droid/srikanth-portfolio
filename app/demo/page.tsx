import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Journey } from "@/components/sections/journey"
import { Resume } from "@/components/sections/resume"
import { OrbitingSkills } from "@/components/sections/orbiting-skills"
import { Contact } from "@/components/sections/contact"

export default function DemoPage() {
  return (
    <div className="bg-background min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Journey />
      <Resume />
      <OrbitingSkills />
      <Contact />
      <div className="py-20 text-center bg-background border-t border-primary/10">
        <p className="text-primary/40 text-[10px] tracking-[0.4em] uppercase font-bold">
          Cinematic Portfolio Redesign - Isolated Demo
        </p>
      </div>
    </div>
  )
}
