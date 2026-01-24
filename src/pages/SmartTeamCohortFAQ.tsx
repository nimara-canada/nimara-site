import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When does it start?",
    answer: "February 11, 2026. The cohort runs for 6 weeks and ends March 25, 2026."
  },
  {
    question: "How much time do I need each week?",
    answer: "About 4 hours: one 90-minute group call, one 90-minute build session, and about an hour of prep. All online."
  },
  {
    question: "Do I need to buy new software?",
    answer: "No. We build everything in the tools you already have — Google Workspace or Microsoft 365."
  },
  {
    question: "What if I don't have a capacity building grant?",
    answer: "This works for any nonprofit. Capacity building grants just make it easier to pay for. Other grants work too."
  },
  {
    question: "Is this just training?",
    answer: "No. Training gives you knowledge and leaves. We build the actual systems in your actual tools. When we leave, the systems work."
  },
  {
    question: "Why only 15 spots?",
    answer: "We give each organization personal attention. More than 15 means less attention for you."
  },
  {
    question: "Is this covered by my capacity building grant?",
    answer: "Yes. The Nonprofit Machine qualifies as a capacity building expense under most grant programs. You're building operational systems — that's exactly what these grants are for."
  },
  {
    question: "What happens if I miss a session?",
    answer: "All sessions are recorded. You can catch up on your own time, but we recommend attending live for the best experience and to ask questions."
  },
  {
    question: "What's the refund policy?",
    answer: "We offer a full refund if systems aren't successfully installed by Week 6, provided you meet our attendance and document-sharing requirements. It's our 'It Has to Work' Promise."
  }
];

const SmartTeamCohortFAQ = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#0f1629] py-6 px-6">
        <div className="max-w-[1000px] mx-auto">
          <Link 
            to="/smart-team-cohort" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cohort
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20 md:py-28 px-6">
        <div className="max-w-[700px] mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[2px] text-[#6945D8] mb-4">
              Smart Team Cohort
            </p>
            <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold text-[#202654] leading-[1.1] tracking-[-0.02em] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#96A0B5]">
              Everything you need to know about the February 2026 cohort.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-[#E8E8E8]"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-[#202654] py-6 hover:no-underline hover:text-[#6945D8]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#96A0B5] text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-[#96A0B5] mb-6">
              Still have questions?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:hello@nimara.ca" 
                className="text-[#6945D8] font-medium hover:underline"
              >
                Email us at hello@nimara.ca
              </a>
              <span className="hidden sm:block text-[#96A0B5]">or</span>
              <Link 
                to="/smart-team-cohort" 
                className="text-[#6945D8] font-medium hover:underline"
              >
                Apply for February Cohort →
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f1629] py-12 px-6 text-center">
        <p className="text-sm text-[#96A0B5]">
          Starts Feb 11, 2026 • 15 spots • $9,450 CAD
        </p>
      </footer>
    </div>
  );
};

export default SmartTeamCohortFAQ;
