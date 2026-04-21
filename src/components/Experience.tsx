import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-terminal-green text-xs mb-8 flex items-center gap-2">
          <span className="text-muted">0x04</span>
          <span className="w-8 h-px bg-terminal-dark inline-block" />
          EXPERIENCE
        </h2>

        {/* PCB circuit-board timeline */}
        <div className="relative sm:ml-8">
          {/* Vertical trace */}
          <div className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-terminal-dark/40" />

          {experiences.map((exp, i) => (
            <div key={exp.id} className="relative pl-10 pb-10 last:pb-0 group">
              {/* Solder pad node */}
              <div className="absolute left-0 top-1.5 w-[16px] h-[16px] flex items-center justify-center">
                <div className="absolute w-[16px] h-[16px] rounded-full border-2 border-terminal-dark/60 group-hover:border-terminal-green transition-colors" />
                <div className="w-[6px] h-[6px] rounded-full bg-terminal-dark group-hover:bg-terminal-green transition-colors" />
              </div>

              {/* Horizontal trace to card */}
              <div className="absolute left-[16px] top-[10px] w-[16px] h-[2px] bg-terminal-dark/40 group-hover:bg-terminal-green/40 transition-colors" />
              {/* IC designator */}
              <div className="absolute left-[14px] top-[16px] text-terminal-dark text-[8px]">
                U{i + 1}
              </div>

              {/* Experience card */}
              <div className="border border-border rounded-lg bg-surface p-3 sm:p-4 hover:border-terminal-dark/50 transition-colors">
                <div className="text-muted text-[10px] mb-1">
                  {exp.date}
                </div>
                <div className="mb-2">
                  <span className="text-terminal-green text-sm font-bold">
                    {exp.org}
                  </span>
                  <span className="text-foreground text-xs ml-2">
                    — {exp.role}
                  </span>
                </div>
                <p className="text-foreground/70 text-xs leading-relaxed">
                  {exp.description}
                </p>
                {"bullets" in exp && exp.bullets && (
                  <ul className="mt-2 space-y-1">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-foreground/60 text-xs leading-relaxed flex gap-2">
                        <span className="text-terminal-dark shrink-0">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Power rail labels */}
              {i === 0 && (
                <div className="absolute left-[3px] -top-2 text-terminal-dark text-[8px]">
                  VCC
                </div>
              )}
              {i === experiences.length - 1 && (
                <div className="absolute left-[2px] bottom-[-16px] text-terminal-dark text-[8px]">
                  GND
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-xs text-muted sm:ml-8">
          // {experiences.length} entries loaded from /var/log/career.log
        </div>
      </div>
    </section>
  );
}
