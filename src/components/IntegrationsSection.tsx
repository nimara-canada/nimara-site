import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const toolCategories = [
  "Email & calendar",
  "Files & folders",
  "Accounting",
  "Payroll",
  "Donors & fundraising",
  "Payments",
  "Project tracking",
  "Forms & surveys"
];

export const IntegrationsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 sm:py-40 lg:py-48 bg-background overflow-hidden" 
      aria-labelledby="integrations-heading"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Integrations
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="integrations-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8"
          >
            Works with the tools
            <br />
            <span className="font-normal italic text-muted-foreground">you already use</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl"
          >
            We connect to your current tools. No big switch. No "rip and replace." 
            We help you make what you have work better.
          </motion.p>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex flex-wrap gap-6">
            {["Keep what's working", "Make things easier", "One simple system"].map((benefit, index) => (
              <span 
                key={index}
                className="inline-flex items-center gap-2 text-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {benefit}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tool Categories */}
        <div className="space-y-0 mb-16">
          {toolCategories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.04 }}
              className="group"
            >
              <div className="flex items-center justify-between py-5 border-t border-border hover:bg-muted/30 transition-colors duration-300 -mx-4 px-4">
                <span className="text-lg text-foreground group-hover:text-primary transition-colors">
                  {category}
                </span>
                <span className="text-2xl font-extralight text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>

        {/* Helper text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-muted-foreground mb-12"
        >
          Not sure what you have? We'll help you map it.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-8">
            <Link
              to="/book-a-call"
              className="group inline-flex items-center gap-3 text-foreground font-medium"
            >
              <span className="group-hover:text-primary transition-colors">Tell us what tools you use</span>
              <span className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
            </Link>
            
            <Link
              to="/check"
              className="group inline-flex items-center gap-3 text-muted-foreground font-medium"
            >
              <span className="group-hover:text-primary transition-colors">Start the 4-minute check</span>
              <span className="w-8 h-px bg-muted-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
