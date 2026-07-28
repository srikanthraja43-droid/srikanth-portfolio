"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import {
  Award,
  BookOpen,
  Building2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
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
  image: string
  badgeBg: string
  badgeText: string
  badgeBorder: string
  accentColor: string
  iconType: "internship" | "award" | "seminar" | "degree"
}

interface LearningCert {
  id: number
  title: string
  issuer: string
  date: string
  skills: string[]
  issuerColor: string
  issuerLabel: string
  credentialUrl?: string
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
    image: "/certificate 2.jpeg",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-400",
    badgeBorder: "border-amber-500/30",
    iconType: "internship",
  },
  {
    category: "National Expo Award",
    id: 2,
    title: "ARIVOLI 2K26 — 2nd Place Winner",
    issuer: "Knowledge Institute of Technology, Salem",
    date: "February 2026",
    credentialId: "CERT-ARIVOLI-2026",
    description:
      "Secured Second Place at the National Level Project Expo. Recognized for innovative systems design, full-stack application development, and technical implementation.",
    skills: ["Project Expo", "System Design", "2nd Place Winner"],
    accentGradient: "from-emerald-500 via-teal-500 to-emerald-600",
    accentColor: "#10b981",
    image: "/certificate 4.jpeg",
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
    image: "/certificate 1.jpeg",
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
    image: "/certificate 3.jpeg",
    badgeBg: "bg-purple-500/10",
    badgeText: "text-purple-400",
    badgeBorder: "border-purple-500/30",
    iconType: "degree",
  },
]

const learningCerts: LearningCert[] = [
  {
    id: 1,
    title: "Foundations of Prompt Engineering",
    issuer: "AWS Training & Certification",
    date: "Jul 17, 2026",
    skills: ["Prompt Engineering", "Generative AI", "AWS Bedrock"],
    issuerColor: "bg-[#FF9900]",
    issuerLabel: "AWS",
  },
  {
    id: 2,
    title: "What Is Generative AI?",
    issuer: "LinkedIn Learning",
    date: "Jul 17, 2026",
    skills: ["Generative AI Tools", "Artificial Intelligence (AI)", "Generative AI"],
    issuerColor: "bg-[#0077B5]",
    issuerLabel: "in",
  },
  {
    id: 3,
    title: "Microsoft Certifications: Exams, Paths & Resources",
    issuer: "LinkedIn Learning",
    date: "Jul 18, 2026",
    skills: ["Career Path Planning", "Tech Career Skills"],
    issuerColor: "bg-[#0077B5]",
    issuerLabel: "in",
  },
  {
    id: 4,
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte · Forage",
    date: "Jul 20, 2026",
    skills: ["Data Analysis", "Forensic Technology"],
    issuerColor: "bg-[#86BC25]",
    issuerLabel: "D.",
  },
  {
    id: 5,
    title: "SQL and Relational Databases 101",
    issuer: "CognitiveClass.ai · IBM",
    date: "Jul 20, 2026",
    skills: ["SQL", "Relational Databases", "IBM Skills Network"],
    issuerColor: "bg-[#1F70C1]",
    issuerLabel: "IBM",
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/b7b0efb9692c4c8aadd1b85297d6bc1d",
  },
]

