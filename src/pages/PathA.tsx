import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Clock, Target, Package, FileText, BookOpen, Users, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ComparePathsButton } from "@/components/ComparePathsButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PathA = () => {
  const scrollToIntake = () => {
    document.getElementById("start-path-a")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* HERO SECTION */}
      <section className="bg-nimara-purple pt-32 pb-20 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-6 bg-nimara-mint text-nimara-navy">
              Path A
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Path A: Fast Help
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fix one urgent problem so you can breathe again.
            </p>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Path A is for moments when something can't wait. An audit, a grant, a policy gap, a scary email from a funder. We come in, fix one clear problem, and leave you with a small set of tools you can actually use.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Timeline: 1–4 weeks
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 px-4 py-2">
                <Target className="w-4 h-4 mr-2" />
                Focus: One urgent problem
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 px-4 py-2">
                <Package className="w-4 h-4 mr-2" />
                Deliverable: Mini Acceptance Bundle
              </Badge>
            </div>
            
            <Button 
              onClick={scrollToIntake}
              size="lg" 
              className="bg-nimara-mint text-nimara-navy hover:bg-nimara-mint/90 font-semibold text-lg px-8 py-6"
            >
              Start Path A – 7-minute intake
            </Button>
            <p className="mt-4 text-white/70 text-sm">
              <a href="/how-nimara-works" className="underline hover:text-white">
                Not sure if this is right? See other options.
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* IS PATH A RIGHT FOR YOU? */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-nimara-navy mb-4 text-center">
              Is Path A a good fit?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Use this when you need relief, not a big project.
            </p>
            
            <p className="text-nimara-navy font-medium mb-6">
              Path A is a match if at least one of these sounds like you:
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "We have a funder, auditor, or regulator asking for something we don't have ready.",
                "We're about to submit a grant and our systems feel shaky.",
                "We got a scary email and don't know where to start.",
                "We know the exact problem. We just don't have the time or in-house skills to fix it.",
                "We don't want a 6–12 month project. We just need one important thing fixed, properly."
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-nimara-mint mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <Card className="bg-muted/50 border-muted">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-nimara-navy mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-destructive" />
                  Path A is not a match if:
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• You want to redesign your whole organization at once.</li>
                  <li>• You don't know what the problem is yet.</li>
                  <li>• No one on your team can give 1–2 hours over the next few weeks.</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  In those cases, <a href="/how-nimara-works" className="text-nimara-purple underline">Path B (system build)</a> or a <a href="/health-score" className="text-nimara-purple underline">quick Health Check</a> is better.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* HOW PATH A WORKS */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-nimara-navy mb-4 text-center">
              How Path A works
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Simple, clear, and light on your time.
            </p>
            
            <div className="space-y-8">
              {[
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
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-nimara-purple text-white flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-nimara-navy text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    {item.bullets && (
                      <ul className="mt-2 space-y-1 text-muted-foreground">
                        {item.bullets.map((bullet, i) => (
                          <li key={i}>• {bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Card className="mt-12 bg-nimara-mint/10 border-nimara-mint/30">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-nimara-navy mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-nimara-purple" />
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
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-nimara-navy mb-4 text-center">
              What's inside the Mini Acceptance Bundle?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              A small, useful set of tools you can use the next day.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
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
                      <item.icon className="w-8 h-8 text-nimara-purple mb-4" />
                      <h3 className="font-semibold text-nimara-navy mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* START PATH A */}
      <section id="start-path-a" className="py-20 md:py-28 bg-nimara-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Ready to start Path A?
            </h2>
            <p className="text-lg text-white/80 mb-12 text-center max-w-2xl mx-auto">
              If you're facing one clear problem and need real help, start here. A Nimara team member will review your intake and reply within 1 business day.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4">What we'll ask in the intake</h3>
                <p className="text-white/70 text-sm mb-4">No long forms. Just the basics we need to help.</p>
                <ul className="space-y-2 text-white/80 text-sm mb-6">
                  <li>• What is the one urgent problem?</li>
                  <li>• Who is asking for it? (A funder, an auditor, a regulator, your board.)</li>
                  <li>• What is the deadline or time pressure?</li>
                  <li>• Roughly how many staff do you have?</li>
                  <li>• Have you tried anything already?</li>
                </ul>
                <p className="text-white/60 text-xs">
                  We won't ask for detailed financials or private data in this first step.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6">
                <Button 
                  size="lg" 
                  className="w-full bg-nimara-mint text-nimara-navy hover:bg-nimara-mint/90 font-semibold text-lg py-6 mb-4"
                  asChild
                >
                  <a href="#">Start Path A – 7-minute intake</a>
                </Button>
                <p className="text-white/70 text-sm text-center mb-6">
                  Prefer to talk first? <a href="https://calendly.com/hello-nimara/30min" target="_blank" rel="noopener noreferrer" className="text-nimara-mint underline">Book a short call instead.</a>
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  {[
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
                  ].map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-white/20">
                      <AccordionTrigger className="text-white text-sm hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/70 text-sm">
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
      <ComparePathsButton highlightPath="a" />
    </div>
  );
};

export default PathA;
