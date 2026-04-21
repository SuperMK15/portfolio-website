import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certs" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-terminal-green text-xs mb-8 flex items-center gap-2">
          <span className="text-muted">0x0C</span>
          <span className="w-8 h-px bg-terminal-dark inline-block" />
          CERTIFICATIONS
        </h2>

        <div className="border border-border rounded-lg bg-surface p-6">
          <div className="text-muted text-xs mb-4">
            $ cat /etc/certs/verified.conf
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {certifications.map((c) => (
              <a
                key={c.id}
                href={c.credential_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-1.5 text-xs group"
              >
                <span className="text-terminal-dark group-hover:text-terminal-green transition-colors">
                  ✓
                </span>
                <span className="text-foreground/70 group-hover:text-terminal-green transition-colors">
                  {c.name}
                </span>
              </a>
            ))}
          </div>
          <div className="mt-4 text-[10px] text-muted">
            // {certifications.length} certificates verified — all checksums
            valid
          </div>
        </div>
      </div>
    </section>
  );
}
