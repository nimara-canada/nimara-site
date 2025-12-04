import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Clock, Users, Shield, FileText, BarChart3, Star, ChevronDown, ArrowRight, Check, Sparkles, Activity, TrendingUp, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const faqs = [
  {
    question: "Will I see the score on this page?",
    answer: "No. We read your answers and send a simple summary by email within 1 business day."
  },
  {
    question: "Does filling this out commit us to working with Nimara?",
    answer: "No. The health check and summary are for you. You can decide later if you want support."
  },
  {
    question: "How is our information used?",
    answer: "We use your answers only to understand your situation and suggest next steps. We don't share them with funders or anyone outside Nimara."
  },
  {
    question: "What if I start and realize this is not for us?",
    answer: "You can stop at any time. Nothing is submitted until you hit 'Submit'."
  }
];

const benefits = [
  {
    icon: FileText,
    title: "Clarity in one page",
    description: "A simple snapshot of your governance, finance, people, operations, and programs – not a 20-page report.",
    gradient: "from-violet-500/20 to-purple-500/20"
  },
  {
    icon: Target,
    title: "Right-size your next move",
    description: "See if you need a quick fix, a deeper system build, or just a few small tweaks.",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: Star,
    title: "Something you can share",
    description: "A short summary you can send to your board, funder, or team to explain what's going on.",
    gradient: "from-amber-500/20 to-orange-500/20"
  }
];

const steps = [
  {
    number: 1,
    title: "Answer a few short questions",
    subtitle: "7–9 minutes",
    description: "You tell us how things feel and rate a few areas of your organization. Skip anything you're not ready to answer.",
    icon: FileText
  },
  {
    number: 2,
    title: "We review your answers",
    subtitle: "Within 1 business day",
    description: "A Nimara staff member (not a bot) reads what you shared and looks for patterns.",
    icon: Users
  },
  {
    number: 3,
    title: "Get your health score",
    subtitle: "Delivered by email",
    description: "Your score, a one-page view of strengths and risks, and 1–2 suggested next moves.",
    icon: BarChart3
  },
  {
    number: 4,
    title: "Decide what's next",
    subtitle: "Your choice",
    description: "Take the summary and run with it, or talk with us about support options.",
    icon: Zap
  }
];

