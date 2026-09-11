import Image from "next/image";

const groups = [
  {
    title: "High-Achievers & Professionals",
    seed: "who-help-professionals",
    text: "Entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress. Therapy becomes a space to slow down and reconnect.",
  },
  {
    title: "Anxiety, Panic & Burnout",
    seed: "who-help-anxiety",
    text: "For those who feel 'functional' on the outside while quietly managing constant worry, body tension, disrupted sleep, or a sense of always bracing for the worst.",
  },
  {
    title: "Adults Healing from Trauma",
    seed: "who-help-trauma",
    text: "Whether from a single event or long-standing patterns rooted in childhood or chronic stress, we move at a careful pace focused on safety and stabilization.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="container-content py-20 md:py-28">
      <p className="eyebrow mb-3">Who I Help</p>
      <h2 className="font-display text-3xl md:text-[2.2rem] max-w-2xl text-charcoal">
        Support built around the realities of your life.
      </h2>

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {groups.map((g) => (
          <div key={g.title}>
            <div className="relative aspect-[5/4] rounded-2xl overflow-hidden mb-5">
              {/* PLACEHOLDER — replace with a licensed image relevant to this group */}
              <Image
                src={`https://picsum.photos/seed/${g.seed}/700/560`}
                alt={g.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-display text-xl text-charcoal mb-2">
              {g.title}
            </h3>
            <p className="text-charcoal/70 text-[15px] leading-relaxed">
              {g.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
