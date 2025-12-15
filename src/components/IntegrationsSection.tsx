import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, FolderOpen, Calculator, Users, CreditCard, Kanban, FileText, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Check,
    text: "Keep what's working (we don't force new software)"
  },
  {
    icon: Check,
    text: "Make things easier (clear steps, clean files, fewer mistakes)"
  },
  {
    icon: Check,
    text: "One simple system (so your team knows where things live)"
  }
];

const toolCategories = [
  { label: "Email & calendar", icon: Mail },
  { label: "Files & folders", icon: FolderOpen },
  { label: "Accounting", icon: Calculator },
  { label: "Payroll", icon: Users },
  { label: "Donors & fundraising", icon: Heart },
  { label: "Payments", icon: CreditCard },
  { label: "Project tracking", icon: Kanban },
  { label: "Forms & surveys", icon: FileText }
];

export const IntegrationsSection = () => {
  return (
    <section 
      className="py-20 md:py-28 lg:py-32 bg-background" 
      aria-labelledby="integrations-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-widest text-muted-foreground uppercase mb-4">
            Integrations
          </p>

          <h2
            id="integrations-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-[1.15] mb-5"
          >
            Works with the tools you already use
          </h2>

          <p className="text-lg text-body leading-relaxed max-w-2xl mx-auto">
            We connect to your current tools. No big switch. No "rip and replace." We help you make what you have work better.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ul className="space-y-3 max-w-md mx-auto">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                  <benefit.icon className="w-3 h-3 text-accent" />
                </span>
                <span className="text-body text-base leading-relaxed">{benefit.text}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-sm text-muted-foreground text-center mt-6 italic">
            If you're not sure what you have, that's okay—we'll help you map it.
          </p>
        </motion.div>

        {/* Tool Categories Grid */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {toolCategories.map((category, index) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="flex items-center gap-2.5 px-4 py-3 bg-card border border-border/50 rounded-xl text-sm text-foreground hover:border-border hover:shadow-sm transition-all duration-200"
              >
                <category.icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <span>{category.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button asChild size="lg" className="rounded-full px-6">
            <Link to="/book-a-call">
              Tell us what tools you use
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          
          <Link
            to="/check"
            className="group inline-flex items-center gap-1.5 text-foreground font-medium text-sm"
          >
            <span className="relative">
              Start the 4-minute check
              <span className="absolute left-0 -bottom-0.5 w-full h-px bg-foreground/30 group-hover:bg-foreground transition-colors duration-300" />
            </span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
