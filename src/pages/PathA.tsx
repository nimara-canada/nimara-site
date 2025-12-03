import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Zap, 
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
  MessageSquare
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

const PathA = () => {
  const openTypeform = () => {
    window.open(TYPEFORM_URL, "_blank");
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
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-accent/10 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-accent text-accent-foreground">
                <Zap className="w-4 h-4" />
                Path A
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Fast Help
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
                Fix one urgent problem so you can breathe again.
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Path A is for moments when something can't wait. An audit, a grant, a policy gap, a scary email from a funder.
                We come in, fix one clear problem, and leave you with a small set of tools you can actually use.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-sm text-muted-foreground">Timeline</p>
                  <p className="text-lg font-bold text-foreground">1–4 Weeks</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <Target className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-sm text-muted-foreground">Focus</p>
                  <p className="text-lg font-bold text-foreground">One Urgent Problem</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <Package className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-sm text-muted-foreground">Deliverable</p>
                  <p className="text-lg font-bold text-foreground">Mini Acceptance Bundle</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={openTypeform} className="text-lg">
                  Start Path A – 7-minute intake
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              
              <p className="mt-4 text-sm text-muted-foreground">
                Not sure if this is right?{" "}
                <Link to="/how-nimara-works" className="text-primary hover:underline">
                  See other options
                </Link>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Is Path A Right for You? */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-center">
                Is Path A a good fit?
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-8">
                Use this when you need relief, not a big project.
              </p>
              
              <p className="text-muted-foreground mb-6">
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
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                    <span className="text-foreground">"{item}"</span>
                  </li>
                ))}
              </ul>
              
              {/* Not for you block */}
              <div className="p-6 rounded-xl bg-muted border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" />
                  Path A is not a match if:
                </h3>
                <ul className="space-y-2 mb-4">
                  {[
                    "You want to redesign your whole organization at once.",
                    "You don't know what the problem is yet.",
                    "No one on your team can give 1–2 hours over the next few weeks."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-destructive">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground">
                  In those cases,{" "}
                  <Link to="/how-nimara-works" className="text-primary hover:underline">
                    Path B (system build)
                  </Link>{" "}
                  or a{" "}
                  <Link to="/organizational-health-check" className="text-primary hover:underline">
                    quick Health Check
                  </Link>{" "}
                  is better.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How Path A Works */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-center">
                How Path A works
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
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
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mini Acceptance Bundle */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-center">
                What's inside the Mini Acceptance Bundle?
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                A small, useful set of tools you can use the next day.
              </p>
              
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
                    title: "Light follow-up support (optional)",
                    description: "For some Path A projects, you can add 2–3 quick check-ins over the next 3 months. We'll tell you if that makes sense for your case."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-card border border-border"
                  >
                    <item.icon className="w-8 h-8 mb-4 text-accent" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline & Commitment */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-center">
                Timeline and what this will ask of you
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    Our side
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "We respond to your intake within 1 business day.",
                      "We propose a plan within 72 hours.",
                      "We aim to complete the work in 1–4 weeks, depending on the problem."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    Your side
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Name one main contact person.",
                      "Join 1 short scoping call and 1–2 check-ins.",
                      "Share any documents we need (policies, letters, past reports)."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <p className="text-center text-muted-foreground mt-8 italic">
                We keep your time low on purpose. You don't need to run a big project. You just need to show up for a few focused decisions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What We Need to Know */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-center">
                What we'll ask in the Path A intake
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-10">
                No long forms. Just the basics we need to help.
              </p>
              
              <div className="p-6 rounded-xl bg-card border border-border">
                <ul className="space-y-4">
                  {[
                    "What is the one urgent problem?",
                    "Who is asking for it? (A funder, an auditor, a regulator, your board.)",
                    "What is the deadline or time pressure?",
                    "Roughly how many staff do you have?",
                    "Have you tried anything already?"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground">
                      <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="mt-6 text-sm text-muted-foreground">
                  We won't ask for detailed financials or private data in this first step.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Start Path A CTA */}
        <section className="py-16 md:py-24 bg-accent/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to start Path A?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                If you're facing one clear problem and need real help, start here.
                A Nimara team member will review your intake and reply within <strong>1 business day</strong>.
              </p>
              
              <Button size="lg" onClick={openTypeform} className="text-lg">
                Start Path A – 7-minute intake
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <p className="mt-6 text-sm text-muted-foreground">
                Prefer to talk first?{" "}
                <a 
                  href={CALENDLY_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Book a short call instead
                </a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center">
                Quick questions
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
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
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-foreground hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
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
