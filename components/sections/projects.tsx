"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Next Gen WiFi Technology",
    category: "IoT System",
    description: "Advanced WiFi 6E mesh network system with AI-powered optimization and real-time bandwidth management.",
    image: "/1.png",
    link: "#",
  },
  {
    title: "Glossary List Manager",
    category: "Web Application",
    description: "Comprehensive glossary application with search, categorization, and multi-language support.",
    image: "/2.png",
    link: "#",
  },
  {
    title: "Expiry Date Tracker",
    category: "Inventory System",
    description: "Smart inventory management system with notifications and expiry alerts.",
    image: "/3.png",
    link: "#",
  },
  {
    title: "WiFi Analytics Dashboard",
    category: "Dashboard",
    description: "Real-time network performance monitoring and analytics for mesh nodes.",
    image: "/4.png",
    link: "#",
  },
  {
    title: "Glossary API",
    category: "Backend / API",
    description: "RESTful API for glossary data with advanced filtering and search capabilities.",
    image: "/5.png",
    link: "#",
  },
  {
    title: "Inventory Mobile App",
    category: "Mobile Production",
    description: "Cross-platform mobile application for tracking product expiry dates on-the-go.",
    image: "/6.png",
    link: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-secondary/50">
      <div className="container px-4">
        <div className="flex flex-col items-center gap-6 mb-24 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary uppercase tracking-[0.4em] text-sm font-bold"
          >
            Filmography
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-8xl text-foreground"
          >
            Featured Works
          </motion.h2>
        </div>

        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden bg-background"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90 group-hover:opacity-40 transition-all duration-700" />
              
              <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start gap-4">
                <div className="transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                  <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold block mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-3xl text-foreground mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-8 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-widest text-[10px] font-bold px-8 py-6">
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Button variant="ghost" size="lg" className="rounded-none text-primary hover:bg-transparent group tracking-[0.3em] uppercase font-bold text-xs" asChild>
            <a href="https://github.com/srikanthraja" target="_blank" rel="noopener noreferrer">
              Complete Portfolio
              <ArrowRight className="ml-6 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
