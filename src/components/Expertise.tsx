import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TYPEFORM_HEALTH_CHECK_URL } from '@/constants/urls';

const domains = [
  { 
    title: "Board & Governance", 
    outcome: "Your board runs with clear records — no more chasing people.",
  },
  { 
    title: "Money & Grants", 
    outcome: "Find proof for funders in minutes, not days.",
  },
  { 
    title: "People & HR", 
    outcome: "New staff get up to speed fast. Nothing stuck in anyone's head.",
  },
  { 
    title: "Programs & Ops", 
    outcome: "Show what you're doing and whether it's working.",
  },
  { 
    title: "Fundraising & Donors", 
    outcome: "Know who gave, when, and how to keep them giving.",
  },
  { 
    title: "Volunteers", 
    outcome: "Volunteers know what they signed up for — and stay longer.",
  },
  { 
    title: "Tools & Files", 
    outcome: "Anyone on your team can find what they need.",
  }
];

export const Expertise = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  const sectionY = useTransform(smoothProgress, [0, 0.15], [60, 0]);
  const sectionOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background overflow-hidden scroll-mt-20"
      aria-labelledby="expertise-heading"
      id="expertise"
    >
      <motion.div 
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y: sectionY, opacity: sectionOpacity }}
      >
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-6"
          >
            The 7 Domains
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="expertise-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] text-foreground mb-6"
          >
            7 areas. You choose which ones.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Every nonprofit runs on the same foundations. Pick the areas where you need the most help — we'll handle the rest.
          </motion.p>
        </div>

        {/* Domain List */}
        <div className="space-y-0">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
              className="group grid grid-cols-12 gap-4 lg:gap-8 py-6 lg:py-8 border-t border-border last:border-b"
            >
              {/* Number */}
              <div className="col-span-2 sm:col-span-1">
                <span className="text-3xl lg:text-4xl font-light text-muted-foreground/40 group-hover:text-primary/60 transition-colors duration-300">
                  {index + 1}
                </span>
              </div>
              
              {/* Content */}
              <div className="col-span-10 sm:col-span-11 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-8">
                <h3 className="text-lg lg:text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {domain.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground sm:text-right sm:max-w-md">
                  {domain.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 pt-8"
        >
          <p className="text-muted-foreground mb-4">
            Not sure which areas you need?
          </p>
          <a
            href={TYPEFORM_HEALTH_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors group"
          >
            Take the Free Health Check — we'll show you where to start
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};