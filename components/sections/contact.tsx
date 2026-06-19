"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, Github, Linkedin, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import emailjs from "@emailjs/browser"

// ─── EmailJS Config ────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_afd60fs"
const EMAILJS_TEMPLATE_ID = "template_m6e2fci"
const EMAILJS_PUBLIC_KEY  = "c3D26csbZPJs8zP0x"
// ──────────────────────────────────────────────────────────────────────────────

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:    formData.name,
          email:   formData.email,
          message: formData.message,
          time:    new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          title:   `New message from ${formData.name}`,
        },
        EMAILJS_PUBLIC_KEY
      )
      toast.success("Message sent! I'll get back to you soon 🚀")
      setFormData({ name: "", email: "", message: "" })
      formRef.current?.reset()
    } catch (error) {
      console.error("EmailJS error:", error)
      toast.error("Oops! Something went wrong. Please try again or email me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="container px-4">
        <div className="grid gap-12 md:gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            <div className="space-y-6">
              <span className="text-primary uppercase tracking-[0.4em] text-sm font-bold">Booking & Inquiry</span>
              <h2 className="font-serif text-5xl md:text-8xl text-foreground leading-none">Let&apos;s Connect</h2>
              <p className="text-lg md:text-xl text-muted-foreground font-light max-w-md pt-2 md:pt-4">
                Available for worldwide collaborations, remote projects, and creative inquiries.
              </p>
            </div>

            <div className="flex flex-col gap-6 md:gap-10">
              <a href="mailto:srikanthraja43@gmail.com" className="flex items-center gap-4 md:gap-8 group min-w-0">
                <div className="flex-shrink-0 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-none border border-primary/20 group-hover:border-primary transition-colors duration-500">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Email</div>
                  <div className="text-base md:text-xl font-serif truncate">srikanthraja43@gmail.com</div>
                </div>
              </a>

              <a href="https://wa.me/916383434721" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-8 group">
                <div className="flex-shrink-0 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-none border border-primary/20 group-hover:border-primary transition-colors duration-500">
                  <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">WhatsApp</div>
                  <div className="text-base md:text-xl font-serif">+91 63834 34721</div>
                </div>
              </a>

              <a 
                href="https://www.google.com/maps/place/12%C2%B017'11.0%22N+78%C2%B022'53.7%22E/@12.2863889,78.3815833,851m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d12.2863889!4d78.3815833?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 md:gap-8 group"
              >
                <div className="flex-shrink-0 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-none border border-primary/20 group-hover:border-primary transition-colors duration-500">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Location</div>
                  <div className="text-base md:text-xl font-serif">Tamil Nadu, India</div>
                </div>
              </a>
            </div>

            <div className="flex gap-6 pt-8">
              {[
                { icon: Github, href: "https://github.com/srikanthraja" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/srikanth-r-334447379/" },
                { icon: Instagram, href: "https://www.instagram.com/" },
                { icon: MessageCircle, href: "https://wa.me/916383434721" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-primary/10 hover:border-primary text-muted-foreground hover:text-primary transition-all duration-500"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 border border-primary/10 -translate-x-4 -translate-y-4" />
            <div className="relative bg-secondary/30 p-6 md:p-16 backdrop-blur-sm border border-primary/10">
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Full Name</label>
                  <Input 
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-none border-0 border-b border-primary/20 bg-transparent px-0 py-6 focus-visible:ring-0 focus-visible:border-primary transition-all text-lg" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Email Address</label>
                  <Input 
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-none border-0 border-b border-primary/20 bg-transparent px-0 py-6 focus-visible:ring-0 focus-visible:border-primary transition-all text-lg" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Your Message</label>
                  <Textarea 
                    name="message"
                    placeholder="Tell me about your project"
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-none border-0 border-b border-primary/20 bg-transparent px-0 py-6 focus-visible:ring-0 focus-visible:border-primary transition-all text-lg resize-none" 
                    rows={4} 
                    required 
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="mt-8 rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-all duration-500 py-8 text-lg uppercase tracking-widest font-bold" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Dispatching..." : "Send Message"}
                  {!isSubmitting && <Send className="ml-4 h-5 w-5" />}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
