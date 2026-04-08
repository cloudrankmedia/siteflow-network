"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      } border-b border-gray-100`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo on white background */}
        <div className="bg-white rounded-md px-2 py-1 inline-flex items-center">
          <Image
            src="/images/siteflow-logo.png"
            alt="SiteFlow Network"
            width={180}
            height={45}
            className="h-9 w-auto"
            priority
          />
        </div>

        <div className="flex items-center gap-6">
          <span className="hidden sm:block text-sm text-gray-500">
            For Contractors
          </span>
          <button
            onClick={scrollToForm}
            className="bg-brand-orange hover:bg-brand-orange-light transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-md"
          >
            Get Free Site Assessment
          </button>
        </div>
      </div>
    </nav>
  );
}
