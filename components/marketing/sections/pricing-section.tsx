import { cn } from "@/lib/utils"
import { SectionTitle } from "../section-title"
import { PricingCard } from "../pricing-card"
import { siteConfig } from "@/site-config"

export function PricingSection({className}: {className?: string}) {

  const plans = siteConfig.stripe.plans

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
            {!!plans && plans.map((plan, i) => {
              return (
                <li key={i}>
                  <PricingCard
                    name={plan.name}
                    price={plan.price}
                    mode={plan.mode}
                    features={plan.features}
                    priceId={plan.priceId}
                    isFeatured={plan.isFeatured}
                  />
                </li>
              )
            })}
        </ul>
        <div>
        </div>
      </div>
    </div>
    </section>
  )
}
