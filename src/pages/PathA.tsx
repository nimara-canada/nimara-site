import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Clock, 
  Target, 
  Package, 
  CheckCircle, 
  XCircle,
  ArrowRight,
  FileText,
  BookOpen,
  Shield,
  Users,
  Calendar,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TYPEFORM_URL = "https://form.typeform.com/to/IeUH5TlU";
const CALENDLY_URL = "https://calendly.com/hello-nimara/30min";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const PathA = () => {
  const openTypeform = () => {
    window.open(TYPEFORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Helmet>
        <title>Path A: Fast Help | Nimara</title>
        <meta 
          name="description" 
          content="Fix one urgent problem in 1-4 weeks. Path A is for audits, grants, policy gaps, or any urgent nonprofit issue that can't wait." 
        />
      </Helmet>
      
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-nimara-purple"
          aria-labelledby="hero-heading"
        >
          {/* Purple layered background with depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-nimara-purple via-nimara-purple to-nimara-purple/95" aria-hidden="true" />
          
          {/* Subtle radial glow for depth */}
          <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-nimara-mint/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-nimara-mint/5 rounded-full blur-3xl" aria-hidden="true" />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium rounded-md bg-nimara-mint text-nimara-navy border border-nimara-mint/50">
                  Urgent Response Service
                </span>
              </motion.div>
              
              {/* Main Heading */}
              <motion.h1 
                id="hero-heading"
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
              >
                Path A: Fast Help.
                <br />
                <span className="text-white/90">Fix one urgent problem so you can breathe again.</span>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                variants={fadeInUp}
                className="text-lg sm:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed"
              >
                Path A is for moments when something can't wait. An audit, a grant, a policy gap, or a scary email from a funder. We come in, fix one clear problem, and leave you with a small set of tools you can actually use.
              </motion.p>
              
              {/* CTAs */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button 
                  size="lg" 
                  onClick={openTypeform} 
                  className="text-base px-8 py-6 h-auto bg-nimara-mint text-nimara-navy hover:bg-nimara-mint/90 shadow-lg hover:shadow-xl transition-all font-semibold"
                >
                  Start Path A – 7-minute intake
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => document.getElementById('fit-check')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-base px-8 py-6 h-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  Is this right for me?
                </Button>
              </motion.div>
              
              {/* Key Stats */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-8 border-t border-white/10"
              >
                {[
                  { icon: Clock, label: "Timeline", value: "1–4 weeks" },
                  { icon: Target, label: "Focus", value: "One urgent problem (Audit, Grant, Policy, Finance, HR)" },
                  { icon: Package, label: "Deliverable", value: "Mini Acceptance Bundle (done-with-you, not a PDF dump)" }
                ].map((stat) => (
                  <div 
                    key={stat.label}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-nimara-mint" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">{stat.label}</p>
                      <p className="text-sm text-white/60 leading-snug max-w-[220px]">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Smooth transition line to next section */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />

        {/* Is Path A Right for You? */}
        <section 
          id="fit-check"
          className="py-20 md:py-28 bg-background"
          aria-labelledby="fit-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 id="fit-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Is Path A a good fit?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Use this when you need relief, not a big project.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl border border-border p-8 md:p-10 shadow-soft mb-8">
                <p className="text-muted-foreground mb-8 text-lg">
                  Path A is a match if at least one of these sounds like you:
                </p>
                
                <ul className="space-y-5" role="list">
                  {[
                    "We have a funder, auditor, or regulator asking for something we don't have ready.",
                    "We're about to submit a grant and our systems feel shaky.",
                    "We got a scary email and don't know where to start.",
                    "We know the exact problem. We just don't have the time or in-house skills to fix it.",
                    "We don't want a 6–12 month project. We just need one important thing fixed, properly."
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-nimara-mint/20 flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-nimara-purple" aria-hidden="true" />
                      </span>
                      <span className="text-foreground text-lg leading-relaxed">"{item}"</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Not for you block */}
              <div className="p-8 rounded-2xl bg-muted/50 border border-border">
                <h3 className="font-semibold text-foreground mb-5 flex items-center gap-3 text-lg">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-destructive/10 flex items-center justify-center">
                    <XCircle className="w-4 h-4 text-destructive" aria-hidden="true" />
                  </span>
                  Path A is not a match if:
                </h3>
                <ul className="space-y-3 mb-6 ml-10" role="list">
                  {[
                    "You want to redesign your whole organization at once.",
                    "You don't know what the problem is yet.",
                    "No one on your team can give 1–2 hours over the next few weeks."
                  ].map((item, index) => (
                    <li key={index} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-destructive mt-1.5" aria-hidden="true">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground ml-10">
                  In those cases,{" "}
                  <Link to="/how-nimara-works" className="text-nimara-purple hover:underline font-medium">
                    Path B (system build)
                  </Link>{" "}
                  or a{" "}
                  <Link to="/organizational-health-check" className="text-nimara-purple hover:underline font-medium">
                    quick Health Check
                  </Link>{" "}
                  is better.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How Path A Works */}
        <section 
          className="py-20 md:py-28 bg-secondary"
          aria-labelledby="how-it-works-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-16">
                <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  How Path A works
                </h2>
                <p className="text-lg text-muted-foreground">
                  Simple, clear, and light on your time.
                </p>
              </div>
              
              <div className="relative">
                {/* Connecting line */}
                <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-nimara-mint via-nimara-mint/50 to-nimara-mint/20 hidden md:block" aria-hidden="true" />
                
                <div className="space-y-8 md:space-y-0">
                  {[
                    {
                      step: 1,
                      title: "Quick intake (today)",
                      description: "You complete a short 7-minute form and tell us what's on fire. We review it within 1 business day and confirm if Path A is a good fit."
                    },
                    {
                      step: 2,
                      title: "Matching & plan (within 72 hours)",
                      description: "We match you with a Nimara consultant who has done this before. Together, you agree on the exact problem to solve, what \"done\" looks like, and what we can deliver in 1–4 weeks."
                    },
                    {
                      step: 3,
                      title: "Fast work + check-ins (1–4 weeks)",
                      description: "We do the heavy lifting. You stay in the loop with short check-ins. We keep your time to about 1 hour per week."
                    },
                    {
                      step: 4,
                      title: "Mini Acceptance Bundle (at the end)",
                      description: "You leave with the thing you needed, simple instructions so your team can keep using it, and a short note you can share with funders or your board."
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="flex gap-6 md:gap-8 md:pb-12 last:pb-0"
                    >
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-nimara-mint text-nimara-navy flex items-center justify-center font-bold text-lg shadow-soft">
                          {item.step}
                        </div>
                      </div>
                      <div className="bg-card rounded-2xl border border-border p-6 flex-1 shadow-soft hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mini Acceptance Bundle */}
        <section 
          className="py-20 md:py-28 bg-background"
          aria-labelledby="bundle-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-nimara-purple/10 text-nimara-purple">
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  What You Get
                </span>
                <h2 id="bundle-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  The Mini Acceptance Bundle
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A small, useful set of tools you can use the next day.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: FileText,
                    title: "The main fix",
                    description: "The thing you came for: a policy, process, package, or response that meets the standard and you can actually use."
                  },
                  {
                    icon: BookOpen,
                    title: "A simple how-to",
                    description: "A 1–2 page guide in plain language that shows your team how to use the new tool without needing Nimara every time."
                  },
                  {
                    icon: Shield,
                    title: "A short record for funders / board",
                    description: "A short summary you can attach to reports or minutes: what was fixed, when, and how it reduces risk."
                  },
                  {
                    icon: MessageSquare,
                    title: "Light follow-up support",
                    description: "For some Path A projects, you can add 2–3 quick check-ins over the next 3 months. We'll tell you if that makes sense.",
                    optional: true
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group p-8 rounded-2xl bg-card border border-border hover:border-nimara-purple/30 transition-all duration-300 shadow-soft hover:shadow-lg relative"
                  >
                    {item.optional && (
                      <span className="absolute top-4 right-4 text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        Optional
                      </span>
                    )}
                    <div className="w-14 h-14 rounded-2xl bg-nimara-mint/15 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                      <item.icon className="w-7 h-7 text-nimara-purple" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline & Commitment */}
        <section 
          className="py-20 md:py-28 bg-secondary"
          aria-labelledby="timeline-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-16">
                <h2 id="timeline-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Timeline & Commitment
                </h2>
                <p className="text-lg text-muted-foreground">
                  What we'll each bring to the table
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-8 rounded-2xl bg-card border border-border shadow-soft"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-nimara-purple/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-nimara-purple" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Our side</h3>
                  </div>
                  <ul className="space-y-4" role="list">
                    {[
                      "We respond to your intake within 1 business day.",
                      "We propose a plan within 72 hours.",
                      "We aim to complete the work in 1–4 weeks, depending on the problem."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-nimara-purple" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-8 rounded-2xl bg-card border border-border shadow-soft"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-nimara-mint/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-nimara-purple" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Your side</h3>
                  </div>
                  <ul className="space-y-4" role="list">
                    {[
                      "Name one main contact person.",
                      "Join 1 short scoping call and 1–2 check-ins.",
                      "Share any documents we need (policies, letters, past reports)."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-nimara-mint" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center text-muted-foreground mt-10 italic max-w-2xl mx-auto"
              >
                We keep your time low on purpose. You don't need to run a big project. You just need to show up for a few focused decisions.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* What We Need to Know */}
        <section 
          className="py-20 md:py-28 bg-background"
          aria-labelledby="intake-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 id="intake-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  What we'll ask
                </h2>
                <p className="text-lg text-muted-foreground">
                  No long forms. Just the basics we need to help.
                </p>
              </div>
              
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border shadow-soft">
                <ol className="space-y-5" role="list">
                  {[
                    "What is the one urgent problem?",
                    "Who is asking for it? (A funder, an auditor, a regulator, your board.)",
                    "What is the deadline or time pressure?",
                    "Roughly how many staff do you have?",
                    "Have you tried anything already?"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 text-foreground">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-nimara-purple text-white flex items-center justify-center text-sm font-bold shadow-sm">
                        {index + 1}
                      </span>
                      <span className="text-lg pt-0.5">{item}</span>
                    </li>
                  ))}
                </ol>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <Shield className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    We won't ask for detailed financials or private data in this first step.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Start Path A CTA */}
        <section 
          className="py-20 md:py-28 relative overflow-hidden"
          aria-labelledby="cta-heading"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-nimara-mint/15 via-nimara-mint/8 to-nimara-purple/5" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-nimara-mint/20 rounded-full blur-3xl" aria-hidden="true" />
          
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to start Path A?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                If you're facing one clear problem and need real help, start here.
                A Nimara team member will review your intake and reply within <strong className="text-foreground">1 business day</strong>.
              </p>
              
              <Button 
                size="lg" 
                onClick={openTypeform} 
                className="text-lg px-10 py-6 h-auto bg-nimara-mint text-nimara-navy hover:bg-nimara-mint/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Path A – 7-minute intake
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Button>
              
              <p className="mt-8 text-muted-foreground">
                Prefer to talk first?{" "}
                <a 
                  href={CALENDLY_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-nimara-purple hover:underline font-medium"
                >
                  Book a short call instead
                </a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section 
          className="py-20 md:py-28 bg-background"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
                Quick questions
              </h2>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  {
                    question: "What if we don't know exactly what the problem is?",
                    answer: "Then Path A might not be the best fit yet. Start with a quick Health Check or a short call. We'll help you name the problem before you choose an option."
                  },
                  {
                    question: "What if our deadline is tomorrow?",
                    answer: "If it's truly last-minute, we'll be honest if we can't help in time. It's better to say \"too tight\" than promise something we can't deliver."
                  },
                  {
                    question: "Can Path A turn into a bigger project?",
                    answer: "Yes. Sometimes we fix one urgent thing and then move into a deeper system build (Path B). We'll only suggest that if your team has the capacity and it actually makes sense."
                  },
                  {
                    question: "What if we're very small (one staff or mostly volunteers)?",
                    answer: "We can still help, but we may suggest lighter tools and templates instead of a full install. If you tell us your size in the intake, we'll keep our suggestions realistic."
                  },
                  {
                    question: "Is there a cost?",
                    answer: "Path A can be funded by some grants or paid directly by your organization. In our reply, we'll be clear about cost and funding options before you decide anything."
                  }
                ].map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-2xl px-6 data-[state=open]:shadow-soft transition-shadow"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:no-underline text-lg py-5 font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default PathA;
