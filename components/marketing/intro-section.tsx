import Image from "next/image"
import { cn } from "@/lib/utils"
import { 
  SectionWrapper,
  SectionContainer, 
  SectionColumn, 
  SectionHeading2,
  SectionContent
} from "@/components/uiAlpaca/section-wrapper";
import { Button } from "../ui/button";

<section>
  <div className="container sm:grid sm:grid-cols-2 gap-10">
    <div className="mb-5 sm:mb-0">
      <Image alt="intro-img" src="https://place-hold.it/480x380" width={0} height={0} className="w-full" />
    </div>
    <div className="flex items-center">
      <div className="space-y-3">
        <h2 className="text-3xl font-black">Facing [Problem]? — Experience the [Company/Product Name] Difference!</h2>
        <div className="space-y-2">
          <p>Are you tired of [common problem]? At [Company/Product Name], we understand your challenges. Our [products/services] are crafted to offer effective solutions that streamline [processes, daily activities, etc.], enhancing your [related benefit]. Start with us today, and leverage our expertise to [achieve specific results or improvements].</p>
        </div>
      </div>
    </div>
  </div>
</section>

export function IntroSection({heading, content, imageUrl, children}: {heading: string, content?: string, imageUrl?: string, children?: React.ReactNode}) {
  return (
    <SectionWrapper>
      <SectionContainer className="grid grid-cols-2 gap-10">
        <SectionColumn>
          {!!imageUrl && <Image alt="hero Image" src={imageUrl} width={500} height={400} className="mx-auto rounded-md" /> }
        </SectionColumn>
        <SectionColumn className="text-center my-auto">
          <SectionHeading2 className="text-left">{heading}</SectionHeading2>
          <SectionContent className="text-left">
            {content}
          </SectionContent>
          {children}
        </SectionColumn>
      </SectionContainer>
    </SectionWrapper>
  )
}
