"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const socials = [
    { label: "email", value: "manasva.katyal@gmail.com", href: "mailto:manasva.katyal@gmail.com" },
    { label: "github", value: "SuperMK15", href: "https://github.com/SuperMK15" },
    { label: "linkedin", value: "manasvakatyal", href: "https://linkedin.com/in/manasvakatyal" },
    { label: "website", value: "manasvakatyal.tech", href: "https://manasvakatyal.tech" },
    { label: "resume", value: "resume.pdf", href: "https://drive.google.com/file/d/1h6b5aXJrZPdmlCJf2oF9NuVBUucAVotR/view?usp=sharing" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const emailjs = await import("@emailjs/browser");
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        { name: form.name, email: form.email, subject: form.subject, message: form.message },
        process.env.NEXT_PUBLIC_EMAIL_KEY!
      );
      if (res.status === 200) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-background border border-border-light rounded px-3 py-2 text-xs text-foreground placeholder:text-muted/50 focus:outline-none focus:border-terminal-dark transition-colors";

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-terminal-green text-xs mb-8 flex items-center gap-2">
          <span className="text-muted">0x10</span>
          <span className="w-8 h-px bg-terminal-dark inline-block" />
          CONTACT
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Socials */}
          <div className="border border-border rounded-lg bg-surface p-6 font-mono text-sm">
            <div className="text-muted text-xs mb-4">
              $ cat /etc/network/interfaces.d/socials
            </div>
            <div className="space-y-2">
              <div className="text-terminal-dim">{".socials {"}</div>
              {socials.map((s) => (
                <div key={s.label} className="pl-6 flex gap-2">
                  <span className="text-muted w-20">{s.label}:</span>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-green hover:underline"
                  >
                    {s.value}
                  </a>
                  <span className="text-muted">;</span>
                </div>
              ))}
              <div className="text-terminal-dim">{"}"}</div>
            </div>
            <div className="mt-6 text-[10px] text-muted">
              // all interfaces are UP
            </div>
          </div>

          {/* Contact form */}
          <div className="border border-border rounded-lg bg-surface p-6 font-mono">
            <div className="text-muted text-xs mb-4">
              $ ./send_message.sh
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className={inputClass}
              />
              <input
                type="email"
                placeholder="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className={inputClass}
              />
              <input
                type="text"
                placeholder="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
                className={inputClass}
              />
              <textarea
                placeholder="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="border border-terminal-green text-terminal-green px-4 py-2 rounded text-xs hover:bg-terminal-green/10 transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "transmitting..." : "$ transmit"}
              </button>
              {status === "sent" && (
                <p className="text-terminal-green text-[10px]">
                  ✓ message transmitted successfully
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-[10px]">
                  ✗ transmission failed — try email instead
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
