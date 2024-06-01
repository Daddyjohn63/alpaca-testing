import { cn } from "@/lib/utils"
import { SectionTitle } from "../section-title"


const testimonials = [
  {
    name: "Marty McFly",
    handle: "@martymcfly",
    image: "testimonial-marty.jpg",
    review: "Since I started using [Product/Service], I've noticed a significant improvement in [specific problem area].",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Marty McFly",
    handle: "@martymcfly",
    image: "testimonial-marty.jpg",
    review: "Since I started using [Product/Service], I've noticed a significant improvement in [specific problem area].",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Marty McFly",
    handle: "@martymcfly",
    image: "testimonial-marty.jpg",
    review: "Since I started using [Product/Service], I've noticed a significant improvement in [specific problem area].",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Marty McFly",
    handle: "@martymcfly",
    image: "testimonial-marty.jpg",
    review: "Since I started using [Product/Service], I've noticed a significant improvement in [specific problem area].",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Marty McFly",
    handle: "@martymcfly",
    image: "testimonial-marty.jpg",
    review: "Since I started using [Product/Service], I've noticed a significant improvement in [specific problem area].",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Marty McFly",
    handle: "@martymcfly",
    image: "testimonial-marty.jpg",
    review: "Since I started using [Product/Service], I've noticed a significant improvement in [specific problem area].",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Marty McFly",
    handle: "@martymcfly",
    image: "testimonial-marty.jpg",
    review: "Since I started using [Product/Service], I've noticed a significant improvement in [specific problem area].",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Marty McFly",
    handle: "@martymcfly",
    image: "testimonial-marty.jpg",
    review: "Since I started using [Product/Service], I've noticed a significant improvement in [specific problem area].",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Marty McFly",
    handle: "@martymcfly",
    image: "testimonial-marty.jpg",
    review: "Since I started using [Product/Service], I've noticed a significant improvement in [specific problem area].",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Marty McFly",
    handle: "@martymcfly",
    image: "testimonial-marty.jpg",
    review: "Since I started using [Product/Service], I've noticed a significant improvement in [specific problem area].",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Marty McFly",
    handle: "@martymcfly",
    image: "testimonial-marty.jpg",
    review: "Since I started using [Product/Service], I've noticed a significant improvement in [specific problem area].",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Marty McFly",
    handle: "@martymcfly",
    image: "testimonial-marty.jpg",
    review: "Since I started using [Product/Service], I've noticed a significant improvement in [specific problem area].",
    stars: "⭐⭐⭐⭐⭐",
  },
]


export function TestimonialSection2({className}: {className?:string}) {
  return (
    <section id="testimonials2-section" className={cn(className)}>
      <div className="container">

        <SectionTitle 
          title="Testimonials"
          subtitle="Hear from customer who have transformed their projects with Alpacastack."
          className="text-center"
        />
        <ul className="sm:columns-2 md:columns-3 gap-5">
          {!!testimonials && testimonials.map((testimonial, i) => {
            return (
              <li key={i} className="break-inside-avoid mb-5">
                <div className="bg-muted p-5 rounded-sm">
                  <div className="italic">{testimonial.review}</div>
                  <hr className="my-5 border border-muted-foreground/50 border-dashed"/>
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-foreground bg-muted bg-cover aspect-ratio" style={{backgroundImage: `url(/${testimonial.image})`}}></div>
                    <div>
                      <div className="text-sm"><strong>{testimonial.name}</strong> | {testimonial.handle}</div>
                      <div className="text-xs">{testimonial.stars}</div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })} 
        </ul>
      </div>
    </section>
  )
}
