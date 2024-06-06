import { testimonials1 } from "@/constants/testimonials"
import { type Testimonial } from "@/types";
import { SectionWrapper, SectionContainer, SectionColumn} from "@/components/uiAlpaca/section-wrapper";
import Image from "next/image";

export function TestimonialSection1({data}: {data: Testimonial[]}) {
  return (
    <SectionWrapper className="pt-8 pb-5">
      <SectionContainer>
        <SectionColumn>
          <ul className="sm:grid md:grid-cols-3 md:gap-10">
            {!!data && data.map((testimonial, i) => {
              return (
                <li key={i} className="flex gap-3 my-5 sm:my-3">
                  <div className="flex-shrink-0">
                    {!!testimonial.image && (
                      <Image 
                        src={testimonial.image}
                        alt={testimonial.name || 'testimonial'}
                        className="rounded-full border-2 border-foreground bg-muted bg-cover aspect-ratio"
                        width={50}
                        height={50}
                      />
                    )}
                  </div>
                  <div>
                    <div className="mb-2 italic">"{testimonial.review}"</div>
                    <div className="text-sm"><strong>{testimonial.name}</strong> | {testimonial.handle}</div>
                    <div className="text-xs">{testimonial.stars}</div>
                  </div>
                </li>
              )
            })} 
          </ul>
        </SectionColumn>
      </SectionContainer>
    </SectionWrapper>

  )
}
