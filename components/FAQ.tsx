const faqs = [
  {
    q: "Do you offer in-person and online sessions?",
    a: "Yes. I see clients in-person at my Santa Monica office and offer secure telehealth sessions for anyone located in California.",
  },
  {
    q: "What kind of therapy methods do you use?",
    a: "I integrate evidence-based approaches including CBT, EMDR, mindfulness-based practices, and body-oriented (somatic) techniques, tailored to what you're working through.",
  },
  {
    q: "I function fine on the outside — is therapy still for me?",
    a: "Absolutely. Many of my clients look 'put together' but are quietly managing constant worry, tension, or exhaustion underneath. You don't need to be in crisis to benefit from support.",
  },
  {
    q: "How do you approach trauma work?",
    a: "Trauma work is paced carefully, with an emphasis on safety and stabilization first — whether you're processing a single event or long-standing patterns from childhood or chronic stress.",
  },
];

export default function FAQ() {
  return (
    <section id="faqs" className="container-content py-20 md:py-28">
      <p className="eyebrow mb-3">Common Questions</p>
      <h2 className="font-display text-3xl md:text-[2.2rem] text-charcoal mb-12 max-w-xl">
        Questions before you get started?
      </h2>

      <div className="max-w-2xl divide-y divide-charcoal/15">
        {faqs.map((f) => (
          <div key={f.q} className="py-6">
            <h3 className="font-display text-lg text-charcoal mb-2">
              {f.q}
            </h3>
            <p className="text-charcoal/70 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
