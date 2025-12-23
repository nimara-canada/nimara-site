import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Users, 
  DollarSign, 
  UserCheck, 
  Briefcase, 
  Heart, 
  HandHeart, 
  Database 
} from 'lucide-react';

const domains = [
  { 
    title: "Board & Governance", 
    desc: "Establish clear roles, policies, and meeting structures that keep your board effective and accountable.",
    icon: Users,
    examples: ["Board roles & responsibilities", "Meeting agendas & minutes", "Conflict of interest policy"]
  },
  { 
    title: "Money & Compliance", 
    desc: "Build financial controls, budgeting processes, and audit-ready systems that satisfy funders.",
    icon: DollarSign,
    examples: ["Budget approval process", "Monthly reconciliations", "Audit readiness checklist"]
  },
  { 
    title: "People & HR", 
    desc: "Create structured hiring, onboarding, and performance management systems for your team.",
    icon: UserCheck,
    examples: ["Job descriptions", "Onboarding steps", "HR policy manual"]
  },
  { 
    title: "Programs & Services", 
    desc: "Design delivery systems with proper intake, safety logging, and annual review processes.",
    icon: Briefcase,
    examples: ["Intake procedures", "Safety logging", "Annual program review"]
  },
  { 
    title: "Fundraising & Donors", 
    desc: "Implement gift acceptance policies, receipting workflows, and donor stewardship practices.",
    icon: Heart,
    examples: ["Gift acceptance policy", "Receipting checklist", "Donor records"]
  },
  { 
    title: "Volunteers", 
    desc: "Set up volunteer agreements, screening processes, and training systems that protect everyone.",
    icon: HandHeart,
    examples: ["Volunteer agreements", "Screening process", "Training records"]
  },
  { 
    title: "Systems & Records", 
    desc: "Organize files, dashboards, and data protection so nothing gets lost or exposed.",
    icon: Database,
    examples: ["Folder structure", "Naming conventions", "Data backup policy"]
  }
];

export const Expertise = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background overflow-hidden"
      aria-labelledby="expertise-heading"
      id="expertise"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              What We Cover
            </span>
            <div className="h-px flex-1 bg-border max-w-[100px]" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="expertise-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.08] text-foreground mb-6"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Seven domains that keep
            <br />
            <span className="italic text-muted-foreground">nonprofits running</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            We're built to give you the structure and clarity to run your organization 
            while focusing on what matters most — your mission and community.
          </motion.p>
        </div>

        {/* Domain Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {domains.map((domain, index) => {
            const IconComponent = domain.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.06 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-muted rounded-2xl p-6 transition-all duration-300 cursor-default overflow-hidden hover:bg-muted/80 border border-border/50"
                style={{ minHeight: '220px' }}
              >
                {/* Icon */}
                <motion.div
                  className="mb-5"
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-foreground/80" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  animate={{
                    opacity: isHovered ? 0 : 1,
                    y: isHovered ? -8 : 0
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                    {domain.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {domain.desc}
                  </p>
                </motion.div>

                {/* Hover Examples */}
                <motion.div
                  className="absolute inset-0 p-6 pt-20 flex flex-col justify-start"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 16
                  }}
                  transition={{ duration: 0.25 }}
                  style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                    Example deliverables
                  </span>
                  <ul className="space-y-2">
                    {domain.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/70 flex-shrink-0 mt-1.5" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <a
            href="#hero-form"
            className="group inline-flex items-center gap-4 text-foreground font-medium"
          >
            <span className="group-hover:text-primary transition-colors duration-200">
              See where you stand in each area
            </span>
            <span className="w-8 h-px bg-foreground/40 group-hover:w-14 group-hover:bg-primary transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
