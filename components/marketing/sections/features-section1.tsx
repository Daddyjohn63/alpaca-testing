import Image from "next/image";
import { SectionTitle } from "../section-title";
import { cn } from "@/lib/utils";
import { FileCode, Database, User, ShoppingCart, Mail, FileImage } from "lucide-react";

const featureSet1 = [

  {
    icon: FileCode,
    title: 'Intuitive User Interface',
    excerpt: 'Navigate with ease using our sleek, user-friendly interface designed for optimal user experience.'
  },
  {
    icon: Database,
    title: 'Extensive Customization',
    excerpt: 'Tailor the [product/service] to your needs with versatile customization options at your fingertips.'
  },
  {
    icon: User,
    title: 'Real-Time Analytics',
    excerpt: 'Make informed decisions with up-to-the-minute analytics that help you stay ahead.'
  },

]
const featureSet2 = [

  {
    icon: ShoppingCart,
    title: 'Full Mobile Compatibility',
    excerpt: 'Access full functionality on the go with our fully optimized mobile platform.'
  },
  {
    icon: Mail,
    title: 'Advanced Security Measures',
    excerpt: 'Your data’s safety is paramount with our top-tier, comprehensive security protocols.'
  },
  {
    icon: FileImage,
    title: '24/7 Availability',
    excerpt: 'Enjoy uninterrupted service with our reliable and always accessible [product/service].'
  },
]

export function FeaturesSection1({className}: {className?: string}) {
  return (
    <section className={cn(className)}>
      <div className="container">
        <SectionTitle
          title="Key Features of [Company/Product Name]"
          subtitle="Built with innovation and precision, discover the standout features that make [Company/Product Name] a leader in [Industry/Field]:"
          className="text-center"
        />
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 py-5">
          <div className="flex justify-center items-center">
            <Image src="https://place-hold.it/550x500" alt="feature1-image" width={0} height={0} className="w-full" />
          </div>
          <div className="flex items-center">
            <div className="xl:max-w-[80%] mx-auto">
            <ul className="space-y-5">
              {!!featureSet1 && featureSet1.map((item, i) => {
                return (
                  <li key={i}>
                    <div className="flex gap-4">
                      <div>{item.icon ? <item.icon className="text-accent" size="40"/> : null}</div>
                      <div>
                        <h4 className="text-xl font-bold">{item.title}</h4>
                        <p>{item.excerpt}</p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 py-5 pt-16">
          <div className="flex items-center">
            <div className="xl:max-w-[80%] mx-auto">
              <ul className="space-y-5">
                {!!featureSet2 && featureSet2.map((item, i) => {
                  return (
                    <li key={i}>
                      <div className="flex gap-4">
                        <div>{item.icon ? <item.icon className="text-accent" size="40"/> : null}</div>
                        <div>
                          <h4 className="text-xl font-bold">{item.title}</h4>
                          <p>{item.excerpt}</p>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image src="https://place-hold.it/550x500" alt="feature1-image" width={0} height={0} className="w-full" />
          </div>
        </div>
        </div>

    </section>
  )
}
