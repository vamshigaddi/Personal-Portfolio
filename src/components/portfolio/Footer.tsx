import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-surface-elevated text-sm font-semibold">
              VM
            </span>
            <div>
              <div className="text-sm">Vamshi · AI Engineer</div>
              <div className="text-xs text-muted-foreground">
                Building practical AI systems with real-world impact.
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#stack" className="hover:text-foreground transition-colors">Stack</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="https://github.com/vamshigaddi" aria-label="GitHub" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/vamshi-gaddi-43750a198/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:vamshigaddi18@gmail.com" aria-label="Email" className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Vamshi. All rights reserved.</div>
          <div className="font-mono">v1.0 · crafted with care</div>
        </div>
      </div>
    </footer>
  );
}
