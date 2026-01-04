import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const bullets = [
  "We help nonprofits set up simple systems for money, files, and reporting.",
  "Start with Grant Setup (about 2 weeks) or an Organization Check (2–4 weeks).",
  "You keep what we build — and reuse it for every grant."
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export const TLDR = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-secondary-background"
    >
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white leading-[1.1]">
              TL;DR
            </h2>
          </motion.div>

          {/* Bullets */}
          <motion.div variants={containerVariants} className="space-y-4 mb-10">
            {bullets.map((bullet, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  {bullet}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <Link 
              to="/start-here"
              className="inline-flex items-center gap-2 text-accent font-medium group"
            >
              <span className="relative">
                Get Started
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
