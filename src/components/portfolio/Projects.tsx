import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "Stock Inventory AI Processing System",
    desc: "Production pipeline for processing dealer inventory across PDFs, images, Excel and CSV — OCR, LLM extraction, structured parsing, and database integration with aggressive token optimization.",
    tags: ["FastAPI", "Gemini", "OCR", "PostgreSQL", "GCP"],
    highlight: "Reduced LLM token usage on long documents, scalable for real dealer workflows.",
  },
  {
    n: "02",
    title: "POD Invoice Automation System",
    desc: "FastAPI-based AI extraction service integrated with WhatsApp workflows over GCP Pub/Sub — asynchronous, event-driven, and decoupled.",
    tags: ["FastAPI", "Gemini", "Pub/Sub", "Cloud Run", "Docker"],
    highlight: "Fully async event-driven architecture from message → extraction → downstream.",
  },
  {
    n: "03",
    title: "Multi-Agent AI Platform",
    desc: "Backend infrastructure for an AI platform letting users create custom assistants from websites and business documents — ingestion, vector retrieval, memory and orchestration.",
    tags: ["FastAPI", "Gemini", "Supabase", "Vector Search"],
    highlight: "Document & web ingestion + retrieval + agent memory in a single backend.",
  },
  {
    n: "04",
    title: "Industrial Pipe Counting System",
    desc: "Customized YOLO computer vision system for detecting and counting nested and concentric industrial pipes — with custom post-processing for duplicate removal.",
    tags: ["YOLO", "OpenCV", "ONNX", "Python"],
    highlight: "Solved the hard part: dedup logic for overlapping concentric detections.",
  },
  {
    n: "05",
    title: "Product Identification System",
    desc: "Product identification and counting using YOLO detection combined with DINOv2 embedding similarity search for robust matching across SKUs.",
    tags: ["YOLO", "DINOv2", "OpenCV", "Python"],
    highlight: "Detection + embedding similarity for products without per-SKU retraining.",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title={<>Systems that <span className="text-muted-foreground">run in production.</span></>}
      description="Selected work — focused on the engineering tradeoffs, not just the model."
    >
      <div className="space-y-4">
        {projects.map((p) => (
          <article
            key={p.n}
            className="card-elevated reveal group relative overflow-hidden rounded-xl p-6 sm:p-8 transition-all hover:border-foreground/20"
          >
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-1">
                <span className="font-mono text-xs text-muted-foreground">{p.n}</span>
              </div>
              <div className="md:col-span-7">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-muted-foreground text-pretty">{p.desc}</p>
                <p className="mt-4 text-sm text-foreground/90">
                  <span className="text-muted-foreground">→ </span>
                  {p.highlight}
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-surface-elevated/70 px-2 py-1 text-[11px] font-mono text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Discuss this project
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
