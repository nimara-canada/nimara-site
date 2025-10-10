import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does it cost?",
    answer: "Quotes are free. You'll see price, timeline, and outcomes before you pick.",
  },
  {
    question: "How fast are proposals?",
    answer: "Within 72 hours of scoping. If fewer than 2 arrive, you get a $500 credit.",
  },
  {
    question: "Who are the experts?",
    answer: "Canadian practitioners with relevant wins. We verify references and sample close-outs.",
  },
  {
    question: "What does \"PM oversight\" mean?",
    answer: "A Nimara PM coordinates, tracks the checklist, and keeps delivery and files on track.",
  },
  {
    question: "Where is our data stored?",
    answer: "In Canada. We keep project records 7 years.",
  },
  {
    question: "Do I need a package now?",
    answer: "No. 3 free quotes is best for one area. Packages open Nov 1, 2025 for multi-area work.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
