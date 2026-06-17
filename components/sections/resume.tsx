"use client"

import { motion } from "framer-motion"
import { FileText, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Resume() {
  return (
    <section id="resume" className="py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="relative group overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
          
          <div className="relative bg-background/50 backdrop-blur-sm border border-primary/10 p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-6 text-center md:text-left">
              <span className="text-primary uppercase tracking-[0.4em] text-sm font-bold">Curriculum Vitae</span>
              <h2 className="font-serif text-5xl md:text-7xl text-foreground leading-tight">
                View my full <br /> <span className="italic text-primary">resume</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Detailed overview of my technical expertise, project leadership, and academic background.
              </p>
            </div>

            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground px-16 py-10 text-xl uppercase tracking-widest font-bold group/btn h-auto"
              asChild
            >
              <a href="/SRI Resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-4 h-6 w-6" />
                View Resume
                <ArrowUpRight className="ml-4 h-6 w-6 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
