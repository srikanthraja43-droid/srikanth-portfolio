"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    type: "Award",
    title: "ARIVOLI 2K26 - 2nd Place",
    company: "National Level Project Expo",
    date: "February 2026",
    desc: "Secured Second Place at Knowledge Institute of Technology, Salem. Recognized for innovative systems design and technical implementation.",
  },
  {
    type: "Production",
    title: "IT Development Intern",
    company: "Infochord Technologies Pvt. Ltd.",
    date: "December 2025",
    desc: "Selected for the IT Development Team in Hyderabad. Contributing to scalable web applications and internal tools.",
  },
  {
    type: "Academic",
    title: "National Seminar - AAGTAM 2025",
    company: "AI & Machine Learning",
    date: "February 2025",
    desc: "Participated in the TNSCST supported seminar on 'Advances and Applications of Graph Theory' in AI.",
  },
  {
    type: "Lead Education",
    title: "B.Tech Computer Science & Business Systems",
    company: "Excel Engineering College",
    date: "2023 - 2027",
    desc: "Currently in 3rd Year. Affiliated with Anna University. CGPA: 7.7/10. Focused on Full Stack Development, Data Structures, and ML.",
  },
  {
    type: "Foundation",
    title: "+1 & +2 (HSC)",
    company: "Pochampalli Boys Higher Secondary School",
    date: "2020 - 2022",
    desc: "Stream: Mathematics & Biology. Core focus on Physics, Chemistry, and Biological Sciences.",
  },
  {
    type: "Debut",
    title: "10th Standard (SSLC)",
    company: "SRV Matric Higher Secondary School",
    date: "Completed March 2020",
    desc: "Percentage: 80%. School Topper in CS elective. Awarded 'Best Student in Technology' for first website project.",
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
    const items = gsap.utils.toArray(".journey-item")
    items.forEach((item: any, i) => {
      gsap.fromTo(item,
        { opacity: 0, y: 50, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
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
    <section ref={containerRef} id="experience" className="py-32 bg-background relative px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6 mb-32 text-center">
          <span className="text-primary uppercase tracking-[0.4em] text-sm font-bold">Timeline</span>
          <h2 className="font-serif text-5xl md:text-8xl text-foreground">The Journey</h2>
        </div>

        <div className="relative">
          {/* Central Progress Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-primary/10 overflow-hidden hidden md:block">
            <div ref={lineRef} className="absolute inset-0 bg-primary origin-top" />
          </div>

          <div className="flex flex-col gap-32 relative">
            {experiences.map((exp, i) => (
              <div 
                key={i} 
                className={`journey-item flex flex-col md:flex-row items-center justify-between w-full gap-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-primary/5 blur-xl group-hover:bg-primary/10 transition duration-1000 group-hover:duration-200" />
                    <div className="relative p-10 bg-secondary/20 border border-primary/5 hover:border-primary/20 transition-all duration-500">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
                        {exp.type}
                      </span>
                      <h3 className="font-serif text-3xl text-foreground mb-2">{exp.title}</h3>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
                        {exp.company} <span className="mx-2 text-primary/30">•</span> {exp.date}
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-sm italic">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-background border border-primary z-10 hidden md:block" />

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
