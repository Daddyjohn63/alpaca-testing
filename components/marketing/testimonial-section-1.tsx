const testimonials = [
  {
    name: "John Smith",
    handle: "@johnsmith",
    image: "person1.jpg",
    review: "Alpacastack has been one of the best stacks I have ever worked with. I cannot express in words how much I love this stack!",
    stars: "⭐⭐⭐⭐⭐",
  },
    {
    name: "Sandy Lou",
    handle: "@johnsmith",
    image: "person2.jpg",
    review: "Alpacastack has been one of the best stacks I have ever worked with. I cannot express in words how much I love this stack!",
    stars: "⭐⭐⭐⭐⭐",
  },
    {
    name: "Breanna James",
    handle: "@johnsmith",
    image: "person1.jpg",
    review: "This is awesome! Alpacastack for life!",
    stars: "⭐⭐⭐⭐⭐",
  },
]

export function TestimonialSection1() {
  return (
    <section id="hero-testimonials-section" className="py-10 bg-background">
      <div className="container">
        <ul className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-12">
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
