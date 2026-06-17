"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/profile-photo.jpg"
          alt="Srikanthraja"
          fill
          style={{ objectPosition: "50% 30%" }}
          className="object-cover opacity-40 grayscale transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary uppercase tracking-[0.4em] text-xs md:text-sm font-bold mb-6"
        >
          Full Stack Developer & UI/UX Designer
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-6xl md:text-9xl text-foreground leading-tight mb-12 tracking-tighter"
        >
          Srikanthraja
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-8 justify-center"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 px-12 py-8 text-lg uppercase tracking-widest font-bold"
            asChild
          >
            <a href="#projects">View Work</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-500 px-12 py-8 text-lg uppercase tracking-widest font-bold"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>
      </div>

      {/* Cinematic Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  )
}
