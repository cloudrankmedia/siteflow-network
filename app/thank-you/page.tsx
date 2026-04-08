import Link from "next/link";
import Image from "next/image";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Minimal nav */}
      <nav className="bg-white border-b border-gray-100 px-6 py-3">
        <div className="bg-white inline-flex items-center rounded-md px-2 py-1">
          <Image
            src="/images/siteflow-logo.png"
            alt="SiteFlow Network"
            width={160}
            height={40}
            className="h-9 w-auto"
          />
        </div>
      </nav>

      {/* Thank you content */}
      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-lg text-center">
          {/* Checkmark icon */}
          <div className="mx-auto mb-8 w-20 h-20 bg-brand-orange-pale rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-brand-orange"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="font-display text-5xl text-navy mb-4 tracking-wide">
            You&apos;re All Set.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We&apos;ve received your project details and are matching you with a
            certified drone surveyor in your area.
          </p>
          <p className="text-gray-500 text-base mb-10">
            Expect a call or email within{" "}
            <span className="font-medium text-navy">24 business hours</span>.
            Check your spam folder just in case.
          </p>

          {/* What happens next */}
          <div className="bg-gray-50 rounded-xl p-6 text-left mb-10 border border-gray-100">
            <p className="text-sm font-medium text-navy mb-4 uppercase tracking-wider">
              What happens next
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  text: "We review your project type and location",
                },
                {
                  step: "02",
                  text: "We match you with a FAA-certified provider in your area",
                },
                {
                  step: "03",
                  text: "They contact you directly to scope your project and provide pricing",
                },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="font-display text-2xl text-brand-orange opacity-40 leading-none mt-0.5">
                    {step}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/"
            className="inline-block text-sm text-gray-400 hover:text-navy transition-colors"
          >
            ← Back to SiteFlow Network
          </Link>
        </div>
      </div>
    </div>
  );
}
