export default function Header() {
  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "#services" },
    { label: "Our Office", href: "#office" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-linen/90 backdrop-blur-sm border-b border-charcoal/10">
      <div className="container-content flex items-center justify-between py-4">
        <a href="#top" className="font-display text-xl text-charcoal">
          Maya Reynolds{" "}
          <span className="text-clay italic">, PsyD</span>
        </a>

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

          <a href="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
          Book a Free Consult
        </a>
      </div>
    </header>
  );
}
