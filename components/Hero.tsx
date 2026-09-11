import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="container-content pt-14 pb-20 md:pt-20 md:pb-28">
      <p className="eyebrow mb-4">
        Online &amp; In-Person Therapy in Santa Monica, CA
      </p>
      <h1 className="font-display text-[2.5rem] leading-[1.1] md:text-[3.4rem] md:leading-[1.08] text-charcoal max-w-3xl">
        You&apos;ve done the pushing through. Now let&apos;s help you{" "}
        <em className="italic text-clay">settle back into yourself.</em>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-charcoal/75 leading-relaxed">
        Therapy for anxiety, burnout, and trauma — for high-achieving adults
        who look fine on the outside but feel exhausted, on edge, or stuck in
        overthinking underneath it all.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <a href="/contact" className="btn-primary">
          Schedule a Free Consultation
        </a>
        <a href="#about" className="btn-secondary">
          Meet Dr. Reynolds
        </a>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-5">
        <div className="md:col-span-3 relative aspect-[4/3] rounded-2xl overflow-hidden">
          {/* PLACEHOLDER — replace with a licensed image of a calm therapy conversation / hands / journaling */}
          <Image
            src="/images/hero-main.jpg"
            alt="A warm, calming therapy space in natural light"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="md:col-span-2 relative aspect-[4/3] rounded-2xl overflow-hidden">
          {/* PLACEHOLDER — replace with a licensed image, e.g. journaling or a quiet moment */}
          <Image
            src="/images/hero-side.jpg"
            alt="A quiet moment of reflection"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
