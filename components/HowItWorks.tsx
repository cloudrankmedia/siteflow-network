const STEPS = [
  {
    num: "01",
    title: "Tell us about your project",
    copy: "Fill out the short form with your project type, location, and what data you need.",
  },
  {
    num: "02",
    title: "We match you instantly",
    copy: "SiteFlow routes your request to certified drone surveyors who serve your area and your project type.",
  },
  {
    num: "03",
    title: "Get your data — fast",
    copy: "A verified provider contacts you within 24 hours. Deliverables in days, not weeks.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium tracking-widest uppercase text-brand-orange mb-2">
          How It Works
        </p>
        <h2 className="font-display text-4xl text-gray-900 tracking-wide mb-3">
          You Submit. We Match. They Fly.
        </h2>
        <p className="text-sm text-gray-500 max-w-xl leading-relaxed mb-12">
          SiteFlow Network connects construction businesses with FAA-certified
          drone service providers — at no cost to you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-gray-200" />

          {STEPS.map(({ num, title, copy }, i) => (
            <div key={num} className="relative text-center px-6 pb-8 md:pb-0">
              {/* Arrow between steps (desktop) */}
              {i < STEPS.length - 1 && (
                <span className="hidden md:block absolute right-0 top-6 text-gray-300 text-xl translate-x-1/2 z-10">
                  →
                </span>
              )}
              <div className="font-display text-6xl text-brand-orange opacity-20 leading-none mb-2">
                {num}
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
