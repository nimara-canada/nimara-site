import { motion, useInView } from "framer-motion";
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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-36"
      style={{ backgroundColor: "#0f1629" }}
      aria-labelledby="domains-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2
            id="domains-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            The 7 Domains
          </h2>
          <p className="text-lg md:text-xl max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Pick a domain. See what "funder-ready" looks like.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div 
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ backgroundColor: "#ACFCE3" }}
          />

          {/* Domain items */}
          <div className="space-y-16 md:space-y-0">
            {domains.map((domain, idx) => (
              <DomainItem
                key={domain.index}
                domain={domain}
                index={idx}
                isInView={isInView}
                isLeft={idx % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DomainItem({
  domain,
  index,
  isInView,
  isLeft
}: {
  domain: typeof domains[0];
  index: number;
  isInView: boolean;
  isLeft: boolean;
}) {
  const itemRef = useRef(null);
  const itemInView = useInView(itemRef, { once: true, margin: "-50px" });

  return (
    <div 
      ref={itemRef}
      className={`relative md:min-h-[280px] flex items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
    >
      {/* Node on the timeline - desktop only */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={itemInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-3 h-3 rounded-full border-2"
          style={{ 
            backgroundColor: "#0f1629",
            borderColor: "#ACFCE3"
          }}
        />
      </div>

      {/* Content card */}
      <motion.div
        initial={{ 
          opacity: 0, 
          x: isLeft ? -30 : 30 
        }}
        animate={itemInView ? { 
          opacity: 1, 
          x: 0 
        } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`
          w-full md:w-[calc(50%-40px)] 
          ${isLeft ? 'md:pr-8' : 'md:pl-8'}
        `}
      >
        <div 
          className="p-6 md:p-8 rounded-lg transition-all duration-300 hover:translate-y-[-2px]"
          style={{ 
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)"
          }}
        >
          {/* Index number */}
          <span 
            className="font-mono text-sm mb-4 block"
            style={{ color: "#ACFCE3" }}
          >
            {domain.index}
          </span>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {domain.title}
          </h3>

          {/* Subtitle */}
          <p 
            className="text-base mb-4"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {domain.subtitle}
          </p>

          {/* Description */}
          <p 
            className="text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {domain.description}
          </p>
        </div>
      </motion.div>

      {/* Mobile timeline indicator */}
      <div className="absolute left-0 top-6 w-8 flex items-center justify-center md:hidden">
        <div 
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: "#ACFCE3" }}
        />
      </div>
    </div>
  );
}
