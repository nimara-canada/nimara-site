import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Employment?",
    answer: "No—independent contractor."
  },
  {
    question: "Do you take a cut of my rate?",
    answer: "No. Your rate is yours. Nimara's PM/platform fee is a separate client line."
  },
  {
    question: "When will I see a brief?",
    answer: "As soon as your category has momentum and the fit is right."
  },
  {
    question: "How do we work?",
    answer: "In the Nimara app with a PM and clear acceptance."
  },
  {
    question: "Payment terms?",
    answer: "Net-15 after acceptance."
  }
];

export const QuickFAQ = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Quick FAQ
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
