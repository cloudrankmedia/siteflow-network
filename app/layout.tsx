import type { Metadata } from "next";
import { DM_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drone Surveys for Construction Projects | SiteFlow Network",
  description:
    "Connect with FAA-certified drone surveyors for progress monitoring, volumetric analysis, and as-built documentation. Free matching service for contractors and developers.",
  keywords: [
    "construction drone survey",
    "aerial survey construction",
    "drone progress monitoring",
    "volumetric analysis drone",
    "as-built documentation drone",
    "general contractor drone survey",
    "civil earthwork drone",
    "construction site mapping",
  ],
  openGraph: {
    title: "Drone Surveys for Construction Projects | SiteFlow Network",
    description:
      "Survey-grade drone data for general contractors, civil engineers, and developers. 85% faster than ground surveys. Free matching service.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${bebasNeue.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
