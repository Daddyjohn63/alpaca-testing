import { cn } from "@/lib/utils"
import { SectionTitle } from "../section-title"
import { TimerReset, Megaphone, Coins } from "lucide-react"


const benefits = [
  {
    icon: TimerReset,
    title: 'Cost Effective',
    excerpt: 'Save thousands by eliminating the need for expensive custom design and development.'
  },
  {
    icon: Megaphone,
    title: 'Quick to market',
    excerpt: 'Save thousands by eliminating the need for expensive custom design and development.'
  },
  {
    icon: Coins,
    title: 'SEO Optomized',
    excerpt: 'Save thousands by eliminating the need for expensive custom design and development.'
  },
  {
    icon: Megaphone,
    title: 'Quick to market',
    excerpt: 'Save thousands by eliminating the need for expensive custom design and development.'
  },
  {
    icon: Coins,
    title: 'SEO Optomized',
    excerpt: 'Save thousands by eliminating the need for expensive custom design and development.'
  },
  {
    icon: Coins,
    title: 'SEO Optomized',
    excerpt: 'Save thousands by eliminating the need for expensive custom design and development.'
  },
]

export function BenefitsSection({className}: {className?: string}) {
  return (
  <section className={cn(className)}>
      <div className="container">
      <SectionTitle 
        title="Fast-Track Your Startup Success"
        subtitle="The world is moving lighting fast. Don't get bogged down in tedious boilerplate coding, focus your energies on launching innovative products and achieving market fit."
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
