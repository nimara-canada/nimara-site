import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const FinalCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-36 bg-[#0B1120] text-white overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
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
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/50">
              Ready to Start?
            </span>
            <div className="h-px w-16 bg-white/20" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6"
          >
            Ready To Get
            <br />
            <span className="font-normal italic text-white/70">System-Strong?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/60 leading-relaxed mb-12 max-w-xl"
          >
            Book A Free 15-Minute Discovery Call. We'll Figure Out If Nimara Is The Right Fit—No Pressure, No Pitch.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-8"
          >
            <a
              href="/book-a-call"
              className="group inline-flex items-center gap-3 text-white font-medium"
            >
              <span className="group-hover:text-accent transition-colors">Book a Discovery Call</span>
              <span className="w-8 h-px bg-white group-hover:w-12 group-hover:bg-accent transition-all duration-300" />
            </a>

            <a
              href="mailto:hello@nimara.ca"
              className="group inline-flex items-center gap-3 text-white/60 font-medium"
            >
              <span className="group-hover:text-accent transition-colors">Email us instead</span>
              <span className="w-8 h-px bg-white/40 group-hover:w-12 group-hover:bg-accent transition-all duration-300" />
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 pt-8 border-t border-white/10 text-sm text-white/40"
          >
            Trusted by nonprofits across Canada · Money-back guarantee on system builds
          </motion.p>
        </div>
      </div>
    </section>
  );
};
