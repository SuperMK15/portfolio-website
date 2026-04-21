"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "about" },
    { href: "#experience", label: "experience" },
    { href: "#projects", label: "projects" },
    { href: "#certs", label: "certs" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-terminal-green font-bold text-sm">
          manasvak@dev:~$
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted text-xs hover:text-terminal-green transition-colors"
            >
              ./{l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-muted hover:text-terminal-green transition-colors text-xs font-mono"
          aria-label="Toggle menu"
        >
          {menuOpen ? "[x]" : "[=]"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-muted text-xs hover:text-terminal-green transition-colors"
            >
              ./{l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
