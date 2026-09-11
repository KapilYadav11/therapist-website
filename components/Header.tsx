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
    <header className="sticky top-0 z-50 w-full bg-linen/90 backdrop-blur-sm border-b border-charcoal/10">
      <div className="container-content w-full px-4 sm:px-6 flex items-center justify-between py-4">
        {/* Logo / Name: Added truncate/shrink-0 safe wrapper */}
        <a
          href="/"
          className="font-display text-xl text-charcoal inline-flex items-center gap-1.5 hover:text-clay transition-colors shrink"
        >
          Maya Reynolds <span className="text-clay italic">, PsyD</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-charcoal/80 hover:text-clay transition-colors"
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

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center p-2 text-charcoal text-2xl shrink-0 focus:outline-none"
          aria-label="Toggle menu"
          type="button"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden border-t border-charcoal/10 px-6 py-5 bg-linen w-full">
          {/* items-end aur text-right se sab right side shift ho jayega */}
          <nav className="flex flex-col gap-5 items-end text-right">
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

            {/* Button ko full width ya auto right rakh sakte hain */}
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full text-center !py-2.5 !px-5 text-sm"
            >
              Book a Free Consult
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
