import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  { end: 20, suffix: "+", label: "AI workflows built" },
  { end: 15, suffix: "+", label: "Production APIs shipped" },
  { end: 8, suffix: "+", label: "Automation systems" },
  { end: 3, suffix: "y", label: "Applied AI experience" },
];

const tags = [
  "Production AI",
  "Workflow Automation",
  "FastAPI",
  "Computer Vision",
  "OCR & Documents",
  "Cloud Deploy",
];

function AnimatedStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, display } = useCountUp(end, suffix);
  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="text-3xl font-semibold tracking-tight">{display}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

export function Highlights() {
  return (
    <section className="relative border-y border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 reveal">
          {stats.map((s) => (
            <AnimatedStat key={s.label} end={s.end} suffix={s.suffix} label={s.label} />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2 reveal">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
