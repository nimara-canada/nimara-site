import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const bullets = [
  "We help nonprofits set up simple systems for money, files, and reporting.",
  "Start with Grant Setup (about 2 weeks) or an Organization Check (2–4 weeks).",
  "You keep what we build — and reuse it for every grant."
];

export const TLDR = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-secondary-background relative overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        aria-hidden="true" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.08) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} 
      />

      <div className="relative container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-10"
        >
          TL;DR
        </motion.h2>

        {/* Bullets */}
        <div className="space-y-4 mb-10">
          {bullets.map((bullet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-accent" strokeWidth={3} />
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                {bullet}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            to="/start-here"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-secondary-background font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
