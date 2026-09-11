import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Office | Dr. Maya Reynolds, PsyD — Santa Monica Therapist",
  description:
    "A look inside Dr. Maya Reynolds' calm, private therapy office in Santa Monica, CA — plus in-person and telehealth session details.",
};

export default function OfficePage() {
  return (
    <>
      <Header />
      <main>
        <section className="container-content pt-16 pb-14 md:pt-20 md:pb-16">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">Our Office</p>
            <h1 className="font-display text-3xl md:text-[2.4rem] leading-tight text-charcoal mb-5">
              A calm, private space to land in.
            </h1>
            <p className="text-charcoal/75 leading-relaxed text-lg">
              My Santa Monica office is a quiet, private space designed to
              feel calm and grounding — with natural light and a
              comfortable, uncluttered environment. Clients often share that
              the space itself helps them feel more at ease the moment they
              arrive.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-16">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/office-1.jpg"
                alt="Dr. Maya Reynolds' Santa Monica therapy office — calm seating area with natural light"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* PLACEHOLDER — swap for your second office photo (office2.jpeg) once re-uploaded */}
              <Image
                src="https://picsum.photos/seed/therapy-office-2/900/700"
                alt="A quiet corner of the therapy office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-linen-dark py-16 md:py-20">
          <div className="container-content grid md:grid-cols-3 gap-10">
            <div>
              <h2 className="font-display text-xl text-charcoal mb-3">
                Where We're Located
              </h2>
              <p className="text-charcoal/70 leading-relaxed">
                123 45th Street W<br />
                Santa Monica, CA 90401
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-charcoal mb-3">
                Session Options
              </h2>
              <p className="text-charcoal/70 leading-relaxed">
                In-person sessions here at the Santa Monica office, or secure
                telehealth for clients located anywhere in California.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-charcoal mb-3">
                Comfort &amp; Privacy
              </h2>
              <p className="text-charcoal/70 leading-relaxed">
                The space is intentionally uncluttered and private, so you
                can focus fully on the work without distraction.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 text-center">
          <div className="container-content max-w-xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-4">
              Ready to visit, or meet online instead?
            </h2>
            <a href="/contact" className="btn-primary">
              Schedule a Free Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}