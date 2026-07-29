"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, ExternalLink, Sparkles, Code2 } from "lucide-react"

interface Project {
  number: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  href: string
  githubUrl?: string
  badgeText: string
  accentGradient: string
}

const projects: Project[] = [
  {
    number: "01",
    title: "Glossary List & Expiry Date Tracker",
    subtitle: "Smart Inventory & Household Organizer",
    description: "An intuitive web application built to systematically track food items, household supplies, and expiration dates. Helps users prevent waste with automated visual alerts and categorized inventory management.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    href: "https://github.com/srikanthraja43-droid",
    githubUrl: "https://github.com/srikanthraja43-droid",
    badgeText: "Inventory & Utility",
    accentGradient: "from-amber-500/20 via-primary/10 to-transparent",
  },
  {
    number: "02",
    title: "Skill-Based Freelance Marketplace",
    subtitle: "Talent Matching & Service Platform",
    description: "A modern digital marketplace designed to connect clients with specialized freelancers based on verified technical skills, project portfolios, and transparent direct hiring workflows.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    href: "https://vercel.com/srikanthraja43-4520s-projects",
    githubUrl: "https://github.com/srikanthraja43-droid",
    badgeText: "Web Marketplace",
    accentGradient: "from-blue-500/20 via-primary/10 to-transparent",
  },
  {
    number: "03",
    title: "People Counting Detector Using Machine Learning",
    subtitle: "Computer Vision & Real-time Analytics",
    description: "A machine learning system for real-time video feed analysis. Detects and tracks human movement in entryways and public spaces with high accuracy for crowd monitoring and space utilization.",
    tags: ["Python", "OpenCV", "Machine Learning", "YOLO", "Deep Learning"],
    href: "https://github.com/srikanthraja43-droid",
    githubUrl: "https://github.com/srikanthraja43-droid",
    badgeText: "AI & Machine Learning",
    accentGradient: "from-emerald-500/20 via-primary/10 to-transparent",
  },
  {
    number: "04",
    title: "PG-360",
    subtitle: "Accommodation & 360° Virtual Tour Platform",
    description: "A modern Paying Guest (PG) management application featuring immersive 360° room walkthroughs, instant online booking requests, transparent pricing, and tenant management.",
    tags: ["Next.js", "React", "Three.js", "Tailwind CSS", "Node.js"],
    href: "https://github.com/navaniarts007/PG360",
    githubUrl: "https://github.com/navaniarts007/PG360",
    badgeText: "PropTech & 360°",
    accentGradient: "from-purple-500/20 via-primary/10 to-transparent",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 bg-secondary/30 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header - Centered */}
        <div className="flex flex-col items-center gap-4 mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.3em]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Published Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl text-foreground tracking-tight text-center"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed font-light text-center"
          >
            A showcase of full-stack web applications, AI models, and software solutions built with modern technology stacks.
          </motion.p>
        </div>

        {/* Projects Grid - Centered */}
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2 max-w-5xl w-full mx-auto justify-center items-stretch">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07, duration: 0.4 }}
              className="group relative flex flex-col justify-between items-center text-center bg-background/90 backdrop-blur-md border border-primary/15 hover:border-primary/50 transition-all duration-500 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentGradient} group-hover:h-1.5 transition-all duration-300`} />

              <div className="w-full flex flex-col items-center">
                {/* Card Top Row: Number & Badge Centered */}
                <div className="flex items-center justify-between w-full mb-8">
                  <span className="font-serif text-4xl md:text-5xl font-bold text-primary/30 group-hover:text-primary transition-colors duration-500">
                    {project.number}
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-wider font-mono font-semibold px-3 py-1 rounded-full bg-secondary text-foreground/80 border border-primary/10">
                      {project.badgeText}
                    </span>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* Subtitle & Main Title - Centered */}
                <div className="space-y-2 mb-4 flex flex-col items-center text-center">
                  <div className="text-xs uppercase tracking-widest text-primary font-mono font-semibold flex items-center justify-center gap-2">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{project.subtitle}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground font-semibold leading-tight group-hover:text-primary transition-colors duration-300 text-center">
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                </div>

                {/* Description - Centered */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 font-light text-center max-w-md mx-auto">
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Tech Tags & Action Buttons - Centered */}
              <div className="w-full space-y-6 pt-6 border-t border-border/60 flex flex-col items-center">
                {/* Tech Tags Centered */}
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-secondary/80 text-foreground/80 border border-primary/10 group-hover:border-primary/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons Centered */}
                <div className="flex items-center justify-center gap-4 pt-2">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs uppercase font-bold tracking-wider hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Project</span>
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/20 bg-background hover:bg-secondary text-foreground text-xs uppercase font-bold tracking-wider hover:text-primary transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
