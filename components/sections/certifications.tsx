"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import {
  Award,
  Building2,
  FileCheck,
  GraduationCap,
  Sparkles,
  Trophy,
} from "lucide-react"

interface Certification {
  id: number
  category: string
  title: string
  issuer: string
  date: string
  credentialId: string
  description: string
  skills: string[]
  accentGradient: string
  badgeBg: string
  badgeText: string
  badgeBorder: string
  accentColor: string
  iconType: "internship" | "award" | "seminar" | "degree"
}

const certificationsData: Certification[] = [
  {
    id: 1,
    category: "Work Experience & Internship",
    title: "IT Development Intern",
    issuer: "Infochord Technologies Pvt. Ltd.",
    date: "Dec 2025 - Present",
    credentialId: "CERT-INFOCHORD-2025",
    description:
      "Selected for the IT Development Team in Hyderabad. Contributing to scalable web applications, modern UI interfaces, and internal software tools.",
    skills: ["IT Development", "Full Stack", "Web Applications", "Software Tools"],
    accentGradient: "from-amber-500 via-orange-500 to-amber-600",
    accentColor: "#f59e0b",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-400",
    badgeBorder: "border-amber-500/30",
    iconType: "internship",
  },
  {
    id: 2,
    category: "National Expo Award",
    title: "ARIVOLI 2K26 — 2nd Place Winner",
    issuer: "Knowledge Institute of Technology, Salem",
    date: "February 2026",
    credentialId: "CERT-ARIVOLI-2026",
    description:
      "Secured Second Place at the National Level Project Expo. Recognized for innovative systems design, full-stack application development, and technical implementation.",
    skills: ["Project Expo", "System Design", "2nd Place Winner"],
    accentGradient: "from-emerald-500 via-teal-500 to-emerald-600",
    accentColor: "#10b981",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-400",
    badgeBorder: "border-emerald-500/30",
    iconType: "award",
  },
  {
    id: 3,
    category: "AI & Machine Learning Seminar",
    title: "National Seminar — AAGTAM 2025",
    issuer: "TNSCST & AI Department",
    date: "February 2025",
    credentialId: "CERT-AAGTAM-2025",
    description:
      "Participated in the TNSCST supported national seminar on 'Advances and Applications of Graph Theory' in Artificial Intelligence & Machine Learning.",
    skills: ["Machine Learning", "Graph Theory", "AI Foundations"],
    accentGradient: "from-blue-500 via-cyan-500 to-blue-600",
    accentColor: "#3b82f6",
    badgeBg: "bg-blue-500/10",
    badgeText: "text-blue-400",
    badgeBorder: "border-blue-500/30",
    iconType: "seminar",
  },
  {
    id: 4,
    category: "Academic Qualification",
    title: "B.Tech Computer Science & Software Systems",
    issuer: "Excel Engineering College (Anna University)",
    date: "2023 - Present",
    credentialId: "CERT-CSBS-2024",
    description:
      "Technical coursework recognition, software engineering practices, and business systems integration with high academic standard (CGPA: 7.7/10).",
    skills: ["Computer Science", "Business Systems", "Web Engineering"],
    accentGradient: "from-purple-500 via-violet-500 to-purple-600",
    accentColor: "#a855f7",
    badgeBg: "bg-purple-500/10",
    badgeText: "text-purple-400",
    badgeBorder: "border-purple-500/30",
    iconType: "degree",
  },
]

export function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Track vertical scroll inside the pinned container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  // Smooth horizontal scroll transform across cards
  const x = useTransform(scrollYProgress, [0, 0.95], ["0%", "-75%"])

  // Update active index indicator
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      certificationsData.length - 1,
      Math.floor((latest / 0.95) * certificationsData.length)
    )
    if (index >= 0 && index !== activeIndex) {
      setActiveIndex(index)
    }
  })

  const renderIcon = (type: Certification["iconType"]) => {
    switch (type) {
      case "internship":
        return <Building2 className="w-4 h-4" />
      case "award":
        return <Trophy className="w-4 h-4" />
      case "seminar":
        return <Sparkles className="w-4 h-4" />
      case "degree":
        return <GraduationCap className="w-4 h-4" />
    }
  }

  return (
    <div ref={sectionRef} id="certifications" className="relative h-[140vh] bg-background">
      {/* Pinned Sticky Window */}
      <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden py-10 md:py-14">
        
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, hsla(32,44%,63%,0.12) 0%, transparent 70%)",
          }}
        />

        {/* ── 1. Section Header & Progress ── */}
        <div className="container mx-auto max-w-7xl px-4 relative z-10 text-center shrink-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] font-bold uppercase tracking-[0.35em] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Certificates</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground tracking-tight">
            Certifications <span className="text-primary">&</span> Honors
          </h2>
        </div>

        {/* ── 2. Scroll-Pinned Certificate Cards Track ── */}
        <div className="relative z-10 my-auto overflow-hidden py-4">
          <motion.div style={{ x }} className="flex gap-8 sm:gap-12 px-6 sm:px-24 w-max">
            {certificationsData.map((cert, idx) => (
              <div
                key={cert.id}
                className="group relative flex-shrink-0 select-none w-[88vw] sm:w-[560px] lg:w-[620px]"
              >
                {/* Hover glow */}
                <div
                  className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${cert.accentColor}25, transparent 70%)`,
                  }}
                />

                {/* Sleek Certificate Card */}
                <div className="relative rounded-3xl overflow-hidden border border-border/60 group-hover:border-primary/40 transition-all duration-500 bg-secondary/20 backdrop-blur-xl shadow-2xl p-7 sm:p-9 flex flex-col justify-between space-y-5">
                  {/* Top gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cert.accentGradient}`} />

                  {/* Header info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className={`inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${cert.badgeBg} ${cert.badgeText} ${cert.badgeBorder}`}>
                        {renderIcon(cert.iconType)}
                        {cert.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-muted-foreground/60">
                        {String(idx + 1).padStart(2, "0")} / {String(certificationsData.length).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-mono text-muted-foreground">
                      <span className="text-foreground font-semibold">{cert.issuer}</span>
                      <span className="text-primary">•</span>
                      <span className="text-primary font-semibold">{cert.date}</span>
                    </div>

                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light pt-1">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills & Credential Footer */}
                  <div className="space-y-3 pt-3 border-t border-border/40">
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/70">
                      <FileCheck className="w-4 h-4 text-primary" />
                      <span>Credential ID: {cert.credentialId}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, si) => (
                        <span
                          key={si}
                          className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary/80 text-foreground/80 border border-border/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── 3. Bottom Controls & Scroll Cue Bar ── */}
        <div className="container mx-auto max-w-7xl px-4 relative z-10 flex items-center justify-between shrink-0">
          {/* Scroll Cue */}
          <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span>Scroll down to reveal each certificate</span>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {certificationsData.map((_, idx) => (
              <div
                key={idx}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === idx ? "32px" : "8px",
                  height: "8px",
                  background: activeIndex === idx ? "hsl(var(--primary))" : "hsl(var(--border))",
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
