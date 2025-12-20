import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-secondary-background text-white overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} 
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-6"
          >
            Ready to Start?
          </motion.span>

          {/* Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] mb-6"
          >
            Ready to get
            <br />
            <span className="text-white/60">system-strong?</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl"
          >
            Book a free 15-minute discovery call. We'll figure out if Nimara is the right fit—no pressure, no pitch.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="/book-a-call"
              className="group inline-flex items-center gap-2 h-12 px-6 bg-primary text-primary-foreground text-sm font-semibold rounded-[10px] transition-all duration-200 hover:bg-primary/90 hover:shadow-md"
            >
              <span>Book a discovery call</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>

            <a
              href="mailto:hello@nimara.ca"
              className="group inline-flex items-center gap-2 h-12 px-6 text-white/70 text-sm font-semibold border border-white/20 rounded-[10px] transition-all duration-200 hover:text-white hover:border-white/40 hover:bg-white/5"
            >
              <span>Email us instead</span>
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/10 text-sm text-white/40"
          >
            Trusted by nonprofits across Canada · Money-back guarantee on system builds
          </motion.p>
        </div>
      </div>
    </section>
  );
};
