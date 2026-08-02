import { Section } from "./Section";

const flow = ["Problem", "Prototype", "Test", "Optimize", "Deploy"];

const quotes = [
  "I care about usability and deployment, not just model accuracy.",
  "Good AI systems need strong backend engineering.",
  "Real-world AI is mostly solving edge cases.",
  "I build systems people can actually use.",
];

export function Mindset() {
  return (
    <Section
      id="mindset"
      eyebrow="Engineering Mindset"
      title={<>Practical AI, <span className="text-muted-foreground">over hype.</span></>}
    >
      <div className="card-elevated rounded-xl p-6 sm:p-10 reveal">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {flow.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface-elevated font-mono text-xs">
                  0{i + 1}
                </div>
                <span className="mt-2 text-xs text-muted-foreground">{step}</span>
              </div>
              {i < flow.length - 1 && (
                <div className="hidden sm:block h-px w-8 bg-border" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {quotes.map((q) => (
            <blockquote
              key={q}
              className="rounded-lg border border-border bg-surface/60 p-5 text-sm text-foreground/90"
            >
              <span className="text-muted-foreground">“</span>
              {q}
              <span className="text-muted-foreground">”</span>
            </blockquote>
          ))}
        </div>
      </div>
    </Section>
  );
}
