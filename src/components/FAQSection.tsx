import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fast will I get quotes?",
    answer: "Usually within 3 business days of finalizing your brief. If we deliver fewer than 2 proposals, you get a $500 credit toward your first project.",
  },
  {
    question: "Who are the consultants? Can I see their background?",
    answer: "All Nimara consultants are vetted, experienced, and Canada-based. Most have 3–10+ years of nonprofit or public-sector experience. Once matched, you'll see their profiles and proposed approach before you decide.",
  },
  {
    question: "Do you only work with Canadian nonprofits?",
    answer: "Yes. We're built for the Canadian nonprofit and public-interest sector. We understand CRA rules, funding structures, bilingual needs, and provincial differences.",
  },
  {
    question: "What does Nimara do vs. the consultant?",
    answer: "We: Scope your project, Match you to the right consultant(s), Oversee delivery, Manage payments + secure records. The consultant does the hands-on work. You focus on results — we handle the rest.",
  },
  {
    question: "What if I'm not ready to start right away?",
    answer: "That's fine. Submit your brief now, and we'll keep your quotes on file. You can also join the waitlist for our Fundability Packages launching Nov 5, 2025.",
  },
  {
    question: "Can I get a quote for more than one area?",
    answer: "Right now we focus on one area per quote. If you need multiple areas (ex: finance + HR + fundraising), you'll want to join the Fundability waitlist — bundled packages launch soon.",
  },
  {
    question: "Do you work with very small or grassroots orgs?",
    answer: "Yes — especially if you're building structure, applying for funding, or professionalizing systems. We match based on your stage and budget, not just your size.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl text-center">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left hover:text-primary" aria-expanded="false" aria-controls={`faq-panel-${index}`}>
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
