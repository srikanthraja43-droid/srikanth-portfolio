"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, FileCheck, Sparkles } from "lucide-react"

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
}

interface LearningCert {
  id: number
  title: string
  issuer: string
  date: string
  skills: string[]
  issuerColor: string
  issuerLabel: string
}

const certificationsData: Certification[] = [
  {
    id: 1,
    category: "Work Experience & Internship",
    title: "IT Development Intern",
    issuer: "Infochord Technologies Pvt. Ltd.",
    date: "December 2025 - Present",
    credentialId: "CERT-INFOCHORD-2025",
    description: "Selected for the IT Development Team in Hyderabad. Contributing to scalable web applications, modern UI interfaces, and internal software tools.",
    skills: ["IT Development", "Full Stack", "Web Applications", "Software Tools"],
    accentGradient: "from-amber-500/20 via-primary/10 to-transparent",
  },
  {
    category: "National Expo Award",
    id: 2,
    title: "ARIVOLI 2K26 - 2nd Place Award",
    issuer: "Knowledge Institute of Technology, Salem",
    date: "February 2026",
    credentialId: "CERT-ARIVOLI-2026",
    description: "Secured Second Place at the National Level Project Expo. Recognized for innovative systems design, full-stack application development, and technical implementation.",
    skills: ["Project Expo", "System Design", "2nd Place Winner"],
    accentGradient: "from-emerald-500/20 via-primary/10 to-transparent",
  },
  {
    id: 3,
    category: "AI & Machine Learning Seminar",
    title: "National Seminar - AAGTAM 2025",
    issuer: "TNSCST & AI Department",
    date: "February 2025",
    credentialId: "CERT-AAGTAM-2025",
    description: "Participated in the TNSCST supported seminar on 'Advances and Applications of Graph Theory' in Artificial Intelligence & Machine Learning.",
    skills: ["Machine Learning", "Graph Theory", "AI Foundations"],
    accentGradient: "from-blue-500/20 via-primary/10 to-transparent",
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
    accentGradient: "from-purple-500/20 via-primary/10 to-transparent",
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
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-28 md:py-36 bg-secondary/20 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16 md:mb-24 text-center max-w-3xl mx-auto">
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
            className="text-muted-foreground text-base md:text-lg leading-relaxed font-light text-center"
          >
            Official internship achievements, national technical expo awards, AI seminars, and academic credentials.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2 max-w-5xl w-full mx-auto justify-center items-stretch">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="group relative flex flex-col justify-between bg-background/90 backdrop-blur-md border border-primary/20 hover:border-primary/60 transition-all duration-500 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.accentGradient} group-hover:h-1.5 transition-all duration-300`} />

              <div className="w-full flex flex-col items-center text-center">
                {/* Category Badge */}
                <div className="flex items-center justify-center w-full mb-6">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-primary px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    {cert.category}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground font-semibold leading-tight mb-3 group-hover:text-primary transition-colors duration-300 text-center">
                  {cert.title}
                </h3>

                {/* Company & Date Line */}
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono mb-6 flex items-center justify-center flex-wrap gap-2">
                  <span className="text-foreground">{cert.issuer}</span>
                  <span className="text-primary">•</span>
                  <span>{cert.date}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 font-light text-center max-w-md mx-auto">
                  {cert.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="w-full space-y-4 pt-6 border-t border-border/60 flex flex-col items-center text-center">
                <div className="flex flex-wrap justify-center gap-2">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-secondary/80 text-foreground/80 border border-primary/10 group-hover:border-primary/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-[11px] font-mono text-muted-foreground/70 flex items-center justify-center gap-1.5 pt-1">
                  <FileCheck className="w-3.5 h-3.5 text-primary" />
                  <span>ID: {cert.credentialId}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Continuous Learning ── */}
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
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* ── End Continuous Learning ── */}

      </div>
    </section>
  )
}
