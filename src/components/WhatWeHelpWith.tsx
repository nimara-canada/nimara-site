import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const domains = [
  {
    index: "01",
    title: "Governance & Strategy",
    subtitle: "Board Operations",
    description: "Clear roles, decisions, and a board that can operate without chaos.",
  },
  {
    index: "02",
    title: "Finance & Compliance",
    subtitle: "Money Management",
    description: "Budgeting, approvals, receipts, and a clean audit trail.",
  },
  {
    index: "03",
    title: "HR / People",
    subtitle: "Team Systems",
    description: "Hiring, onboarding, policies, and performance basics that protect the org.",
  },
  {
    index: "04",
    title: "Data & Systems",
    subtitle: "Digital Infrastructure",
    description: "Files, tools, access, and reporting you can actually trust.",
  },
  {
    index: "05",
    title: "Fundraising & Donor Standards",
    subtitle: "Donor Relations",
    description: "Donor data, receipting, and compliant fundraising practice.",
  },
  {
    index: "06",
    title: "Volunteer Management",
    subtitle: "Volunteer Ops",
    description: "Screening, onboarding, supervision, and retention.",
  },
  {
    index: "07",
    title: "Program & Evaluation",
    subtitle: "Impact Tracking",
    description: "Delivery backbone, outcomes, and simple measurement loops.",
  }
];

export default function WhatWeHelpWith() {
  return (
    <section
      style={{ backgroundColor: "#0f1629" }}
      aria-labelledby="domains-heading"
    >
      {/* Header - Full screen intro */}
      <div className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center px-6"
        >
          <p 
            className="text-sm font-mono tracking-widest uppercase mb-6"
            style={{ color: "#ACFCE3" }}
          >
            The Framework
          </p>
          <h2
            id="domains-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6"
          >
            7 Domains
          </h2>
          <p 
            className="text-lg md:text-xl max-w-md mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Scroll to explore each area we build.
          </p>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 mx-auto flex items-start justify-center pt-2"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 rounded-full"
                style={{ backgroundColor: "#ACFCE3" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Domain Cards - Each full screen, no sticky */}
      {domains.map((domain, idx) => (
        <DomainCard
          key={domain.index}
          domain={domain}
          index={idx}
          total={domains.length}
          isLeft={idx % 2 === 0}
        />
      ))}
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

  // Smooth parallax - content slides up as you scroll
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div 
      ref={cardRef}
      className="min-h-screen flex items-center justify-center py-20"
    >
      <motion.div
        style={{ y, opacity }}
        className="w-full max-w-5xl mx-auto px-6"
      >
        <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${isLeft ? '' : 'md:direction-rtl'}`}>
          {/* Left side - Index & Progress */}
          <div className={`flex flex-col ${isLeft ? 'items-start md:items-end' : 'items-start md:items-start md:order-2'}`}>
            {/* Large index number */}
            <span
              className="font-mono text-[100px] md:text-[160px] lg:text-[200px] font-bold leading-none select-none"
              style={{ 
                color: "transparent",
                WebkitTextStroke: "1px rgba(172, 252, 227, 0.25)"
              }}
            >
              {domain.index}
            </span>
            
            {/* Progress indicator */}
            <div className="flex items-center gap-2 mt-4">
              {domains.map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: i === index ? "#ACFCE3" : "rgba(255,255,255,0.15)"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`${isLeft ? '' : 'md:order-1'}`}>
            {/* Vertical accent line */}
            <div 
              className="w-px h-12 mb-6"
              style={{ backgroundColor: "#ACFCE3" }}
            />

            {/* Subtitle */}
            <p 
              className="text-xs font-medium tracking-[0.2em] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {domain.subtitle}
            </p>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
              {domain.title}
            </h3>

            {/* Description */}
            <p 
              className="text-base md:text-lg leading-relaxed max-w-md"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {domain.description}
            </p>

            {/* Card indicator */}
            <div 
              className="mt-8 pt-6 flex items-center gap-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span 
                className="text-xs font-mono tracking-wide"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Domain {String(index + 1).padStart(2, '0')} of {String(total).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
