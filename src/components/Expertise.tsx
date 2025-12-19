import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const domains = [
  { title: "Board & Governance", desc: "Clear roles, rules, and meetings" },
  { title: "Money & Compliance", desc: "Budgets, controls, and audit readiness" },
  { title: "People & HR", desc: "Hiring, policies, and performance" },
  { title: "Programs & Services", desc: "Delivery, safety, and reviews" },
  { title: "Fundraising & Donors", desc: "Gifts, receipting, and records" },
  { title: "Volunteers", desc: "Agreements, training, and safety" },
  { title: "Systems & Records", desc: "Files, dashboards, and data protection" }
];

export const Expertise = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-muted/30 overflow-hidden"
      aria-labelledby="expertise-heading"
      id="expertise"
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
              What We Cover
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="expertise-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6"
          >
            Seven Domains
            <br />
            <span className="font-normal italic text-muted-foreground">That Keep Nonprofits Running</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-lg"
          >
            The critical systems that keep your nonprofit safe, fundable, and easier to run.
          </motion.p>
        </div>

        {/* Domain Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="group p-5 bg-background border border-border rounded-lg hover:border-primary/30 hover:shadow-sm transition-all duration-300"
            >
              <span className="text-xs font-medium text-primary/60 mb-2 block">
                0{index + 1}
              </span>
              <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                {domain.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {domain.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-border"
        >
          <a
            href="#hero-form"
            className="group inline-flex items-center gap-3 text-foreground font-medium"
          >
            <span className="group-hover:text-primary transition-colors">See where you stand in each area</span>
            <span className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};