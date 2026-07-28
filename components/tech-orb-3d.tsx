"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion"
import { Cpu, Database, Globe, Layers, Sparkles, Terminal, ShieldCheck, Zap } from "lucide-react"

/* ─── 3D Math Point ─── */
interface Point3D {
  x: number
  y: number
  z: number
}

export function TechOrb3D() {
  const reduced = useReducedMotion() ?? false
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  // Mouse tilt physics
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })

  const rotateY = useTransform(springX, [-200, 200], [-12, 12])
  const rotateX = useTransform(springY, [-200, 200], [12, -12])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return

    let width = 0
    let height = 0
    let animationActive = true

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Create 3D Globe Sphere Points
    const numPoints = 220
    const points: Point3D[] = []
    const radius = 130

    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints)
      const theta = Math.sqrt(numPoints * Math.PI) * phi
      points.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
      })
    }

    let angleX = 0.003
    let angleY = 0.005

    const resize = () => {
      width = canvas.parentElement?.offsetWidth || 400
      height = canvas.parentElement?.offsetHeight || 480
      canvas.width = width
      canvas.height = height
    }
    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      if (!animationActive) return
      ctx.clearRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2

      // Rotate points
      points.forEach((pt) => {
        // Rotate Y
        const cosY = Math.cos(angleY)
        const sinY = Math.sin(angleY)
        const x1 = pt.x * cosY - pt.z * sinY
        const z1 = pt.z * cosY + pt.x * sinY

        // Rotate X
        const cosX = Math.cos(angleX)
        const sinX = Math.sin(angleX)
        const y2 = pt.y * cosX - z1 * sinX
        const z2 = z1 * cosX + pt.y * sinX

        pt.x = x1
        pt.y = y2
        pt.z = z2
      })

      // Draw 3D point cloud & connections
      const projected: { x: number; y: number; scale: number; alpha: number }[] = []

      points.forEach((pt) => {
        const perspective = 400
        const scale = perspective / (perspective + pt.z + 180)
        const px = cx + pt.x * scale
        const py = cy + pt.y * scale
        const alpha = Math.max(0.1, (pt.z + radius) / (2 * radius))

        projected.push({ x: px, y: py, scale, alpha })
      })

      // Draw connection lines
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i]
          const p2 = projected[j]
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y)

          if (dist < 42) {
            const lineAlpha = (1 - dist / 42) * Math.min(p1.alpha, p2.alpha) * 0.45
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `hsla(32, 85%, 65%, ${lineAlpha})`
            ctx.lineWidth = 0.8 * p1.scale
            ctx.stroke()
          }
        }
      }

      // Draw 3D glowing nodes
      projected.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(1, 2.2 * p.scale), 0, Math.PI * 2)
        ctx.fillStyle = `hsla(32, 95%, 70%, ${p.alpha * 0.85})`
        ctx.shadowBlur = 6 * p.scale
        ctx.shadowColor = "hsla(32, 90%, 60%, 0.8)"
        ctx.fill()
      })

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      animationActive = false
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [reduced])

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: reduced ? 0 : rotateX,
        rotateY: reduced ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-full min-h-[440px] flex items-center justify-center cursor-pointer select-none"
    >
      {/* Background Ambient Radial Glow */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, hsla(32, 85%, 60%, 0.18) 0%, hsla(270, 75%, 60%, 0.08) 55%, transparent 75%)",
          filter: "blur(30px)",
        }}
      />

      {/* 3D Canvas Sphere */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 3D Orbiting Glowing Rings */}
      <motion.div
        animate={{ rotateZ: 360, rotateX: 65 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute w-[310px] h-[310px] rounded-full border border-amber-400/30 pointer-events-none"
        style={{ boxShadow: "0 0 25px rgba(245, 158, 11, 0.15)" }}
      />
      <motion.div
        animate={{ rotateZ: -360, rotateY: 70 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-purple-400/30 pointer-events-none"
      />

      {/* 🌟 Floating Interactive 3D Tech Cards */}
      {/* Card 1: Top Left - AI & Software */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-background/85 backdrop-blur-xl border border-primary/40 shadow-xl flex items-center gap-2.5 z-20"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-foreground">AI & Software</div>
          <div className="text-[9px] font-mono text-primary">Generative Systems</div>
        </div>
      </motion.div>

      {/* Card 2: Top Right - IT Development */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-12 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-background/85 backdrop-blur-xl border border-emerald-500/40 shadow-xl flex items-center gap-2.5 z-20"
        style={{ transform: "translateZ(40px)" }}
      >
        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-foreground">Infochord IT Intern</div>
          <div className="text-[9px] font-mono text-emerald-400">Hyderabad Team</div>
        </div>
      </motion.div>

      {/* Card 3: Bottom Left - Full Stack */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-12 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-background/85 backdrop-blur-xl border border-purple-500/40 shadow-xl flex items-center gap-2.5 z-20"
        style={{ transform: "translateZ(35px)" }}
      >
        <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-foreground">Full Stack Architecture</div>
          <div className="text-[9px] font-mono text-purple-400">Next.js & React</div>
        </div>
      </motion.div>

      {/* Card 4: Bottom Right - Award */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-background/85 backdrop-blur-xl border border-amber-400/40 shadow-xl flex items-center gap-2.5 z-20"
        style={{ transform: "translateZ(45px)" }}
      >
        <div className="w-7 h-7 rounded-lg bg-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-foreground">National Expo Winner</div>
          <div className="text-[9px] font-mono text-amber-400">ARIVOLI 2K26</div>
        </div>
      </motion.div>

      {/* Center Hologram Core Label */}
      <div className="relative z-10 flex flex-col items-center pointer-events-none">
        <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-2xl border border-primary/50 flex items-center justify-center shadow-[0_0_35px_rgba(245,158,11,0.35)]">
          <Globe className="w-8 h-8 text-primary animate-pulse" />
        </div>
        <span className="mt-3 px-3 py-1 rounded-full bg-background/90 border border-primary/30 text-[10px] font-mono font-bold text-primary tracking-widest uppercase backdrop-blur-md shadow-lg">
          3D Cyber Core
        </span>
      </div>
    </motion.div>
  )
}
