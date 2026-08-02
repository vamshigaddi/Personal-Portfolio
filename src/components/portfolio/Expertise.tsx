import { Section } from "./Section";
import {
  Eye,
  Server,
  ScanText,
  Workflow,
  Activity,
  Package,
} from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "Computer Vision Systems",
    desc: "YOLO pipelines, object detection, industrial counting systems, inference optimization.",
    span: "lg:col-span-2",
  },
  {
    icon: Server,
    title: "Backend AI Engineering",
    desc: "FastAPI services, async workflows, scalable APIs, AI backend integration.",
  },
  {
    icon: ScanText,
    title: "OCR & Document Intelligence",
    desc: "PDF extraction, invoice processing, structured parsing, preprocessing pipelines.",
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    desc: "Event-driven systems, orchestration, integrations, Pub/Sub pipelines.",
    span: "lg:col-span-2",
  },
  {
    icon: Activity,
    title: "Real-Time AI Pipelines",
    desc: "Streaming analysis, video processing, low-latency inference workflows.",
  },
  {
    icon: Package,
    title: "AI Product Engineering",
    desc: "Practical AI tools, backend integrations, production deployment, usable systems.",
  },
];

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Core Expertise"
      title={<>What I work on, <span className="text-muted-foreground">day to day.</span></>}
      description="A focused stack — chosen because each piece earns its place in real production systems."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
        {items.map((it) => (
          <div
            key={it.title}
            className={`card-elevated group relative overflow-hidden rounded-xl p-6 transition-all hover:-translate-y-0.5 hover:border-foreground/20 ${it.span ?? ""}`}
          >
            <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-foreground/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface-elevated text-foreground">
                <it.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 text-base font-medium">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
