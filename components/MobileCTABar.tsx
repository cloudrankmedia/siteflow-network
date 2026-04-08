"use client";

import { useState, useEffect } from "react";

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero form (approx 600px)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-navy border-t border-white/10 px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-white truncate">
            Get matched with a drone surveyor
          </p>
          <p className="text-xs text-white/50">Free · No obligation · 24hr response</p>
        </div>
        <button
          onClick={scrollToForm}
          className="flex-shrink-0 bg-brand-orange text-white text-sm font-medium px-4 py-2.5 rounded-lg"
        >
          Get Started →
        </button>
      </div>
    </div>
  );
}
