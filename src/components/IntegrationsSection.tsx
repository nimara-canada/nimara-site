import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const toolCategories = [
  "Email & Calendar",
  "Accounting",
  "Payroll",
  "Donors & CRM",
  "Payments",
  "Project Tracking"
];

export const IntegrationsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-background overflow-hidden" 
      aria-labelledby="integrations-heading"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-12 lg:mb-16">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6"
          >
            Works With Your
            <br />
            <span className="font-normal italic text-muted-foreground">Existing Tools</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-lg"
          >
            No big switch. We connect to what you already use and help you make it work better.
          </motion.p>
        </div>

        {/* Tool Categories as Tags */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {toolCategories.map((category, index) => (
            <motion.span
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="px-4 py-2 border border-border rounded-full text-sm text-foreground hover:border-primary/50 hover:bg-muted/30 transition-colors duration-300"
            >
              {category}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-border"
        >
          <Link
            to="/integrations"
            className="group inline-flex items-center gap-3 text-foreground font-medium"
          >
            <span className="group-hover:text-primary transition-colors">See all integrations</span>
            <span className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};