"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const coreSkills = [
  { name: "React & Node.js", size: "text-4xl md:text-6xl", speed: 0.2, top: "15%", left: "10%" },
  { name: "Python & Flask",  size: "text-3xl md:text-5xl", speed: 0.5, top: "10%", left: "60%" },
  { name: "HTML/CSS/JS",     size: "text-2xl md:text-4xl", speed: 0.3, top: "40%", left: "80%" },
  { name: "UI/UX Design",    size: "text-5xl md:text-7xl", speed: 0.1, top: "60%", left: "15%" },
  { name: "Figma & Adobe XD",size: "text-4xl md:text-6xl", speed: 0.4, top: "80%", left: "55%" },
  { name: "Responsive Design",size:"text-2xl md:text-4xl", speed: 0.25,top: "55%", left: "75%" },
]

const toolSkills = [
  { name: "VS Code",          size: "text-xl md:text-2xl", speed: 0.6,  top: "30%", left: "40%" },
  { name: "GitHub & Git",     size: "text-3xl md:text-4xl",speed: 0.15, top: "50%", left: "30%" },
  { name: "Docker",           size: "text-2xl md:text-3xl",speed: 0.45, top: "25%", left: "35%" },
  { name: "Webpack",          size: "text-xl md:text-2xl", speed: 0.35, top: "75%", left: "80%" },
  { name: "REST APIs",        size: "text-3xl md:text-4xl",speed: 0.2,  top: "85%", left: "15%" },
]

const allSkills = [
  ...coreSkills.map(s => ({ ...s, type: "core" as const })),
  ...toolSkills.map(s => ({ ...s, type: "tool" as const })),
]

export function OrbitingSkills() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>(".skill-orb")
    items.forEach((item) => {
      const speed = parseFloat(item.dataset.speed ?? "0")
      gsap.to(item, {
        y: -600 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} id="skills" className="relative overflow-hidden bg-background py-24 md:py-0 md:h-[130vh] md:flex md:items-center md:justify-center">
      {/* Background Mask — desktop only */}
      <div className="hidden md:block absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,hsl(var(--background))_75%)]" />

      {/* Central Core Title */}
      <div className="relative z-20 text-center px-4">
        <h2 className="text-primary uppercase tracking-[0.4em] text-xs md:text-sm font-bold mb-8">Expertise</h2>
        <p className="font-serif text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground">
          The <span className="italic text-primary">Stack</span>.
        </p>
        <div className="mt-8 md:mt-12 flex items-center justify-center gap-8 text-[10px] uppercase tracking-[0.3em] font-bold">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary" />
            <span className="text-primary">Core Skills</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-foreground/30" />
            <span className="text-foreground/40">Tools & Tech</span>
          </div>
        </div>

        {/* ── MOBILE GRID (hidden on md+) ── */}
        <div className="md:hidden mt-14 grid grid-cols-2 gap-3 text-left max-w-sm mx-auto">
          {coreSkills.map((skill, i) => (
            <div key={i} className="flex items-start gap-2 p-3 border border-primary/10 bg-secondary/20">
              <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary leading-tight">{skill.name}</span>
            </div>
          ))}
          {toolSkills.map((skill, i) => (
            <div key={i} className="flex items-start gap-2 p-3 border border-foreground/5 bg-secondary/10">
              <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-foreground/30" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/50 leading-tight">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP FLOATING ORBS (hidden on mobile) ── */}
      <div className="hidden md:block absolute inset-0 z-0">
        {allSkills.map((skill, i) => (
          <div
            key={i}
            className="skill-orb absolute px-6 py-4 rounded-none flex flex-col items-center justify-center transition-all duration-700 cursor-default"
            style={{ top: skill.top, left: skill.left }}
            data-speed={skill.speed}
          >
            <span className={`
              ${skill.size} font-bold select-none uppercase tracking-widest transition-all duration-700
              ${skill.type === "core"
                ? "text-primary opacity-30 hover:opacity-100"
                : "text-foreground/40 opacity-10 hover:opacity-100 hover:text-foreground"
              }
            `}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
