import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-moss py-20 md:py-28">
      <div className="container-content grid md:grid-cols-[320px,1fr] gap-12 items-start">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src="/images/maya-headshot.png"
            alt="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist"
            fill
            className="object-cover object-top"
          />
        </div>

        <div>
          <p className="text-sand/80 font-body text-sm font-medium mb-3">
            About Your Therapist
          </p>
          <h2 className="font-display text-3xl md:text-[2.2rem] text-linen mb-6">
            Hi, I&apos;m Dr. Maya Reynolds.
          </h2>
          <p className="text-linen/85 leading-relaxed mb-4">
            I&apos;m a licensed clinical psychologist based in Santa Monica,
            California, offering therapy for adults who feel overwhelmed by
            anxiety, stress, or the lingering effects of past experiences.
            Many of the people I work with are high-achieving, thoughtful,
            and self-aware — but internally feel exhausted, stuck in
            overthinking, or emotionally on edge.
          </p>
          <p className="text-linen/85 leading-relaxed mb-4">
            I offer both in-person therapy from my Santa Monica office and
            secure telehealth sessions for clients located in California. I
            believe therapy works best when clients feel respected,
            understood, and actively involved in the process.
          </p>
          <a href="/contact" className="btn-primary !bg-clay mt-2">
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
