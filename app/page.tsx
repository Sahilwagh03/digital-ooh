import Clients from "@/components/client";
import CTA from "@/components/cta";
import FAQSection from "@/components/faq-section";
import FeatureSection from "@/components/feature-section";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import PersonaSection from "@/components/persona-section";
import RevenueShift from "@/components/revenue-shift";
import Testimonials from "@/components/testimonials";
import TransformationSection from "@/components/transformation-section";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero/>
      <Clients/>
      <PersonaSection/>
      <RevenueShift/>
      <FeatureSection/>
      <TransformationSection/>
      <HowItWorks/>
      <Testimonials/>
      <FAQSection/>
      <CTA/>
    </main>
  );
}
