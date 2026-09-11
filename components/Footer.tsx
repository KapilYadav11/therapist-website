export default function Footer() {
  return (
    <footer className="bg-charcoal text-linen/80 py-16">
      <div className="container-content grid md:grid-cols-3 gap-10">
        <div>
          <a href="/" className="font-display text-xl text-linen mb-3 inline-block hover:text-clay transition-colors">
            Maya Reynolds, PsyD
          </a>
          <p className="text-sm leading-relaxed text-linen/60">
            Licensed Clinical Psychologist. Therapy for anxiety, trauma, and
            burnout — in-person in Santa Monica, CA, and telehealth across
            California.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-linen mb-3">Navigate</p>
          <ul className="space-y-2 text-sm text-linen/60">
            <li><a href="/about" className="hover:text-linen">About</a></li>
            <li><a href="/services" className="hover:text-linen">Services</a></li>
            <li><a href="/office" className="hover:text-linen">Our Office</a></li>
            <li><a href="/faqs" className="hover:text-linen">FAQs</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-linen mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-linen/60">
            <li>123 45th Street W</li>
            <li>Santa Monica, CA 90401</li>
            <li>
              <a href="mailto:hello@mayareynoldstherapy.com" className="hover:text-linen">
                hello@mayareynoldstherapy.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-content mt-12 pt-6 border-t border-linen/10 text-xs text-linen/40">
        © {new Date().getFullYear()} Maya Reynolds, PsyD. This is a fictional
        practice created for a design assignment.
      </div>
    </footer>
  );
}
