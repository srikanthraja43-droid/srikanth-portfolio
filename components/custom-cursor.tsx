"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  vx: number
  vy: number
  alpha: number
  color: string
}

export function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const coreRef = useRef<HTMLDivElement>(null)

  const mousePos = useRef({ x: -200, y: -200 })
  const glowPos = useRef({ x: -200, y: -200 })
  const ringPos = useRef({ x: -200, y: -200 })
  const particles = useRef<Particle[]>([])
  const rafId = useRef<number>(0)

  useEffect(() => {
    setIsMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null
      if (target) {
        const isClickable = Boolean(
          target.closest("a, button, input, textarea, [role='button'], .cursor-pointer")
        )
        setIsHovered(isClickable)
      }

      // Add subtle particles on movement
      if (Math.random() < 0.4) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 2 + 1,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          alpha: 0.7,
          color: Math.random() > 0.3 ? "32, 90%, 65%" : "270, 80%, 70%",
        })
      }
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor

    const render = () => {
      // Smooth positions
      glowPos.current.x = lerp(glowPos.current.x, mousePos.current.x, 0.12)
      glowPos.current.y = lerp(glowPos.current.y, mousePos.current.y, 0.12)

      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.22)
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.22)

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`
      }
      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`
      }

      // Render particle trail on canvas
      const canvas = canvasRef.current
      if (canvas) {
        const ctx = canvas.getContext("2d")
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          particles.current.forEach((p, index) => {
            p.x += p.vx
            p.y += p.vy
            p.alpha -= 0.03
            p.size *= 0.94

            if (p.alpha <= 0 || p.size <= 0.2) {
              particles.current.splice(index, 1)
              return
            }

            ctx.beginPath()
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
            ctx.fillStyle = `hsla(${p.color}, ${p.alpha})`
            ctx.shadowBlur = 6
            ctx.shadowColor = `hsla(${p.color}, 0.6)`
            ctx.fill()
          })
        }
      }

      rafId.current = requestAnimationFrame(render)
    }

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    rafId.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  if (!isMounted) return null

  return (
    <>
      {/* Background Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9996] hidden md:block"
      />

      {/* 🌟 1. Subtle Ambient Soft Glow (Reduced size and opacity) */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[9997] hidden md:block -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isHovered
              ? "w-[200px] h-[200px] opacity-60 scale-105"
              : isClicked
              ? "w-[140px] h-[140px] opacity-70 scale-95"
              : "w-[160px] h-[160px] opacity-40"
          }`}
          style={{
            background:
              "radial-gradient(circle, hsla(32, 90%, 60%, 0.12) 0%, hsla(280, 70%, 60%, 0.05) 45%, transparent 70%)",
            filter: "blur(12px)",
          }}
        />
      </div>

      {/* 🌟 2. Refined Glowing Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full border transition-all duration-300 flex items-center justify-center ${
            isHovered
              ? "w-10 h-10 border-amber-400 bg-amber-400/15 shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-110"
              : isClicked
              ? "w-7 h-7 border-emerald-400 bg-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.6)] scale-90"
              : "w-8 h-8 border-amber-400/40 bg-amber-500/5 shadow-[0_0_10px_rgba(245,158,11,0.25)]"
          }`}
        >
          <div className="w-full h-full rounded-full border border-amber-300/30 animate-[spin_10s_linear_infinite]" />
        </div>
      </div>

      {/* 🌟 3. Sleek Pointer Core */}
      <div
        ref={coreRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isHovered
              ? "w-3 h-3 bg-white shadow-[0_0_12px_#fff,0_0_20px_rgba(245,158,11,0.8)]"
              : isClicked
              ? "w-3 h-3 bg-emerald-300 shadow-[0_0_15px_#34d399]"
              : "w-2 h-2 bg-amber-300 shadow-[0_0_8px_#f59e0b,0_0_14px_rgba(245,158,11,0.6)]"
          }`}
        />
      </div>
    </>
  )
}
