import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Dr. Maya Reynolds, PsyD",
  description:
    "Schedule a free consultation with Dr. Maya Reynolds, PsyD — therapy for anxiety, trauma, and burnout in Santa Monica, CA.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="container-content py-16 md:py-24">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">Get In Touch</p>
          <h1 className="font-display text-3xl md:text-[2.4rem] leading-tight text-charcoal mb-5">
            Let&apos;s see if we&apos;re a good fit.
          </h1>
          <p className="text-charcoal/75 leading-relaxed text-lg">
            Use the form below to share a little about what&apos;s bringing
            you to therapy right now and what you&apos;re hoping to get out
            of it. I personally read every message and will respond within
            24 hours to find a time that works for you.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr,360px] gap-14">
          {/* Form */}
          <div>
            <ContactForm />
          </div>

          {/* Address sidebar */}
          <aside className="space-y-8">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/office-1.jpg"
                alt="Dr. Maya Reynolds' Santa Monica office"
                fill
                className="object-cover object-top"
              />
            </div>

            <div>
              <h2 className="font-display text-xl text-charcoal mb-3">
                Office Address
              </h2>
              <p className="text-charcoal/70 leading-relaxed">
                123 45th Street W<br />
                Santa Monica, CA 90401
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-charcoal mb-3">
                Contact
              </h2>
              <p className="text-charcoal/70 leading-relaxed">
                <a href="mailto:hello@mayareynoldstherapy.com" className="hover:text-clay">
                  hello@mayareynoldstherapy.com
                </a>
                <br />
                <a href="tel:+13105550123" className="hover:text-clay">
                  (310) 555-0123
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-charcoal mb-3">
                Session Options
              </h2>
              <p className="text-charcoal/70 leading-relaxed">
                In-person at the Santa Monica office, or telehealth anywhere
                in California.
              </p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}