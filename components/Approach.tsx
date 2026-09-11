import Image from "next/image";

export default function Approach() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-content">
        <p className="eyebrow mb-3">My Approach</p>
        <h2 className="font-display text-3xl md:text-[2.2rem] max-w-2xl text-charcoal mb-12">
          Structured enough to feel supportive, open enough to go deep.
        </h2>
      </div>

      <div className="container-content grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 md:order-1">
          {/* PLACEHOLDER — replace with a licensed image showing a warm, collaborative feel */}
          <Image
            src="https://picsum.photos/seed/therapy-approach/900/700"
            alt="A warm, collaborative therapy approach"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-charcoal/75 leading-relaxed mb-4">
            I take a warm, collaborative, and grounded approach to therapy. I
            integrate evidence-based methods — including cognitive-behavioral
            therapy (CBT), EMDR, mindfulness-based practices, and
            body-oriented techniques — to help you understand both the
            emotional and physiological sides of what you&apos;re
            experiencing.
          </p>
          <p className="text-charcoal/75 leading-relaxed mb-6">
            My goal isn&apos;t just symptom relief — it&apos;s helping you
            build insight, resilience, and a stronger relationship with
            yourself over time.
          </p>
          <a href="#about" className="text-clay font-medium underline underline-offset-4">
            Learn more about my background
          </a>
        </div>
      </div>
    </section>
  );
}
