import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const domains = [
  {
    index: "01",
    title: "Governance & Strategy",
    description: "Clear roles, decisions, and a board that can operate without chaos.",
  },
  {
    index: "02",
    title: "Finance & Compliance",
    description: "Budgeting, approvals, receipts, and a clean audit trail.",
  },
  {
    index: "03",
    title: "HR / People",
    description: "Hiring, onboarding, policies, and performance basics that protect the org.",
  },
  {
    index: "04",
    title: "Data & Systems",
    description: "Files, tools, access, and reporting you can actually trust.",
  },
  {
    index: "05",
    title: "Fundraising & Donor Standards",
    description: "Donor data, receipting, and compliant fundraising practice.",
  },
  {
    index: "06",
    title: "Volunteer Management",
    description: "Screening, onboarding, supervision, and retention.",
  },
  {
    index: "07",
    title: "Program & Evaluation",
    description: "Delivery backbone, outcomes, and simple measurement loops.",
  }
];

export default function WhatWeHelpWith() {
  return (
    <section
      className="relative bg-secondary-background"
      aria-labelledby="domains-heading"
    >
      {/* Subtle grid pattern - matches Hero */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.08) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} 
      />

      {/* Header - Full screen intro */}
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center px-6"
        >
          {/* Category label - matches other sections */}
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
            The Framework
          </p>
          
          {/* Paper Tiger headline */}
          <h2
            id="domains-heading"
            className="text-[clamp(2.5rem,8vw,7rem)] font-black tracking-[-0.04em] leading-[0.9] text-white mb-6 uppercase"
          >
            7 <span className="text-accent">Domains</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl max-w-md mx-auto text-white/60 mb-12">
            Scroll to explore each area we build.
          </p>
          
          {/* Scroll indicator - matches Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">
                Scroll
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white/60">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Domain Cards */}
      {domains.map((domain, idx) => (
        <DomainCard
          key={domain.index}
          domain={domain}
          index={idx}
          total={domains.length}
          isLeft={idx % 2 === 0}
        />
      ))}

      {/* Bottom spacer */}
      <div className="h-[20vh]" />
    </section>
  );
}

function DomainCard({
  domain,
  index,
  total,
  isLeft
}: {
  domain: typeof domains[0];
  index: number;
  total: number;
  isLeft: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Smooth parallax
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  return (
    <div 
      ref={cardRef}
      className="min-h-screen flex items-center justify-center py-20 relative z-10"
    >
      <motion.div
        style={{ y, opacity }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
          {/* Left side - Small Index */}
          <div className={`flex flex-col ${isLeft ? 'lg:items-end lg:order-1' : 'lg:items-start lg:order-2'}`}>
            {/* Small index number */}
            <span
              className="font-bold text-sm sm:text-base tracking-[0.2em] text-white/30 mb-4"
            >
              {domain.index}
            </span>
            
            {/* Massive domain title - Paper Tiger H1 */}
            <h3 className="text-[clamp(2.5rem,8vw,6rem)] font-black text-white leading-[0.9] tracking-[-0.04em] uppercase">
              {domain.title}
            </h3>
            
            {/* Progress dots */}
            <div className="flex items-center gap-2 mt-8">
              {domains.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'bg-accent scale-125' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            {/* Accent line */}
            <div className="w-px h-12 bg-accent mb-6" />

            {/* Description */}
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-md mb-8">
              {domain.description}
            </p>

            {/* Domain counter - mono style */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-mono tracking-wide text-white/40">
                Domain {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
