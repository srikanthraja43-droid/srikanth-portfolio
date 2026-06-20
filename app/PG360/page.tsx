"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function PG360Page() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: "🏠",
      title: "Rooms & Beds",
      desc: "Track every room, bed and floor with live vacant / partial / occupied status.",
    },
    {
      icon: "👤",
      title: "Tenants & KYC",
      desc: "Onboard residents with Aadhaar, deposit and check-in date — each gets their own login.",
    },
    {
      icon: "💰",
      title: "Rent & Dues",
      desc: "Record rent with electricity + food + other breakdown. See who paid and who is due.",
    },
    {
      icon: "🍽️",
      title: "Food & Mess",
      desc: "Weekly menus and per-meal opt in/out that flows straight into monthly bills.",
    },
    {
      icon: "🛡️",
      title: "Complaints",
      desc: "Tenants raise issues with photos; triage open → in-progress → resolved.",
    },
    {
      icon: "📊",
      title: "P&L & Reports",
      desc: "Collected minus expenses, occupancy and turnover — exportable reports.",
    },
  ]

  const steps = [
    { num: "01", title: "Sign Up", desc: "Create your owner account in minutes — no credit card required." },
    { num: "02", title: "Add Your PG", desc: "Add rooms, beds and rent. Onboard tenants with one click." },
    { num: "03", title: "Start Managing", desc: "Collect rent, resolve issues and watch your P&L grow." },
  ]

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-primary mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
            The Operating System for PG Owners
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[0.95] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            PG<span className="text-primary">360</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            PG & Hostel Management, done right. Rooms, tenants, rent, food, complaints and P&L — in one calm dashboard.
          </p>
          <div className="flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <a
              href="https://pg360.software"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-bold transition-all duration-500 hover:bg-primary/90 hover:scale-105"
            >
              Visit Live Site →
            </a>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 text-primary text-xs uppercase tracking-widest font-bold transition-all duration-500 hover:border-primary hover:bg-primary/5"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold animate-bounce">
          Scroll ↓
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 px-6 border-t border-primary/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-6">About The Project</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Organizing the unorganized PG sector.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PG360 was built to replace the chaos of registers, spreadsheets, and WhatsApp groups that PG owners rely on daily. It's a complete operating system designed for the Indian paying guest industry.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every tenant gets their own portal — so they stop messaging you for the WiFi password and start self-serving. Happy tenants stay longer and pay on time.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-primary/10">
              {[
                { num: "1000+", label: "PG Owners" },
                { num: "50K+", label: "Active Tenants" },
                { num: "₹500Cr+", label: "Rent Managed" },
                { num: "24/7", label: "Support" },
              ].map((stat, i) => (
                <div key={i} className="bg-background p-8">
                  <div className="font-serif text-3xl text-foreground mb-2">{stat.num}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-secondary/20 border-t border-primary/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-6">Core Modules</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
              Everything in one place.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-primary/10">
            {features.map((feat, i) => (
              <div
                key={i}
                className="bg-background p-10 transition-all duration-500 hover:bg-secondary/30 group"
              >
                <div className="text-2xl mb-6 transition-transform duration-500 group-hover:scale-110">
                  {feat.icon}
                </div>
                <h3 className="text-xs uppercase tracking-[0.15em] font-bold text-foreground mb-3">
                  {feat.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 border-t border-primary/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-6">How It Works</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
              Up and running in minutes.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <div key={i}>
                <span className="text-[11px] tracking-[0.2em] font-bold text-primary">{step.num}</span>
                <h4 className="text-xs uppercase tracking-[0.12em] font-bold text-foreground mt-4 mb-3">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 bg-secondary/20 border-t border-primary/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-6">Built With</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["HTML5", "CSS3", "JavaScript", "Responsive Design", "SVG Icons", "Google Fonts"].map((tech, i) => (
              <span
                key={i}
                className="px-6 py-3 border border-primary/20 text-[11px] uppercase tracking-[0.15em] font-bold text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Interested in this project?
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            PG360 is a production-ready PG management platform. Check out the live site or get in touch.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://pg360.software"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-bold transition-all duration-500 hover:bg-primary/90 hover:scale-105"
            >
              Visit Live Site
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 text-primary text-xs uppercase tracking-widest font-bold transition-all duration-500 hover:border-primary hover:bg-primary/5"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
