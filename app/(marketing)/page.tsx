import { BenefitsSection } from "@/components/marketing/sections/benefits-section";
import { FeaturesSection } from "@/components/marketing/sections/features-section";
import { HeroFullSection } from "@/components/marketing/sections/hero1-section";
import { HowToSection } from "@/components/marketing/sections/how-to-section";
import { IntroSection } from "@/components/marketing/sections/intro-section";
import { PricingSection } from "@/components/marketing/sections/pricing-section";
import { TestimonialSection1 } from "@/components/marketing/sections/testimonial1-section";
import { VideoSection } from "@/components/marketing/sections/video-section";
import Image from "next/image";

const Home = async () => {
  return (
    <main> 
      <HeroFullSection />
      <HowToSection className="py-3" />
      {/*<VideoSection className="pt-3" />*/}
      <Image alt="hero Image" src="/hero-img.jpg" width={1100} height={617} className="mx-auto rounded-md my-10 border border-muted-foreground shadow-2xl shadow-black/70" />
      <TestimonialSection1 className="py-5" />
      <IntroSection className="py-20" />
      <BenefitsSection className="pt-5 pb-28" />
      <FeaturesSection className="py-28 bg-[#212121]" />
      <PricingSection className="py-28" />
    </main>
  );
}
export default Home
