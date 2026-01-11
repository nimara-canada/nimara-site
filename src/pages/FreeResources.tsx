import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { ArrowRight, ChevronDown, Sparkles, FileText, Lightbulb, FolderCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useMotionPreferences, MotionPreferencesProvider, DROPBOX_EASING_CSS } from "@/hooks/use-scroll-reveal";

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
  icon: React.ElementType;
  badge: string;
  isInView: boolean;
}

function PremiumVisualCard({ color, lineColor, icon: Icon, badge, isInView }: VisualCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full aspect-[4/3]"
    >
      {/* Main colored panel */}
      <div 
        className="relative rounded-3xl overflow-hidden h-full"
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-6 min-w-[160px]"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 mx-auto">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-primary border border-accent/30">
            {badge}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Template card component
interface TemplateCardProps {
  badge: string;
  title: string;
  subtitle?: string;
  href?: string;
  icon: React.ElementType;
  visual: {
    color: string;
    lineColor: string;
  };
}

function TemplateCard({ badge, title, subtitle, href = "#", icon: Icon, visual }: TemplateCardProps) {
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

  const cardVariants = {
    initial: { y: 0, scale: 1 },
    hover: { y: -6, scale: 1.01, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="bg-card rounded-3xl border border-border overflow-hidden shadow-soft"
    >
      {/* Visual header */}
      <div className="p-4">
        <PremiumVisualCard 
          color={visual.color}
          lineColor={visual.lineColor}
          icon={Icon}
          badge={badge}
          isInView={isInView}
        />
      </div>
      
      {/* Content */}
      <div className="p-6 pt-2">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{subtitle}</p>
        )}
        <a
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline group"
          href={href}
        >
          Get template
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

function FreeResourcesContent() {
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

  const scrollToContent = () => {
    document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' });
  };

  const templates: TemplateCardProps[] = [
    {
      badge: "NEWEST",
      title: "Nonprofit Spending Checklist",
      subtitle: "A step‑by‑step list to keep spending clean, compliant, and easy to reconcile.",
      href: "#spending-checklist",
      icon: FolderCheck,
      visual: {
        color: 'hsl(160, 60%, 85%)',
        lineColor: 'hsl(160, 50%, 40%)',
      },
    },
    {
      badge: "RECOMMENDED",
      title: "AI Prompting Starter Kit",
      subtitle: "Plain‑language prompts for email, scopes, board updates, and grant close‑outs.",
      href: "#ai-prompting",
      icon: Lightbulb,
      visual: {
        color: 'hsl(262, 60%, 88%)',
        lineColor: 'hsl(262, 50%, 50%)',
      },
    },
    {
      badge: "RECOMMENDED",
      title: "Grant Close‑Out Binder Template",
      subtitle: "Collect receipts, variance notes, and outcomes in one audit‑ready export.",
      href: "#closeout-binder",
      icon: FileText,
      visual: {
        color: 'hsl(200, 60%, 85%)',
        lineColor: 'hsl(200, 50%, 45%)',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Free Resources - Nimara Templates | Nonprofit Management Tools</title>
        <meta name="description" content="Access free Nimara templates to streamline nonprofit operations. Download checklists, AI prompts, and grant management tools." />
      </Helmet>

      <Header />

      <main>
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
            className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center"
          >
            {/* Badge */}
            <div style={revealStyle(0)}>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-accent/20 text-accent border border-accent/20 mb-8">
                <Sparkles className="w-4 h-4" />
                Free templates
              </span>
            </div>

            <h1
              style={revealStyle(100)}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-8"
            >
              Nimara <span className="text-accent">Templates</span>
            </h1>

            <p
              style={revealStyle(200)}
              className="text-lg md:text-xl lg:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Our templates remove repetitive prep so your team can focus on what matters: running programs and staying audit‑ready.
            </p>

            {/* Email subscribe */}
            <div style={revealStyle(300)} className="max-w-lg mx-auto mb-10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks! We'll email you new templates.");
                }}
                aria-label="Subscribe to Nimara templates"
                className="flex flex-col sm:flex-row gap-3"
              >
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="flex-1 rounded-xl px-5 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent backdrop-blur-sm"
                />
                <Button type="submit" size="lg" className="h-14 px-8 text-base group">
                  Subscribe
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
              <p className="mt-4 text-sm text-white/40">
                By sharing your email, you agree to Nimara's{" "}
                <a href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="text-accent hover:underline">
                  Terms of Service
                </a>
                .
              </p>
            </div>

            {/* Scroll hint */}
            <button
              onClick={scrollToContent}
              style={revealStyle(400)}
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors"
            >
              <span className="text-sm">Browse templates</span>
              <ChevronDown className="w-4 h-4" />
            </button>
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

        {/* FEATURED TEMPLATES - Cream background */}
        <section id="templates" className="py-24 md:py-32 scroll-mt-20" style={{ backgroundColor: '#faf8f5' }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <ScrollRevealBlock delay={0}>
              <div className="text-center mb-14">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                  Featured
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Templates that <span className="text-primary">actually help</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Each one solves a real problem. Download and start using today.
                </p>
              </div>
            </ScrollRevealBlock>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {templates.map((template, idx) => (
                <ScrollRevealBlock key={idx} delay={100 + idx * 100}>
                  <TemplateCard {...template} />
                </ScrollRevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* WHY TEMPLATES - White background */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <ScrollRevealBlock delay={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                Why templates?
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Stop reinventing the <span className="text-primary">wheel</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every hour spent building spreadsheets from scratch is an hour not spent on your mission. Our templates give you a head start with proven structures that funders expect.
              </p>
            </ScrollRevealBlock>
          </div>
        </section>

        {/* FINAL CTA - Dark navy */}
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
                Stay updated
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get new templates in your <span className="text-accent">inbox</span>
              </h2>
              <p className="text-lg text-white/60 mb-10">
                We release new templates monthly. Subscribe to get them first.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks! We'll email you new templates.");
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="flex-1 rounded-xl px-5 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent backdrop-blur-sm"
                />
                <Button type="submit" size="lg" className="h-14 px-8 group">
                  Subscribe
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </ScrollRevealBlock>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function FreeResources() {
  return (
    <MotionPreferencesProvider>
      <FreeResourcesContent />
    </MotionPreferencesProvider>
  );
}
