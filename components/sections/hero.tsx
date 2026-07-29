"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Download, Sparkles, Terminal } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background py-20 lg:py-0">
      {/* ── Dynamic Ambient Background & Mesh Gradient ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Blob 1 */}
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 via-purple-500/20 to-transparent rounded-full blur-[120px] opacity-70"
        />

        {/* Animated Gradient Blob 2 */}
        <motion.div
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 40, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-32 w-[550px] h-[550px] bg-gradient-to-tl from-emerald-500/20 via-primary/20 to-transparent rounded-full blur-[130px] opacity-60"
        />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-5rem)] py-12 space-y-8">
          
          {/* Main Headline */}
          <div className="space-y-4 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-foreground"
            >
              Srikanthraja <span className="bg-gradient-to-r from-primary via-purple-400 to-emerald-400 bg-clip-text text-transparent">R</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-lg sm:text-2xl font-light text-primary font-mono tracking-wide flex items-center justify-center gap-2"
            >
              <Terminal className="w-5 h-5 text-primary shrink-0" />
              <span>Full Stack Developer & UI/UX Specialist</span>
            </motion.p>
          </div>

          {/* Sub-description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-muted-foreground text-base sm:text-xl leading-relaxed max-w-2xl font-light"
          >
            Engineering high-performance web applications, intelligent AI interfaces, and business systems. IT Development Intern at Infochord Technologies.
          </motion.p>

          {/* Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>

            <a
              href="/SRI Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border border-border/80 bg-background/80 backdrop-blur-md text-foreground font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:border-primary/50 hover:bg-secondary/60 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto shadow-sm"
            >
              <Download className="w-4 h-4 text-primary" />
              <span>Get Resume</span>
            </a>
          </motion.div>

          {/* Quick Skills Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-2.5 text-xs font-mono text-muted-foreground"
          >
            <span className="px-3.5 py-2 rounded-lg bg-secondary/80 border border-border/60 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-primary" />
              React / Next.js
            </span>
            <span className="px-3.5 py-2 rounded-lg bg-secondary/80 border border-border/60 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Generative AI & Prompt Engineering
            </span>
            <span className="px-3.5 py-2 rounded-lg bg-secondary/80 border border-border/60 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              Node.js & Databases
            </span>
          </motion.div>

        </div>
      </div>

      {/* ── Modern Animated Scroll Indicator ── */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.4, repeat: Infinity }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10"
      >
        <a href="#about" className="flex flex-col items-center gap-1 group">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">
            Explore
          </span>
          <div className="w-5 h-9 rounded-full border-2 border-primary/30 flex items-start justify-center p-1 group-hover:border-primary transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.0, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </a>
      </motion.div>
    </section>
  )
}

