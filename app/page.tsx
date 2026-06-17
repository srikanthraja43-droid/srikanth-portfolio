"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Journey } from "@/components/sections/journey"
import { Resume } from "@/components/sections/resume"
import { OrbitingSkills } from "@/components/sections/orbiting-skills"
import { Contact } from "@/components/sections/contact"
import { Toaster } from "@/components/ui/sonner"
import { SplashScreen } from "@/components/splash-screen"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col overflow-hidden bg-background">
      {isLoading && <SplashScreen finishLoading={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <>
          <Hero />
          <About />
          <Projects />
          <Journey />
          <Resume />
          <OrbitingSkills />
          <Contact />
          <Toaster />
        </>
      )}
    </div>
  )
}
