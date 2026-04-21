"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const full = "Manasva Katyal";

  // Typewriter effect for name
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(full.slice(0, i + 1));
      i++;
      if (i >= full.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Circuit-board grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,65,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-3xl w-full">
        {/* Terminal window */}
        <div className="border border-border rounded-lg overflow-hidden">
          {/* Window controls */}
          <div className="bg-surface-light px-4 py-2 flex items-center gap-2 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-muted text-xs">
              profile_init.sh — bash
            </span>
          </div>

          <div className="bg-surface p-6 sm:p-8 font-mono text-sm leading-relaxed">
            <div className="text-muted mb-1">
              $ cat /sys/developer/identity
            </div>

            <div className="flex items-center gap-5 mb-4">
              <div className="flex-1">
                <span className="text-terminal-green text-3xl sm:text-4xl font-bold">
                  {typed}
                </span>
                <span className="text-terminal-green animate-blink text-3xl sm:text-4xl">
                  _
                </span>
              </div>
              <Image
                src="/manasva_headshot.png"
                alt="Manasva Katyal"
                width={700}
                height={700}
                className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border-2 border-terminal-dark/40 object-cover"
                priority
              />
            </div>

            <div className="text-muted mb-1">$ cat /proc/status</div>
            <div className="text-foreground mb-4">
              3rd Year Computer Science @ University of Waterloo
              <br />
              <span className="text-terminal-dim">
                Digital Hardware Specialization
              </span>
            </div>

            <div className="text-muted mb-1">$ cat /proc/interests</div>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "embedded-systems",
                "distributed-systems",
                "AI/ML",
                "robotics",
                "control-systems",
                "aviation",
              ].map((t) => (
                <span
                  key={t}
                  className="text-terminal-dark border border-terminal-dark/30 px-2 py-0.5 rounded text-xs"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="text-muted mb-1">$ cat /proc/awards</div>
            <div className="text-foreground">
              🏆 Schulich Leader Scholarship — Most prestigious STEM scholarship
              for Canadian undergraduates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
