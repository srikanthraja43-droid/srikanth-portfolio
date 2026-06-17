import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10 py-20">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center border border-primary text-primary font-serif text-xl">
              S
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40 mt-4">
              Srikanthraja &copy; {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/60">
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#projects" className="hover:text-primary transition-colors">Works</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 text-center md:text-right">
            Designed for <span className="text-primary">Impact</span>. Built for <span className="text-primary">Performance</span>.
          </div>
        </div>
      </div>
    </footer>
  )
}
