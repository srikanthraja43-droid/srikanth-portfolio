"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function SplashScreen({ finishLoading }: { finishLoading: () => void }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const timeout = setTimeout(() => {
      finishLoading()
    }, 1200)
    return () => clearTimeout(timeout)
  }, [finishLoading])

  if (!isMounted) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.03,
          transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
        }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07080f] overflow-hidden"
      >
        {/* Radial background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 42%, hsla(32,44%,63%,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Fine dot-grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsla(32,60%,70%,0.8) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Monogram Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-6"
        >
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-2 rounded-full pointer-events-none"
            style={{
              boxShadow: "0 0 40px 15px hsla(32,60%,60%,0.2)",
            }}
          />

          <div
            className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-secondary/40 text-primary font-serif font-bold text-xl backdrop-blur-md"
            style={{
              boxShadow: "0 0 25px hsla(32,44%,63%,0.15)",
            }}
          >
            SR
          </div>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white text-center"
          >
            Srikanthraja<span className="italic" style={{ color: "hsl(32,44%,63%)" }}>.</span>
          </motion.h1>
        </div>

        {/* Fast progress bar */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "clamp(100px,15vw,160px)", opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.15, ease: "easeInOut" }}
          className="mt-6 h-[1.5px] relative overflow-hidden rounded-full"
          style={{ background: "hsla(32,60%,60%,0.25)" }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(32,60%,65%), transparent)",
              animation: "shimmer 1s ease-in-out infinite",
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.45, y: 0 }}
          transition={{ delay: 0.25, duration: 0.3 }}
          className="mt-4 text-[9px] font-bold uppercase tracking-[0.55em] text-white/50"
        >
          Engineering Excellence
        </motion.p>

        <style jsx>{`
          @keyframes shimmer {
            0%   { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  )
}
