const services = [
  {
    title: "Anxiety & Panic Therapy",
    text: "For constant worry, racing thoughts, physical tension, and the panic that comes with feeling like you're always bracing for something to go wrong. We'll work to help your nervous system feel steadier, day to day.",
  },
  {
    title: "Trauma Therapy with EMDR",
    text: "Whether from a single incident or long-standing patterns, we move at a careful pace focused on safety and stabilization first — using EMDR and somatic techniques to help you feel more regulated, not just during sessions, but in daily life.",
  },
  {
    title: "Burnout & Perfectionism Recovery",
    text: "For entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through. Therapy becomes a space to slow down, reconnect, and build more sustainable ways of living and working.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-linen-dark py-20 md:py-28">
      <div className="container-content">
        <p className="eyebrow mb-3">Services</p>
        <h2 className="font-display text-3xl md:text-[2.2rem] max-w-2xl text-charcoal mb-14">
          Therapy for anxiety, trauma &amp; burnout in Santa Monica, CA.
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s) => (
            <div key={s.title} className="border-t-2 border-clay/40 pt-6">
              <h3 className="font-display text-xl text-charcoal mb-3">
                {s.title}
              </h3>
              <p className="text-charcoal/70 text-[15px] leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
