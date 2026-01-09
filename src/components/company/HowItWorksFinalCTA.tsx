import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const HowItWorksFinalCTA: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-secondary-background text-white overflow-hidden"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {/* Label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/50">
              Ready to Start?
            </span>
            <div className="h-px w-16 bg-white/20" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6 text-white">
            <span className="font-medium">Ready to be proof-ready</span>
            <br />
            <span className="font-normal italic text-white/70">before funders ask?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
            Let's set up the systems your nonprofit actually needs — so your team can stop scrambling.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col items-start gap-4">
            <a
              href="https://calendly.com/thabani-nimara/fit-call"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-white font-medium"
            >
              <span className="group-hover:text-accent transition-colors">Book a 20-min Fit Call</span>
              <span className="w-8 h-px bg-white group-hover:w-12 group-hover:bg-accent transition-all duration-300" />
            </a>

            <a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-accent transition-colors"
            >
              Or try the Free Health Check →
            </a>

            <p className="text-sm text-white/50 mt-2">
              Prefer email?{" "}
              <a 
                href="mailto:hello@nimara.ca" 
                className="hover:text-accent transition-colors underline-offset-2 hover:underline"
              >
                hello@nimara.ca
              </a>
            </p>

            <p className="text-xs text-white/30 mt-2">
              No pressure. We'll tell you the best next step.
            </p>
          </div>

          {/* Trust line */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-white/40">
              Trusted by nonprofits across Canada · Money-back guarantee on every build
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksFinalCTA;
