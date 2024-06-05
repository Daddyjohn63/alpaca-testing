
import { HeroSection2 } from "@/components/marketing/hero-section2";
import { TrustLogosSection } from "@/components/marketing/trust-logos-section";
import { TestimonialSection1 } from "@/components/marketing/testimonial-section1";
import { IntroSection } from "@/components/marketing/intro-section";
import { BenefitsSection } from "@/components/marketing/benefits-section";
import { FeaturesSection1 } from "@/components/marketing/features-section1";
import { FeaturesSection2 } from "@/components/marketing/features-section2";
import { TestimonialSection2 } from "@/components/marketing/testimonial-section2";
import { PricingSection } from "@/components/marketing/pricing-section";
import { FAQSection } from "@/components/marketing/faq-section";

import Image from "next/image";

const Home = async () => {

  return (
    <main> 
      <HeroSection2 className="bg-muted py-20" />
      <TrustLogosSection className="bg-muted pb-10" />
      <TestimonialSection1 className="py-10" />
      <IntroSection className="py-10 pb-20" />
      <BenefitsSection className="pt-5 pb-28" />
      <FeaturesSection1 className="py-16 bg-muted" />
      <FeaturesSection2 className="py-16 bg-muted" />
      <TestimonialSection2 className="py-16" />
      <PricingSection className="py-16" />
      <FAQSection className="pt-10 pb-28"/>
    </main>
  );
}
export default Home
