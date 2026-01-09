import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TYPEFORM_HEALTH_CHECK_URL } from '@/constants/urls';

import { 
  Users, 
  DollarSign, 
  UserCheck, 
  Briefcase, 
  Heart, 
  HandHeart, 
  Database,
  ArrowRight,
  LucideIcon
} from 'lucide-react';

interface Domain {
  title: string;
  icon: LucideIcon;
  review: string[];
  build: string[];
  outcome: string;
}

const domains: Domain[] = [
  { 
    title: "Board & Governance", 
    icon: Users,
    review: ["Meeting records", "Decision tracking", "Policies in place"],
    build: ["Board meeting templates", "Motion & vote tracker", "Policy library", "Annual calendar"],
    outcome: "Your board runs with clear records — no more chasing people.",
  },
  { 
    title: "Money & Grants", 
    icon: DollarSign,
    review: ["Grant tracking", "Receipt systems", "Reporting workflows"],
    build: ["Grant tracker", "Expense categories", "Funder report templates", "Budget-to-actual dashboards", "Receipt filing system"],
    outcome: "Find proof for funders in minutes, not days.",
  },
  { 
    title: "People & HR", 
    icon: UserCheck,
    review: ["Org chart clarity", "Onboarding process", "Role documentation"],
    build: ["Role descriptions", "Onboarding checklist", "Staff directory", "Handoff templates"],
    outcome: "New staff get up to speed fast. Nothing stuck in anyone's head.",
  },
  { 
    title: "Programs & Ops", 
    icon: Briefcase,
    review: ["Program documentation", "Outcome tracking", "Reporting readiness"],
    build: ["Program logic models", "Outcome trackers", "Quarterly report templates", "Activity logs"],
    outcome: "Show what you're doing and whether it's working.",
  },
  { 
    title: "Fundraising & Donors", 
    icon: Heart,
    review: ["Donor records", "Thank-you process", "Giving history"],
    build: ["Donor database setup", "Thank-you templates", "Giving reports", "Campaign tracker"],
    outcome: "Know who gave, when, and how to keep them giving.",
  },
  { 
    title: "Volunteers", 
    icon: HandHeart,
    review: ["Role clarity", "Scheduling system", "Onboarding flow"],
    build: ["Volunteer role cards", "Shift scheduler", "Onboarding checklist", "Hour tracking"],
    outcome: "Volunteers know what they signed up for — and stay longer.",
  },
  { 
    title: "Tools & Files", 
    icon: Database,
    review: ["Folder structure", "Naming conventions", "Access permissions"],
    build: ["Master folder system", "File naming guide", "Template library", "Archive process"],
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
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y: sectionY, opacity: sectionOpacity }}
      >
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
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
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Every nonprofit runs on the same foundations. Pick the areas where you need the most help — we'll handle the rest.
          </motion.p>
        </div>

        {/* Domain Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {domains.map((domain, index) => {
            const IconComponent = domain.icon;
            
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="group relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <IconComponent className="w-5 h-5 text-primary" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {domain.title}
                  </h3>
                </div>

                {/* What we review */}
                <div className="mb-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
                    What we review
                  </p>
                  <ul className="space-y-1">
                    {domain.review.map((item) => (
                      <li key={item} className="text-sm text-foreground/80 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What we build */}
                <div className="mb-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
                    What we build
                  </p>
                  <ul className="space-y-1">
                    {domain.build.map((item) => (
                      <li key={item} className="text-sm text-foreground/80 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-foreground">
                    {domain.outcome}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 text-center"
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
