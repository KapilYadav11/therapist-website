"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Office", href: "/office" },
    { label: "FAQs", href: "/faqs" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-linen/90 backdrop-blur-sm border-b border-charcoal/10">
      <div className="container-content flex items-center justify-between py-4">
        <a
          href="/"
          className="font-display text-xl text-charcoal inline-flex items-center gap-2 hover:text-clay transition-colors"
        >
          Maya Reynolds{" "}
          <span className="text-clay italic">, PsyD</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-charcoal/80 hover:text-clay"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="/contact"
          className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-sm"
        >
          Book a Free Consult
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-charcoal text-2xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden border-t border-charcoal/10 px-6 py-5 bg-linen">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[15px] text-charcoal/80 hover:text-clay"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/contact"
              className="btn-primary text-center !py-2.5 !px-5 text-sm"
            >
              Book a Free Consult
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
