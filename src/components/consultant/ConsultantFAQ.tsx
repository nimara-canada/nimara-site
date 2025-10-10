import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get matched?",
    answer: "We route briefs by focus area, fit, and availability."
  },
  {
    question: "What's in the proposal format?",
    answer: "Price, timeline, outcomes, \"done\" checklist, assumptions."
  },
  {
    question: "Who owns client comms?",
    answer: "A Nimara PM coordinates; you focus on delivery."
  },
  {
    question: "How is payment handled?",
    answer: "On-time, net-15 after acceptance and handoff."
  },
  {
    question: "Do you require exclusivity?",
    answer: "No—just honest availability and conflict checks."
  },
  {
    question: "Where is data stored?",
    answer: "In Canada, with records retained 7 years."
  }
];

export const ConsultantFAQ = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
          Frequently asked questions
        </h2>
        
        <p className="text-center text-muted-foreground mb-12">
          Everything you need to know about joining our founding bench.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
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
