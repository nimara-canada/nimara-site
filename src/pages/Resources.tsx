import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, FileSpreadsheet, ClipboardCheck, FolderOpen, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionPreferencesProvider, useMotionPreferences, DROPBOX_EASING_CSS } from "@/hooks/use-scroll-reveal";
import { TYPEFORM_HEALTH_CHECK_URL, TYPEFORM_GRANT_TRACKER_URL } from "@/constants/urls";

// Scroll reveal wrapper component
function ScrollRevealBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
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

// Resource card component
interface ResourceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  tags: string;
  buttonText: string;
  buttonLink: string;
  smallLinkText?: string;
  smallLinkUrl?: string;
}

function ResourceCard({ icon: Icon, title, description, tags, buttonText, buttonLink, smallLinkText, smallLinkUrl }: ResourceCardProps) {
  const cardVariants = {
    initial: { y: 0, scale: 1 },
    hover: { y: -6, scale: 1.01, transition: { duration: 0.3 } },
  };

  const isExternal = buttonLink.startsWith('http');

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="bg-card rounded-3xl border border-border p-8 md:p-10 shadow-soft h-full flex flex-col"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
        {description}
      </p>
      
      <p className="text-sm text-muted-foreground/70 mb-6">
        {tags}
      </p>
      
      <div className="space-y-3">
        {isExternal ? (
          <Button asChild className="w-full group">
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              {buttonText}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        ) : (
          <Button asChild className="w-full group">
            <Link to={buttonLink}>
              {buttonText}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        )}
        
        {smallLinkText && smallLinkUrl && (
          <Link 
            to={smallLinkUrl}
            className="block text-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {smallLinkText}
          </Link>
        )}
      </div>
    </motion.div>
  );
}

// Service card component
interface ServiceCardProps {
  title: string;
  timeline: string;
  buttonText: string;
  buttonLink: string;
}