export function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const renderIcon = (type: Certification["iconType"]) => {
    switch (type) {
      case "internship":
        return <Building2 className="w-3.5 h-3.5" />
      case "award":
        return <Trophy className="w-3.5 h-3.5" />
      case "seminar":
        return <Sparkles className="w-3.5 h-3.5" />
      case "degree":
        return <GraduationCap className="w-3.5 h-3.5" />
    }
  }

  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return
    const cards = carouselRef.current.querySelectorAll<HTMLElement>("[data-cert-card]")
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
    }
    setActiveIndex(index)
  }

  const prev = () => scrollToCard(Math.max(0, activeIndex - 1))
  const next = () => scrollToCard(Math.min(certificationsData.length - 1, activeIndex + 1))

  return (
    <section
      id="certifications"
      className="py-28 md:py-36 relative overflow-hidden"
      style={{ background: "hsl(20 20% 2%)" }}
    >
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

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] font-bold uppercase tracking-[0.35em]"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl text-foreground tracking-tight"
          >
            Certifications <span className="text-primary">&</span> Honors
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg font-light max-w-xl"
          >
            Official internship achievements, national technical expo awards, AI seminars, and academic credentials.
          </motion.p>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div className="relative">
          {/* Arrow nav */}
          <div className="hidden md:flex items-center justify-between absolute -left-5 -right-5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="pointer-events-auto w-11 h-11 rounded-full flex items-center justify-center border border-border/60 bg-background/80 backdrop-blur-sm text-foreground hover:border-primary/50 hover:text-primary disabled:opacity-20 disabled:pointer-events-none transition-all duration-200 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={activeIndex === certificationsData.length - 1}
              className="pointer-events-auto w-11 h-11 rounded-full flex items-center justify-center border border-border/60 bg-background/80 backdrop-blur-sm text-foreground hover:border-primary/50 hover:text-primary disabled:opacity-20 disabled:pointer-events-none transition-all duration-200 shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable strip */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {certificationsData.map((cert, idx) => (
              <motion.div
                key={cert.id}
                data-cert-card=""
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.55 }}
                className="group relative flex-shrink-0 snap-center select-none"
                style={{ width: "min(88vw, 420px)" }}
                onClick={() => setActiveIndex(idx)}
              >
                {/* Hover glow */}
                <div
                  className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${cert.accentColor}28, transparent 70%)`,
                  }}
                />

                {/* Card */}
                <div className="relative rounded-3xl overflow-hidden border border-border/50 group-hover:border-white/10 transition-all duration-500 bg-secondary/20 backdrop-blur-md shadow-xl">
                  {/* Accent top bar */}
                  <div className={`h-[3px] w-full bg-gradient-to-r ${cert.accentGradient}`} />

                  {/* Body */}
                  <div className="p-6 space-y-4">
                    {/* Category chip */}
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${cert.badgeBg} ${cert.badgeText} ${cert.badgeBorder}`}>
                      {renderIcon(cert.iconType)}
                      {cert.category}
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-muted-foreground/50">
                        {String(idx + 1).padStart(2, "0")} / {String(certificationsData.length).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground/50">
                        <FileCheck className="w-3 h-3 text-primary/50" />
                        {cert.credentialId}
                      </div>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-foreground font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-1.5 text-[12px] font-mono text-muted-foreground">
                      <span className="text-foreground/80 font-semibold">{cert.issuer}</span>
                      <span className="text-primary">·</span>
                      <span>{cert.date}</span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                      {cert.skills.map((skill, si) => (
                        <span
                          key={si}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-secondary/60 text-foreground/70 border border-border/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {certificationsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === idx ? "24px" : "8px",
                  height: "8px",
                  background: activeIndex === idx ? "hsl(var(--primary))" : "hsl(var(--border))",
                }}
              />
            ))}
          </div>
        </div>

        {/* Continuous Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-28 w-full"
        >
          <div className="flex flex-col items-center gap-3 mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/5 text-emerald-400 text-[11px] font-bold uppercase tracking-[0.35em]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Continuous Learning</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-foreground tracking-tight">
              Course Completions
            </h3>
            <p className="text-muted-foreground text-sm md:text-base font-light max-w-lg">
              Verified online courses from globally recognised platforms — demonstrating a commitment to lifelong learning.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learningCerts.map((lc, idx) => (
              <motion.div
                key={lc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group relative flex flex-col bg-secondary/10 backdrop-blur-sm border border-border/40 hover:border-emerald-400/30 rounded-2xl p-5 gap-3.5 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-[80px] bg-emerald-400/0 group-hover:bg-emerald-400/5 transition-all duration-500 pointer-events-none" />

                <div className="flex items-center gap-2.5 relative z-10">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-white text-[10px] font-black shrink-0 ${lc.issuerColor}`}>
                    {lc.issuerLabel}
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-muted-foreground truncate">
                    {lc.issuer}
                  </span>
                </div>

                <h4 className="text-sm sm:text-[15px] font-semibold text-foreground leading-snug group-hover:text-emerald-400 transition-colors duration-300 relative z-10">
                  {lc.title}
                </h4>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground/50 relative z-10">
                  <Sparkles className="w-3 h-3 text-emerald-400/70 shrink-0" />
                  <span>Completed: {lc.date}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {lc.skills.map((s, si) => (
                    <span
                      key={si}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary/50 text-foreground/60 border border-border/40 group-hover:border-emerald-400/15 transition-colors duration-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {lc.credentialUrl && (
                  <div className="pt-2.5 border-t border-border/30 relative z-10">
                    <a
                      href={lc.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Verify Credential
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
