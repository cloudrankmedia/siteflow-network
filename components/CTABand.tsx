"use client";

export default function CTABand() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-navy py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-5xl text-white tracking-wide mb-4">
          Ready to See Your Site from Above?
        </h2>
        <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          Submit your project details and we&apos;ll match you with a certified drone
          surveyor in your area — usually within 24 hours. No cost, no
          commitment.
        </p>
        <button
          onClick={scrollToForm}
          className="inline-block bg-brand-orange hover:bg-brand-orange-light transition-colors text-white font-medium text-base px-10 py-4 rounded-lg"
        >
          Get My Free Site Assessment →
        </button>
        <p className="text-white/30 text-xs mt-5">
          🔒 Your information is never sold &nbsp;·&nbsp; FAA-certified pilots
          only &nbsp;·&nbsp; No obligation
        </p>
      </div>
    </section>
  );
}
