const SEGMENTS = [
  {
    tag: "General Contractors",
    headline: "Keep projects on track — and prove it",
    copy: "Regular progress flights let you share visual updates with owners and resolve disputes before they become claims.",
    bullets: [
      "Weekly progress flights",
      "Schedule comparison overlays",
      "Stakeholder-ready reports",
    ],
  },
  {
    tag: "Civil & Earthwork",
    headline: "Verify quantities. Stop overpaying.",
    copy: "Accurate cut/fill calculations and stockpile measurement you can take to the billing table with confidence.",
    bullets: ["Volume calculations", "Grading verification", "Haul road planning"],
  },
  {
    tag: "Property Developers",
    headline: "Document progress. Close pre-sales faster.",
    copy: "Marketing-grade aerials and lot surveys that attract buyers before a single unit is complete.",
    bullets: [
      "Lot surveys & subdivision mapping",
      "Marketing aerials for pre-sales",
      "Completion documentation",
    ],
  },
  {
    tag: "Infrastructure",
    headline: "Track linear projects across miles",
    copy: "Corridor mapping for roads, pipelines, and utility projects with ROW documentation at scale.",
    bullets: ["Corridor mapping", "ROW documentation", "Linear progress tracking"],
  },
];

export default function Segments() {
  return (
    <section className="bg-white py-16 px-6 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium tracking-widest uppercase text-brand-orange mb-2">
          Who We Serve
        </p>
        <h2 className="font-display text-4xl text-gray-900 tracking-wide mb-3">
          Built for Every Type of Construction Business
        </h2>
        <p className="text-sm text-gray-500 max-w-xl leading-relaxed mb-10">
          Whether you&apos;re managing a single commercial build or hundreds of
          miles of corridor, we&apos;ll connect you with the right certified drone
          provider.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SEGMENTS.map(({ tag, headline, copy, bullets }) => (
            <div
              key={tag}
              className="border border-gray-100 rounded-xl p-6 hover:border-navy/20 transition-colors"
            >
              <span className="inline-block bg-navy text-white text-xs font-medium tracking-wider uppercase rounded px-2.5 py-1 mb-4">
                {tag}
              </span>
              <h3 className="text-sm font-medium text-gray-900 mb-2">{headline}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">{copy}</p>
              <ul className="space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
