"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqData = [
  {
    id: "item-1",
    question: "What is DigitalOOH and how does it work?",
    answer:
      "DigitalOOH is an AI-powered platform for OOH media owners to manage inventory, campaigns, leads, and revenue in one place. It centralizes operations and automates workflows using intelligent insights.",
  },
  {
    id: "item-2",
    question: "Who can use DigitalOOH?",
    answer:
      "DigitalOOH is designed for media owners, advertising agencies, and marketing teams managing hoardings and DOOH campaigns.",
  },
  {
    id: "item-3",
    question: "How does AI help in DigitalOOH?",
    answer:
      "AI automates inventory tracking, lead scoring, campaign optimization, and financial forecasting, reducing manual work and improving decision-making.",
  },
  {
    id: "item-4",
    question: "Can I manage campaigns end-to-end?",
    answer:
      "Yes, you can manage the complete campaign lifecycle including proposal, planning, execution, and performance analysis from a single dashboard.",
  },
  {
    id: "item-5",
    question: "Is DigitalOOH easy to use?",
    answer:
      "Absolutely. The platform is designed with a simple and intuitive interface. No technical skills are required to get started.",
  },
];

export default function FAQSection() {
  return (
    <section className="max-w-4xl mx-auto py-6 lg:py-12 px-4">
      
      {/* Heading */}
      <div className="flex flex-col gap-4 text-center items-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
          Your Questions <span className="text-orange-400">Answered.</span>
        </h2>

        <p className="text-sm sm:text-base font-medium text-neutral-600 dark:text-neutral-300 max-w-md leading-relaxed">
          Still have questions? Reach out at{" "}
          <span className="font-medium">contact@digitalooh.com</span>
        </p>
      </div>

      {/* Accordion */}
      <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-1">
        {faqData.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border rounded-xl px-6 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all"
          >
            <AccordionTrigger className="text-left text-base sm:text-lg py-2">
              {item.question}
            </AccordionTrigger>

            <AccordionContent className="pb-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}