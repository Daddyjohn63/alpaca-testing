import { BenefitsSection } from "@/components/marketing/sections/benefits-section";
import { FeaturesSection } from "@/components/marketing/sections/features-section";
import { HeroFullSection } from "@/components/marketing/sections/hero1-section";
import { HowToSection } from "@/components/marketing/sections/how-to-section";
import { IntroSection } from "@/components/marketing/sections/intro-section";
import { PricingSection } from "@/components/marketing/sections/pricing-section";
import { TestimonialSection1 } from "@/components/marketing/sections/testimonial1-section";
import { VideoSection } from "@/components/marketing/sections/video-section";

const Home = async () => {
  return (
    <main className="mx-auto max-w-[1100px]">
      <HeroFullSection />
      <HowToSection className="py-3" />
      <VideoSection className="pt-3" />
      <TestimonialSection1 className="py-5" />
      <IntroSection className="py-5" />
      <BenefitsSection />
      <FeaturesSection />
      <PricingSection />
    </main>
  );
}
export default Home
