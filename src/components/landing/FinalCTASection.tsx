import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";
import ProofTrailStrip from "./ProofTrailStrip";

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 lg:py-40 bg-primary"
      aria-labelledby="final-cta-heading"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Proof Trail Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <ProofTrailStrip variant="muted" size="sm" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          id="final-cta-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 tracking-tight leading-tight"
        >
          Ready to show funders <br className="hidden sm:block" />
          where the money went?
        </motion.h2>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto"
        >
          Start with one area. Build from there.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary CTA */}
          <a 
            href={CALENDLY_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-accent/90 transition-all duration-200 shadow-[0_0_30px_rgba(172,252,227,0.4)] hover:shadow-[0_0_40px_rgba(172,252,227,0.6)] hover:scale-105"
          >
            Book a free call
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>

          {/* Secondary CTA */}
          <a 
            href={TYPEFORM_HEALTH_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-medium transition-colors"
          >
            Take the 6-minute check
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </motion.div>

        {/* Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-sm text-primary-foreground/50"
        >
          For Canadian nonprofits with 0–50 staff. Not an audit firm.
        </motion.p>
      </div>
    </section>
  );
}