function ServiceCard({ title, timeline, buttonText, buttonLink }: ServiceCardProps) {
  const cardVariants = {
    initial: { y: 0, scale: 1 },
    hover: { y: -4, scale: 1.01, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="bg-card rounded-2xl border border-border p-8 shadow-soft text-center"
    >
      <h3 className="text-xl font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        {timeline}
      </p>
      <Button asChild variant="secondary" className="w-full group">
        <Link to={buttonLink}>
          {buttonText}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </motion.div>
  );
}

function ResourcesContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { reducedMotion } = useMotionPreferences();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const revealStyle = (delay: number = 0): React.CSSProperties =>
    reducedMotion ? { opacity: 1, transform: 'none' } : {
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 700ms ${DROPBOX_EASING_CSS} ${delay}ms, transform 700ms ${DROPBOX_EASING_CSS} ${delay}ms`,
    };

  const resources: ResourceCardProps[] = [
    {
      icon: FileSpreadsheet,
      title: "$0 Uncounted Grant Tracker",
      description: "Track spending, receipts, and what each expense was for — in one place.",
      tags: "Google Sheets • Best for active grants",
      buttonText: "Get the tracker",
      buttonLink: TYPEFORM_GRANT_TRACKER_URL,
    },
    {
      icon: ClipboardCheck,
      title: "Free Organization Check (10 min)",
      description: "A quick check to show what's stable, what's at risk, and what to fix first.",
      tags: "10 minutes • Instant results",
      buttonText: "Start the free check",
      buttonLink: TYPEFORM_HEALTH_CHECK_URL,
    },
    {
      icon: FolderOpen,
      title: "Simple Folder Setup (Guide)",
      description: "A clean folder structure you can copy — so files stop living everywhere.",
      tags: "Google Drive • 10-minute setup",
      buttonText: "Copy the folder setup",
      buttonLink: TYPEFORM_GRANT_TRACKER_URL,
    },
  ];

  const quickTips = [
    "Keep one place for receipts (don't let them live in texts).",
    "Write a one-line note for every expense (what it was for).",
    "Set a weekly 15-minute check so reporting doesn't pile up.",
  ];

  const faqItems = [
    { q: "Do I need new software?", a: "No. We work inside tools you already use." },
    { q: "Is this only for one grant?", a: "No. Set it up once and reuse it." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Free Nonprofit Tools | Grant Proof Tracker | Nimara</title>
        <meta name="description" content="Free tools for nonprofits. Download the Grant Proof Tracker and learn what documentation funders actually need." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nimara.ca/resources" />
        <meta property="og:title" content="Free Nonprofit Tools | Grant Proof Tracker | Nimara" />
        <meta property="og:description" content="Free tools for nonprofits. Download the Grant Proof Tracker and learn what documentation funders actually need." />
        <meta property="og:url" content="https://nimara.ca/resources" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-3 focus:rounded-lg focus:bg-primary focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <main id="main">
        {/* HERO */}
        <section className="min-h-[70vh] bg-secondary-background text-white relative overflow-hidden flex items-center">
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
            <h1 
              style={revealStyle(100)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6"
            >
              Free tools for nonprofits
            </h1>
            
            <p 
              style={revealStyle(200)}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Simple tools to help you track grants, organize files, and make reporting easier.
            </p>
            
            <div style={revealStyle(300)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button asChild size="lg" className="group">
                <a href="#free-tools">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <a
                href="mailto:hello@nimara.ca"
                className="text-white/60 hover:text-white font-medium transition-colors px-6 py-3"
              >
                Prefer email? hello@nimara.ca
              </a>
            </div>
          </div>
        </section>

        {/* START WITH ONE */}
        <section id="free-tools" className="py-24 md:py-32 bg-background scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <ScrollRevealBlock delay={0}>
              <div className="text-center mb-14">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                  Start with one
                </p>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Pick the tool that matches your biggest pain today.
                </p>
              </div>
            </ScrollRevealBlock>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, idx) => (
                <ScrollRevealBlock key={idx} delay={100 + idx * 100}>
                  <ResourceCard {...resource} />
                </ScrollRevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* QUICK TIPS */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <ScrollRevealBlock delay={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary text-center mb-4">
                Quick tips
              </p>
              <p className="text-center text-muted-foreground mb-10">
                So the tools actually work
              </p>
            </ScrollRevealBlock>
            
            <div className="space-y-5">
              {quickTips.map((tip, idx) => (
                <ScrollRevealBlock key={idx} delay={100 + idx * 100}>
                  <div className="flex items-start gap-4 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg">{tip}</p>
                  </div>
                </ScrollRevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* WANT THIS SET UP */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollRevealBlock delay={0}>
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Want this set up for your team?
                </h2>
                <p className="text-lg text-muted-foreground">
                  If you want a system that sticks, we can install it.
                </p>
              </div>
            </ScrollRevealBlock>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollRevealBlock delay={100}>
                <ServiceCard 
                  title="Grant Setup"
                  timeline="About 2 weeks"
                  buttonText="See Grant Setup"
                  buttonLink="/grant-setup"
                />
              </ScrollRevealBlock>
              <ScrollRevealBlock delay={200}>
                <ServiceCard 
                  title="Organization Check"
                  timeline="2–4 weeks"
                  buttonText="See Organization Check"
                  buttonLink="/organization-check"
                />
              </ScrollRevealBlock>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-2xl mx-auto px-6 lg:px-8">
            <ScrollRevealBlock delay={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary text-center mb-10">
                Questions
              </p>
            </ScrollRevealBlock>
            
            <ScrollRevealBlock delay={100}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, idx) => (
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

        {/* FINAL CTA */}
        <section className="py-24 md:py-32 bg-secondary-background text-white relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8 text-center">
            <ScrollRevealBlock delay={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Not sure what to pick?
              </h2>
              <p className="text-lg text-white/60 mb-10">
                Start here and we'll point you to the best next step.
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/start-here">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <a
                  href={TYPEFORM_HEALTH_CHECK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white font-medium transition-colors"
                >
                  Try the free check →
                </a>
                
                <a
                  href="mailto:hello@nimara.ca"
                  className="text-sm text-white/40 hover:text-white/60 transition-colors mt-2"
                >
                  Prefer email? hello@nimara.ca
                </a>
              </div>
            </ScrollRevealBlock>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function Resources() {
  return (
    <MotionPreferencesProvider>
      <ResourcesContent />
    </MotionPreferencesProvider>
  );
}