const HealthScore = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToForm = () => {
    document.getElementById('health-check-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Get Your Health Score | Nimara</title>
        <meta name="description" content="See where your nonprofit organization is strong, where it's fragile, and what kind of support actually makes sense. Quick 7-9 minute assessment with human review." />
      </Helmet>

      <Header />

      <main className="pt-16 overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center py-20 md:py-28 bg-gradient-to-br from-secondary-background via-secondary-background to-[hsl(var(--nimara-navy))]">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient orbs */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-accent/40 to-primary/20 rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-primary/30 to-accent/20 rounded-full blur-3xl"
            />
            
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent/60 rounded-full"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center">
              {/* Tag pill */}
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="flex justify-center mb-8"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider rounded-full border border-white/20">
                  <Activity className="w-4 h-4 text-accent" />
                  Organizational Health Check
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
              >
                Get your{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-accent via-[#9DFFD6] to-accent bg-clip-text text-transparent">
                    Health Score
                  </span>
                  <motion.span 
                    className="absolute -inset-1 bg-accent/20 rounded-lg blur-lg"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                See where your organization is strong, where it's fragile, and what kind of support actually makes sense.
              </motion.p>

              {/* Info chips */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12"
              >
                {[
                  { icon: Clock, text: "Quick: ~7–9 minutes" },
                  { icon: Users, text: "Human review in 1 day" },
                  { icon: Shield, text: "Built for nonprofits" }
                ].map((chip, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2.5 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-accent/30 transition-colors"
                  >
                    <chip.icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-white/90">{chip.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(172, 252, 227, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToForm}
                  className="group relative px-8 py-4 bg-accent text-secondary-background font-semibold rounded-xl overflow-hidden shadow-lg shadow-accent/20 text-base sm:text-lg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start the health check
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
                
                <Link 
                  to="/book-a-call" 
                  className="text-white/70 hover:text-white underline underline-offset-4 text-sm font-medium transition-colors"
                >
                  Prefer a short call instead?
                </Link>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
                >
                  <motion.div className="w-1.5 h-1.5 bg-accent rounded-full" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why get a health score */}
        <section className="py-20 md:py-28 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-background/5 to-transparent" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full mb-4"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Benefits
              </motion.span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why get a health score?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                You already know things are busy. This puts the full picture in one place.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative bg-card p-8 rounded-3xl border border-border hover:border-primary/20 transition-all duration-300 shadow-soft hover:shadow-xl h-full">
                    <div className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-7 h-7 text-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What you get in return */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-muted/30 via-background to-muted/50 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-foreground text-xs font-semibold uppercase tracking-wider rounded-full mb-4"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  What You Get
                </motion.span>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  A clear picture,{" "}
                  <span className="text-primary">not a pile of data</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  You won't see a live dashboard at the end. Instead, a Nimara team member reads your responses and sends a simple summary within 1 business day.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "Your Nimara Health Score", desc: "A plain-language rating of your overall health, plus which areas are solid and which are fragile.", icon: Activity },
                    { title: "Top 3 risks and bright spots", desc: "Where you're most exposed (for audit, funding, or burnout) and what's already working.", icon: Target },
                    { title: "1–2 realistic next steps", desc: "A suggestion that fits your size and capacity – from DIY tools to fast fixes to deeper system work.", icon: Zap }
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 text-lg">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mt-10 italic border-l-2 border-accent/50 pl-4">
                  No pressure, no upsell. You can use the summary on your own or with Nimara.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                {/* Decorative background for card */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-[2rem] blur-2xl" />
                
                <div className="relative bg-card rounded-3xl shadow-2xl p-8 border border-border/50 backdrop-blur-sm">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Health Report</p>
                        <p className="text-sm text-foreground font-medium">Sample Preview</p>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                    </div>
                  </div>
                  
                  {/* Mock report content */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="h-3 bg-muted rounded-full flex-1" />
                      <div className="h-3 w-16 bg-primary/20 rounded-full" />
                    </div>
                    <div className="h-3 bg-muted rounded-full w-4/5" />
                    
                    {/* Score bars visualization */}
                    <div className="bg-muted/50 rounded-2xl p-5 space-y-4">
                      {[
                        { label: "Governance", width: "85%", color: "bg-emerald-500" },
                        { label: "Finance", width: "72%", color: "bg-amber-500" },
                        { label: "Operations", width: "90%", color: "bg-emerald-500" },
                        { label: "Programs", width: "65%", color: "bg-amber-500" }
                      ].map((bar, i) => (
                        <div key={i} className="space-y-1.5">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">{bar.label}</span>
                            <span className="text-foreground font-medium">{bar.width}</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: bar.width }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                              className={`h-full ${bar.color} rounded-full`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="h-3 bg-muted rounded-full flex-1" />
                      <div className="h-3 bg-muted rounded-full w-1/3" />
                    </div>
                  </div>

                  {/* Score badge */}
                  <motion.div 
                    initial={{ scale: 0, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.5 }}
                    className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary via-primary to-[#5a38c7] rounded-2xl flex flex-col items-center justify-center text-white shadow-xl shadow-primary/30 rotate-3"
                  >
                    <span className="text-3xl font-bold">92</span>
                    <span className="text-xs opacity-80">Health Score</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 md:py-28 bg-secondary-background relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent/10 to-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4"
              >
                <Zap className="w-3.5 h-3.5 text-accent" />
                Process
              </motion.span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                How it works
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Four simple steps to clarity
              </p>
            </motion.div>

            <div className="relative">
              {/* Connection line for desktop */}
              <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative group"
                  >
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 h-full">
                      {/* Step number badge */}
                      <div className="flex items-center gap-4 mb-5">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 text-secondary-background rounded-xl flex items-center justify-center font-bold text-lg shadow-lg shadow-accent/20"
                        >
                          {step.number}
                        </motion.div>
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                          <step.icon className="w-4 h-4 text-accent" />
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-white mb-1 text-lg">{step.title}</h3>
                      <p className="text-accent text-sm font-medium mb-3">{step.subtitle}</p>
                      <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Embedded form */}
        <section id="health-check-form" className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30 scroll-mt-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.05),transparent_50%)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full mb-4"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Start Now
              </motion.span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Ready to see your health score?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Take 7–9 minutes to complete the check. We'll send your summary within 1 business day.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 rounded-[2rem] blur-2xl" />
              <div className="relative bg-card rounded-3xl shadow-2xl overflow-hidden border border-border/50">
                <div 
                  data-tf-live="01JMFHG9N10TSBPJYKJHKP4BHZ"
                  style={{ width: '100%', height: '600px' }}
                />
              </div>
            </motion.div>

            <p className="text-sm text-muted-foreground text-center mt-8 italic">
              You can pause and come back in your browser. Skip any question you're not ready to answer.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Questions? We've got answers
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`bg-card rounded-2xl border transition-all duration-300 ${openFaq === index ? 'border-primary/30 shadow-lg shadow-primary/5' : 'border-border hover:border-primary/20'}`}>
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                      <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === index ? 'bg-primary text-white rotate-180' : 'bg-muted text-muted-foreground'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40' : 'max-h-0'}`}>
                      <div className="px-6 pb-5">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-secondary-background via-secondary-background to-[hsl(var(--nimara-navy))] relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent/30 to-primary/20 rounded-full blur-3xl"
            />
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Ready to get clarity?
              </h2>
              <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto">
                Join 200+ nonprofits who've used the health check to understand their next move.
              </p>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(172, 252, 227, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToForm}
                className="group inline-flex items-center gap-2 px-10 py-5 bg-accent text-secondary-background font-semibold rounded-xl shadow-lg shadow-accent/20 text-lg"
              >
                Get your health score now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HealthScore;
