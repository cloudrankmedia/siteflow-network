import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Segments from "@/components/Segments";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <Segments />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTABand />
      <Footer />
      <MobileCTABar />
    </main>
  );
}
