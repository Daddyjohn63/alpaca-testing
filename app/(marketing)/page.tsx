import { HeroFullSection } from "@/components/marketing/hero-full-section";
import { IntroSection } from "@/components/marketing/intro-section";
import { TestimonialSection1 } from "@/components/marketing/testimonial-section-1";

const Home = async () => {
  return (
    <main>
      <HeroFullSection />
      <TestimonialSection1 />
      <IntroSection />
    </main>
  );
}
export default Home
