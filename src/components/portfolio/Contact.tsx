import { useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to roles & collaborations
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
            Let's build practical AI <br className="hidden sm:block" />
            <span className="text-muted-foreground">systems together.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether it's a CV pipeline, an OCR workflow, or a FastAPI backend —
            happy to talk.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="card-elevated mt-10 rounded-2xl p-6 sm:p-8 reveal"
        >
          {/* Hidden fields for Web3Forms */}
          <input type="hidden" name="access_key" value="e4e1421a-29b6-427c-8be2-b2e4ca35373c" />
          <input type="hidden" name="subject" value="New message from portfolio contact form" />
          <input type="hidden" name="from_name" value="Portfolio Contact Form" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@company.com" />
          </div>
          <div className="mt-4">
            <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell me a bit about what you're building…"
              className="mt-2 w-full rounded-lg border border-border bg-surface-elevated/60 px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/30 transition-colors"
            />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-muted-foreground">
              <IconLink href="mailto:vamshigaddi18@gmail.com" label="Email">
                <Mail className="h-4 w-4" />
              </IconLink>
              <IconLink href="https://github.com/vamshigaddi" label="GitHub">
                <Github className="h-4 w-4" />
              </IconLink>
              <IconLink href="https://www.linkedin.com/in/vamshi-gaddi-43750a198/" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </IconLink>
              <a
                href="https://drive.google.com/file/d/17zNkvs6sCf-7pAEKNYQ0NpduS47gJ-kl/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="ml-1 inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-surface-elevated transition-colors"
              >
                <Download className="h-3.5 w-3.5" /> Resume
              </a>
            </div>
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" && (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              )}
              {status === "sent" && (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message sent!
                </>
              )}
              {status === "error" && (
                <>
                  Try again <ArrowUpRight className="h-4 w-4" />
                </>
              )}
              {status === "idle" && (
                <>
                  Send message <ArrowUpRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>

          {status === "sent" && (
            <p className="mt-4 text-center text-sm text-emerald-400">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-center text-sm text-red-400">
              Something went wrong. You can also reach me at{" "}
              <a href="mailto:vamshigaddi18@gmail.com" className="underline hover:text-foreground">
                vamshigaddi18@gmail.com
              </a>
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-surface-elevated/60 px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/30 transition-colors"
      />
    </div>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="grid h-9 w-9 place-items-center rounded-md border border-border hover:text-foreground hover:bg-surface-elevated transition-colors"
    >
      {children}
    </a>
  );
}
