import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const FinalCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-36 bg-secondary text-secondary-foreground overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--secondary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--secondary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-secondary-foreground/50">
              Ready to Start?
            </span>
            <div className="h-px w-16 bg-secondary-foreground/20" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6"
          >
            Ready to get
            <br />
            <span className="font-normal italic text-secondary-foreground/70">system-strong?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-secondary-foreground/60 leading-relaxed mb-12 max-w-xl"
          >
            Book a free 15-minute discovery call. We'll figure out if Nimara is the right fit—no pressure, no pitch.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-8"
          >
            <a
              href="/book-a-call"
              className="group inline-flex items-center gap-3 text-secondary-foreground font-medium"
            >
              <span className="group-hover:text-accent transition-colors">Book a Discovery Call</span>
              <span className="w-8 h-px bg-secondary-foreground group-hover:w-12 group-hover:bg-accent transition-all duration-300" />
            </a>

            <a
              href="mailto:hello@nimara.ca"
              className="group inline-flex items-center gap-3 text-secondary-foreground/60 font-medium"
            >
              <span className="group-hover:text-accent transition-colors">Email us instead</span>
              <span className="w-8 h-px bg-secondary-foreground/40 group-hover:w-12 group-hover:bg-accent transition-all duration-300" />
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 pt-8 border-t border-secondary-foreground/10 text-sm text-secondary-foreground/40"
          >
            Trusted by nonprofits across Canada · Money-back guarantee on system builds
          </motion.p>
        </div>
      </div>
    </section>
  );
};
