import React from "react";
import { ArrowRight, ChevronDown, FileSpreadsheet, FolderCheck, FileText, Clock, Users, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface ResourceSectionProps {
  title: string;
  subhead: string;
  bullets: string[];
  typeformUrl: string;
  calendlyUrl?: string;
}

export function ResourceSection({
  typeformUrl,
}: ResourceSectionProps) {
  const scrollToContent = () => {
    document.getElementById("whats-inside")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1) HERO */}
      <section className="pt-8 md:pt-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          {/* Free badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary border border-primary/10 mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            Free tool
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
            Stop scrambling for proof.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            This free tracker helps you collect spending proof and deliverables as you go — so reporting is fast and stress-free.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <a href={typeformUrl} className="flex items-center gap-2">
                Get the free tracker
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <button
              onClick={scrollToContent}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors h-14 px-6"
            >
              See what's inside
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          
          {/* Trust line */}
          <p className="text-sm text-muted-foreground">
            Takes 30 seconds • Free • Works in Excel or Google Sheets
          </p>
        </div>
      </section>

      {/* 2) WHO IT'S FOR */}
      <section id="whats-inside" className="scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary text-center mb-10">
            Who this is for
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Newer nonprofits building good habits",
              "Teams managing a grant with tight rules",
              "Anyone tired of last-minute reporting panic",
            ].map((text, idx) => (
              <div
                key={idx}
                className="bg-card rounded-2xl border border-border/50 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-foreground font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) WHAT YOU GET */}
      <section>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary text-center mb-12">
            What you get
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: FileSpreadsheet,
                title: "One simple tracker",
                text: "Log spending, link receipts, and track deliverables in one place.",
              },
              {
                icon: FolderCheck,
                title: "Proof-ready structure",
                text: "Keeps your evidence organized the way funders expect.",
              },
              {
                icon: FileText,
                title: "Cleaner reporting",
                text: "When it's time to report, you're not hunting for files.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-card rounded-3xl border border-border/50 p-8 shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) WHY IT MATTERS */}
      <section>
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-10">
            Why this matters
          </h2>
          
          <ul className="space-y-4">
            {[
              "Avoid missing receipts and explanations",
              "Reduce audit risk",
              "Make reporting faster",
              "Keep your team aligned",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center justify-center gap-3 text-foreground/90 text-lg">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5) HOW TO USE IT */}
      <section>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary text-center mb-12">
            How to use it
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", text: "Download the tracker" },
              { step: "2", text: "Update it weekly (5 minutes)" },
              { step: "3", text: "Use it to build your proof pack when reporting is due" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground text-xl font-bold flex items-center justify-center mx-auto mb-5">
                  {item.step}
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6) CALLOUT BAND */}
      <section className="bg-gradient-to-br from-secondary/80 to-secondary/40 border-y border-border/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Built for real nonprofit work
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple enough to start today. Strong enough to use all year.
          </p>
        </div>
      </section>

      {/* 7) GET THE TRACKER */}
      <section>
        <div className="max-w-md mx-auto px-6 lg:px-8">
          <div className="bg-card rounded-3xl border border-border/50 p-8 md:p-10 shadow-lg text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Get the free tracker
            </h2>
            <p className="text-muted-foreground mb-8">
              We'll email it to you.
            </p>
            
            <Button
              asChild
              size="lg"
              className="w-full h-14 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group mb-6"
            >
              <a href={typeformUrl} className="flex items-center justify-center gap-2">
                Get the free tracker
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <p className="text-xs text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* 8) FAQ */}
      <section className="pb-8">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary text-center mb-10">
            Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="free" className="bg-card rounded-2xl border border-border/50 px-6 shadow-sm">
              <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline py-5">
                Is it really free?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                Yes. Free.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="grants" className="bg-card rounded-2xl border border-border/50 px-6 shadow-sm">
              <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline py-5">
                Will this work for any grant?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                Yes. Use it for most grants that require proof of spending and deliverables.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="software" className="bg-card rounded-2xl border border-border/50 px-6 shadow-sm">
              <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline py-5">
                Do I need special software?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                No. Excel or Google Sheets.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="submit" className="bg-card rounded-2xl border border-border/50 px-6 shadow-sm">
              <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline py-5">
                What happens after I submit?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                You get the tracker by email.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
