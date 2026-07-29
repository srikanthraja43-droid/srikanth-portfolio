"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import {
  Award,
  Building2,
  ChevronLeft,
  ChevronRight,
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

  // Track vertical scroll inside the pinned container (h-[300vh] ensures clear scroll time for each card)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  // Map scroll position to active certificate index (0, 1, 2, 3)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = certificationsData.length
    // Allocate 0 to 0.95 across the cards, leaving 0.95 to 1.0 for release
    const index = Math.min(
      total - 1,
      Math.floor((latest / 0.95) * total)
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

  const currentCert = certificationsData[activeIndex]

  return (
    <div ref={sectionRef} id="certifications" className="relative h-[300vh] bg-background">
      {/* Pinned Sticky Window */}
      <div className="sticky top-0 h-screen flex flex-col justify-between items-center overflow-hidden py-8 sm:py-12">
        
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial glow tailored to active card's accent color */}
        <motion.div
          animate={{
            background: `radial-gradient(ellipse at 50% 30%, ${currentCert.accentColor}20 0%, transparent 70%)`,
          }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 pointer-events-none"
        />

        {/* ── 1. Section Header & Progress Badge ── */}
        <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center shrink-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] font-bold uppercase tracking-[0.35em] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Certificates ({activeIndex + 1} of {certificationsData.length})</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-foreground tracking-tight">
            Certifications <span className="text-primary">&</span> Honors
          </h2>
        </div>

        {/* ── 2. Centered Full-View Card Showcase with Step Animation ── */}
        <div className="relative z-10 my-auto w-full max-w-3xl px-4 sm:px-6">
          {/* Arrow navigation buttons */}
          <div className="hidden sm:flex items-center justify-between absolute -left-6 -right-6 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
            <button
              onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeIndex === 0}
              className="pointer-events-auto w-11 h-11 rounded-full flex items-center justify-center border border-border/60 bg-background/80 backdrop-blur-md text-foreground hover:border-primary/50 hover:text-primary disabled:opacity-20 disabled:pointer-events-none transition-all duration-200 shadow-xl"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveIndex((prev) => Math.min(certificationsData.length - 1, prev + 1))}
              disabled={activeIndex === certificationsData.length - 1}
              className="pointer-events-auto w-11 h-11 rounded-full flex items-center justify-center border border-border/60 bg-background/80 backdrop-blur-md text-foreground hover:border-primary/50 hover:text-primary disabled:opacity-20 disabled:pointer-events-none transition-all duration-200 shadow-xl"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentCert.id}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.97 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden border border-border/70 bg-secondary/30 backdrop-blur-2xl shadow-2xl p-7 sm:p-10 flex flex-col justify-between space-y-6"
            >
              {/* Top gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${currentCert.accentGradient}`} />

              {/* Card Header Info */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className={`inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${currentCert.badgeBg} ${currentCert.badgeText} ${currentCert.badgeBorder}`}>
                    {renderIcon(currentCert.iconType)}
                    {currentCert.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-muted-foreground/70">
                    Step {String(activeIndex + 1).padStart(2, "0")} / {String(certificationsData.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl text-foreground font-semibold leading-tight">
                  {currentCert.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-mono text-muted-foreground">
                  <span className="text-foreground font-semibold">{currentCert.issuer}</span>
                  <span className="text-primary">•</span>
                  <span className="text-primary font-semibold">{currentCert.date}</span>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light pt-2">
                  {currentCert.description}
                </p>
              </div>

              {/* Skills & Credential Footer */}
              <div className="space-y-4 pt-4 border-t border-border/40">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/70">
                  <FileCheck className="w-4 h-4 text-primary" />
                  <span>Credential ID: {currentCert.credentialId}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {currentCert.skills.map((skill, si) => (
                    <span
                      key={si}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary/80 text-foreground/90 border border-border/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── 3. Bottom Navigation Controls & Scroll Cues ── */}
        <div className="container mx-auto max-w-4xl px-4 relative z-10 flex items-center justify-between shrink-0 pt-2">
          {/* Scroll Cue Indicator */}
          <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span>
              {activeIndex < certificationsData.length - 1
                ? "Scroll down for next certificate"
                : "Scroll down to continue to Course Completions"}
            </span>
          </div>

          {/* Interactive Step Buttons / Indicators */}
          <div className="flex items-center gap-2">
            {certificationsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === idx ? "32px" : "10px",
                  height: "10px",
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
