import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";
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
    desc: "Roles, policies, and meeting records — so decisions don't get fuzzy later.",
    icon: Users,
  },
  { 
    title: "Money, Grants & Compliance", 
    desc: "Budgets, approvals, grant tracking, and proof of payment — so you can show where every dollar went.",
    icon: DollarSign,
  },
  { 
    title: "People & HR", 
    desc: "Hiring, onboarding, and clear expectations — on paper, not in someone's head.",
    icon: UserCheck,
  },
  { 
    title: "Programs & Services", 
    desc: "How you deliver, track, and improve your programs.",
    icon: Briefcase,
  },
  { 
    title: "Fundraising & Donors", 
    desc: "Donation records, thank-yous, and policies that protect you.",
    icon: Heart,
  },
  { 
    title: "Volunteers", 
    desc: "Agreements, screening, and training — so everyone knows the rules.",
    icon: HandHeart,
  },
  { 
    title: "Systems & Records", 
    desc: "Files you can find, backups that work, and records that survive turnover.",
    icon: Database,
  }
];

export const Expertise = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden scroll-mt-20"
      aria-labelledby="expertise-heading"
      id="expertise"
      style={{ backgroundColor: '#0f1f2e' }}
    >
      {/* Radial gradient glow */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(124, 235, 198, 0.08) 0%, transparent 70%)',
        }}
      />
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[3px] uppercase mb-6"
            style={{ color: '#7CEBC6' }}
          >
            What We Cover
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="expertise-heading"
            className="text-[32px] md:text-[48px] font-serif font-medium tracking-tight leading-[1.2] text-white mb-4"
          >
            Seven domains that keep
            <br />
            nonprofits running
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-normal max-w-[600px] mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            Structure and clarity to run your organization while focusing on what matters most.
          </motion.p>
        </div>

        {/* Domain Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {domains.map((domain) => {
            const IconComponent = domain.icon;
            
            return (
              <motion.div
                key={domain.title}
                variants={cardVariants}
                className="group relative rounded-2xl p-8 transition-all duration-300 cursor-default"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                }}
                whileHover={{ 
                  y: -4,
                  background: 'rgba(255, 255, 255, 0.06)',
                  borderColor: 'rgba(124, 235, 198, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'rgba(124, 235, 198, 0.1)' }}
                >
                  <IconComponent 
                    className="w-6 h-6" 
                    style={{ color: '#7CEBC6' }}
                    strokeWidth={1.8} 
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {domain.title}
                </h3>
                <p 
                  className="text-[15px] leading-relaxed"
                  style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                >
                  {domain.desc}
                </p>
              </motion.div>
            );
          })}

          {/* CTA Card */}
          <motion.a
            href={TYPEFORM_HEALTH_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            className="group relative rounded-2xl p-8 flex flex-col justify-between min-h-[200px] transition-all duration-300"
            style={{ backgroundColor: '#8B5CF6' }}
            whileHover={{ 
              y: -4,
              backgroundColor: '#9D6FFF',
            }}
          >
            <div>
              <span 
                className="text-sm font-medium"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Ready to start?
              </span>
              <h3 className="text-xl font-semibold text-white mt-1">
                See where you stand
              </h3>
            </div>
            
            <div className="flex items-center gap-2 text-white mt-6">
              <span className="text-sm font-medium">Take assessment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
