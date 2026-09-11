import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | Dr. Maya Reynolds, PsyD — Santa Monica Therapist",
  description:
    "Therapy services with Dr. Maya Reynolds, PsyD in Santa Monica, CA: anxiety & panic therapy, trauma therapy with EMDR, and burnout & perfectionism recovery for high-achieving adults.",
};

const services = [
  {
    id: "anxiety",
    title: "Anxiety & Panic Therapy",
    image: "/images/service-anxiety.jpg",
    summary:
      "For constant worry, racing thoughts, and the panic that comes with feeling like you're always bracing for something to go wrong.",
    whoFor:
      "Adults who feel 'functional' on the outside while quietly managing constant worry, tension in the body, difficulty sleeping, or a sense of being always on edge.",
    whatToExpect:
      "We'll work to understand both the emotional and physiological sides of your anxiety — not just the thoughts, but how your body holds stress. Sessions are structured enough to feel supportive, while leaving room for reflection and depth.",
    methods: ["CBT", "Mindfulness-Based Practices", "Body-Oriented Techniques"],
  },
  {
    id: "trauma",
    title: "Trauma Therapy with EMDR",
    image: "/images/service-trauma.jpg",
    summary:
      "Careful, paced support for single-incident trauma or long-standing patterns rooted in childhood, relationships, or chronic stress.",
    whoFor:
      "Adults navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.",
    whatToExpect:
      "Trauma work is paced carefully, with an emphasis on safety and stabilization first. The goal isn't just processing the past — it's helping you feel more regulated in your daily life, not only during sessions.",
    methods: ["EMDR", "Somatic Techniques", "Stabilization-Focused CBT"],
  },
  {
    id: "burnout",
    title: "Burnout & Perfectionism Recovery",
    image: "/images/service-burnout.jpg",
    summary:
      "For entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress.",
    whoFor:
      "High-achieving, thoughtful, self-aware adults carrying high internal pressure — often successful on paper, but running on empty underneath.",
    whatToExpect:
      "Therapy becomes a space to slow down, reconnect, and build more sustainable ways of living and working — with practical tools alongside deeper, insight-oriented work.",
    methods: ["CBT", "Mindfulness-Based Practices", "Depth-Oriented Work"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="container-content pt-16 pb-14 md:pt-20 md:pb-16 max-w-2xl">
          <p className="eyebrow mb-3">Services</p>
          <h1 className="font-display text-3xl md:text-[2.4rem] leading-tight text-charcoal mb-5">
            Therapy for anxiety, trauma &amp; burnout in Santa Monica, CA
          </h1>
          <p className="text-charcoal/75 leading-relaxed text-lg">
            I integrate evidence-based methods — including CBT, EMDR,
            mindfulness-based practices, and body-oriented techniques — tailored
            to what you&apos;re working through. Here&apos;s a closer look at
            how I can help.
          </p>
        </section>

        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={
              i % 2 === 0 ? "bg-linen-dark py-16 md:py-20" : "py-16 md:py-20"
            }
          >
            <div className="container-content grid md:grid-cols-2 gap-12 items-center">
              <div
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                {/* PLACEHOLDER — replace with a licensed image relevant to this service */}
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-4">
                  {s.title}
                </h2>
                <p className="text-charcoal/75 leading-relaxed mb-6">
                  {s.summary}
                </p>

                <div className="mb-5">
                  <h3 className="text-sm font-medium text-clay mb-1.5">
                    Who this is for
                  </h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed">
                    {s.whoFor}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-clay mb-1.5">
                    What to expect
                  </h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed">
                    {s.whatToExpect}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {s.methods.map((m) => (
                    <span
                      key={m}
                      className="text-xs font-medium bg-moss/10 text-moss px-3 py-1.5 rounded-full"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="bg-moss py-16 md:py-20">
          <div className="container-content text-center max-w-xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-linen mb-4">
              Not sure which fits? Let&apos;s talk it through.
            </h2>
            <p className="text-linen/80 leading-relaxed mb-8">
              A free 15-minute consultation is the easiest way to figure out
              what kind of support makes sense for you right now.
            </p>
            <a href="/contact" className="btn-primary !bg-clay">
              Schedule a Free Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
