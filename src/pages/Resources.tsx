import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { templates } from "@/data/templates";
import { TemplateCard } from "@/components/TemplateCard";
import { motion } from "framer-motion";
import { FileText, Sparkles, Download, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function Resources() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Thanks for subscribing! Check your inbox for confirmation.");
    setEmail("");
    setIsSubmitting(false);
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
      </Helmet>
      
      <Header />
      
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:ring-2 focus:ring-primary"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ backgroundColor: 'hsl(var(--nimara-navy))', paddingTop: 'calc(var(--announcement-height, 0px) + 8rem)' }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Free Resources</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
              Templates that make{" "}
              <span className="text-accent">nonprofits stronger</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              Skip the blank page. Our templates help your team focus on what matters—running programs and staying audit-ready.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 text-white/80"
                >
                  <benefit.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Subscribe Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent"
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="h-14 px-8 bg-accent hover:bg-accent/90 text-secondary font-semibold"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.form>

            <p className="mt-4 text-sm text-white/50">
              Get new templates in your inbox. No spam, unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Templates Section */}
      <main id="main-content" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              Template Library
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Popular Templates
            </h2>
            <p className="text-body-muted max-w-2xl mx-auto">
              Each template is designed by nonprofit practitioners and tested in real organizations.
            </p>
          </motion.div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={template.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-muted/50 border border-border">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-body">
                More templates coming soon.{" "}
                <button 
                  onClick={() => document.querySelector('input[type="email"]')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary font-medium hover:underline"
                >
                  Subscribe to get notified
                </button>
              </span>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
