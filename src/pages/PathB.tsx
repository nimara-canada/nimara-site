import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Clock, Target, Package, FileText, BookOpen, Users, HelpCircle, BarChart3, Shield, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PathB = () => {
  const scrollToIntake = () => {
    document.getElementById("start-path-b")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* HERO SECTION */}
      <section className="bg-secondary pt-32 pb-20 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-6 bg-primary/20 text-primary-foreground border-primary/30">
              Path B – system installs
            </Badge>
            <h1 className="heading-display text-secondary-foreground mb-4">
              NOHC Snapshot & System Installs
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-2">
              For when one or more core systems feel messy.
            </p>
            <p className="text-lg text-primary font-medium mb-6">
              NOHC Snapshot (from $2,500) + 8–12 weeks per system bundle
            </p>
            <p className="text-body-lg text-secondary-foreground/85 max-w-2xl mx-auto mb-8">
              Finance, governance, HR, programs, or delivery feeling disorganized? We start with the <strong>NOHC Snapshot</strong> – a health check starting at $2,500, completed in ~2 weeks that shows where each system sits on our Tier ladder. Then we design a System Phase using 1–2 bundles to move those systems up a Tier.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <Badge variant="outline" className="bg-secondary-foreground/10 text-secondary-foreground border-secondary-foreground/20 px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                8–12 weeks per phase
              </Badge>
              <Badge variant="outline" className="bg-secondary-foreground/10 text-secondary-foreground border-secondary-foreground/20 px-4 py-2">
                <Target className="w-4 h-4 mr-2" />
                NOHC Snapshot (from $2,500)
              </Badge>
              <Badge variant="outline" className="bg-secondary-foreground/10 text-secondary-foreground border-secondary-foreground/20 px-4 py-2">
                <Package className="w-4 h-4 mr-2" />
                1–2 system bundles
              </Badge>
            </div>
            
            <Button 
              onClick={scrollToIntake}
              size="lg" 
              className="font-semibold text-lg px-8 py-6"
            >
              Learn About NOHC Snapshot
            </Button>
            <p className="mt-4 text-secondary-foreground/70 text-sm">
              <a href="/book-a-call" className="underline hover:text-secondary-foreground">
                Not sure if this is right? Talk through options.
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* IS PATH B RIGHT FOR YOU? */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-2 text-foreground mb-4 text-center">
              Is Path B a good fit?
            </h2>
            <p className="text-subtitle mb-8 text-center">
              This is for organizations ready to build systems, not just fix fires.
            </p>
            
            <p className="text-foreground font-medium mb-6">
              Path B is a match if at least one of these sounds like you:
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "One or more core systems feel messy – finance, governance, HR, programs, or delivery.",
                "Funders keep asking about your capacity, compliance, or organizational health.",
                "You want to be seen as a fundable, scalable organization—not just a good cause.",
                "You're growing quickly and need systems that can grow with you.",
                "You're tired of putting out fires. You want to prevent them.",
                "You want an objective assessment of where you stand and a clear roadmap forward."
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <Card className="bg-muted/50 border-muted">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-destructive" />
                  Path B might not be right if:
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• You only have one urgent issue and need it fixed fast (try <a href="/path-a" className="text-primary underline">Path A – Fast Help</a>).</li>
                  <li>• You're not ready to invest 8–12 weeks per phase in implementation.</li>
                  <li>• No one on your team can give 2–4 hours per week during the project.</li>
                  <li>• You're still figuring out your core mission and programs.</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  Not sure? <a href="/book-a-call" className="text-primary underline">Talk through options</a> with us on a short call.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* HOW PATH B WORKS */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-2 text-foreground mb-4 text-center">
              How Path B works
            </h2>
            <p className="text-subtitle mb-12 text-center">
              A structured process from NOHC Snapshot to system installation.
            </p>
            
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "NOHC Snapshot (Week 1–2)",
                  description: "We start with a Nimara NOHC Snapshot – a short, paid health check. You'll answer focused questions and we'll show you:",
                  bullets: [
                    "Where each system sits on our Tier ladder",
                    "Which areas need attention first",
                    "What a realistic System Phase looks like for you"
                  ]
                },
                {
                  step: 2,
                  title: "System Phase Design (Week 2–3)",
                  description: "Based on your Snapshot, we design a System Phase using 1–2 bundles. Together, we'll:",
                  bullets: [
                    "Confirm priority areas to move up a Tier",
                    "Match you with the right Nimara Practice Partner",
                    "Define scope, timeline, and deliverables",
                    "Discuss pricing and any funding options"
                  ]
                },
                {
                  step: 3,
                  title: "System Installation (Weeks 4–10)",
                  description: "Your Practice Partner leads the work, installing right-sized tools your team can actually run. Typical areas include:",
                  bullets: [
                    "Board & governance documentation",
                    "Financial policies and controls",
                    "HR policies and job descriptions",
                    "Program planning and delivery systems",
                    "Fundraising and donor standards",
                    "Data, records, and technology setup"
                  ]
                },
                {
                  step: 4,
                  title: "Handover + Support (Weeks 11–12)",
                  description: "You receive everything you need to run the new systems:",
                  bullets: [
                    "All implemented policies, templates, and tools",
                    "Training materials for your team",
                    "Updated Tier placement showing improvement",
                    "Funder-ready summary of organizational health",
                    "3-month support period included"
                  ]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                    <p className="text-body">{item.description}</p>
                    {item.bullets && (
                      <ul className="mt-2 space-y-1 text-body-muted">
                        {item.bullets.map((bullet, i) => (
                          <li key={i}>• {bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Card className="mt-12 bg-primary/10 border-primary/30">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Timeline & your commitment
                </h3>
                <p className="text-muted-foreground text-sm">
                  Each System Phase typically runs 8–12 weeks. Your role: designate a project lead, participate in weekly check-ins (30–60 min), and help us access documents and key staff. We do the heavy lifting—you stay informed and make decisions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FULL ACCEPTANCE BUNDLE */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-2 text-foreground mb-4 text-center">
              What do you get with each System Phase?
            </h2>
            <p className="text-subtitle mb-12 text-center">
              Everything you need to run right-sized systems your team can actually use.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FileText,
                  title: "Policies & templates",
                  description: "Essential policies across your priority areas—governance, finance, HR, programs, fundraising—customized for your organization."
                },
                {
                  icon: Layers,
                  title: "Operational tools",
                  description: "Templates, workflows, and tools your team can actually use day-to-day without needing external help."
                },
                {
                  icon: BarChart3,
                  title: "Tier improvement",
                  description: "Your before-and-after Tier placement showing which systems moved up and what changed."
                },
                {
                  icon: BookOpen,
                  title: "Training materials",
                  description: "How-to guides and training resources so your team can maintain and evolve the systems independently."
                },
                {
                  icon: Shield,
                  title: "Funder-ready documentation",
                  description: "A professional summary you can share with funders, auditors, and your board showing your organizational capacity."
                },
                {
                  icon: Users,
                  title: "3-month support period",
                  description: "Post-delivery check-ins to answer questions, troubleshoot issues, and help your team build confidence with new systems."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <item.icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-body-muted text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* OPTIONAL ADD-ONS */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-2 text-foreground mb-4 text-center">
              Optional add-ons
            </h2>
            <p className="text-subtitle mb-12 text-center">
              Extend your support beyond the initial System Phase.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="pt-6">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    12-month evaluation
                  </Badge>
                  <h3 className="font-semibold text-foreground mb-2">12-month evaluation & support</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Quarterly check-ins, annual Tier re-assessment, and ongoing access to your Practice Partner for questions and adjustments.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
                <CardContent className="pt-6">
                  <Badge className="mb-4 bg-accent/20 text-foreground border-accent/30">
                    Fractional Partner
                  </Badge>
                  <h3 className="font-semibold text-foreground mb-2">Fractional Partner (ongoing)</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    A dedicated Nimara partner who helps manage and update your systems on an ongoing basis—ideal for growing organizations without full-time operations staff.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* START PATH B */}
      <section id="start-path-b" className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-2 text-secondary-foreground mb-4 text-center">
              Ready to get started?
            </h2>
            <p className="text-lg text-secondary-foreground/85 mb-12 text-center max-w-2xl mx-auto">
              Start with a NOHC Snapshot to see where your systems sit on our Tier ladder. We'll use it to design your System Phase and match you with the right Practice Partner.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary-foreground/10 rounded-2xl p-6">
                <h3 className="font-semibold text-secondary-foreground mb-4">What to expect</h3>
                <p className="text-secondary-foreground/70 text-sm mb-4">Path B is a partnership. Here's what you're signing up for:</p>
                <ul className="space-y-2 text-secondary-foreground/80 text-sm mb-6">
                  <li>• A short, paid NOHC Snapshot to assess your systems</li>
                  <li>• A dedicated Practice Partner matched to your needs</li>
                  <li>• 8–12 weeks per phase of focused system installation</li>
                  <li>• Weekly check-ins (30–60 min) to stay aligned</li>
                  <li>• Right-sized tools your team can actually run</li>
                  <li>• 3 months of follow-up support included</li>
                </ul>
                <p className="text-secondary-foreground/60 text-xs">
                  Every Path B engagement begins with the NOHC Snapshot.
                </p>
              </div>
              
              <div className="bg-secondary-foreground/10 rounded-2xl p-6">
                <Button 
                  size="lg" 
                  className="w-full font-semibold text-lg py-6 mb-4"
                  asChild
                >
                  <a href="/health-score">Learn About NOHC Snapshot</a>
                </Button>
                <p className="text-secondary-foreground/70 text-sm text-center mb-6">
                  Prefer to talk first? <a href="/book-a-call" className="text-accent underline">Book a consultation call.</a>
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      q: "How much does Path B cost?",
                      a: "Pricing depends on scope and which systems you're installing. We'll provide a clear quote after your NOHC Snapshot. We also help identify funding options."
                    },
                    {
                      q: "What if we can't commit 8–12 weeks?",
                      a: "Path A (Fast Help) might be a better fit for now. You can always start there and move to Path B later."
                    },
                    {
                      q: "Can we choose which systems to focus on?",
                      a: "Yes. Your NOHC Snapshot helps prioritize, but you decide which 1–2 bundles matter most for your organization right now."
                    },
                    {
                      q: "What's the money-back guarantee?",
                      a: "If we don't deliver what we promised, we fix it or you don't pay for that work. Plain and simple."
                    }
                  ].map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-secondary-foreground/20">
                      <AccordionTrigger className="text-secondary-foreground text-sm hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-secondary-foreground/70 text-sm">
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

      <Footer />
      
    </div>
  );
};

export default PathB;
