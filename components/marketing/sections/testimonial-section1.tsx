import { cn } from "@/lib/utils"

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
]

export function TestimonialSection1({className}: {className?:string}) {
  return (
    <section id="hero-testimonials-section" className={cn(className)}>
      <div className="container">
        <ul className="sm:grid md:grid-cols-3 md:gap-10">
          {!!testimonials && testimonials.map((testimonial, i) => {
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
      </div>
    </section>
  )
}
