import Image from "next/image"
import { SectionWrapper, SectionContainer, SectionColumn} from "@/components/uiAlpaca/section-wrapper";


interface TrustLogo {
  name: string;
  imageUrl: string;
}

interface TrustLogoSectionProps {
  heading: string;
  subHeading: string;
  data: TrustLogo[]
}

export function TrustLogosSection(props: TrustLogoSectionProps) {

  const {heading, subHeading, data} = props;

  return (
    <SectionWrapper className="py-5">
      <SectionContainer>
        <SectionColumn className="text-center">
          <h2 className="text-sm md:text-sm font-light">{heading}</h2>
          <ul className="flex flex-wrap gap-y-5 gap-x-12 items-center justify-center">
           {data && data.map((logo,i) => {
             return (
               <li key={i} className="flex justify-center items-center py-3"><Image src={logo.imageUrl} width={130} height={50} alt="logo" /></li>
             )
           })}
           </ul>
        </SectionColumn>
      </SectionContainer>
    </SectionWrapper>
  )
}
