"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Timeline", href: "#experience" },
  { name: "Resume", href: "#resume" },
  { name: "Learning", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  })

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/10 py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-none border border-primary text-primary font-serif text-lg transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
            S
          </div>
          <span className="text-sm font-bold tracking-[0.3em] uppercase hidden md:block text-foreground">Srikanthraja</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/60 transition-all duration-500 hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="outline"
            className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-xs uppercase tracking-widest font-bold transition-all duration-500"
            asChild
          >
            <a href="#contact">Hire</a>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-primary"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 top-0 bg-background z-[40] md:hidden flex flex-col items-center justify-center p-8"
        >
          <div className="flex flex-col gap-10 text-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-5xl font-serif text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="outline"
              className="rounded-none mt-10 border-primary text-primary h-20 px-16 text-xl uppercase tracking-widest"
              asChild
              onClick={() => setIsOpen(false)}
            >
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
