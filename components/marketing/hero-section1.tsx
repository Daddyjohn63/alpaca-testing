import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper, SectionContainer, SectionColumn, SectionHeading1, SectionContent, SectionBtnGroup } from "@/components/uiAlpaca/section-wrapper";

export function HeroSection1() {
  return (
    <SectionWrapper className="pb-5">
      <SectionContainer>
        <SectionColumn className="text-center">
          <SectionHeading1 className="md:text-6xl">Unlock Your Business Full Potential with Our Product</SectionHeading1>
          <SectionContent>Experience innovation and creativity with our revolutionary product. Get started today and see your business transformed!</SectionContent>
          <SectionBtnGroup className="justify-center pb-5">
            <Button asChild><Link href="#pricing-section">Buy Now</Link></Button>
            <Button asChild variant="outline"><Link href="#">Watch Video</Link></Button>
          </SectionBtnGroup>
          <Image alt="hero Image" src="https://place-hold.it/1100x618" width={1100} height={618} className="mx-auto rounded-md" />
        </SectionColumn>
      </SectionContainer>
    </SectionWrapper>
  )
}
