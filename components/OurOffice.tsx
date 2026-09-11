import Image from "next/image";

export default function OurOffice() {
  return (
    <section id="office" className="py-20 md:py-28">
      <div className="container-content grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="eyebrow mb-3">Our Office</p>
          <h2 className="font-display text-3xl md:text-[2.2rem] text-charcoal mb-6">
            A calm, private space to land in.
          </h2>
          <p className="text-charcoal/75 leading-relaxed mb-4">
            My Santa Monica office is a quiet, private space designed to feel
            calm and grounding — with natural light and a comfortable,
            uncluttered environment. Clients often share that the space
            itself helps them feel more at ease the moment they arrive.
          </p>
          <p className="text-charcoal/75 leading-relaxed mb-6">
            Sessions are available both in-person here and via secure
            telehealth for clients located anywhere in California.
          </p>
          <div className="text-[15px] text-charcoal/70 space-y-1">
            <p className="font-medium text-charcoal">Visit us at</p>
            <p>123 45th Street W</p>
            <p>Santa Monica, CA 90401</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden col-span-2 sm:col-span-1">
            <Image
              src="/images/office-1.jpg"
              alt="Dr. Maya Reynolds' Santa Monica therapy office — a calm, private seating area with natural light"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden col-span-2 sm:col-span-1">
            {/* PLACEHOLDER — swap for your second office photo (office2.jpeg) once re-uploaded */}
            <Image
              src="https://picsum.photos/seed/therapy-office-2/700/900"
              alt="A quiet corner of the therapy office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
