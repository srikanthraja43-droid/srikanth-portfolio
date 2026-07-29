"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    type: "Work Experience",
    title: "IT Development Intern",
    company: "Infochord Technologies Pvt. Ltd.",
    date: "December 2025 - Present",
    desc: "Selected for the IT Development Team in Hyderabad. Contributing to scalable web applications, modern UI interfaces, and internal software tools.",
  },
  {
    type: "Higher Education",
    title: "B.Tech Computer Science & Business Systems",
    company: "Excel Engineering College",
    date: "2023 - 2027",
    desc: "Currently in 3rd Year. Affiliated with Anna University. CGPA: 7.7/10. Focused on Full Stack Web Development, Data Structures, Algorithms, and Machine Learning.",
  },
  {
    type: "Senior Secondary (+1 & +2)",
    title: "HSC - Mathematics & Biology",
    company: "Pochampalli Boys Higher Secondary School",
    date: "2020 - 2022",
    desc: "Stream: Mathematics & Biology. Core focus on Physics, Chemistry, Mathematics, and Biological Sciences.",
  },
  {
    type: "Secondary School",
    title: "10th Standard (SSLC)",
    company: "SRV Matric Higher Secondary School",
    date: "Completed March 2020",
    desc: "Percentage: 80%. School Topper in Computer Science elective. Early foundation in software and technology.",
  },
]

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Progress line animation
    gsap.fromTo(lineRef.current, 
      { scaleY: 0 },
      { 
        scaleY: 1, 
        ease: "none", 
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    )

    // Experience items animation
    const items = gsap.utils.toArray<HTMLElement>(".journey-item")
    items.forEach((item) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30, filter: "blur(5px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          }
        }
      )
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} id="experience" className="py-28 md:py-36 bg-background relative px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-4 mb-16 md:mb-24 text-center">
          <span className="text-primary uppercase tracking-[0.4em] text-xs md:text-sm font-bold">Timeline</span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-foreground">Experience & Education</h2>
        </div>

        <div className="relative">
          {/* Central Progress Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-primary/10 overflow-hidden hidden md:block">
            <div ref={lineRef} className="absolute inset-0 bg-primary origin-top" />
          </div>

          <div className="flex flex-col gap-12 md:gap-24 relative">
            {experiences.map((exp, i) => (
              <div 
                key={i} 
                className={`journey-item flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-primary/5 blur-xl group-hover:bg-primary/10 transition duration-1000 group-hover:duration-200" />
                    <div className="relative p-6 md:p-8 bg-secondary/20 border border-primary/10 hover:border-primary/30 transition-all duration-500 rounded-2xl">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block font-mono">
                        {exp.type}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2 font-semibold">{exp.title}</h3>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                        {exp.company} <span className="mx-2 text-primary/40">•</span> {exp.date}
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-sm font-light">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-background border border-primary z-10 hidden md:block rounded-full" />

                {/* Spacer */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
