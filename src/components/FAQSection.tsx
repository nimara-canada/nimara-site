import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is requesting quotes free?",
    answer: "Yes. You only pay if you start a project.",
  },
  {
    question: "How is the Nimara fee shown?",
    answer: "As Professional services — Nimara platform & PM oversight on your proposal/budget.",
  },
  {
    question: "What's the fee for single-category work?",
    answer: "Typically 22–28% (minimum $1,250, cap $9,000). It covers brief, PM, acceptance, secure records (kept 7 years), and payments ops.",
  },
  {
    question: "What if my need spans multiple areas?",
    answer: "We can start today as simple single-category work, or you can join the Packages waitlist (launching Nov 1, 2025). Package pricing will be shared at launch.",
  },
  {
    question: "Does this reduce the consultant's rate?",
    answer: "No. The Nimara line is in addition to the consultant's delivery line.",
  },
  {
    question: "How do payments work?",
    answer: "Default milestones 60% kickoff / 30% UAT / 10% close. Consultants are paid net-15 on acceptance.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left font-semibold hover:text-primary" aria-expanded="false" aria-controls={`faq-panel-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent id={`faq-panel-${index}`} className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Need more detail? Email{" "}
            <a href="mailto:hello@nimara.ca" className="text-primary hover:underline">
              hello@nimara.ca
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
