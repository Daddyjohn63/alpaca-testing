import { BenefitsSection } from "@/components/marketing/sections/benefits-section";
import { FAQSection } from "@/components/marketing/sections/faq-section";
import { FeaturesSection } from "@/components/marketing/sections/features-section";
import { HeroFullSection } from "@/components/marketing/sections/hero1-section";
import { HowToSection } from "@/components/marketing/sections/how-to-section";
import { IntroSection } from "@/components/marketing/sections/intro-section";
import { PricingSection } from "@/components/marketing/sections/pricing-section";
import { TestimonialSection1 } from "@/components/marketing/sections/testimonial1-section";
import { TestimonialSection2 } from "@/components/marketing/sections/testimonial2-section";
import { VideoSection } from "@/components/marketing/sections/video-section";
import Image from "next/image";

const Home = async () => {

  return (
    <main> 
      <HeroFullSection />
      <HowToSection className="py-3" />

      {/*<VideoSection className="pt-3" />*/}
      <section className="container">
      <Image alt="hero Image" src="/hero-img.jpg" width={1100} height={617} className="mx-auto rounded-md my-10 border border-muted-foreground shadow-2xl shadow-black/70" />
      </section>

      <TestimonialSection1 className="py-5" />
      <IntroSection className="py-10 pb-20" />
      <BenefitsSection className="pt-5 pb-28" />
      <FeaturesSection className="py-16 bg-muted" />
      <TestimonialSection2 className="py-20" />
      <PricingSection className="py-16" />
      <FAQSection className="pt-10 pb-28"/>
    </main>
  );
}
export default Home
