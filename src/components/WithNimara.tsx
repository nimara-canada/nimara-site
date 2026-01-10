import { motion, useReducedMotion, Easing } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Find proof fast",
    description: "Receipts, approvals, and reports stay organized so you're not scrambling.",
  },
  {
    title: "Stay funder-ready",
    description: "Simple routines keep your records clean and easy to show.",
  },
  {
    title: "Hand over a system",
    description: "We set it up. Your team runs it without us.",
  },
];

const easeOut: Easing = [0.16, 1, 0.3, 1];

const WithNimara = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const headingVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: easeOut } 
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: easeOut },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-16 md:mb-20"
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          With Nimara, you can
        </motion.h2>

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12"
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group text-center md:text-left"
              variants={itemVariants}
            >
              <div
                className="transition-all duration-150 ease-out md:hover:-translate-y-1 md:hover:shadow-sm p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WithNimara;
