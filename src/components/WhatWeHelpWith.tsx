import { motion, useScroll, useTransform, useInView } from "framer-motion";
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
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ backgroundColor: "#0f1629" }}
      aria-labelledby="domains-heading"
    >
      {/* Header - Sticky intro */}
      <div className="h-screen flex items-center justify-center sticky top-0">
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

      {/* Domain Cards - Full screen each */}
      {domains.map((domain, idx) => (
        <DomainCard
          key={domain.index}
          domain={domain}
          index={idx}
          total={domains.length}
          isLeft={idx % 2 === 0}
        />
      ))}

      {/* Final spacer for last card to scroll away */}
      <div className="h-[50vh]" />
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
  const isInView = useInView(cardRef, { amount: 0.5 });
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Parallax and fade effects
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);

  return (
    <div 
      ref={cardRef}
      className="h-screen flex items-center justify-center sticky top-0"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="w-full max-w-5xl mx-auto px-6"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left side - Index & Progress */}
          <div className={`${isLeft ? 'order-1' : 'order-1 md:order-2'} flex flex-col items-center md:items-end`}>
            {/* Large index number */}
            <motion.span
              className="font-mono text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none"
              style={{ 
                color: "transparent",
                WebkitTextStroke: "1px rgba(172, 252, 227, 0.3)"
              }}
            >
              {domain.index}
            </motion.span>
            
            {/* Progress indicator */}
            <div className="flex items-center gap-2 mt-4">
              {domains.map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: i === index ? "#ACFCE3" : "rgba(255,255,255,0.2)",
                    transform: i === index ? "scale(1.2)" : "scale(1)"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`${isLeft ? 'order-2' : 'order-2 md:order-1'}`}>
            {/* Vertical accent line */}
            <div 
              className="w-px h-16 mb-8 hidden md:block"
              style={{ backgroundColor: "#ACFCE3" }}
            />

            {/* Subtitle */}
            <p 
              className="text-sm font-medium tracking-widest uppercase mb-4"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {domain.subtitle}
            </p>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {domain.title}
            </h3>

            {/* Description */}
            <p 
              className="text-lg md:text-xl leading-relaxed max-w-md"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {domain.description}
            </p>

            {/* Card indicator */}
            <div 
              className="mt-8 pt-8 flex items-center gap-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span 
                className="text-sm font-mono"
                style={{ color: "rgba(255,255,255,0.4)" }}
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
