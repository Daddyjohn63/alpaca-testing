import { cn } from "@/lib/utils"
import { SectionTitle } from "@/components/section-title"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQs = [
    {
        question: "How do I get started with [Product/Service]?",
        answer: "Getting started is easy! Simply sign up through our website, and you'll gain immediate access to all the features included in your chosen plan. If you need any guidance, our support team is available 24/7 to help you set up and make the most of [Product/Service]."
    },
    {
        question: "How do I get started with [Product/Service]?",
        answer: "Getting started is easy! Simply sign up through our website, and you'll gain immediate access to all the features included in your chosen plan. If you need any guidance, our support team is available 24/7 to help you set up and make the most of [Product/Service]."
    },
    {
        question: "How do I get started with [Product/Service]?",
        answer: "Getting started is easy! Simply sign up through our website, and you'll gain immediate access to all the features included in your chosen plan. If you need any guidance, our support team is available 24/7 to help you set up and make the most of [Product/Service]."
    },
    {
        question: "How do I get started with [Product/Service]?",
        answer: "Getting started is easy! Simply sign up through our website, and you'll gain immediate access to all the features included in your chosen plan. If you need any guidance, our support team is available 24/7 to help you set up and make the most of [Product/Service]."
    },
    {
        question: "How do I get started with [Product/Service]?",
        answer: "Getting started is easy! Simply sign up through our website, and you'll gain immediate access to all the features included in your chosen plan. If you need any guidance, our support team is available 24/7 to help you set up and make the most of [Product/Service]."
    },
]


export function FAQSection({className}: {className?:string}) {
  return (
    <section id="testimonials2-section" className={cn(className)}>
      <div className="container">

        <SectionTitle 
          title="Frequently Asked Questions"
          subtitle="Find answers to your questions about using [Product / Service]"
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
