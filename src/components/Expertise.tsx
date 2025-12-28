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
    desc: "Clear roles, policies, and meeting structures that keep your board effective.",
    icon: Users,
  },
  { 
    title: "Money & Compliance", 
    desc: "Financial controls, budgeting processes, and audit-ready systems.",
    icon: DollarSign,
  },
  { 
    title: "People & HR", 
    desc: "Structured hiring, onboarding, and performance management.",
    icon: UserCheck,
  },
  { 
    title: "Programs & Services", 
    desc: "Delivery systems with proper intake, logging, and review processes.",
    icon: Briefcase,
  },
  { 
    title: "Fundraising & Donors", 
    desc: "Gift policies, receipting workflows, and donor stewardship.",
    icon: Heart,
  },
  { 
    title: "Volunteers", 
    desc: "Agreements, screening processes, and training systems.",
    icon: HandHeart,
  },
  { 
    title: "Systems & Records", 
    desc: "Organized files, dashboards, and data protection.",
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
            Seven domains that keep
            <br />
            nonprofits running
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Structure and clarity to run your organization while focusing on what matters most.
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
          <motion.a
            href="#hero-form"
            style={{ 
              y: useTransform(smoothProgress, [0.25, 0.45], [60, 0]),
              opacity: useTransform(smoothProgress, [0.25, 0.38], [0, 1]),
              scale: useTransform(smoothProgress, [0.25, 0.45], [0.9, 1])
            }}
            className="group relative bg-primary rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-primary/90 flex flex-col justify-between min-h-[140px] sm:min-h-[160px]"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <span className="text-xs sm:text-sm font-medium text-primary-foreground/80">
                Ready to start?
              </span>
              <h3 className="text-sm sm:text-base font-semibold text-primary-foreground mt-1 leading-tight">
                See where you stand
              </h3>
            </div>
            
            <div className="flex items-center gap-2 text-primary-foreground mt-4">
              <span className="text-xs sm:text-sm font-medium">Take assessment</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
