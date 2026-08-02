import { ArrowUpRight, Download, Mail, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Availability badge */}
          <div
            className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-pulse-dot" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for AI engineering roles
          </div>

          <h1
            className="animate-fade-up mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "60ms" }}
          >
            <span className="text-gradient">Building practical AI systems</span>
            <br />
            <span className="text-muted-foreground">for real-world problems.</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground text-pretty"
            style={{ animationDelay: "140ms" }}
          >
            AI Engineer specializing in Computer Vision, FastAPI backend systems,
            OCR workflows, AI automation, and production-ready machine learning
            applications.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-2"
            style={{ animationDelay: "220ms" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              View Projects <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://drive.google.com/file/d/17zNkvs6sCf-7pAEKNYQ0NpduS47gJ-kl/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground hover:bg-surface-elevated transition-colors"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground hover:bg-surface-elevated transition-colors"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>

          <div
            className="animate-fade-up mt-5 flex items-center gap-3 text-muted-foreground"
            style={{ animationDelay: "300ms" }}
          >
            <a href="https://github.com/vamshigaddi" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <span className="h-3 w-px bg-border" />
            <a href="https://www.linkedin.com/in/vamshi-gaddi-43750a198/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Pipeline visual */}
        <div
          className="animate-fade-up mt-20 mx-auto max-w-4xl"
          style={{ animationDelay: "380ms" }}
        >
          <PipelineVisual />
        </div>
      </div>
    </section>
  );
}

function PipelineVisual() {
  const stages = [
    { label: "Input", sub: "PDF · Image · Stream" },
    { label: "Preprocess", sub: "OCR · Resize · Clean" },
    { label: "Inference", sub: "YOLO · DINOv2 · LLM" },
    { label: "Post-process", sub: "Dedup · Parse · Validate" },
    { label: "Deliver", sub: "API · Event · DB" },
  ];
  return (
    <div className="card-elevated relative overflow-hidden rounded-xl p-6 sm:p-8">
      <div className="absolute -top-px left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
      <div className="mb-5 flex items-center justify-between text-xs">
        <span className="font-mono text-muted-foreground">inference_pipeline.py</span>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-muted" />
          <span className="h-2 w-2 rounded-full bg-muted" />
          <span className="h-2 w-2 rounded-full bg-muted" />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {stages.map((s, i) => (
          <div key={s.label} className="relative">
            <div className="rounded-lg border border-border bg-surface-elevated/60 p-3 transition-colors hover:border-foreground/20">
              <div className="font-mono text-[10px] text-muted-foreground">0{i + 1}</div>
              <div className="mt-1 text-sm font-medium">{s.label}</div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">{s.sub}</div>
            </div>
            {i < stages.length - 1 && (
              <div className="hidden sm:block absolute top-1/2 -right-2 h-px w-3 bg-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
