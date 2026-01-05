import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Clock, Target, Package, FileText, BookOpen, Users, HelpCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { CALENDLY_BOOKING_URL } from "@/constants/urls";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PathA = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const scrollToIntake = () => {
    const target = document.getElementById("start-path-a");
    target?.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
    target?.focus();
  };

  const highlights = [
    { icon: Clock, text: "1–4 weeks", label: "Timeline: 1 to 4 weeks" },
    { icon: Target, text: "One urgent problem", label: "Focus: One urgent problem" },
    { icon: Package, text: "Mini Acceptance Bundle", label: "Deliverable: Mini Acceptance Bundle" },
  ];

  const goodFitReasons = [
    "We have a funder, auditor, or regulator asking for something we don't have ready.",
    "We're about to submit a grant and our systems feel shaky.",
    "We got a scary email and don't know where to start.",
    "We know the exact problem. We just don't have the time or in-house skills to fix it.",
    "We don't want a 6–12 month project. We just need one important thing fixed, properly."
  ];

  const notFitReasons = [
    "You want to redesign your whole organization at once.",
    "You don't know what the problem is yet.",
    "No one on your team can give 1–2 hours over the next few weeks."
  ];

  const processSteps = [
    {
      step: 1,
      title: "Quick intake (today)",
      description: "You complete a short 7-minute form and tell us what's on fire. We review it within 1 business day and confirm if Path A is a good fit."
    },
    {
      step: 2,
      title: "Matching & plan (within 72 hours)",
      description: "We match you with a Nimara consultant who has done this before. Together, you agree on:",
      bullets: [
        "The exact problem to solve",
        "What 'done' looks like",
        "What we can deliver in 1–4 weeks"
      ]
    },
    {
      step: 3,
      title: "Fast work + check-ins (1–4 weeks)",
      description: "We do the heavy lifting. You stay in the loop with short check-ins. We keep your time to about 1 hour per week."
    },
    {
      step: 4,
      title: "Mini Acceptance Bundle (at the end)",
      description: "You leave with:",
      bullets: [
        "The thing you needed (policy, package, plan, or fix)",
        "Simple instructions so your team can keep using it",
        "A short note you can share with funders or your board"
      ]
    }
  ];

  const bundleItems = [
    {
      icon: FileText,
      title: "The main fix",
      description: "The thing you came for: a policy, process, package, or response that meets the standard and you can actually use."
    },
    {
      icon: BookOpen,
      title: "A simple how-to",
      description: "A 1–2 page guide in plain language that shows your team how to use the new tool without you needing Nimara every time."
    },
    {
      icon: Users,
      title: "A short record for funders / board",
      description: "A short summary you can attach to reports or minutes: what was fixed, when, and how it reduces risk."
    },
    {
      icon: HelpCircle,
      title: "Light follow-up support",
      description: "For some Path A projects, you can add 2–3 quick check-ins over the next 3 months. We'll tell you if that makes sense for your case."
    }
  ];

  const faqItems = [
    {
      q: "What if we don't know exactly what the problem is?",
      a: "Start a short call instead. We'll help you name the problem first."
    },
    {
      q: "What if our deadline is tomorrow?",
      a: "If it's truly last-minute, we'll be honest if we can't help in time."
    },
    {
      q: "Can Path A turn into a bigger project?",
      a: "Sometimes. Only if it makes sense for your team and capacity."
    },
    {
      q: "Is there a cost?",
      a: "We'll be clear about costs and any funding options before you decide."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Fast Help - Path A | Nimara - Fix One Urgent Issue Fast</title>
        <meta 
          name="description" 
          content="Need urgent help with a nonprofit crisis? Path A delivers focused solutions in 1-4 weeks. Board crisis, HR mess, or grant deadline - we fix one problem fast." 
        />
        <html lang="en" />
      </Helmet>
      
      <Header />
      
      {/* Skip to main content */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-3 focus:rounded-lg focus:bg-primary focus:text-primary-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none font-medium"
      >
        Skip to main content
      </a>
      
      {/* HERO SECTION */}
      <section 
        aria-labelledby="hero-heading"
        className="bg-secondary pt-32 pb-20 md:pb-28"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? {} : { duration: 0.5 }}
            className="text-center"
          >
            <Badge 
              variant="outline" 
              className="mb-6 bg-accent/20 text-accent border-accent/30"
              role="status"
            >
              Path A – rapid response
            </Badge>
            
            <h1 
              id="hero-heading"
              className="heading-display text-secondary-foreground mb-4"
            >
              Fast Help
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-2">
              Fix one urgent issue fast.
            </p>
            
            <p 
              className="text-lg text-accent font-medium mb-6"
              aria-label="Timeline: 1 to 4 weeks. One problem, one solution."
            >
              1–4 weeks • One problem, one solution
            </p>
            
            <p className="text-body-lg text-secondary-foreground/85 max-w-2xl mx-auto mb-8">
              Board crisis? HR mess? Grant deadline? We jump in, solve the problem, and get out. No lengthy assessments required. We scope your problem, match you with the right expertise, and deliver a focused fix you can run with.
            </p>
            
            <ul 
              className="flex flex-wrap justify-center gap-3 mb-10 list-none"
              aria-label="Path A highlights"
            >
              {highlights.map((item, index) => (
                <li key={index}>
                  <Badge 
                    variant="outline" 
                    className="bg-secondary-foreground/10 text-secondary-foreground border-secondary-foreground/20 px-4 py-2"
                    aria-label={item.label}
                  >
                    <item.icon className="w-4 h-4 mr-2" aria-hidden="true" />
                    {item.text}
                  </Badge>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={scrollToIntake}
              size="lg" 
              className="font-semibold text-lg px-8 py-6 focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none min-h-[56px]"
              aria-describedby="cta-description"
            >
              Start Path A – 7-minute intake
            </Button>
            
            <p 
              id="cta-description"
              className="mt-4 text-secondary-foreground/80 text-sm"
            >
              <a 
                href="/book-a-call" 
                className="underline hover:text-secondary-foreground focus:text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm"
              >
                Not sure if this is right? Talk through options.
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main id="main">
        {/* IS PATH A RIGHT FOR YOU? */}
        <section 
          className="py-20 md:py-28 bg-background"
          aria-labelledby="fit-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? {} : { duration: 0.5 }}
            >
              <h2 id="fit-heading" className="heading-2 text-foreground mb-4 text-center">
                Is Path A a good fit?
              </h2>
              <p className="text-subtitle mb-8 text-center">
                Use this when you need relief, not a big project.
              </p>
              
              <p className="text-foreground font-medium mb-6" id="good-fit-label">
                Path A is a match if at least one of these sounds like you:
              </p>
              
              <ul 
                className="space-y-4 mb-10 list-none"
                aria-labelledby="good-fit-label"
              >
                {goodFitReasons.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={shouldReduceMotion ? {} : { duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <Card className="bg-muted/50 border-muted" role="region" aria-labelledby="not-fit-heading">
                <CardContent className="pt-6">
                  <h3 id="not-fit-heading" className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-destructive" aria-hidden="true" />
                    Path A is not a match if:
                  </h3>
                  <ul className="space-y-2 text-muted-foreground mb-4 list-none" aria-label="Situations where Path A is not recommended">
                    {notFitReasons.map((reason, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span aria-hidden="true">•</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    In those cases, <a href="/path-b" className="text-primary underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm">Path B (NOHC Snapshot + System Phase)</a> or a <a href={CALENDLY_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm">quick call to talk through options</a> is better.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* HOW PATH A WORKS */}
        <section 
          className="py-20 md:py-28 bg-muted/30"
          aria-labelledby="how-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? {} : { duration: 0.5 }}
            >
              <h2 id="how-heading" className="heading-2 text-foreground mb-4 text-center">
                How Path A works
              </h2>
              <p className="text-subtitle mb-12 text-center">
                Simple, clear, and light on your time.
              </p>
              
              <ol className="space-y-8 list-none" aria-label="Path A process steps">
                {processSteps.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={shouldReduceMotion ? {} : { duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div 
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold"
                      aria-hidden="true"
                    >
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-lg mb-2">
                        <span className="sr-only">Step {item.step}: </span>
                        {item.title}
                      </h3>
                      <p className="text-body">{item.description}</p>
                      {item.bullets && (
                        <ul className="mt-2 space-y-1 text-body-muted list-none">
                          {item.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span aria-hidden="true">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ol>
              
              <Card className="mt-12 bg-accent/10 border-accent/30" role="region" aria-labelledby="timeline-heading">
                <CardContent className="pt-6">
                  <h3 id="timeline-heading" className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                    Timeline & your commitment
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We respond to your intake within 1 business day, propose a plan within 72 hours, and aim to complete the work in 1–4 weeks. Your role: name one contact person, join 1 short scoping call and 1–2 check-ins, and share any documents we need.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* MINI ACCEPTANCE BUNDLE */}
        <section 
          className="py-20 md:py-28 bg-background"
          aria-labelledby="bundle-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? {} : { duration: 0.5 }}
            >
              <h2 id="bundle-heading" className="heading-2 text-foreground mb-4 text-center">
                What's inside the Mini Acceptance Bundle?
              </h2>
              <p className="text-subtitle mb-12 text-center">
                A small, useful set of tools you can use the next day.
              </p>
              
              <ul className="grid md:grid-cols-2 gap-6 list-none" aria-label="Mini Acceptance Bundle contents">
                {bundleItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={shouldReduceMotion ? {} : { duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-primary">
                      <CardContent className="pt-6">
                        <item.icon className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-body-muted text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* START PATH A */}
        <section 
          id="start-path-a" 
          className="py-20 md:py-28 bg-secondary"
          aria-labelledby="start-heading"
          tabIndex={-1}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? {} : { duration: 0.5 }}
            >
              <h2 id="start-heading" className="heading-2 text-secondary-foreground mb-4 text-center">
                Ready to start Path A?
              </h2>
              <p className="text-lg text-secondary-foreground/85 mb-12 text-center max-w-2xl mx-auto">
                If you're facing one clear problem and need real help, start here. A Nimara team member will review your intake and reply within 1 business day.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-secondary-foreground/10 rounded-2xl p-6" role="region" aria-labelledby="intake-questions-heading">
                  <h3 id="intake-questions-heading" className="font-semibold text-secondary-foreground mb-4">What we'll ask in the intake</h3>
                  <p className="text-secondary-foreground/80 text-sm mb-4">No long forms. Just the basics we need to help.</p>
                  <ul className="space-y-2 text-secondary-foreground/80 text-sm mb-6 list-none" aria-label="Intake form questions">
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true">•</span>
                      <span>What is the one urgent problem?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true">•</span>
                      <span>Who is asking for it? (A funder, an auditor, a regulator, your board.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true">•</span>
                      <span>What is the deadline or time pressure?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true">•</span>
                      <span>Roughly how many staff do you have?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true">•</span>
                      <span>Have you tried anything already?</span>
                    </li>
                  </ul>
                  <p className="text-secondary-foreground/70 text-xs">
                    We won't ask for detailed financials or private data in this first step.
                  </p>
                </div>
                
                <div className="bg-secondary-foreground/10 rounded-2xl p-6">
                  <Button 
                    size="lg" 
                    className="w-full font-semibold text-lg py-6 mb-4 focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none min-h-[56px]"
                    asChild
                  >
                    <a href="#">Start Path A – 7-minute intake</a>
                  </Button>
                  <p className="text-secondary-foreground/80 text-sm text-center mb-6">
                    Prefer to talk first?{" "}
                    <a 
                      href="/book-a-call" 
                      className="text-accent underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm"
                    >
                      Book a short call instead.
                    </a>
                  </p>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-secondary-foreground/20">
                        <AccordionTrigger className="text-secondary-foreground text-sm hover:no-underline focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-secondary-foreground/80 text-sm">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PathA;