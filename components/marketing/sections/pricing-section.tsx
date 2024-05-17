import { cn } from "@/lib/utils"
import { SectionTitle } from "../section-title"
import { PricingCard } from "../pricing-card"

const starterFeatures = [
  {
    name: "Boilerplate source code",
    included: true
  },
  {
    name: "Setup documentaion",
    included: true
  },
  {
    name: "Blog CMS",
    included: true
  },
  {
    name: "Stripe payments",
    included: true
  },
  {
    name: "PostgreSQL / Prisma",
    included: true
  },
  {
    name: "Full Auth & Oauth Integration",
    included: true
  },
  {
    name: "Custom Component Library",
    included: true
  },
  {
    name: "Figma design files",
    included: false
  },
  {
    name: "Chat GPT marketing prompts",
    included: false
  },
  {
    name: "Discord Community",
    included: false
  },
  {
    name: "Lifetime updates",
    included: false
  },
]

const proFeatures = [
  {
    name: "Boilerplate source code",
    included: true
  },
  {
    name: "Setup documentaion",
    included: true
  },
  {
    name: "Blog CMS",
    included: true
  },
  {
    name: "Stripe payments",
    included: true
  },
  {
    name: "PostgreSQL / Prisma",
    included: true
  },
  {
    name: "Full Auth & Oauth Integration",
    included: true
  },
  {
    name: "Custom Component Library",
    included: true
  },
  {
    name: "Figma design files",
    included: true
  },
  {
    name: "Chat GPT marketing prompts",
    included: true
  },
  {
    name: "Discord Community",
    included: true
  },
  {
    name: "Lifetime updates",
    included: true
  },
]

export function PricingSection({className}: {className?: string}) {
  return (
  <section id="pricing-section" className={cn(className)}>
      <div className="container">
      <SectionTitle 
      title="Choose Your Plan"
      subtitle="Select a package that fits your needs and budget"
        className="text-center"
    />
      <div className="flex justify-center">
        <ul className="flex flex-col md:flex-row gap-14">
          <li>
            <PricingCard
              tier="Starter"
              price="169"
              features={starterFeatures}
              btnName="Get Starter Stack"
            />
        </li>
          <li>
            <PricingCard
              tier="Pro"
              price="199"
              features={proFeatures}
              btnName="Get Pro Stack"
              mostPopular
            />
        </li>

        </ul>
        <div>
        </div>
      </div>
    </div>
    </section>
  )
}
