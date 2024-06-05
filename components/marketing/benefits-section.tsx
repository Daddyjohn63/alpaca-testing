import { cn } from "@/lib/utils"
import { SectionTitle } from "@/components/section-title"
import { TimerReset, Megaphone, Coins } from "lucide-react"


const benefits = [
  {
    icon: TimerReset,
    title: 'Enhanced Efficiency',
    excerpt: 'Boost productivity with streamlined workflows designed to focus on whats important.'
  },
  {
    icon: Megaphone,
    title: 'Cost Savings',
    excerpt: 'Minimize expenses without sacrificing quality, enhancing resource efficiency and financial savings.'
  },
  {
    icon: Coins,
    title: 'Superior Quality',
    excerpt: 'Expect precision-crafted products that consistently exceed industry standards in quality.'
  },
  {
    icon: Coins,
    title: 'Innovative Features',
    excerpt: 'Embrace cutting-edge technology with unique features that set industry benchmarks.'
  },
  {
    icon: TimerReset,
    title: 'Expert Support',
    excerpt: 'Enjoy comprehensive support from industry experts every step of your journey.'
  },
  {
    icon: Megaphone,
    title: 'Scalability',
    excerpt: 'Grow effortlessly; our solutions scale with your evolving business needs seamlessly.'
  },
]

export function BenefitsSection({className}: {className?: string}) {
  return (
  <section className={cn(className)}>
      <div className="container">
      <SectionTitle 
        title="Explore the Benefits of [Company/Product Name]"
        subtitle="Why settle for less when you can have the best? Here are the key benefits that set [Company/Product Name] apart:"
        className="mx-auto text-center max-w-5xl"
      />
      <ul className="grid md:grid-cols-3 gap-7 py-4">
      {!!benefits && benefits.map((item, i) => {
          return (
            <li key={i}>
              <div className="flex gap-4">
                <div>{item.icon ? <item.icon className="text-accent" size="40"/> : null}</div>
                  <div>
                <h4 className="text-xl font-black">{item.title}</h4>
                <p>{item.excerpt}</p>
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
