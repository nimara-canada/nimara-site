import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
      className="relative py-24 md:py-32 bg-muted overflow-hidden" 
      aria-labelledby="integrations-heading"
    >
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-6"
          >
            Integrations
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            id="integrations-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] mb-6"
          >
            Works with your
            <br />
            <span className="text-body-muted">existing tools</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-body max-w-lg"
          >
            No big switch. We connect to what you already use and help you make it work better.
          </motion.p>
        </div>

        {/* Tool Categories as Tags */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {toolCategories.map((category, index) => (
            <motion.span
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              className="px-5 py-2.5 bg-card border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary/50 hover:shadow-sm transition-all duration-200"
            >
              {category}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-10 border-t border-border"
        >
          <Link
            to="/integrations"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-150"
          >
            <span>See all integrations</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};