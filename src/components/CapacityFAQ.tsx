import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_BOOKING_URL } from "@/constants/urls";

const faqs = [
  {
    question: "What if it doesn't work?",
    answer: "If we don't deliver what we promised, you get your money back. No fine print. No hoops. We only win when your systems actually work."
  },
  {
    question: "How do I know which areas I need?",
    answer: "Take the Free Health Check. It takes 10 minutes and shows you where your gaps are. Or book a Fit Call and we'll figure it out together."
  },
  {
    question: "Can I start small and add more later?",
    answer: "Yes. Pick at least 2 areas to start. Most clients come back for more once those are solid. No pressure to do everything at once."
  },
  {
    question: "Can this be funded by a grant?",
    answer: "Yes. We invoice as capacity building, which is eligible under most operational and capacity grants. Many clients use grant funding to cover part or all of the cost."
  },
  {
    question: "Will you judge us for being messy?",
    answer: "No. We've seen it all. Most nonprofits are messy — not because they don't care, but because no one showed them what to build. No shame. Just solutions."
  }
];

export const CapacityFAQ = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F8F9FC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#6945D8] mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#202654] mb-4">
              Questions you might have
            </h2>
            <p className="text-lg text-[#4A4A4A]">
              Honest answers. No surprises.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-100 rounded-lg px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-[#202654] font-semibold text-lg py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#4A4A4A] text-base pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Guarantee Block */}
          <div className="mt-16 md:mt-20 bg-[#ACFCE3]/15 border-l-4 border-[#ACFCE3] rounded-lg p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-[#ACFCE3]/30 flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-[#202654]" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-[#202654] mb-3">
                  Our promise
                </h3>
                <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed mb-6">
                  If we don't deliver what we promised, you get your money back. No fine print. No hoops. We only win when your systems actually work.
                </p>
                <Button 
                  asChild
                  className="bg-[#6945D8] hover:bg-[#5835C8] text-white font-semibold px-6 py-3 h-auto rounded-lg"
                >
                  <a href={CALENDLY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book a 20-min Fit Call →
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
