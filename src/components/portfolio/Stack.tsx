import { Section } from "./Section";

const groups = [
  { name: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"] },
  { name: "Frameworks", items: ["FastAPI", "Django", "PyQt", "Tkinter"] },
  { name: "AI / ML", items: ["YOLO", "OpenCV", "PyTorch", "TensorFlow", "Gemini", "DINOv2", "ONNX"] },
  { name: "Backend", items: ["REST APIs", "Async", "Workflow Automation", "Pub/Sub"] },
  { name: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Supabase"] },
  { name: "Cloud & DevOps", items: ["Docker", "GCP Cloud Run", "Pub/Sub", "Linux"] },
];

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Tech Stack"
      title={<>Tools I reach for <span className="text-muted-foreground">by default.</span></>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
        {groups.map((g) => (
          <div key={g.name} className="card-elevated rounded-xl p-5">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              {g.name}
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {g.items.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-surface-elevated/70 px-2.5 py-1 text-xs text-foreground/90 hover:border-foreground/30 hover:bg-surface-elevated transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
