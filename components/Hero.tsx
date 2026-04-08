import Image from "next/image";
import LeadForm from "./LeadForm";

const STATS = [
  { num: "85%", label: "Faster than ground surveys" },
  { num: "<1cm", label: "RTK/PPK accuracy" },
  { num: "50%", label: "Cost savings vs. traditional" },
  { num: "10×", label: "More data per visit" },
];

const TRUST = [
  "FAA Part 107 certified pilots",
  "No cost, no commitment",
  "Matched within 24 hours",
];

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Aerial view of active construction site at golden hour"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        {/* Dark gradient overlay — left side darker for text legibility, right side slightly lighter */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(34,46,80,0.92) 0%, rgba(34,46,80,0.82) 50%, rgba(34,46,80,0.65) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-brand-orange mb-4">
              Construction Aerial Intelligence
            </p>

            <h1 className="font-display text-6xl lg:text-7xl leading-none tracking-wide mb-5">
              Stop Guessing.{" "}
              <span className="text-brand-orange">See Every Foot</span> of Your
              Site.
            </h1>

            <p className="text-white/80 text-base leading-relaxed max-w-lg mb-8">
              Survey-grade drone data for general contractors, civil engineers,
              and developers. Track progress, verify quantities, and document
              every phase — without the cost of traditional surveys.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              {STATS.map(({ num, label }) => (
                <div key={label}>
                  <div className="font-display text-4xl text-brand-orange leading-none">
                    {num}
                  </div>
                  <div className="text-xs text-white/60 mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-5">
              {TRUST.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs text-white/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:pt-2">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
