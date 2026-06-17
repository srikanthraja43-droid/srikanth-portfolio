"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-32 bg-background text-foreground">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-md mx-auto aspect-[3/4]"
          >
            <div className="relative h-full w-full overflow-hidden bg-secondary/20 shadow-2xl">
              <Image
                src="/images/profile-photo.jpg"
                alt="Srikanthraja"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div className="space-y-6">
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-bold">The Biography</span>
              <h2 className="font-serif text-5xl md:text-7xl text-foreground leading-none">About Me</h2>
            </div>
            
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-light italic">
              "Blending technical precision with creative vision to engineer immersive digital experiences."
            </p>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              <p>
                Hi everyone! I&apos;m Srikanthraja from Krishnagiri, Tamil Nadu. Currently a B.Tech Computer Science and Business Systems student at Excel Engineering College.
              </p>
              <p>
                I specialize in Full Stack Development and UI/UX Design, focusing on creating aesthetic, high-performance web portals and mobile applications that make a difference.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-6">
              <div className="space-y-2">
                <div className="text-5xl font-serif text-primary">6+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">Featured Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-serif text-primary">4+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">Expert Certifications</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
