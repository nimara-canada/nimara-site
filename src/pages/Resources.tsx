import React, { useState, useId } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { templates } from "@/data/templates";
import { TemplateCard } from "@/components/TemplateCard";
import { motion, useReducedMotion } from "framer-motion";
import { FileText, Sparkles, Download, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function Resources() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const emailInputId = useId();
  const formDescriptionId = useId();
  const shouldReduceMotion = useReducedMotion();

  // Animation variants that respect reduced motion preference
  const fadeInUp = shouldReduceMotion 
    ? { initial: {}, animate: {}, transition: {} }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

  const fadeInScale = shouldReduceMotion
    ? { initial: {}, animate: {}, transition: {} }
    : { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.1 } };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setFormStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Thanks for subscribing! Check your inbox for confirmation.");
      setFormStatus("Success! Thanks for subscribing. Check your inbox for confirmation.");
      setEmail("");
    } catch {
      setFormStatus("Something went wrong. Please try again.");
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSubscribe = () => {
    const input = document.getElementById(emailInputId);
    input?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    input?.focus();
  };

  const benefits = [
    { icon: FileText, text: "Ready-to-use templates" },
    { icon: Sparkles, text: "AI-powered prompts" },
    { icon: Download, text: "Instant downloads" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Free Resources - Nimara Templates | Nonprofit Management Tools</title>
        <meta 
          name="description" 
          content="Access free Nimara templates to streamline nonprofit operations. Download checklists, AI prompts, and grant management tools designed for audit-ready teams." 
        />
        <meta name="keywords" content="nonprofit templates, grant management, audit checklist, nonprofit resources" />
        <link rel="canonical" href="https://nimara.ca/resources" />
        <html lang="en" />
      </Helmet>
      
      <Header />
      
      {/* Skip to main content link - enhanced focus styles */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-3 focus:rounded-lg focus:bg-primary focus:text-primary-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none font-medium"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <section 
        aria-labelledby="hero-heading"
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ backgroundColor: 'hsl(var(--nimara-navy))', paddingTop: 'calc(var(--announcement-height, 0px) + 8rem)' }}
      >
        {/* Decorative elements - hidden from screen readers */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={fadeInScale.initial}
              animate={fadeInScale.animate}
              transition={fadeInScale.transition}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-8"
              role="status"
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-medium">Free Resources</span>
            </motion.div>

            <h1 
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6"
            >
              Templates that make{" "}
              <span className="text-accent">nonprofits stronger</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Skip the blank page. Our templates help your team focus on what matters—running programs and staying audit-ready.
            </p>

            {/* Subscribe Form */}
            <motion.form
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? {} : { delay: 0.4 }}
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              aria-labelledby="subscribe-heading"
              aria-describedby={formDescriptionId}
            >
              <h2 id="subscribe-heading" className="sr-only">Subscribe to newsletter</h2>
              
              <div className="relative flex-1">
                <label htmlFor={emailInputId} className="sr-only">
                  Email address
                </label>
                <Mail 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" 
                  aria-hidden="true" 
                />
                <Input
                  id={emailInputId}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-14 bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-accent focus:ring-accent focus:ring-2 focus:ring-offset-0"
                  required
                  autoComplete="email"
                  aria-required="true"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
                className="h-14 px-8 text-secondary font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:outline-none min-w-[140px]"
                style={{ backgroundColor: 'hsl(var(--nimara-mint))', color: 'hsl(var(--nimara-navy))' }}
              >
                {isSubmitting ? (
                  <>
                    <span className="sr-only">Submitting</span>
                    <span aria-hidden="true">Subscribing...</span>
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </>
                )}
              </Button>
            </motion.form>

            {/* Live region for form status announcements */}
            <div 
              role="status" 
              aria-live="polite" 
              aria-atomic="true"
              className="sr-only"
            >
              {formStatus}
            </div>

            <p id={formDescriptionId} className="mt-4 text-sm text-white/80">
              Get new templates in your inbox. No spam, unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Templates Section */}
      <main id="main-content" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.header
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? {} : { duration: 0.5 }}
            className="text-center mb-16"
          >
            <span 
              className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3"
              aria-hidden="true"
            >
              Template Library
            </span>
            <h2 
              id="templates-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'hsl(var(--nimara-navy))' }}
            >
              Popular Templates
            </h2>
            <p className="text-body-muted max-w-2xl mx-auto">
              Each template is designed by nonprofit practitioners and tested in real organizations.
            </p>
          </motion.header>

          {/* Templates Grid */}
          <section aria-labelledby="templates-heading">
            <ul 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 list-none"
              role="list"
              aria-label="Available templates"
            >
              {templates.map((template, index) => (
                <motion.li
                  key={template.slug}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={shouldReduceMotion ? {} : { delay: index * 0.1, duration: 0.5 }}
                >
                  <TemplateCard
                    slug={template.slug}
                    badge={template.badge}
                    title={template.title}
                    subtitle={template.subtitle}
                  />
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Bottom CTA */}
          <motion.aside
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? {} : { delay: 0.3, duration: 0.5 }}
            className="mt-20 text-center"
            aria-label="More templates notification"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-muted/50 border border-border">
              <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
              <p className="text-body">
                More templates coming soon.{" "}
                <button 
                  onClick={scrollToSubscribe}
                  className="text-primary font-medium hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                  type="button"
                >
                  Subscribe to get notified
                </button>
              </p>
            </div>
          </motion.aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}