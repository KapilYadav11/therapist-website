import Image from "next/image";

export default function CTASection() {
  return (
    <section id="contact" className="bg-clay py-20 md:py-28">
      <div className="container-content grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-[2.3rem] text-linen leading-tight mb-6">
            You don&apos;t have to keep pushing through alone.
          </h2>
          <p className="text-linen/90 leading-relaxed mb-8 max-w-md">
            Reach out for a free 15-minute consultation to see if we&apos;re
            the right fit. In-person in Santa Monica, or telehealth anywhere
            in California.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-linen text-clay-dark px-7 py-3.5 rounded-full font-body font-medium text-[15px] hover:bg-linen-dark transition-colors"
          >
            Schedule Your Free Consultation
          </a>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          {/* PLACEHOLDER — replace with a licensed warm, hopeful image */}
          <Image
            src="/images/cta.jpg"
            alt="Reach out to schedule your consultation"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
