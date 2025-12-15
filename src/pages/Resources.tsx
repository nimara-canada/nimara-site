import React, { useState, useId } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { templates } from "@/data/templates";
import { TemplateCard } from "@/components/TemplateCard";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function Resources() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailInputId = useId();
  const shouldReduceMotion = useReducedMotion();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Thanks for subscribing! Check your inbox for confirmation.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      </Helmet>
      
      <Header />
      
      {/* Skip link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-3 focus:rounded-lg focus:bg-primary focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden bg-secondary-background"
        style={{ paddingTop: 'calc(var(--announcement-height, 0px) + 6rem)' }}
      >
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-sm tracking-widest text-white/50 uppercase mb-6">
              Free Resources
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.1] mb-8">
              Templates that make{" "}
              <span className="text-accent italic">nonprofits stronger</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
              Skip the blank page. Our templates help your team focus on what matters—running programs and staying audit-ready.
            </p>

            {/* Subscribe Form */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <div className="relative flex-1">
                <label htmlFor={emailInputId} className="sr-only">
                  Email address
                </label>
                <Mail 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" 
                  aria-hidden="true" 
                />
                <input
                  id={emailInputId}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 h-14 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  required
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-accent text-secondary-background font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="mt-4 text-sm text-white/50">
              Get new templates in your inbox. No spam, unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Templates Section */}
      <main id="main-content" className="py-24 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
              Template Library
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
              Popular Templates
            </h2>
            <p className="text-body">
              Each template is designed by nonprofit practitioners and tested in real organizations.
            </p>
          </motion.div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={template.slug}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <TemplateCard
                  slug={template.slug}
                  badge={template.badge}
                  title={template.title}
                  subtitle={template.subtitle}
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom notice */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground">
              More templates coming soon.{" "}
              <button 
                onClick={() => document.getElementById(emailInputId)?.focus()}
                className="text-primary font-medium hover:underline"
                type="button"
              >
                Subscribe to get notified
              </button>
            </p>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
