import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, FileSpreadsheet, FolderCheck, FileText, CheckCircle2, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useMotionPreferences, DROPBOX_EASING_CSS } from "@/hooks/use-scroll-reveal";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const { reducedMotion } = useMotionPreferences();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContent = () => {
    document.getElementById("whats-inside")?.scrollIntoView({ behavior: "smooth" });
  };

  // Reveal animation styles with Dropbox easing
  const revealStyle = (delay: number = 0): React.CSSProperties => 
    reducedMotion ? { opacity: 1, transform: 'none' } : {
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 700ms ${DROPBOX_EASING_CSS} ${delay}ms, transform 700ms ${DROPBOX_EASING_CSS} ${delay}ms`,
    };

  // Card hover animation
  const cardVariants = {
    initial: { y: 0, scale: 1 },
    hover: { y: -8, scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <div className="space-y-0">
      {/* 1) HERO - Dark premium section like homepage */}
      <section className="min-h-[85vh] bg-secondary-background text-white relative overflow-hidden flex items-center">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
          {/* Free badge */}
          <div style={revealStyle(0)}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-accent/20 text-accent border border-accent/20 mb-8">
              <Sparkles className="w-4 h-4" />
              Free tool
            </span>
          </div>
          
          <h1 
            style={revealStyle(100)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6"
          >
            Stop scrambling for proof.
          </h1>
          
          <p 
            style={revealStyle(200)}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            This free tracker helps you collect spending proof and deliverables as you go — so reporting is fast and stress-free.
          </p>
          
          {/* CTAs */}
          <div style={revealStyle(300)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={typeformUrl}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary-background group"
            >
              Get the free tracker
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button
              onClick={scrollToContent}
              className="flex items-center gap-2 text-white/60 hover:text-white font-medium transition-colors h-14 px-6 group"
            >
              See what's inside
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
          
          {/* Trust line */}
          <p style={revealStyle(400)} className="text-sm text-white/40">
            Takes 30 seconds • Free • Works in Excel or Google Sheets
          </p>
        </div>
      </section>

      {/* 2) WHO IT'S FOR */}
      <section id="whats-inside" className="py-24 md:py-32 bg-background scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollRevealBlock delay={0}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary text-center mb-4">
              Who this is for
            </p>
          </ScrollRevealBlock>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              "Newer nonprofits building good habits",
              "Teams managing a grant with tight rules",
              "Anyone tired of last-minute reporting panic",
            ].map((text, idx) => (
              <ScrollRevealBlock key={idx} delay={100 + idx * 100}>
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  className="bg-card rounded-2xl border border-border p-8 text-center shadow-soft cursor-default"
                >
                  <p className="text-foreground font-medium text-lg">{text}</p>
                </motion.div>
              </ScrollRevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* 3) WHAT YOU GET */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollRevealBlock delay={0}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary text-center mb-4">
              What you get
            </p>
          </ScrollRevealBlock>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
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
              <ScrollRevealBlock key={idx} delay={100 + idx * 150}>
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  className="bg-card rounded-3xl border border-border p-10 shadow-soft cursor-default h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-8">
                    <card.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {card.text}
                  </p>
                </motion.div>
              </ScrollRevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* 4) WHY IT MATTERS */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollRevealBlock delay={0}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Why this matters
            </p>
          </ScrollRevealBlock>
          
          <div className="mt-12 space-y-5">
            {[
              "Avoid missing receipts and explanations",
              "Reduce audit risk",
              "Make reporting faster",
              "Keep your team aligned",
            ].map((item, idx) => (
              <ScrollRevealBlock key={idx} delay={100 + idx * 100}>
                <div className="flex items-center justify-center gap-4 text-foreground text-lg md:text-xl">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  {item}
                </div>
              </ScrollRevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* 5) HOW TO USE IT */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollRevealBlock delay={0}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary text-center mb-4">
              How to use it
            </p>
          </ScrollRevealBlock>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-14">
            {[
              { step: "1", text: "Download the tracker" },
              { step: "2", text: "Update it weekly (5 minutes)" },
              { step: "3", text: "Use it to build your proof pack when reporting is due" },
            ].map((item, idx) => (
              <ScrollRevealBlock key={idx} delay={100 + idx * 150}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25">
                    {item.step}
                  </div>
                  <p className="text-foreground font-medium text-lg leading-relaxed max-w-xs mx-auto">
                    {item.text}
                  </p>
                </div>
              </ScrollRevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* 6) CALLOUT BAND */}
      <section className="py-20 md:py-28 bg-secondary-background text-white relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollRevealBlock delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Built for real nonprofit work
            </h2>
            <p className="text-xl text-white/60">
              Simple enough to start today. Strong enough to use all year.
            </p>
          </ScrollRevealBlock>
        </div>
      </section>

      {/* 7) GET THE TRACKER */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-md mx-auto px-6 lg:px-8">
          <ScrollRevealBlock delay={0}>
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="bg-card rounded-3xl border border-border p-10 md:p-12 shadow-lg text-center"
            >
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary border border-primary/10">
                  <Sparkles className="w-3.5 h-3.5" />
                  Free
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Get the free tracker
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We'll email it to you.
              </p>
              
              <Button
                asChild
                size="lg"
                className="w-full h-16 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <a href={typeformUrl} className="flex items-center justify-center gap-3">
                  Get the free tracker
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <p className="text-sm text-muted-foreground mt-6">
                No spam. Unsubscribe anytime.
              </p>
            </motion.div>
          </ScrollRevealBlock>
        </div>
      </section>

      {/* 8) FAQ */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <ScrollRevealBlock delay={0}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary text-center mb-12">
              Questions
            </p>
          </ScrollRevealBlock>
          
          <ScrollRevealBlock delay={100}>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "Is it really free?", a: "Yes. Free." },
                { q: "Will this work for any grant?", a: "Yes. Use it for most grants that require proof of spending and deliverables." },
                { q: "Do I need special software?", a: "No. Excel or Google Sheets." },
                { q: "What happens after I submit?", a: "You get the tracker by email." },
              ].map((item, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`faq-${idx}`} 
                  className="bg-card rounded-2xl border border-border px-8 shadow-soft data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-lg font-medium text-foreground hover:no-underline py-6">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollRevealBlock>
        </div>
      </section>
    </div>
  );
}

// Scroll reveal wrapper component
function ScrollRevealBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const { reducedMotion } = useMotionPreferences();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const style: React.CSSProperties = reducedMotion
    ? { opacity: 1, transform: 'none' }
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 700ms ${DROPBOX_EASING_CSS} ${delay}ms, transform 700ms ${DROPBOX_EASING_CSS} ${delay}ms`,
      };

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
}
