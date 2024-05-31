import { cn } from "@/lib/utils"
import { SectionTitle } from "../section-title"


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
    handle: "@sandylou",
    image: "person2.jpg",
    review: "The customization options are endless with Alpacastack. It’s so flexible and easy to use. A total game-changer!",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Breanna James",
    handle: "@breannajames",
    image: "person3.jpg",
    review: "Alpacastack’s approach to modern web development is innovative and cuts down on so much unnecessary complexity.",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Michael Lee",
    handle: "@michaellee",
    image: "person4.jpg",
    review: "I've been able to launch my project in a fraction of the time it would normally take. Thank you, Alpacastack!",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Emma Watson",
    handle: "@emmawatson",
    image: "person5.jpg",
    review: "Fantastic support and documentation make Alpacastack the best choice for developers at any skill level.",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Lucas Brown",
    handle: "@lucasbrown",
    image: "person6.jpg",
    review: "Absolutely love the mobile responsiveness. My sites look great on any device without extra effort!",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Sophia Martinez",
    handle: "@sophiamartinez",
    image: "person7.jpg",
    review: "Alpacastack’s approach to modern web development is innovative and cuts down on so much unnecessary complexity.",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Daniel Kim",
    handle: "@danielkim",
    image: "person8.jpg",
    review: "The integration of Prisma and PostgreSQL was seamless. It's a robust solution for any serious developer.",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Isabella Johnson",
    handle: "@isabellajohnson",
    image: "person9.jpg",
    review: "Tailwind CSS with Alpacastack? A perfect combo that has elevated my frontend design significantly.",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Ethan Wilson",
    handle: "@ethanwilson",
    image: "person10.jpg",
    review: "NextAuth implementation with Alpacastack is just flawless. My apps are secure and scalable.",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Ava Davis",
    handle: "@avadavis",
    image: "person11.jpg",
    review: "As a beginner, I found Alpacastack incredibly approachable. It helped me understand Next.js and modern app architecture.",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Oliver Harris",
    handle: "@oliverharris",
    image: "person12.jpg",
    review: "Deploying my project was a breeze with Alpacastack. The Docker setup is straightforward and well-documented.",
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
