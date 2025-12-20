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
    <section id="faq" className="py-24 lg:py-32 bg-muted" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="space-y-10">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-primary">
              FAQ
            </span>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1]">
              Frequently asked questions
            </h2>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-border py-1"
              >
                <AccordionTrigger 
                  className="text-left text-base font-semibold tracking-tight hover:text-primary transition-colors duration-150 py-5" 
                  aria-controls={`faq-panel-${index}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  id={`faq-panel-${index}`} 
                  className="text-base text-body leading-relaxed pb-5"
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Footer */}
          <p className="text-center text-sm text-body-muted pt-4">
            Need more detail? Email{" "}
            <a href="mailto:hello@nimara.ca" className="font-semibold text-primary hover:text-primary/80 transition-colors duration-150">
              hello@nimara.ca
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
