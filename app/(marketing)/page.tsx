import { HeroSection2 } from "@/components/marketing/hero-section2";
import { CTASection1 } from "@/components/marketing/cta-section1";
import { TrustLogosSection } from "@/components/marketing/trust-logos-section";
import { TestimonialSection1 } from "@/components/marketing/testimonial-section1";
import { IntroSection } from "@/components/marketing/intro-section";
import { BenefitsSection } from "@/components/marketing/benefits-section";
import { FeaturesSection1 } from "@/components/marketing/features-section1";
import { FeaturesSection2 } from "@/components/marketing/features-section2";
import { TestimonialSection2 } from "@/components/marketing/testimonial-section2";
import { PricingSection } from "@/components/marketing/pricing-section";
import { FAQSection } from "@/components/marketing/faq-section";
import { trustLogos } from "@/constants/trust-logos";

const Home = async () => {

  return (
    <main> 
      <HeroSection2 
        className="bg-muted py-20" 
        title="Unlock Your Business’s Full Potential with Our Product!"
        subTitle="Experience innovation and creativity with our revolutionary product. Get started today and see your business transformed!"
        imageUrl="https://place-hold.it/510x400"
        backgroundImageUrl="https://images.pexels.com/photos/12220265/pexels-photo-12220265.jpeg"
        btnText1="Buy Now!"
        btnHref1="#pricing-section"
        btnText2="Watch Video!"
        btnHref2="#"
      />
      <TrustLogosSection
        className="bg-muted p-5"
        data={trustLogos}
      />
      <TestimonialSection1 className="py-10" />
      <IntroSection className="py-10 pb-20" />
      <BenefitsSection className="pt-5 pb-28" />
      <FeaturesSection1 className="py-16 bg-muted" />
      <FeaturesSection2 className="py-16 bg-muted" />
      <TestimonialSection2 className="py-16" />
      <PricingSection className="py-16" />
      <FAQSection className="pt-10 pb-28"/>
      <CTASection1 
        className="bg-muted py-20" 
        title="Unlock Your Business’s Full Potential with Our Product!"
        subTitle="Experience innovation and creativity with our revolutionary product. Get started today and see your business transformed!"
        imageUrl="https://place-hold.it/510x400"
        backgroundImageUrl="https://images.pexels.com/photos/12220265/pexels-photo-12220265.jpeg"
        btnText1="Buy Now!"
        btnHref1="#pricing-section"
        btnText2="Watch Video!"
        btnHref2="#"
      />

    </main>
  );
}
export default Home
