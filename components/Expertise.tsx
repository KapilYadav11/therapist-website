const tags = [
  "Anxiety",
  "Panic Attacks",
  "Trauma & PTSD",
  "Burnout",
  "Perfectionism",
  "EMDR",
  "CBT",
  "Mindfulness-Based Therapy",
  "Somatic Therapy",
  "Stress Management",
  "Entrepreneurs & Creatives",
  "Self-Esteem & Confidence",
];

export default function Expertise() {
  return (
    <section className="bg-moss py-20 md:py-24">
      <div className="container-content">
        <p className="text-sand/80 font-body text-sm font-medium mb-3">
          Areas of Focus
        </p>
        <h2 className="font-display text-2xl md:text-3xl text-linen max-w-xl mb-10">
          Grounded, evidence-based support for what you&apos;re carrying.
        </h2>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {tags.map((tag, i) => (
            <span
              key={tag}
              className="font-display italic text-lg md:text-xl text-linen/90"
            >
              {tag}
              {i < tags.length - 1 && (
                <span className="text-linen/30 not-italic ml-8">/</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
