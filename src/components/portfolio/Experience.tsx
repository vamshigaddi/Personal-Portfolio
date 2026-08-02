import { Section } from "./Section";

const items = [
  {
    period: "2024 — Present",
    role: "AI Engineer",
    org: "Applied AI Systems",
    points: [
      "Designed FastAPI backends for OCR + LLM extraction pipelines on GCP.",
      "Built event-driven automation with Pub/Sub and Cloud Run.",
      "Shipped multi-agent platform backend with vector retrieval & memory.",
    ],
  },
  {
    period: "2023 — 2024",
    role: "AI / Backend Engineer",
    org: "Computer Vision Projects",
    points: [
      "Built YOLO + post-processing pipelines for industrial counting.",
      "Combined detection with DINOv2 embeddings for product identification.",
      "Owned model integration, deployment and runtime tooling.",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Python Developer",
    org: "Foundations",
    points: [
      "Built internal tools, desktop apps and early CV prototypes.",
      "Transitioned from experimentation to production-grade systems.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience Journey"
      title={<>From experiments <span className="text-muted-foreground">to production.</span></>}
    >
      <ol className="relative space-y-6 reveal">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden />
        {items.map((it) => (
          <li key={it.period} className="relative pl-8">
            <span className="absolute left-0 top-2 grid h-4 w-4 place-items-center">
              <span className="h-2 w-2 rounded-full bg-foreground" />
              <span className="absolute h-4 w-4 rounded-full bg-foreground/20 blur-sm" />
            </span>
            <div className="card-elevated rounded-xl p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-medium">
                  {it.role}{" "}
                  <span className="text-muted-foreground font-normal">· {it.org}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {it.period}
                </span>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-foreground/40">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
