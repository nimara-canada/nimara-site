import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const guardrails = [
  {
    label: "Standard scopes",
    description: "Every project uses a written Statement of Work (SOW) with clear deliverables, timelines, and fees.",
  },
  {
    label: "Fix-first approach",
    description: "If a deliverable is off, we try to fix it first. If we cannot fix it, we may refund the fee for that part of the work.",
  },
  {
    label: "14-day review + 3-month support",
    description: "You have 14 days after project completion to flag issues, plus about three months of light support so systems do not die on day one.",
  },
  {
    label: "Plain-language Refund Policy",
    description: "We publish a public refund and fix policy so nonprofits, funders, and partners know what to expect.",
  },
];

const QualityAndRefundsAlt: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Editorial Header */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
                Our Guardrails
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-[1.1]">
                How we manage quality,{" "}
                <span className="italic">risk, and refunds</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-7 lg:pt-8">
              <p className="text-lg text-body-muted leading-relaxed">
                We design Nimara so that support is clear, fair, and safe for organizations, 
                funders, and our Practice Partners. These guardrails keep everyone on the same page.
              </p>
            </motion.div>
          </div>

          {/* Guardrails List */}
          <motion.div 
            variants={containerVariants}
            className="space-y-4 mb-16"
          >
            {guardrails.map((item, index) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-lg font-serif font-medium text-primary">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-body-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0 self-center hidden sm:block">
                    <Shield className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary/30 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <Link
              to="/refund-policy"
              className="inline-flex items-center gap-2 text-primary font-medium group"
            >
              <span className="relative">
                Read the full refund policy
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityAndRefundsAlt;
