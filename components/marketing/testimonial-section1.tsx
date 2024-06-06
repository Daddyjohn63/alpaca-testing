import { testimonials1 } from "@/constants/testimonials"
import { SectionWrapper, SectionContainer, SectionColumn} from "@/components/uiAlpaca/section-wrapper";

export function TestimonialSection1({className}: {className?:string}) {
  return (
    <SectionWrapper className="py-5">
      <SectionContainer>
        <SectionColumn className="text-center">
          <ul className="sm:grid md:grid-cols-3 md:gap-10">
            {!!testimonials1 && testimonials1.map((testimonial, i) => {
              return (
                <li key={i} className="flex gap-3 my-5 sm:my-3">
                  <div>
                    <div className="w-10 h-10 rounded-full border-2 border-foreground bg-muted bg-cover aspect-ratio" style={{backgroundImage: `url(/${testimonial.image})`}}></div>
                  </div>
                  <div>
                    <div className="mb-2 italic">{testimonial.review}</div>
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
