import Hero from "@/components/sections/hero";
import ServicesOverview from "@/components/sections/services-overview";
import Experience from "@/components/sections/experience";
import Testimonials from "@/components/sections/testimonials";
import CTASection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <ServicesOverview />
      <Experience />
      <Testimonials />
      <CTASection />
    </div>
  );
}
