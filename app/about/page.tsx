import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Dr. Maya Reynolds, PsyD | Santa Monica Therapist",
  description:
    "Learn about Dr. Maya Reynolds, PsyD — a licensed clinical psychologist in Santa Monica, CA specializing in anxiety, trauma, and burnout for high-achieving adults.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Intro */}
        <section className="container-content pt-16 pb-14 md:pt-20 md:pb-16">
          <div className="grid md:grid-cols-[280px,1fr] gap-12 items-start">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/maya-headshot.png"
                alt="Dr. Maya Reynolds, PsyD"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="eyebrow mb-3">About Your Therapist</p>
              <h1 className="font-display text-3xl md:text-[2.4rem] leading-tight text-charcoal mb-6">
                Dr. Maya Reynolds, PsyD
              </h1>
              <p className="text-charcoal/75 leading-relaxed text-lg mb-4">
                I&apos;m a licensed clinical psychologist based in Santa
                Monica, California, offering therapy for adults who feel
                overwhelmed by anxiety, stress, or the lingering effects of
                past experiences.
              </p>
              <p className="text-charcoal/75 leading-relaxed text-lg">
                Many of the people I work with are high-achieving,
                thoughtful, and self-aware — but internally feel exhausted,
                stuck in overthinking, or emotionally on edge.
              </p>
            </div>
          </div>
        </section>

        {/* What clients bring to sessions */}
        <section className="bg-linen-dark py-16 md:py-20">
          <div className="container-content max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-6">
              What brings people to my practice
            </h2>
            <p className="text-charcoal/75 leading-relaxed mb-4">
              My work often focuses on anxiety, panic, trauma, and burnout.
              Clients frequently come to me feeling &ldquo;functional&rdquo;
              on the outside while quietly struggling with constant worry,
              tension in their body, difficulty sleeping, or a sense that
              they&apos;re always bracing for something to go wrong.
            </p>
            <p className="text-charcoal/75 leading-relaxed">
              Others are navigating the impact of earlier life experiences
              that continue to affect their relationships, confidence, or
              sense of safety.
            </p>
          </div>
        </section>

        {/* Approach */}
        <section className="container-content py-16 md:py-20 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-6">
            My approach
          </h2>
          <p className="text-charcoal/75 leading-relaxed mb-4">
            I take a warm, collaborative, and grounded approach to therapy.
            Sessions are structured enough to feel supportive, while still
            leaving space for reflection and depth. I integrate
            evidence-based methods such as cognitive-behavioral therapy
            (CBT), EMDR, mindfulness-based practices, and body-oriented
            techniques to help clients understand both the emotional and
            physiological sides of what they&apos;re experiencing.
          </p>
        </section>

        {/* Trauma work */}
        <section className="bg-moss py-16 md:py-20">
          <div className="container-content max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl text-linen mb-6">
              Trauma work
            </h2>
            <p className="text-linen/85 leading-relaxed">
              Trauma work is an important part of my practice. I work with
              adults who have experienced single-incident trauma as well as
              more complex, long-standing patterns that may stem from
              childhood, relationships, or chronic stress. My approach is
              paced carefully, with an emphasis on safety, stabilization, and
              helping clients feel more regulated in their daily lives — not
              just during sessions.
            </p>
          </div>
        </section>

        {/* Burnout & high achievers */}
        <section className="container-content py-16 md:py-20 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-6">
            Burnout, perfectionism &amp; high achievers
          </h2>
          <p className="text-charcoal/75 leading-relaxed">
            In addition to trauma and anxiety, I frequently support clients
            dealing with professional burnout, perfectionism, and high
            internal pressure. Many are entrepreneurs, creatives, or
            professionals who feel disconnected from themselves after years
            of pushing through stress. Therapy can become a space to slow
            down, reconnect, and develop more sustainable ways of living and
            working.
          </p>
        </section>

        {/* Office & sessions */}
        <section className="bg-linen-dark py-16 md:py-20">
          <div className="container-content max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-6">
              Sessions &amp; office
            </h2>
            <p className="text-charcoal/75 leading-relaxed">
              I offer both in-person therapy from my Santa Monica office and
              secure telehealth sessions for clients located in California.
              My office is a quiet, private space designed to feel calm and
              grounding, with natural light and a comfortable, uncluttered
              environment. Clients often share that the space itself helps
              them feel more at ease when they arrive.
            </p>
          </div>
        </section>

        {/* Philosophy + CTA */}
        <section className="container-content py-16 md:py-24 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-6">
            My philosophy
          </h2>
          <p className="text-charcoal/75 leading-relaxed mb-4">
            I believe therapy works best when clients feel respected,
            understood, and actively involved in the process. My goal is not
            just symptom relief, but helping clients develop insight,
            resilience, and a stronger relationship with themselves over
            time.
          </p>
          <p className="text-charcoal/75 leading-relaxed mb-10">
            If you&apos;re looking for a therapist who combines practical
            tools with depth-oriented work — and who understands the
            realities of living and working in a fast-paced environment — I
            may be a good fit.
          </p>
          <a href="/contact" className="btn-primary">
            Schedule a Free Consultation
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}