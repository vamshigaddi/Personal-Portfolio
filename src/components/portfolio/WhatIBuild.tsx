import { Section } from "./Section";
import {
  Eye, Bot, Server, ScanText, Activity, Network, GitBranch,
} from "lucide-react";

const items = [
  { icon: Eye, label: "Computer Vision Solutions" },
  { icon: Bot, label: "AI Automation Systems" },
  { icon: Server, label: "FastAPI AI Backends" },
  { icon: ScanText, label: "OCR Pipelines" },
  { icon: Activity, label: "Real-Time Analytics" },
  { icon: Network, label: "AI Agent Platforms" },
  { icon: GitBranch, label: "Intelligent Workflows" },
];

export function WhatIBuild() {
  return (
    <Section
      id="build"
      eyebrow="What I Build"
      title={<>Things I can <span className="text-muted-foreground">ship for you.</span></>}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 reveal">
        {items.map((it) => (
          <div
            key={it.label}
            className="card-elevated group flex items-center gap-3 rounded-lg p-4 transition-all hover:-translate-y-0.5 hover:border-foreground/20"
          >
            <div className="grid h-8 w-8 place-items-center rounded-md border border-border bg-surface-elevated">
              <it.icon className="h-4 w-4" />
            </div>
            <span className="text-sm">{it.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
