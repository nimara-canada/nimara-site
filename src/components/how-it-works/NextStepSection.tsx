import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from '@/constants/urls';

const NextStepSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
      aria-labelledby="next-step-heading"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Ready?
          </p>
          <h2 
            id="next-step-heading"
            className="text-[2.25rem] sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] text-foreground mb-10"
          >
            Next <span className="text-primary">step</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Primary CTA */}
            <motion.a
              href="/capacity-buildout"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold rounded-full bg-nim-purple text-white hover:bg-nim-purple/90 transition-all duration-200"
            >
              Book a free call
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            {/* Secondary CTA */}
            <motion.a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold rounded-full bg-nim-navy text-white hover:bg-nim-navy/90 transition-all duration-200"
            >
              Try the 6-minute check
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-muted-foreground"
          >
            For Canadian nonprofits with 0–50 staff.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default NextStepSection;
