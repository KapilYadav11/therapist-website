import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FAQs | Dr. Maya Reynolds, PsyD — Santa Monica Therapist",
  description:
    "Answers to common questions about therapy with Dr. Maya Reynolds, PsyD in Santa Monica, CA — session types, methods, insurance, and more.",
};

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
  {
    q: "How long does therapy typically take?",
    a: "It depends on your goals. Some clients come for a few months of focused, skills-based work; others prefer longer-term, depth-oriented support. We'll check in regularly on what's working.",
  },
  {
    q: "How do I know if we're a good fit?",
    a: "The best way is a free 15-minute consultation — a low-pressure conversation to see if my approach matches what you're looking for.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="container-content py-16 md:py-24">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">Common Questions</p>
          <h1 className="font-display text-3xl md:text-[2.4rem] leading-tight text-charcoal mb-5">
            Questions before you get started?
          </h1>
          <p className="text-charcoal/75 leading-relaxed text-lg">
            Here are answers to the questions I hear most often. If yours
            isn&apos;t here, feel free to ask during a free consultation.
          </p>
        </div>

        <div className="max-w-2xl divide-y divide-charcoal/15 mb-16">
          {faqs.map((f) => (
            <div key={f.q} className="py-6">
              <h2 className="font-display text-lg text-charcoal mb-2">
                {f.q}
              </h2>
              <p className="text-charcoal/70 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <a href="/contact" className="btn-primary">
          Schedule a Free Consultation
        </a>
      </main>
      <Footer />
    </>
  );
}