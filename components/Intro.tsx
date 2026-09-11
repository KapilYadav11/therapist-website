import Image from "next/image";

export default function Intro() {
  return (
    <section className="bg-linen-dark py-20 md:py-28">
      <div className="container-content grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-[2.4rem] leading-tight text-charcoal">
            You&apos;re tired of running on empty just to keep everything
            together.
          </h2>
          <p className="mt-6 text-charcoal/75 leading-relaxed">
            Many of the clients I work with are thoughtful, self-aware, and
            high-achieving — but internally they feel exhausted, on edge, or
            caught in a loop of overthinking. If you&apos;re quietly
            struggling with constant worry, tension in your body, or a sense
            that you&apos;re always bracing for something to go wrong, you
            don&apos;t have to keep carrying it alone.
          </p>
          <p className="mt-4 text-charcoal/75 leading-relaxed">
            Together, we&apos;ll work at a pace that feels safe, build real
            tools for your nervous system, and help you reconnect with a
            steadier, more grounded version of yourself.
          </p>
        </div>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          {/* PLACEHOLDER — replace with a licensed calming lifestyle image */}
          <Image
            src="https://picsum.photos/seed/therapy-intro/900/1100"
            alt="A calm, grounding environment"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
