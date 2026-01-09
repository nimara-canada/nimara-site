import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';

import { 
  Users, 
  DollarSign, 
  UserCheck, 
  Briefcase, 
  Heart, 
  HandHeart, 
  Database,
  ArrowRight
} from 'lucide-react';

const domains = [
  { 
    title: "Board & Governance", 
    desc: "Your board runs with clear records — no more chasing people.",
    icon: Users,
  },
  { 
    title: "Money & Grants", 
    desc: "Find proof for funders in minutes, not days.",
    icon: DollarSign,
  },
  { 
    title: "People & HR", 
    desc: "New staff get up to speed fast. Nothing stuck in anyone's head.",
    icon: UserCheck,
  },
  { 
    title: "Programs & Ops", 
    desc: "Show what you're doing and whether it's working.",
    icon: Briefcase,
  },
  { 
    title: "Fundraising & Donors", 
    desc: "Know who gave, when, and how to keep them giving.",
    icon: Heart,
  },
  { 
    title: "Volunteers", 
    desc: "Volunteers know what they signed up for — and stay longer.",
    icon: HandHeart,
  },
  { 
    title: "Tools & Files", 
    desc: "Anyone on your team can find what they need.",
    icon: Database,
  }
];

export const Expertise = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Scroll-linked animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  // Section reveal
  const sectionY = useTransform(smoothProgress, [0, 0.25], [80, 0]);
  const sectionOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-background overflow-hidden scroll-mt-20"
      aria-labelledby="expertise-heading"
      id="expertise"
    >
      <motion.div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y: sectionY, opacity: sectionOpacity }}
      >
        {/* Header */}
        <div className="text-center mb-20 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-6"
          >
            What We Cover
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="expertise-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] text-foreground mb-6"
          >
            7 areas we build for you
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Pick the areas you need most. We build the systems. Your team learns how to run them.
          </motion.p>
        </div>

        {/* Domain Grid with scroll-linked stagger */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {domains.map((domain, index) => {
            const IconComponent = domain.icon;
            
            // Individual card scroll animations
            const row = Math.floor(index / 4);
            const cardY = useTransform(
              smoothProgress,
              [0.15 + row * 0.05, 0.35 + row * 0.05],
              [60, 0]
            );
            const cardOpacity = useTransform(
              smoothProgress,
              [0.15 + row * 0.05, 0.28 + row * 0.05],
              [0, 1]
            );
            const cardScale = useTransform(
              smoothProgress,
              [0.15 + row * 0.05, 0.35 + row * 0.05],
              [0.9, 1]
            );
            
            return (
              <motion.div
                key={domain.title}
                style={{ y: cardY, opacity: cardOpacity, scale: cardScale }}
                className="group relative bg-card border border-border/60 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Icon */}
                <motion.div 
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <IconComponent className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-primary" strokeWidth={1.8} />
                </motion.div>

                {/* Content */}
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2 leading-tight">
                  {domain.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {domain.desc}
                </p>
              </motion.div>
            );
          })}

          {/* CTA Card */}
          <motion.div
            style={{ 
              y: useTransform(smoothProgress, [0.25, 0.45], [60, 0]),
              opacity: useTransform(smoothProgress, [0.25, 0.38], [0, 1]),
              scale: useTransform(smoothProgress, [0.25, 0.45], [0.9, 1])
            }}
            className="group relative bg-primary rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between min-h-[140px] sm:min-h-[160px]"
          >
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-primary-foreground leading-tight">
                Not sure where to start?
              </h3>
              <p className="text-xs sm:text-sm text-primary-foreground/80 mt-1 leading-relaxed">
                Answer a few questions. We'll point you to the right next step.
              </p>
            </div>
            
            <div className="flex flex-col gap-2 mt-4">
              <motion.a 
                href="/start-here"
                className="inline-flex items-center gap-2 text-primary bg-white px-3 py-1.5 rounded text-xs sm:text-sm font-medium hover:bg-white/90 transition-colors w-fit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </motion.a>
              <a 
                href="/free-check"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-xs"
              >
                Try the free check →
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
