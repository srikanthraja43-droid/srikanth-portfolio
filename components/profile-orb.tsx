"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion"

/* ─── Types ──────────────────────────────────────────────────────────── */
interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  char: string
  size: number
  opacity: number
}

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  hue: number
}

/* ─── Constants ──────────────────────────────────────────────────────── */
const BINARY = ["0", "1"]
const CODE_SNIPPETS = [
  "const ai = new Model()",
  "await fetch('/api')",
  "useEffect(() => {})",
  "SELECT * FROM nodes",
  "git commit -m 'feat'",
  "npm run build",
  "import { AI } from",
  "export default App",
  "setState(prev =>)",
  "async function*()",
]

/* ─── Canvas particle layer ──────────────────────────────────────────── */
function ParticleCanvas({ reduced }: { reduced: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<ReturnType<typeof requestAnimationFrame>>(0)
  const particles = useRef<Particle[]>([])
  const nodes = useRef<Node[]>([])

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return

    let started = false

    const startLoop = (W: number, H: number) => {
      if (started || W <= 0 || H <= 0) return
      started = true

      canvas.width = W
      canvas.height = H

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      nodes.current = Array.from({ length: 9 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2.5 + 1.5,
        hue: Math.random() * 60 + 30,
      }))

      let frame = 0

      const spawn = () => {
        particles.current.push({
          x: Math.random() * W,
          y: H + 10,
          vx: (Math.random() - 0.5) * 0.6,
          vy: -(Math.random() * 1.2 + 0.4),
          life: 0,
          maxLife: 120 + Math.random() * 80,
          char: BINARY[Math.random() > 0.5 ? 1 : 0],
          size: Math.random() * 8 + 7,
          opacity: 0,
        })
      }

      const draw = () => {
        frame++
        ctx.clearRect(0, 0, W, H)

        if (frame % 8 === 0 && particles.current.length < 28) spawn()

        const ns = nodes.current
        ns.forEach((a, i) => {
          ns.forEach((b, j) => {
            if (j <= i) return
            const dist = Math.hypot(a.x - b.x, a.y - b.y)
            if (dist < 160) {
              const alpha = (1 - dist / 160) * 0.18
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.strokeStyle = `hsla(32, 80%, 65%, ${alpha})`
              ctx.lineWidth = 0.7
              ctx.stroke()

              if (frame % 120 < 60 && i === 0) {
                const t = (frame % 60) / 60
                const px = a.x + (b.x - a.x) * t
                const py = a.y + (b.y - a.y) * t
                ctx.beginPath()
                ctx.arc(px, py, 2, 0, Math.PI * 2)
                ctx.fillStyle = `hsla(32, 90%, 70%, 0.7)`
                ctx.fill()
              }
            }
          })

          a.x += a.vx; a.y += a.vy
          if (a.x < 0 || a.x > W) a.vx *= -1
          if (a.y < 0 || a.y > H) a.vy *= -1

          ctx.beginPath()
          ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${a.hue}, 80%, 70%, 0.55)`
          ctx.fill()
        })

        ctx.strokeStyle = "hsla(32, 60%, 55%, 0.06)"
        ctx.lineWidth = 1
        ;[[0.15, 0.1, 0.4, 0.1], [0.4, 0.1, 0.4, 0.35], [0.6, 0.85, 0.85, 0.85], [0.85, 0.85, 0.85, 0.6]].forEach(
          ([x1, y1, x2, y2]) => {
            ctx.beginPath()
            ctx.moveTo(x1 * W, y1 * H)
            ctx.lineTo(x2 * W, y2 * H)
            ctx.stroke()
          }
        )

        particles.current = particles.current.filter((p) => {
          p.life++; p.x += p.vx; p.y += p.vy
          const half = p.maxLife / 2
          p.opacity = p.life < half ? p.life / half : 1 - (p.life - half) / half
          ctx.font = `${p.size}px monospace`
          ctx.fillStyle = `hsla(32, 70%, 65%, ${p.opacity * 0.45})`
          ctx.fillText(p.char, p.x, p.y)
          return p.life < p.maxLife
        })

        rafRef.current = requestAnimationFrame(draw)
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect
      startLoop(Math.round(width), Math.round(height))
    })
    ro.observe(canvas)

    return () => {
      ro.disconnect()
      cancelAnimationFrame(rafRef.current)
    }
  }, [reduced])

  if (reduced) return null

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ borderRadius: "inherit" }}
    />
  )
}

/* ─── Floating code snippet ──────────────────────────────────────────── */
function CodeSnippet({
  text,
  x,
  y,
  delay,
  reduced,
}: {
  text: string
  x: string
  y: string
  delay: number
  reduced: boolean
}) {
  if (reduced) return null
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: [0, 0.55, 0.55, 0] }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        repeatDelay: 8 + Math.random() * 6,
        times: [0, 0.15, 0.8, 1],
        ease: "easeInOut",
      }}
      className="absolute pointer-events-none select-none"
      style={{ left: x, top: y }}
    >
      <span
        className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-md border"
        style={{
          background: "rgba(0,0,0,0.55)",
          borderColor: "hsla(32,60%,55%,0.2)",
          color: "hsla(32,80%,70%,0.9)",
          backdropFilter: "blur(6px)",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </span>
    </motion.div>
  )
}

/* ─── Holographic ring ───────────────────────────────────────────────── */
function HoloRing({
  size,
  duration,
  delay,
  opacity,
  reduced,
}: {
  size: number
  duration: number
  delay: number
  opacity: number
  reduced: boolean
}) {
  if (reduced) return null
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: [0, opacity, 0], scale: [0.85, 1.05, 0.85] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "1px solid hsla(32, 80%, 65%, 0.35)",
        boxShadow: "0 0 20px 2px hsla(32, 80%, 65%, 0.07)",
      }}
    />
  )
}

/* ─── Orbiting node ──────────────────────────────────────────────────── */
function OrbitNode({
  radius,
  duration,
  delay,
  size,
  color,
  reduced,
}: {
  radius: number
  duration: number
  delay: number
  size: number
  color: string
  reduced: boolean
}) {
  if (reduced) return null
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
      className="absolute pointer-events-none"
      style={{
        width: radius * 2,
        height: radius * 2,
        top: "50%",
        left: "50%",
        marginTop: -radius,
        marginLeft: -radius,
        borderRadius: "50%",
        border: "1px dashed hsla(32, 60%, 55%, 0.12)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: size,
          height: size,
          borderRadius: "50%",
          background: color,
          boxShadow: `0 0 8px 2px ${color}`,
        }}
      />
    </motion.div>
  )
}

/* ─── Main export ────────────────────────────────────────────────────── */
export function ProfileOrb({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion() ?? false

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springX = useSpring(rawX, { stiffness: 60, damping: 20 })
  const springY = useSpring(rawY, { stiffness: 60, damping: 20 })
  const rotateY = useTransform(springX, [-150, 150], [-6, 6])
  const rotateX = useTransform(springY, [-150, 150], [6, -6])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return
    const rect = e.currentTarget.getBoundingClientRect()
    rawX.set(e.clientX - rect.left - rect.width / 2)
    rawY.set(e.clientY - rect.top - rect.height / 2)
  }
  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full h-full"
    >
      {/* Canvas particle / neural net layer (behind image) */}
      <ParticleCanvas reduced={reduced} />

      {/* Holographic rings */}
      <HoloRing size={115} duration={4.5} delay={0} opacity={0.35} reduced={reduced} />
      <HoloRing size={145} duration={6} delay={1.2} opacity={0.2} reduced={reduced} />
      <HoloRing size={175} duration={8} delay={2.5} opacity={0.12} reduced={reduced} />

      {/* Orbiting nodes */}
      <OrbitNode radius={80} duration={12} delay={0} size={5} color="hsla(32,90%,65%,0.8)" reduced={reduced} />
      <OrbitNode radius={105} duration={18} delay={3} size={4} color="hsla(160,80%,55%,0.7)" reduced={reduced} />
      <OrbitNode radius={130} duration={25} delay={7} size={3} color="hsla(220,80%,70%,0.6)" reduced={reduced} />

      {/* Floating code snippets — positioned around the image */}
      <CodeSnippet text="const ai = new Model()" x="2%" y="8%" delay={0} reduced={reduced} />
      <CodeSnippet text="await fetch('/api')" x="58%" y="5%" delay={2.5} reduced={reduced} />
      <CodeSnippet text="useEffect(() => {})" x="3%" y="78%" delay={5} reduced={reduced} />
      <CodeSnippet text="SELECT * FROM nodes" x="55%" y="88%" delay={7.5} reduced={reduced} />
      <CodeSnippet text="git commit -m 'feat'" x="1%" y="44%" delay={10} reduced={reduced} />
      <CodeSnippet text="npm run build" x="62%" y="48%" delay={12.5} reduced={reduced} />

      {/* Light reflection glare */}
      {!reduced && (
        <motion.div
          animate={{ opacity: [0.04, 0.09, 0.04], x: ["0%", "3%", "0%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, hsla(32,80%,80%,0.12) 0%, transparent 50%, hsla(220,80%,80%,0.06) 100%)",
          }}
        />
      )}

      {/* The actual image / children */}
      <div className="relative w-full h-full" style={{ transform: "translateZ(8px)" }}>
        {children}
      </div>
    </motion.div>
  )
}
