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
      <section className="bg-nimara-navy pt-32 pb-20 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-6 bg-nimara-purple text-white">
              Most Popular
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Path B: System Build
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Build systems that funders trust and your team can run.
            </p>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Path B is for when you're ready to get your organization fully set up. We assess where you are, match you with the right consultant, and help you build across multiple operational areas—so you're not just patching problems, you're building for scale.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Timeline: 8–12 weeks
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 px-4 py-2">
                <Target className="w-4 h-4 mr-2" />
                Focus: Full system implementation
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 px-4 py-2">
                <Package className="w-4 h-4 mr-2" />
                Deliverable: Full Acceptance Bundle + NOHC Score
              </Badge>
            </div>
            
            <Button 
              onClick={scrollToIntake}
              size="lg" 
              className="bg-nimara-mint text-nimara-navy hover:bg-nimara-mint/90 font-semibold text-lg px-8 py-6"
            >
              Start Path B – Begin Your Health Check
            </Button>
            <p className="mt-4 text-white/70 text-sm">
              <a href="/how-nimara-works" className="underline hover:text-white">
                Not sure if this is right? See other options.
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
            <h2 className="text-3xl md:text-4xl font-bold text-nimara-navy mb-4 text-center">
              Is Path B a good fit?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              This is for organizations ready to build, not just fix.
            </p>
            
            <p className="text-nimara-navy font-medium mb-6">
              Path B is a match if at least one of these sounds like you:
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "We've outgrown our current systems and need to professionalize operations.",
                "Funders keep asking about our capacity, compliance, or organizational health.",
                "We want to be seen as a fundable, scalable organization—not just a good cause.",
                "We're growing quickly and need systems that can grow with us.",
                "We're tired of putting out fires. We want to prevent them.",
                "We want an objective assessment of where we stand and a clear roadmap forward."
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-nimara-purple mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <Card className="bg-muted/50 border-muted">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-nimara-navy mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-destructive" />
                  Path B might not be right if:
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• You only have one urgent issue and need it fixed fast (try <a href="/path-a" className="text-nimara-purple underline">Path A</a>).</li>
                  <li>• You're not ready to invest 8–12 weeks in implementation.</li>
                  <li>• No one on your team can give 2–4 hours per week during the project.</li>
                  <li>• You're still figuring out your core mission and programs.</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  Not sure? Start with a <a href="/health-score" className="text-nimara-purple underline">quick Health Check</a> to see where you stand.
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
            <h2 className="text-3xl md:text-4xl font-bold text-nimara-navy mb-4 text-center">
              How Path B works
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              A structured process from assessment to implementation.
            </p>
            
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Health Check Assessment (Week 1)",
                  description: "Start with our Organizational Health Check. In about 7–9 minutes, you'll answer questions across six operational areas. You'll get:",
                  bullets: [
                    "Your NOHC (Nimara Organizational Health Check) score",
                    "A tier placement (where you are now)",
                    "Priority areas for improvement"
                  ]
                },
                {
                  step: 2,
                  title: "Consultation & Matching (Week 1–2)",
                  description: "We review your Health Check results and schedule a consultation call. Together, we'll:",
                  bullets: [
                    "Confirm your tier and priority areas",
                    "Match you with the right Nimara Practice Partner",
                    "Define scope, timeline, and deliverables",
                    "Discuss budget and any funding options"
                  ]
                },
                {
                  step: 3,
                  title: "Implementation (Weeks 3–10)",
                  description: "Your Practice Partner leads the work across your priority areas. Typical areas include:",
                  bullets: [
                    "Board & governance documentation",
                    "Financial policies and controls",
                    "HR policies and job descriptions",
                    "Fundraising and donor standards",
                    "Volunteer management systems",
                    "Data, records, and technology setup"
                  ]
                },
                {
                  step: 4,
                  title: "Full Acceptance Bundle (Weeks 11–12)",
                  description: "You receive a complete package:",
                  bullets: [
                    "All implemented policies, templates, and systems",
                    "Training materials for your team",
                    "Updated NOHC score showing improvement",
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
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-nimara-navy text-white flex items-center justify-center font-bold">
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
            
            <Card className="mt-12 bg-nimara-purple/10 border-nimara-purple/30">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-nimara-navy mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-nimara-purple" />
                  Timeline & your commitment
                </h3>
                <p className="text-muted-foreground text-sm">
                  Path B typically runs 8–12 weeks depending on scope. Your role: designate a project lead, participate in weekly check-ins (30–60 min), and help us access documents and key staff. We do the heavy lifting—you stay informed and make decisions.
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
            <h2 className="text-3xl md:text-4xl font-bold text-nimara-navy mb-4 text-center">
              What's inside the Full Acceptance Bundle?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Everything you need to run a fundable, compliant, and sustainable organization.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FileText,
                  title: "Complete policy package",
                  description: "All essential policies across governance, finance, HR, fundraising, volunteers, and data—customized for your organization."
                },
                {
                  icon: Layers,
                  title: "Operational systems",
                  description: "Templates, workflows, and tools your team can actually use day-to-day without needing external help."
                },
                {
                  icon: BarChart3,
                  title: "NOHC Score & Report",
                  description: "Your before-and-after organizational health score with detailed analysis of improvements made."
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

      {/* OPTIONAL ADD-ONS */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-nimara-navy mb-4 text-center">
              Optional add-ons
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Extend your support beyond the initial implementation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-nimara-purple/5 to-nimara-mint/5 border-nimara-purple/20">
                <CardContent className="pt-6">
                  <Badge className="mb-4 bg-nimara-purple/10 text-nimara-purple border-nimara-purple/20">
                    12-month evaluation
                  </Badge>
                  <h3 className="font-semibold text-nimara-navy mb-2">12-month evaluation & support</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Quarterly check-ins, annual NOHC re-assessment, and ongoing access to your Practice Partner for questions and adjustments.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-nimara-mint/5 to-nimara-purple/5 border-nimara-mint/20">
                <CardContent className="pt-6">
                  <Badge className="mb-4 bg-nimara-mint/20 text-nimara-navy border-nimara-mint/30">
                    Fractional Partner
                  </Badge>
                  <h3 className="font-semibold text-nimara-navy mb-2">Fractional Partner (ongoing)</h3>
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
      <section id="start-path-b" className="py-20 md:py-28 bg-nimara-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Ready to build real systems?
            </h2>
            <p className="text-lg text-white/80 mb-12 text-center max-w-2xl mx-auto">
              Start with your free Health Check to see where you stand. We'll use it to scope your Path B engagement and match you with the right Practice Partner.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4">What to expect</h3>
                <p className="text-white/70 text-sm mb-4">Path B is a partnership. Here's what you're signing up for:</p>
                <ul className="space-y-2 text-white/80 text-sm mb-6">
                  <li>• A comprehensive organizational health assessment</li>
                  <li>• A dedicated Practice Partner matched to your needs</li>
                  <li>• 8–12 weeks of focused implementation work</li>
                  <li>• Weekly check-ins (30–60 min) to stay aligned</li>
                  <li>• Complete deliverables you own and can use</li>
                  <li>• 3 months of follow-up support included</li>
                </ul>
                <p className="text-white/60 text-xs">
                  Every Path B engagement begins with the Health Check assessment.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6">
                <Button 
                  size="lg" 
                  className="w-full bg-nimara-mint text-nimara-navy hover:bg-nimara-mint/90 font-semibold text-lg py-6 mb-4"
                  asChild
                >
                  <a href="/health-score">Start Your Health Check</a>
                </Button>
                <p className="text-white/70 text-sm text-center mb-6">
                  Prefer to talk first? <a href="https://calendly.com/hello-nimara/30min" target="_blank" rel="noopener noreferrer" className="text-nimara-mint underline">Book a consultation call.</a>
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      q: "How much does Path B cost?",
                      a: "Pricing depends on scope and tier. We'll provide a clear quote after your consultation call. We also help identify funding options."
                    },
                    {
                      q: "What if we can't commit 8–12 weeks?",
                      a: "Path A might be a better fit for now. You can always start there and move to Path B later."
                    },
                    {
                      q: "Can we choose which areas to focus on?",
                      a: "Yes. Your Health Check helps prioritize, but you decide which areas matter most for your organization right now."
                    },
                    {
                      q: "What's the money-back guarantee?",
                      a: "If we don't deliver what we promised, we fix it or you don't pay for that work. Plain and simple."
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
      
    </div>
  );
};

export default PathB;
