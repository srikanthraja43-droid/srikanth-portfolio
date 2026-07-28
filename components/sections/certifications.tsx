"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Award,
  BookOpen,
  Building2,
  ExternalLink,
  FileCheck,
  GraduationCap,
  Sparkles,
  Trophy,
  X,
  ZoomIn,
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
    description: "Selected for the IT Development Team in Hyderabad. Contributing to scalable web applications, modern UI interfaces, and internal software tools.",
    skills: ["IT Development", "Full Stack", "Web Applications", "Software Tools"],
    accentGradient: "from-amber-500 via-orange-500 to-amber-600",
    image: "/certificate 2.jpeg",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-400",
    badgeBorder: "border-amber-500/30",
    iconType: "internship",
  },
  {
    category: "National Expo Award",
    id: 2,
    title: "ARIVOLI 2K26 - 2nd Place Winner",
    issuer: "Knowledge Institute of Technology, Salem",
    date: "February 2026",
    credentialId: "CERT-ARIVOLI-2026",
    description: "Secured Second Place at the National Level Project Expo. Recognized for innovative systems design, full-stack application development, and technical implementation.",
    skills: ["Project Expo", "System Design", "2nd Place Winner"],
    accentGradient: "from-emerald-500 via-teal-500 to-emerald-600",
    image: "/certificate 4.jpeg",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-400",
    badgeBorder: "border-emerald-500/30",
    iconType: "award",
  },
  {
    id: 3,
    category: "AI & Machine Learning Seminar",
    title: "National Seminar - AAGTAM 2025",
    issuer: "TNSCST & AI Department",
    date: "February 2025",
    credentialId: "CERT-AAGTAM-2025",
    description: "Participated in the TNSCST supported national seminar on 'Advances and Applications of Graph Theory' in Artificial Intelligence & Machine Learning.",
    skills: ["Machine Learning", "Graph Theory", "AI Foundations"],
    accentGradient: "from-blue-500 via-cyan-500 to-blue-600",
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
    description: "Technical coursework recognition, software engineering practices, and business systems integration with high academic standard (CGPA: 7.7/10).",
    skills: ["Computer Science", "Business Systems", "Web Engineering"],
    accentGradient: "from-purple-500 via-violet-500 to-purple-600",
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
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)

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
    <section id="certifications" className="py-28 md:py-36 bg-secondary/10 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.3em]"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl text-foreground tracking-tight text-center"
          >
            Certifications & Honors
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed font-light text-center max-w-xl"
          >
            Official internship achievements, national technical expo awards, AI seminars, and academic credentials.
          </motion.p>
        </div>

        {/* ── Redesigned Certifications Grid (Interactive Image Card Layout) ── */}
        <div className="grid gap-8 md:gap-8 lg:grid-cols-2 max-w-5xl w-full mx-auto">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="group relative flex flex-col justify-between bg-background/90 backdrop-blur-xl border border-border/70 hover:border-primary/60 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              {/* Top Gradient Accent Bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${cert.accentGradient}`} />

              {/* Card Header with Image Preview */}
              <div className="relative w-full h-48 sm:h-56 bg-secondary/30 overflow-hidden cursor-pointer group/img" onClick={() => setSelectedCert(cert)}>
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105 group-hover/img:opacity-90"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                {/* Category Badge on Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full backdrop-blur-md border ${cert.badgeBg} ${cert.badgeText} ${cert.badgeBorder}`}>
                    {renderIcon(cert.iconType)}
                    <span>{cert.category}</span>
                  </span>
                </div>

                {/* Quick Zoom Button on Top Right */}
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedCert(cert)
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-mono font-medium backdrop-blur-md border border-border/60 shadow-lg transition-all duration-300"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-6">
                <div className="space-y-3">
                  {/* Title */}
                  <h3
                    onClick={() => setSelectedCert(cert)}
                    className="font-serif text-2xl sm:text-3xl text-foreground font-semibold leading-tight group-hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    {cert.title}
                  </h3>

                  {/* Issuer & Date Row */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground font-medium">
                    <span className="text-foreground/90 font-semibold">{cert.issuer}</span>
                    <span className="text-primary">•</span>
                    <span>{cert.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light pt-1">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Badges & Verification ID */}
                <div className="pt-4 border-t border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary/80 text-foreground/80 border border-border/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential ID */}
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground shrink-0">
                    <FileCheck className="w-3.5 h-3.5 text-primary" />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Continuous Learning Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-24 w-full max-w-5xl mx-auto"
        >
          {/* Sub-header */}
          <div className="flex flex-col items-center gap-3 mb-10 text-center">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/5 text-emerald-400 text-xs font-bold uppercase tracking-[0.3em]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Continuous Learning</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-foreground tracking-tight">
              Course Completions
            </h3>
            <p className="text-muted-foreground text-sm md:text-base font-light max-w-xl">
              Verified online courses from globally recognised platforms — demonstrating a commitment to lifelong learning.
            </p>
          </div>

          {/* Learning Cards Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {learningCerts.map((lc, idx) => (
              <motion.div
                key={lc.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative flex flex-col bg-background/80 backdrop-blur-sm border border-border/50 hover:border-emerald-400/40 rounded-2xl p-6 gap-4 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-400/0 group-hover:from-emerald-500/5 group-hover:to-transparent transition-all duration-500 rounded-2xl pointer-events-none" />

                {/* Issuer row */}
                <div className="flex items-center gap-3 relative z-10">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-white text-[10px] font-black shrink-0 ${lc.issuerColor}`}>
                    {lc.issuerLabel}
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-muted-foreground">
                    {lc.issuer}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-sm sm:text-base font-semibold text-foreground leading-snug group-hover:text-emerald-400 transition-colors duration-300 relative z-10">
                  {lc.title}
                </h4>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground/60 relative z-10">
                  <Sparkles className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Completed: {lc.date}</span>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {lc.skills.map((s, si) => (
                    <span
                      key={si}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-secondary/60 text-foreground/70 border border-border/50 group-hover:border-emerald-400/20 transition-colors duration-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Verification Link */}
                {lc.credentialUrl && (
                  <div className="pt-2 border-t border-border/40 relative z-10">
                    <a
                      href={lc.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Verify Credential</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* ── End Continuous Learning ── */}

      </div>

      {/* ── Interactive Lightbox Modal for Full Certificate Inspection ── */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-background border border-border/80 rounded-3xl overflow-hidden shadow-2xl my-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/40">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full ${selectedCert.badgeBg} ${selectedCert.badgeText} ${selectedCert.badgeBorder}`}>
                    {renderIcon(selectedCert.iconType)}
                    <span>{selectedCert.category}</span>
                  </span>
                  <span className="text-xs font-mono text-muted-foreground hidden sm:inline-block">
                    {selectedCert.credentialId}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image View */}
              <div className="relative w-full max-h-[70vh] aspect-[4/3] bg-black/50 overflow-hidden flex items-center justify-center p-2">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-border bg-background flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                    {selectedCert.title}
                  </h4>
                  <p className="text-xs font-mono text-muted-foreground">
                    {selectedCert.issuer} • {selectedCert.date}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-mono font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
