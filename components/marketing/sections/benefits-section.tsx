import { cn } from "@/lib/utils"
import { SectionTitle } from "../section-title"
export function BenefitsSection({className}: {className: string}) {
  return (
  <section className={cn(className)}>
      <SectionTitle 
        title="Fast-Track Your Startup Success"
        subtitle="The world is moving lighting fast. Don't get bogged down in tedious boilerplate coding, focus your energies on launching innovative products and achieving market fit."
        className="text-center max-w-5xl"
      />
      
  </section>
  )
}
