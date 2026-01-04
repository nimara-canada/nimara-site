import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export const FunderWaitlist = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      id="funder-waitlist"
      className="py-20 sm:py-24 lg:py-32 bg-accent/5"
    >
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
              For Partners
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-[1.1] mb-6">
              For partners{" "}
              <span className="italic">and funders</span>
            </h2>
          </motion.div>

          {/* Copy */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-lg text-body-muted leading-relaxed max-w-2xl mx-auto mb-4">
              We're building a simple way for capacity-building dollars to turn into real, reusable systems — not one-off fixes.
            </p>
            <p className="text-lg text-body-muted leading-relaxed max-w-2xl mx-auto">
              If you fund capacity building and want to learn how we support nonprofits, we'd love to connect.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              asChild
              className="group"
            >
              <a href="mailto:hello@nimara.ca" className="gap-2">
                <Mail className="w-4 h-4" />
                Email us
              </a>
            </Button>
            
            <a 
              href="#newsletter"
              className="inline-flex items-center gap-2 text-primary font-medium group"
            >
              <span className="relative">
                Join updates
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
