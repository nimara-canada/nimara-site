import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";
import { useRef } from "react";

export const ReadyToWork = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4"
        >
          Next Steps
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight mb-6"
        >
          Ready to get <span className="text-primary">unstuck</span>?
        </motion.h2>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
        >
          Pick a starting point. We'll help you build working basics.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Link 
            to="/start-here" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-nim-purple text-white font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <a
            href={TYPEFORM_HEALTH_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-nim-navy text-white font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          >
            Try the free check
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Email line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="mailto:hello@nimara.ca"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Prefer email? <span className="underline underline-offset-4">hello@nimara.ca</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
