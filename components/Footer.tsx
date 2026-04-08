import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 px-6 py-5">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Logo on white */}
        <div className="bg-white rounded-md px-2 py-1 inline-flex items-center">
          <Image
            src="/images/siteflow-logo.png"
            alt="SiteFlow Network"
            width={140}
            height={35}
            className="h-7 w-auto"
          />
        </div>

        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="mailto:hello@siteflownetwork.com"
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            Contact
          </Link>
        </div>

        <p className="text-xs text-gray-300">
          © {new Date().getFullYear()} SiteFlow Network. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
