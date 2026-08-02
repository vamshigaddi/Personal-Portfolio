import { useEffect, useState } from "react";
import { Github, Linkedin, ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 group" aria-label="Vamshi — home">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-surface-elevated text-sm font-semibold tracking-tight">
            VM
          </span>
          <span className="hidden sm:inline text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            Vamshi <span className="text-muted-foreground/60">— AI Engineer</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 rounded-full border border-border bg-surface/50 px-1 py-1 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-full px-3 py-1.5 transition-colors ${
                  active === l.href
                    ? "bg-surface-elevated text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href="https://github.com/vamshigaddi"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:grid h-9 w-9 place-items-center rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/vamshi-gaddi-43750a198/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:grid h-9 w-9 place-items-center rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="ml-1 hidden sm:inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background hover:bg-foreground/90 transition-colors"
          >
            Get in touch <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden grid h-9 w-9 place-items-center rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setMobileOpen(false)} />
        <div
          className={`relative glass border-b border-border px-6 py-6 transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm transition-colors ${
                    active === l.href
                      ? "bg-surface-elevated text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface-elevated/50"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
            <a
              href="https://github.com/vamshigaddi"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/vamshi-gaddi-43750a198/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="ml-auto inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Get in touch <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
