"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"


export function SplashScreen({ finishLoading }: { finishLoading: () => void }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const timeout = setTimeout(() => {
      finishLoading()
    }, 3000)

    return () => clearTimeout(timeout)
  }, [finishLoading])

  if (!isMounted) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          y: -100,
          transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
        }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712] noise-bg"
      >
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black font-bold text-xl shadow-[0_0_50px_rgba(255,255,255,0.2)]">
              SR
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tighter text-white">
              Srikanthraja<span className="text-primary italic">.</span>
            </h1>
          </motion.div>
        </div>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 2, ease: "linear" }}
          className="mt-8 h-[1px] bg-primary/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary shadow-[0_0_15px_rgba(var(--primary),0.8)]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
          className="mt-4 text-[10px] font-bold uppercase tracking-[0.5em] text-white/50"
        >
          Engineering Excellence
        </motion.p>
      </motion.div>
    </AnimatePresence>
  )
}
