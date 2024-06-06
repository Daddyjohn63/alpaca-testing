import { HeroSection1 } from "@/components/marketing/hero-section1";
import { TrustLogosSection } from "@/components/marketing/trust-logos-section";
import { TestimonialSection1 } from "@/components/marketing/testimonial-section1";
import { IntroSection } from "@/components/marketing/intro-section";
import { BenefitsSection } from "@/components/marketing/benefits-section";
import { FeaturesSection } from "@/components/marketing/features-section";
import { FeaturesSection2 } from "@/components/marketing/features-section2";
import { TestimonialSection2 } from "@/components/marketing/testimonial-section2";
import { PricingSection } from "@/components/marketing/pricing-section";
import { FAQSection } from "@/components/marketing/faq-section";
import { trustLogos } from "@/constants/trust-logos";
import { benefits } from "@/constants/benefits";
import { testimonials1 } from "@/constants/testimonials"
import { featureSet1, featureSet2 } from "@/constants/features";


const Home = async () => {

  return (
    <main> 

      <HeroSection1 />

      <TrustLogosSection
        heading="Featured on"
        subHeading="This is an example"
        data={trustLogos}
      />

      <TestimonialSection1
        data={testimonials1}
      />

      <IntroSection
        heading="Unlock Your Full Potential With Our Product"
        content="Are you tired of [common problem]? At [Company/Product Name], we understand your challenges. Our [products/services] are crafted to offer effective solutions that streamline [processes, daily activities, etc.], enhancing your [related benefit]. Start with us today, and leverage our expertise to [achieve specific results or improvements]."
        imageUrl="https://place-hold.it/500x400"
      />

      <BenefitsSection
        heading="Benefits here"
        subHeading="Beenfits go here this is subheader"
        data={benefits}
      />

      <FeaturesSection 
        className="pb-0 bg-red-500"
        heading="Features Here"
        subHeading="Subtitle Features here"
        data={featureSet1}
      /> 
      <FeaturesSection 
        className="pt-0 bg-blue-500"
        data={featureSet2}
      /> 
      <TestimonialSection2 className="py-16" />
      <PricingSection className="py-16" />
      <FAQSection className="pt-10 pb-28"/>


    </main>
  );
}
export default Home
