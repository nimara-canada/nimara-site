import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMotionPreferences, DROPBOX_EASING_CSS } from "@/hooks/use-scroll-reveal";

// Dropbox easing as array for framer-motion
const DROPBOX_EASE = [0.16, 1, 0.3, 1] as const;

export const FinalCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { reducedMotion } = useMotionPreferences();

  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Dramatic slide-up with scale
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: DROPBOX_EASE,
      },
    },
  };

  // Horizontal line reveal
  const lineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 1,
        ease: DROPBOX_EASE,
        delay: 0.3,
      },
    },
  };

  // Background grid fade-in with scale
  const bgVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 0.03,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: DROPBOX_EASE,
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-36 bg-secondary-background text-white overflow-hidden"
    >
      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0" 
        aria-hidden="true"
        initial={reducedMotion ? false : "hidden"}
        animate={isInView ? "visible" : "hidden"}
        variants={bgVariants}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </motion.div>

      {/* Gradient overlay for depth */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" 
        aria-hidden="true"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl"
          initial={reducedMotion ? false : "hidden"}
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Label with line */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/50">
              Ready to Start?
            </span>
            <motion.div 
              className="h-px w-16 bg-white/20"
              variants={lineVariants}
            />
          </motion.div>

          {/* Headline with dramatic entrance */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6"
          >
            <motion.span
              initial={reducedMotion ? false : { opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: DROPBOX_EASE }}
            >
              Ready To Get
            </motion.span>
            <br />
            <motion.span 
              className="font-normal italic text-white/70 inline-block"
              initial={reducedMotion ? false : { opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease: DROPBOX_EASE }}
            >
              System-Strong?
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-white/60 leading-relaxed mb-12 max-w-xl"
          >
            Book A Free 15-Minute Discovery Call. We'll Figure Out If Nimara Is The Right Fit—No Pressure, No Pitch.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start gap-8"
          >
            <motion.a
              href="/book-a-call"
              className="group inline-flex items-center gap-3 text-white font-medium"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2, ease: DROPBOX_EASE }}
            >
              <span className="group-hover:text-accent transition-colors">Book a Discovery Call</span>
              <motion.span 
                className="h-px bg-white group-hover:bg-accent" 
                initial={{ width: 32 }}
                whileHover={{ width: 48 }}
                transition={{ duration: 0.2, ease: DROPBOX_EASE }}
                style={{ transition: `background-color 200ms ${DROPBOX_EASING_CSS}` }}
              />
            </motion.a>

            <motion.a
              href="mailto:hello@nimara.ca"
              className="group inline-flex items-center gap-3 text-white/60 font-medium"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2, ease: DROPBOX_EASE }}
            >
              <span className="group-hover:text-accent transition-colors">Email us instead</span>
              <motion.span 
                className="h-px bg-white/40 group-hover:bg-accent" 
                initial={{ width: 32 }}
                whileHover={{ width: 48 }}
                transition={{ duration: 0.2, ease: DROPBOX_EASE }}
                style={{ transition: `background-color 200ms ${DROPBOX_EASING_CSS}` }}
              />
            </motion.a>
          </motion.div>

          {/* Trust line with border reveal */}
          <motion.div
            className="mt-20 pt-8 relative"
            variants={itemVariants}
          >
            <motion.div
              className="absolute top-0 left-0 right-0 h-px bg-white/10"
              initial={reducedMotion ? false : { scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: DROPBOX_EASE }}
            />
            <p className="text-sm text-white/40">
              Trusted by nonprofits across Canada · Money-back guarantee on system builds
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
