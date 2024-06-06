import { PricingCard } from "@/components/pricing-card"
import { siteConfig } from "@/site-config"
import { Section, SectionHeader, SectionTitle2, SectionDescription, SectionContent, SectionFooter} from "@/components/uiAlpaca/section"

export function PricingSection1() {

  const plans = siteConfig.stripe.plans

  return (
  <Section>
      <SectionHeader>
      <SectionTitle2>Simple, Transparent Pricing</SectionTitle2>
        <SectionDescription>Choose the plan that best fits your needs with no hidden fees. Upgrade, downgrade, or cancel at any time.</SectionDescription>
      </SectionHeader>
      <SectionContent className="flex justify-center">
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
        </SectionContent>
      <SectionFooter className="pt-10">We accept visa, mastercard, AMEX, and Ecoin</SectionFooter>
    </Section>
  )
}
