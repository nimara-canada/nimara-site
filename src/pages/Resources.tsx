import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, FileSpreadsheet, ClipboardCheck, FolderOpen, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
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

// Premium floating card visual component
interface VisualCardProps {
  color: string;
  lineColor: string;
  statNumber: string;
  statLabel: string;
  substat?: string;
  badge?: { text: string; color: 'green' | 'purple' | 'blue' };
  isInView: boolean;
}

function PremiumVisualCard({ color, lineColor, statNumber, statLabel, substat, badge, isInView }: VisualCardProps) {
  const badgeColors = {
    green: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full max-w-md mx-auto"
    >
      {/* Main colored panel */}
      <div 
        className="relative rounded-3xl overflow-hidden aspect-[4/3]"
        style={{ backgroundColor: color }}
      >
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Geometric lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke={lineColor} strokeWidth="1" opacity="0.3" />
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke={lineColor} strokeWidth="1" opacity="0.3" />
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke={lineColor} strokeWidth="1" opacity="0.2" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke={lineColor} strokeWidth="1" opacity="0.2" />
        </svg>

        {/* Floating white card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-6 min-w-[180px]"
        >
          {badge && (
            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border mb-3 ${badgeColors[badge.color]}`}>
              {badge.text}
            </span>
          )}
          <div className="text-4xl font-bold text-primary mb-1">{statNumber}</div>
          <div className="text-sm font-medium text-muted-foreground">{statLabel}</div>
          {substat && (
            <div className="text-xs text-muted-foreground/70 mt-1">{substat}</div>
          )}
        </motion.div>
      </div>
    </motion.div>
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

// Service card component with premium visual
interface ServiceCardProps {
  title: string;
  timeline: string;
  buttonText: string;
  buttonLink: string;
  visual: {
    color: string;
    lineColor: string;
    statNumber: string;
    statLabel: string;
    substat?: string;
    badge?: { text: string; color: 'green' | 'purple' | 'blue' };
  };
}

function ServiceCard({ title, timeline, buttonText, buttonLink, visual }: ServiceCardProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-6">
      <PremiumVisualCard {...visual} isInView={isInView} />
      <div className="text-center">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {timeline}
        </p>
        <Button asChild variant="secondary" className="group">
          <Link to={buttonLink}>
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function ResourcesContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { reducedMotion } = useMotionPreferences();
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

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

  const scrollToContent = () => {
    document.getElementById('free-tools')?.scrollIntoView({ behavior: 'smooth' });
  };

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
        {/* HERO - Dark navy with grid pattern */}
        <section 
          ref={heroRef}
          className="min-h-screen bg-secondary-background text-white relative overflow-hidden flex items-center"
        >
          {/* Grid pattern */}
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

          <motion.div 
            style={reducedMotion ? {} : { opacity: heroOpacity, y: heroY }}
            className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center"
          >
            {/* Badge */}
            <div style={revealStyle(0)}>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-accent/20 text-accent border border-accent/20 mb-8">
                <Sparkles className="w-4 h-4" />
                Free resources
              </span>
            </div>
            
            <h1 
              style={revealStyle(100)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6"
            >
              Tools that make <span className="text-accent">nonprofit work</span> easier
            </h1>
            
            <p 
              style={revealStyle(200)}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12"
            >
              Simple tools to help you track grants, organize files, and make reporting easier — so you can focus on your mission.
            </p>
            
            {/* CTAs */}
            <div style={revealStyle(300)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button 
                size="lg" 
                className="group h-14 px-8 text-base"
                onClick={scrollToContent}
              >
                Browse Tools
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <a
                href="mailto:hello@nimara.ca"
                className="text-white/60 hover:text-white font-medium transition-colors px-6 py-3"
              >
                Prefer email? hello@nimara.ca
              </a>
            </div>
            
            {/* Trust indicators */}
            <p style={revealStyle(400)} className="text-sm text-white/40">
              No signup walls • Works with Google Sheets & Excel • Free forever
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            style={reducedMotion ? {} : { opacity: heroOpacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToContent}
              className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors"
              animate={reducedMotion ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ChevronDown className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </section>

        {/* START WITH ONE - Cream background */}
        <section id="free-tools" className="py-24 md:py-32 scroll-mt-20" style={{ backgroundColor: '#faf8f5' }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <ScrollRevealBlock delay={0}>
              <div className="text-center mb-14">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                  Start with one
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Pick the tool that matches your <span className="text-primary">biggest pain</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Each one solves a real problem. Start where it hurts most.
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

        {/* QUICK TIPS - White background */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <ScrollRevealBlock delay={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary text-center mb-4">
                Quick tips
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
                So the tools actually <span className="text-primary">work</span>
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
                Small habits that make a big difference
              </p>
            </ScrollRevealBlock>
            
            <div className="space-y-5">
              {quickTips.map((tip, idx) => (
                <ScrollRevealBlock key={idx} delay={100 + idx * 100}>
                  <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-2xl border border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-lg text-foreground leading-relaxed">{tip}</p>
                  </div>
                </ScrollRevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* WANT THIS SET UP - Cream background with premium visuals */}
        <section className="py-24 md:py-32" style={{ backgroundColor: '#faf8f5' }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <ScrollRevealBlock delay={0}>
              <div className="text-center mb-14">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                  Want help?
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Want this set up <span className="text-primary">for your team?</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  If you want a system that sticks, we can install it.
                </p>
              </div>
            </ScrollRevealBlock>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScrollRevealBlock delay={100}>
                <ServiceCard 
                  title="Grant Setup"
                  timeline="About 2 weeks"
                  buttonText="See Grant Setup"
                  buttonLink="/grant-setup"
                  visual={{
                    color: 'hsl(262, 60%, 88%)',
                    lineColor: 'hsl(262, 50%, 50%)',
                    statNumber: '2',
                    statLabel: 'weeks',
                    substat: 'Full system installed',
                    badge: { text: 'Most popular', color: 'purple' },
                  }}
                />
              </ScrollRevealBlock>
              <ScrollRevealBlock delay={200}>
                <ServiceCard 
                  title="Organization Check"
                  timeline="2–4 weeks"
                  buttonText="See Organization Check"
                  buttonLink="/organization-check"
                  visual={{
                    color: 'hsl(160, 60%, 85%)',
                    lineColor: 'hsl(160, 50%, 40%)',
                    statNumber: '10+',
                    statLabel: 'areas reviewed',
                    substat: 'Full operations audit',
                    badge: { text: 'Comprehensive', color: 'green' },
                  }}
                />
              </ScrollRevealBlock>
            </div>
          </div>
        </section>

        {/* FAQ - White background */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-2xl mx-auto px-6 lg:px-8">
            <ScrollRevealBlock delay={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary text-center mb-4">
                Questions
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
                Common questions
              </h2>
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

        {/* FINAL CTA - Dark navy with grid */}
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
                Not sure where to start?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let us point you to the <span className="text-accent">best next step</span>
              </h2>
              <p className="text-lg text-white/60 mb-10">
                Take 6 minutes. We'll show you what to focus on first.
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <Button asChild size="lg" className="group h-14 px-8 text-base">
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
