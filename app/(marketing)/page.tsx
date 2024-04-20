import { HeroFullSection } from "@/components/marketing/hero-full-section";
import { HowToSection } from "@/components/marketing/how-to-section";
import { IntroSection } from "@/components/marketing/intro-section";
import { TestimonialSection1 } from "@/components/marketing/testimonial-section-1";
import { VideoSection } from "@/components/marketing/video-section";

const Home = async () => {
  return (
    <main>
      <HeroFullSection />
      <HowToSection className="py-3" />
      <VideoSection />
      <TestimonialSection1 />
      <IntroSection />
    </main>
  );
}
export default Home
