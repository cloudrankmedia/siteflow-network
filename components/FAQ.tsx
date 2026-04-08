"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Is SiteFlow the drone provider?",
    a: "No. SiteFlow Network is a matching platform. We connect your project with pre-vetted, FAA Part 107 certified drone service providers in your area. There is no markup or middleman fee — you work directly with the provider.",
  },
  {
    q: "How quickly can I expect a provider to contact me?",
    a: "Most requests are matched and followed up within 24 business hours. For urgent projects, note your timeline in the form and we'll prioritize accordingly.",
  },
  {
    q: "What does it cost to submit a request?",
    a: "The matching service is completely free to construction businesses. Pricing for drone services is set by and paid directly to the provider.",
  },
  {
    q: "Are the pilots FAA certified?",
    a: "Yes. Every provider in the SiteFlow network holds an FAA Part 107 Remote Pilot Certificate and carries appropriate liability insurance for commercial construction sites.",
  },
  {
    q: "What deliverables can I expect?",
    a: "Depending on your needs: orthomosaic maps, point clouds, 3D mesh models, volumetric reports, progress photos and video, and as-built documentation. Your matched provider will confirm deliverable formats before any flight.",
  },
  {
    q: "What if my project is still in pre-construction?",
    a: "Pre-construction surveys are one of the most valuable applications. Note it in the form and we'll match you with a provider experienced in baseline mapping and pre-construction documentation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium tracking-widest uppercase text-brand-orange mb-2">
          FAQ
        </p>
        <h2 className="font-display text-4xl text-gray-900 tracking-wide mb-10">
          Common Questions
        </h2>

        <div className="max-w-2xl space-y-0">
          {FAQS.map(({ q, a }, i) => (
            <div key={q} className="border-b border-gray-200">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between text-left py-4 gap-4"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium text-gray-900">{q}</span>
                <span
                  className={`flex-shrink-0 w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === i ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
