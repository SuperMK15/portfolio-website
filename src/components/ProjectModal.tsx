"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data";

const bootLines = [
  "Loading /dev/project...",
  "Mounting display... OK",
  "Ready.",
];

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [bootPhase, setBootPhase] = useState(0);
  const [booted, setBooted] = useState(false);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Boot sequence animation
  useEffect(() => {
    if (bootPhase < bootLines.length) {
      const t = setTimeout(() => setBootPhase((p) => p + 1), 80);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setBooted(true), 100);
      return () => clearTimeout(t);
    }
  }, [bootPhase]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-border rounded-lg bg-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Window controls */}
        <div className="bg-surface-light px-4 py-2 flex items-center gap-2 border-b border-border">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 transition"
            aria-label="Close"
          />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-muted text-xs">
            /{project.terminal_name} — project viewer
          </span>
        </div>

        {/* Boot sequence, then project content */}
        {!booted ? (
          <div className="p-6 font-mono text-xs min-h-[300px]">
            {bootLines.slice(0, bootPhase).map((line, i) => (
              <div key={i} className="text-terminal-dark mb-1">
                [{String(i).padStart(2, "0")}] {line}
              </div>
            ))}
            {bootPhase < bootLines.length && (
              <span className="text-terminal-green animate-blink">_</span>
            )}
          </div>
        ) : (
          <div className="animate-fade-in-up">
            <div className="relative w-full h-56 sm:h-64 bg-background">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 space-y-4">
              <div>
                <div className="text-muted text-[10px] mb-1">
                  /{project.terminal_name}
                </div>
                <h3 className="text-terminal-green text-lg font-bold">
                  {project.name}
                </h3>
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-terminal-dark border border-border-light px-1.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action links */}
              <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
                {"source_code" in project && project.source_code && (
                  <a
                    href={project.source_code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-terminal-green text-terminal-green px-4 py-2 rounded text-xs hover:bg-terminal-green/10 transition-colors"
                  >
                    $ git clone [src]
                  </a>
                )}
                {"demo" in project && project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-terminal-green text-terminal-green px-4 py-2 rounded text-xs hover:bg-terminal-green/10 transition-colors"
                  >
                    $ ./run [demo]
                  </a>
                )}
                {"pdf" in project && project.pdf && (
                  <a
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-terminal-green text-terminal-green px-4 py-2 rounded text-xs hover:bg-terminal-green/10 transition-colors"
                  >
                    $ cat [pdf]
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
