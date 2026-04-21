"use client";

import { useState } from "react";
import { projects, type Project } from "@/lib/data";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-terminal-green text-xs mb-8 flex items-center gap-2">
          <span className="text-muted">0x08</span>
          <span className="w-8 h-px bg-terminal-dark inline-block" />
          PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="border border-border rounded-lg bg-surface p-5 hover:border-terminal-dark/50 transition-colors group text-left cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-muted text-[10px] mb-1">
                    /{p.terminal_name}
                  </div>
                  <h3 className="text-terminal-green text-sm font-bold">
                    {p.name}
                  </h3>
                </div>
                <span className="text-muted text-[10px] group-hover:text-terminal-dark transition-colors">
                  [open]
                </span>
              </div>

              <p className="text-foreground/70 text-xs leading-relaxed mb-3">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-terminal-dark border border-border-light px-1.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 text-xs text-muted">
          // {projects.length} modules compiled successfully
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
