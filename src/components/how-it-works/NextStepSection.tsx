import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from '@/constants/urls';

const NextStepSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 lg:py-24 bg-background overflow-hidden"
      aria-labelledby="next-step-heading"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 
            id="next-step-heading"
            className="text-2xl sm:text-3xl font-light tracking-tight mb-8"
          >
            Next <span className="font-semibold text-primary">step</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-base font-medium"
            >
              <a 
                href={CALENDLY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a free call
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-medium"
            >
              <a 
                href={TYPEFORM_HEALTH_CHECK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Try the 6-minute check
              </a>
            </Button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
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
