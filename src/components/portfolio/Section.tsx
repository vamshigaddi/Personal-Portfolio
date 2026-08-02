import type { ReactNode } from "react";

interface Props {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, description, children, className = "" }: Props) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl reveal">
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <span className="h-px w-6 bg-border" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground text-pretty">{description}</p>
          )}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
