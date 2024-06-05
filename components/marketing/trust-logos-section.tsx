import { cn } from "@/lib/utils"
import Image from "next/image"

interface TrustLogo {
  name: string;
  imageUrl: string;
}

interface TrustLogoSectionProps {
  className?: string,
  data: TrustLogo[]
}

export function TrustLogosSection(props: TrustLogoSectionProps) {

  const {className, data} = props;

  return (
      <section id="featured-on-section" className={cn(className)}>
        <div className="container grid grid-cols-1 gap-5 items-center justify-center">
          <div className="text-sm text-center font-bold">Featured On:</div>
        <ul className="flex flex-wrap gap-y-5 gap-x-12 items-center justify-center">
          {data && data.map((logo,i) => {
            return (
              <li key={i} className="flex justify-center items-center py-3"><Image src={logo.imageUrl} width={130} height={50} alt="logo" /></li>
            )
          })}

        </ul>
        </div>
      </section>
  )
}
