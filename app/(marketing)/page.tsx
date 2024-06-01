import { Hero2Section } from "@/components/marketing/sections/hero2-section";
import { TrustLogosSection } from "@/components/marketing/sections/trust-logos-section";
import { TestimonialSection1 } from "@/components/marketing/sections/testimonial-section1";
import { IntroSection } from "@/components/marketing/sections/intro-section";
import { BenefitsSection } from "@/components/marketing/sections/benefits-section";
import { FeaturesSection1 } from "@/components/marketing/sections/features-section1";
import { FeaturesSection2 } from "@/components/marketing/sections/features-section2";
import { TestimonialSection2 } from "@/components/marketing/sections/testimonial-section2";
import { PricingSection } from "@/components/marketing/sections/pricing-section";
import { FAQSection } from "@/components/marketing/sections/faq-section";

import Image from "next/image";

const Home = async () => {

  return (
    <main> 
      <Hero2Section className="bg-muted py-20" />
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
