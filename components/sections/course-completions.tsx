"use client"

import { motion } from "framer-motion"
import { BookOpen, ExternalLink, Sparkles } from "lucide-react"

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

export function CourseCompletions() {
  return (
    <section id="course-completions" className="py-24 bg-background border-t border-border/40 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, hsla(160, 80%, 50%, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/5 text-emerald-400 text-[11px] font-bold uppercase tracking-[0.35em]"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Continuous Learning</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground tracking-tight"
          >
            Course Completions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg font-light max-w-xl"
          >
            Verified online courses from globally recognised platforms — demonstrating a commitment to lifelong learning.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learningCerts.map((lc, idx) => (
            <motion.div
              key={lc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group relative flex flex-col bg-secondary/10 backdrop-blur-sm border border-border/40 hover:border-emerald-400/30 rounded-2xl p-6 gap-4 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 overflow-hidden"
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

              <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-emerald-400 transition-colors duration-300 relative z-10">
                {lc.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground/60 relative z-10">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400/70 shrink-0" />
                <span>Completed: {lc.date}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 relative z-10 pt-1">
                {lc.skills.map((s, si) => (
                  <span
                    key={si}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-secondary/50 text-foreground/70 border border-border/40 group-hover:border-emerald-400/15 transition-colors duration-300"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {lc.credentialUrl && (
                <div className="pt-3 border-t border-border/30 relative z-10 mt-auto">
                  <a
                    href={lc.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Verify Credential
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
