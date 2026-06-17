"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const skills = [
  // Core Skills - Primary Color (Gold)
  { name: "React & Node.js", type: "core", size: "text-4xl md:text-6xl", speed: 0.2, top: "15%", left: "10%" },
  { name: "Python & Flask", type: "core", size: "text-3xl md:text-5xl", speed: 0.5, top: "10%", left: "60%" },
  { name: "HTML/CSS/JS", type: "core", size: "text-2xl md:text-4xl", speed: 0.3, top: "40%", left: "80%" },
  { name: "UI/UX Design", type: "core", size: "text-5xl md:text-7xl", speed: 0.1, top: "60%", left: "15%" },
  { name: "Figma & Adobe XD", type: "core", size: "text-4xl md:text-6xl", speed: 0.4, top: "80%", left: "55%" },
  { name: "Responsive Design", type: "core", size: "text-2xl md:text-4xl", speed: 0.25, top: "55%", left: "75%" },
  
  // Tools & Tech - Secondary Color (White)
  { name: "VS Code", type: "tool", size: "text-xl md:text-2xl", speed: 0.6, top: "30%", left: "40%" },
  { name: "GitHub & Git", type: "tool", size: "text-3xl md:text-4xl", speed: 0.15, top: "50%", left: "30%" },
  { name: "Docker", type: "tool", size: "text-2xl md:text-3xl", speed: 0.45, top: "25%", left: "35%" },
  { name: "Webpack", type: "tool", size: "text-xl md:text-2xl", speed: 0.35, top: "75%", left: "80%" },
  { name: "REST APIs", type: "tool", size: "text-3xl md:text-4xl", speed: 0.2, top: "85%", left: "15%" },
]

export function OrbitingSkills() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const items = gsap.utils.toArray(".skill-orb")
    
    items.forEach((item: any) => {
      const speed = parseFloat(item.dataset.speed)
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
    <section ref={containerRef} id="skills" className="relative h-[130vh] flex items-center justify-center overflow-hidden bg-background py-32">
      {/* Background Mask */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,hsl(var(--background))_75%)]" />

      {/* Central Core Title */}
      <div className="relative z-20 text-center px-4">
        <h2 className="text-primary uppercase tracking-[0.4em] text-xs md:text-sm font-bold mb-8">Expertise</h2>
        <p className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground">
          The <span className="italic text-primary">Stack</span>.
        </p>
        <div className="mt-12 flex items-center justify-center gap-8 text-[10px] uppercase tracking-[0.3em] font-bold">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary" />
                <span className="text-primary">Core Skills</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-foreground/30" />
                <span className="text-foreground/40">Tools & Tech</span>
            </div>
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 z-0">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="skill-orb absolute px-6 py-4 rounded-none flex flex-col items-center justify-center transition-all duration-700 cursor-default"
            style={{ 
              top: skill.top, 
              left: skill.left,
            }}
            data-speed={skill.speed}
          >
            <span className={`text-[10px] uppercase tracking-[0.4em] font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity ${skill.type === 'core' ? 'text-primary/40' : 'text-foreground/20'}`}>
                {skill.type === 'core' ? 'Production' : 'Equipment'}
            </span>
            <span className={`
                ${skill.size} font-bold select-none uppercase tracking-widest transition-all duration-700
                ${skill.type === 'core' ? 'text-primary opacity-30 hover:opacity-100' : 'text-foreground/40 opacity-10 hover:opacity-100 hover:text-foreground'}
            `}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
