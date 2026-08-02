import { Section } from "./Section";

const timeline = [
  { year: "2022", text: "Started building with Python — early CV experiments and desktop tools." },
  { year: "2023", text: "Shipped first production OCR and detection pipelines for industrial use cases." },
  { year: "2024", text: "Moved deeper into FastAPI backends, event-driven AI workflows on GCP." },
  { year: "2025", text: "Building multi-agent platforms, embedding search, and applied AI products." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>An engineer who likes shipping <span className="text-muted-foreground">usable AI systems.</span></>}
      description="I focus on the unglamorous parts of AI — the backend plumbing, the edge cases, the deployment. I enjoy turning models into real products people can rely on."
    >
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 space-y-4 text-muted-foreground reveal">
          <p>
            I'm Vamshi, an AI Engineer with 3 years of hands-on experience
            building practical AI systems. My work sits at the intersection of
            Computer Vision, FastAPI backends, OCR pipelines, and workflow
            automation.
          </p>
          <p>
            I care less about benchmarks and more about whether a system
            actually runs reliably in production — handling messy inputs,
            scaling under load, and integrating cleanly with the rest of the
            stack.
          </p>
          <p>
            Most of what I build ends up in dealer workflows, industrial
            counting systems, document automation, or agent platforms — places
            where AI quietly does the work behind a clean API.
          </p>
        </div>

        <ol className="md:col-span-2 space-y-4 reveal">
          {timeline.map((t) => (
            <li
              key={t.year}
              className="card-elevated rounded-lg p-4 flex gap-4 items-start"
            >
              <span className="font-mono text-xs text-muted-foreground pt-0.5">
                {t.year}
              </span>
              <span className="text-sm">{t.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
