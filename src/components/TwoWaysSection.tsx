import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Clean card component
const PathCard = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative group h-full"
    >
      <div className="relative h-full rounded-2xl border border-border/40 bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-border/60">
        {/* Accent stripe on right side */}
        <div 
          className="absolute -top-4 -right-4 w-28 h-40 bg-secondary-background/10"
          style={{ 
            borderRadius: '0 0 0 100%',
          }} 
        />
        
        {/* Content */}
        <div className="relative p-8 lg:p-10 h-full flex flex-col">{children}</div>
      </div>
    </motion.div>
  );
};

// Simple pill badge
const PillBadge = ({ 
  children, 
  variant = "accent" 
}: { 
  children: React.ReactNode; 
  variant?: "accent" | "primary";
}) => {
  const bgColor = variant === "primary" ? "bg-primary/10" : "bg-teal-50";
  const textColor = variant === "primary" ? "text-primary" : "text-teal-700";
  const borderColor = variant === "primary" ? "border-primary/20" : "border-teal-200";
  
  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-full ${bgColor} border ${borderColor} text-sm font-medium ${textColor}`}>
      {children}
    </span>
  );
};

// Checkmark list item
const CheckItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-start gap-3">
      <svg className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-body text-sm">{children}</span>
    </li>
  );
};

// Step item for the ladder
const StepItem = ({ 
  step, 
  title, 
  description 
}: { 
  step: number; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
        <span className="text-sm font-semibold text-primary">{step}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-foreground text-sm">{title}</p>
        <p className="text-body-muted text-sm">{description}</p>
      </div>
    </div>
  );
};

export const TwoWaysSection = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate(path), 150);
  };

  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Two ways to start
          </motion.h2>

          <motion.p
            className="text-subtitle max-w-xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pick what you need: fix one urgent problem, or set up your core systems.
          </motion.p>

          <motion.a
            href="/organizational-health-check"
            className="inline-flex items-center gap-2 text-primary font-medium hover:opacity-80 transition-opacity text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Not sure? Start the free 4-minute check
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Urgent Fix */}
          <PathCard delay={0.1}>
            {/* Badge */}
            <div className="mb-5">
              <PillBadge variant="accent">Urgent Fix</PillBadge>
            </div>

            {/* Title & timeline */}
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-1">
              Urgent Fix
            </h3>
            <p className="text-sm text-teal-700 font-medium mb-5">1–4 weeks • One problem, one clear fix</p>

            {/* Description */}
            <p className="text-body leading-relaxed mb-6">
              Fix one urgent issue fast. Grant deadline? Board issue? HR mess? We jump in, solve the problem, and leave you with a simple way to keep it running.
            </p>

            {/* Best if */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground mb-3">Best if:</p>
              <ul className="space-y-2">
                <CheckItem>A deadline is coming up</CheckItem>
                <CheckItem>Something is broken right now</CheckItem>
                <CheckItem>You need a clear fix this month</CheckItem>
                <CheckItem>You want help without a long process</CheckItem>
              </ul>
            </div>

            {/* What you get */}
            <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 mb-8">
              <p className="text-sm font-medium text-foreground mb-1">What you get:</p>
              <p className="text-body-muted text-sm">
                A working fix, the files/templates you need, and a simple way to run it.
              </p>
            </div>

            {/* CTA - pushed to bottom */}
            <div className="mt-auto">
              <Button 
                onClick={() => handleNavigate("/book-a-call")}
                className="w-full bg-accent text-secondary-background hover:bg-accent/90 font-semibold"
                size="lg"
              >
                Get urgent help
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </PathCard>

          {/* Card 2: Build My Systems */}
          <PathCard delay={0.2}>
            {/* Badge */}
            <div className="mb-5">
              <PillBadge variant="primary">Build My Systems</PillBadge>
            </div>

            {/* Title & timeline */}
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-1">
              Build My Systems
            </h3>
            <p className="text-sm text-primary font-medium mb-5">Start free • Upgrade only if you want us to go deeper</p>

            {/* Description */}
            <p className="text-body leading-relaxed mb-6">
              For when things feel messy in more than one area—board, money, people, or programs.
            </p>

            {/* How it works - 3-step ladder */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground mb-4">How it works:</p>
              <div className="space-y-4">
                <StepItem 
                  step={1} 
                  title="Free 4-minute check (free)" 
                  description="See what's working, what's missing, and your next step."
                />
                <StepItem 
                  step={2} 
                  title="Deep check (paid, from $2,500)" 
                  description="We review your real documents and give you a clear plan."
                />
                <StepItem 
                  step={3} 
                  title="Full setup (8–12 weeks)" 
                  description="We set up the systems with you, so it's easier to run day-to-day."
                />
              </div>
            </div>

            {/* CTA - pushed to bottom */}
            <div className="mt-auto">
              <Button 
                onClick={() => handleNavigate("/organizational-health-check")}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold mb-3"
                size="lg"
              >
                Start the free 4-minute check
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                No pressure. The free check stands on its own. Upgrade only if it helps.
              </p>
            </div>
          </PathCard>
        </div>

        {/* Bottom CTA section */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-foreground font-medium mb-1">Still not sure?</p>
          <p className="text-body-muted text-sm max-w-lg mx-auto mb-4">
            We can help you figure out which path makes sense on a quick call.
          </p>
          <button
            onClick={() => handleNavigate("/book-a-call")}
            className="inline-flex items-center gap-2 text-primary font-medium hover:opacity-80 transition-opacity"
          >
            Book a free call
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoWaysSection;
