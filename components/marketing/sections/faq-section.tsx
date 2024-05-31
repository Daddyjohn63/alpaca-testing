import { cn } from "@/lib/utils"
import { SectionTitle } from "../section-title"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQs = [
    {
        question: "What is included in the boilerplate template?",
        answer: "The boilerplate includes a pre-configured Next.js 14 setup with NextAuth for authentication, Prisma as an ORM for PostgreSQL, Tailwind CSS for styling, and Shadcn for component design. This setup provides a robust foundation for building scalable and modern web applications."
    },
    {
        question: "How do I get started with the boilerplate template?",
        answer: "To get started, simply clone the repository, install the dependencies using npm or yarn, and follow the README instructions to set up your environment variables and database configurations. This will set up the local development environment for you."
    },
    {
        question: "Can I use this boilerplate for commercial projects?",
        answer: "Yes, the boilerplate is designed for both personal and commercial use. It provides a strong starting point to accelerate development of your Next.js applications, saving you time on configuration and setup."
    },
    {
        question: "Does the boilerplate support mobile-responsive designs?",
        answer: "Absolutely! The integration of Tailwind CSS allows for responsive design out of the box. You can easily adjust styles for different screen sizes using Tailwind's utility classes."
    },
    {
        question: "How is authentication handled in the boilerplate?",
        answer: "Authentication is managed through NextAuth, which supports various authentication providers and strategies. The setup includes examples of how to integrate popular providers like Google, Facebook, and GitHub."
    },
    {
        question: "What database can I use with this boilerplate?",
        answer: "This boilerplate is configured with Prisma ORM, which is set up to work with PostgreSQL. However, Prisma supports multiple databases, so you can configure it to work with others such as MySQL or SQLite if needed."
    },
    {
        question: "Is there support available if I run into issues?",
        answer: "For support, you can refer to the documentation provided with the boilerplate or submit issues directly on the GitHub repository. Community support may also be available through forums or community channels."
    },
]


export function FAQSection({className}: {className?:string}) {
  return (
    <section id="testimonials2-section" className={cn(className)}>
      <div className="container">

        <SectionTitle 
          title="Frequently Asked Questions"
          subtitle="Find answers to your questions about using Alpacastack."
          className="text-center"
        />
        <Accordion type="single" collapsible className="max-w-[650px] mx-auto">
          {FAQs.map((faq, i) => {
            return (
              <AccordionItem key={i} value={i.toString()}>
                <AccordionTrigger className="text-lg text-left pr-3 hover:text-primary">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-md leading-normal pr-3">{faq.answer}</AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>

      </div>
    </section>
  )
}
