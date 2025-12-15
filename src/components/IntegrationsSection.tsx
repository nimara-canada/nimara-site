import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, FolderOpen, Calculator, Users, CreditCard, Kanban, FileText, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  { text: "Keep what's working" },
  { text: "Make things easier" },
  { text: "One simple system" }
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
      className="py-24 md:py-32 lg:py-40 bg-background relative overflow-hidden" 
      aria-labelledby="integrations-heading"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header - asymmetric editorial layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-20">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs tracking-[0.2em] text-accent uppercase mb-6 font-medium">
              Integrations
            </p>

            <h2
              id="integrations-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground leading-[1.1] mb-6"
            >
              Works with the tools{" "}
              <span className="italic text-accent">you already use</span>
            </h2>

            <p className="text-lg md:text-xl text-body leading-relaxed max-w-xl">
              We connect to your current tools. No big switch. No "rip and replace." We help you make what you have work better.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:pt-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/25 group-hover:scale-105">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-foreground text-lg font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground mt-8 pl-12 italic">
              Not sure what you have? We'll help you map it.
            </p>
          </motion.div>
        </div>

        {/* Tool Categories - Premium card grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {toolCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative bg-card border border-border rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 cursor-default"
                >
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20">
                      <IconComponent className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-foreground font-medium text-sm md:text-base">{category.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-base shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300">
            <Link to="/book-a-call">
              Tell us what tools you use
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          
          <Link
            to="/check"
            className="group inline-flex items-center gap-2 text-foreground/80 hover:text-foreground font-medium text-sm transition-colors duration-300"
          >
            <span className="relative">
              Start the 4-minute check
              <span className="absolute left-0 -bottom-0.5 w-full h-px bg-foreground/30 group-hover:bg-accent transition-colors duration-300" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
