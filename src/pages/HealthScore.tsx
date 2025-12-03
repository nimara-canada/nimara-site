import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Clock, Users, Shield, FileText, BarChart3, Star, ChevronDown, ArrowRight, Check, ClipboardList } from "lucide-react";
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
    description: "A simple snapshot of your governance, finance, people, operations, and programs – not a 20-page report."
  },
  {
    icon: BarChart3,
    title: "Right-size your next move",
    description: "See if you need a quick fix, a deeper system build, or just a few small tweaks."
  },
  {
    icon: Star,
    title: "Something you can share",
    description: "A short summary you can send to your board, funder, or team to explain what's going on."
  }
];

const steps = [
  {
    number: 1,
    title: "Answer a few short questions (7–9 minutes)",
    description: "You tell us how things feel and rate a few areas of your organization. You can skip anything you're not ready to answer."
  },
  {
    number: 2,
    title: "We review your answers (within 1 business day)",
    description: "A Nimara staff member (not a bot) reads what you shared and looks for patterns."
  },
  {
    number: 3,
    title: "We send your health score and summary",
    description: "You get a short email with your score, a one-page view of your strengths and risks, and 1–2 suggested next moves."
  },
  {
    number: 4,
    title: "You decide what to do next",
    description: "You can take the summary and run with it, or talk with us about support options."
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
    // Load Typeform embed script
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

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-background">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center">
              {/* Tag pill */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/30 text-foreground text-xs font-semibold uppercase tracking-wider rounded-full">
                  <span>🩺</span> Health Check
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              >
                Get your Nimara Health Score
              </motion.h1>

              {/* Subheading */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
              >
                See where your organization is strong, where it's fragile, and what kind of support actually makes sense.
              </motion.p>

              {/* Info chips */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm border border-border">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Quick: ~7–9 minutes</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm border border-border">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Human review in 1 business day</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm border border-border">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Built for small and mid-size nonprofits</span>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <Button size="lg" onClick={scrollToForm} className="text-base sm:text-lg px-6 sm:px-8">
                  Start the health check (7–9 minutes)
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <div>
                  <Link 
                    to="/book-a-call" 
                    className="text-muted-foreground hover:text-foreground underline underline-offset-4 text-sm font-medium transition-colors"
                  >
                    Prefer a short call instead? Book a chat.
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why get a health score */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why get a health score?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                You already know things are busy. This just puts the picture in one place.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-card p-6 md:p-8 rounded-3xl shadow-soft border border-border"
                >
                  <div className="w-12 h-12 bg-accent/30 rounded-2xl flex items-center justify-center mb-4 text-primary">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What you get in return */}
        <section className="py-16 md:py-20 bg-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                  What you get in return
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  You won't see a live dashboard at the end. Instead, a Nimara team member reads your responses and sends a simple summary within 1 business day.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "Your Nimara Health Score", desc: "A plain-language rating of your overall health, plus which areas are solid and which are fragile." },
                    { title: "Top 3 risks and bright spots", desc: "Where you're most exposed (for audit, funding, or burnout) and what's already working." },
                    { title: "1–2 realistic next steps", desc: "A suggestion that fits your size and capacity – from DIY tools to fast fixes to deeper system work." }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-8 h-8 bg-accent/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mt-8 italic">
                  No pressure, no upsell. You can use the summary on your own or with Nimara.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="bg-card rounded-3xl shadow-lg p-6 sm:p-8 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <BarChart3 className="w-6 h-6 text-primary" />
                    <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Sample Report Preview
                    </span>
                  </div>
                  
                  {/* Mock report preview */}
                  <div className="space-y-4">
                    <div className="h-3 bg-muted rounded-full animate-pulse" />
                    <div className="h-3 bg-muted rounded-full w-3/4" />
                    <div className="h-20 bg-gradient-to-r from-accent/30 to-accent/20 rounded-xl" />
                    <div className="h-3 bg-muted rounded-full w-5/6" />
                    <div className="h-3 bg-muted rounded-full w-2/3" />
                  </div>

                  <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl sm:text-2xl shadow-lg animate-pulse">
                    92
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                How the health check works
              </h2>
            </motion.div>

            <div className="relative">
              {/* Connection line for desktop */}
              <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-border via-primary/30 to-border" />
              
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mb-4 relative z-10">
                        {step.number}
                      </div>
                      <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Embedded form */}
        <section id="health-check-form" className="py-16 md:py-20 bg-accent/10 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to see your health score?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Take 7–9 minutes to complete the check. We'll send your summary within 1 business day.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border"
            >
              <div 
                data-tf-live="01JMFHG9N10TSBPJYKJHKP4BHZ"
                style={{ width: '100%', height: '600px' }}
              />
            </motion.div>

            <p className="text-sm text-muted-foreground text-center mt-6 italic">
              You can pause and come back in your browser. You can skip any question you're not ready to answer.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Frequently asked questions
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
                  className="bg-card rounded-2xl border border-border overflow-hidden"
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold text-foreground text-sm sm:text-base pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40' : 'max-h-0'}`}>
                    <div className="px-5 sm:px-6 pb-4">
                      <p className="text-sm sm:text-base text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-accent/20 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Ready to get clarity?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Join 200+ nonprofits who've used the health check to understand their next move.
              </p>
              <Button size="lg" onClick={scrollToForm} className="text-base sm:text-lg px-6 sm:px-8">
                Get your health score now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HealthScore;
