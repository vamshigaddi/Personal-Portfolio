import { Section } from "./Section";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "Financial Fraud Detection MLOps",
    desc: "End-to-end MLOps pipeline for financial fraud detection — experiment tracking with MLflow, real-time monitoring via Prometheus & Grafana, containerized with Docker, and CI/CD deployed to AWS EC2.",
    tags: ["MLflow", "Prometheus", "Grafana", "Flask", "Docker", "AWS"],
    highlight: "Full MLOps lifecycle: train → track → monitor → deploy → automate.",
    repo: "https://github.com/vamshigaddi/Financial_fraud_detection_Mlops",
  },
  {
    n: "02",
    title: "Auto Image Classifier",
    desc: "Image classification platform using pre-trained YOLO — users upload datasets to cloud storage, configure training parameters, and receive detailed results with trained model metrics.",
    tags: ["YOLO", "PostgreSQL", "Cloud Storage", "Python"],
    highlight: "Custom training config (epochs, LR, batch size) with structured output reporting.",
    repo: "https://github.com/vamshigaddi/AutoImageClassifier",
  },
  {
    n: "03",
    title: "Text2SQL",
    desc: "Natural language to SQL translator — converts plain English queries into PostgreSQL statements using LangChain and Grok LLM, with a clean Flask web interface.",
    tags: ["LangChain", "Grok API", "PostgreSQL", "Flask"],
    highlight: "Ask questions in English, get structured SQL queries and database results.",
    repo: "https://github.com/vamshigaddi/TEXT2SQL",
  },
  {
    n: "04",
    title: "AI Powered Chatbot",
    desc: "RAG-based customer support chatbot using Groq and HuggingFace embeddings — document ingestion, vector storage with ChromaDB, and context-aware response generation.",
    tags: ["Groq", "HuggingFace", "ChromaDB", "RAG"],
    highlight: "Persistent embeddings + retrieval-augmented generation for accurate responses.",
    repo: "https://github.com/vamshigaddi/AI_Powered_Chatbot",
  },
];

export function OpenSource() {
  return (
    <Section
      id="opensource"
      eyebrow="Open Source"
      title={<>Personal projects <span className="text-muted-foreground">on GitHub.</span></>}
      description="Side projects and explorations — each one open source and available for reference."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <article
            key={p.n}
            className="card-elevated reveal group relative overflow-hidden rounded-xl p-6 transition-all hover:border-foreground/20"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-xs text-muted-foreground">{p.n}</span>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.title} on GitHub`}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
            <h3 className="mt-3 text-lg font-semibold tracking-tight">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground text-pretty">{p.desc}</p>
            <p className="mt-3 text-sm text-foreground/90">
              <span className="text-muted-foreground">→ </span>
              {p.highlight}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
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
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View on GitHub
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
