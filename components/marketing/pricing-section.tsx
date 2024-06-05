import { cn } from "@/lib/utils"
import { SectionTitle } from "@/components/section-title"
import { PricingCard } from "@/components/pricing-card"
import { siteConfig } from "@/site-config"

export function PricingSection({className}: {className?: string}) {

  const plans = siteConfig.stripe.plans

  return (
  <section id="pricing-section" className={cn(className)}>
      <div className="container">
      <SectionTitle 
      title="Simple, Transparent Pricing"
      subtitle="Choose the plan that best fits your needs with no hidden fees. Upgrade, downgrade, or cancel at any time."
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
