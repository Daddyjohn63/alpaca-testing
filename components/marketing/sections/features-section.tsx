import Image from "next/image";
import { SectionTitle } from "../section-title";
import { cn } from "@/lib/utils";
import { FileCode, Database, User, ShoppingCart, Mail, FileImage } from "lucide-react";

const featureSet1 = [

  {
    icon: FileCode,
    title: 'App (NextJS / React)',
    excerpt: 'Next.js is a React framework that supports server-side rendering and static site generation for enhanced web performance and features.'
  },
  {
    icon: Database,
    title: 'Database (Postgres / Prisma)',
    excerpt: 'PostgreSQL is a robust, open-source relational database, and Prisma is an ORM that streamlines database workflows in app development.'
  },
  {
    icon: User,
    title: 'Authentication (Next Auth)',
    excerpt: 'NextAuth.js is an open-source library that simplifies integrating secure authentication and third-party logins into web applications.'
  },
]
const featureSet2 = [

  {
    icon: ShoppingCart,
    title: 'Payments (Stripe)',
    excerpt: 'Stripe offers a user-friendly platform for secure online payments and efficient billing management.'
  },
  {
    icon: Mail,
    title: 'Mail (Mailgun)',
    excerpt: 'Mailgun is an email automation service for easy sending, receiving, and tracking of emails, boosting communication efficiency.'
  },
  {
    icon: FileImage,
    title: 'Style (Tailwind & ShadCN)',
    excerpt: 'Tailwind CSS is a utility-first framework that simplifies responsive design and accelerates styling directly within HTML.'
  },
]

export function FeaturesSection({className}: {className?: string}) {
  return (
    <section className={cn(className)}>
      <div className="container">
        <SectionTitle
          title="Everything You Need To Get Started!"
          subtitle="The Alpaca Stack: Perfectly balancing speed, simplicity, scalability, and affordability to help you achieve rapid growth without breaking the bank."
          className="text-center"
        />
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 py-5">
          <div className="flex justify-center items-center">
            <Image src="/features1-img.png" alt="feature1-image" width={560} height={440} />
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
            <Image src="/features2-img.png" alt="feature1-image" width={560} height={440} />
          </div>
        </div>
        </div>

    </section>
  )
}
