import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { CALENDLY_BOOKING_URL } from "@/constants/urls";

const cards = [
  {
    label: "We document",
    title: "Your Board",
    description: "Your board runs with clear records — no more chasing people.",
  },
  {
    label: "We track",
    title: "Your Money",
    description: "Find proof for funders in minutes, not days.",
  },
  {
    label: "We systemize",
    title: "Your People",
    description: "New staff get up to speed fast. Nothing stuck in anyone's head.",
  },
  {
    label: "We organize",
    title: "Your Programs",
    description: "Show what you're doing and whether it's working.",
  },
  {
    label: "We connect",
    title: "Your Donors",
    description: "Know who gave, when, and how to keep them giving.",
  },
  {
    label: "We coordinate",
    title: "Your Volunteers",
    description: "Volunteers know what they signed up for — and stay longer.",
  },
  {
    label: "We structure",
    title: "Your Files",
    description: "Anyone on your team can find what they need.",
  },
];

export default function WhatWeHelpWith() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-[80px] md:py-[120px]"
      style={{ backgroundColor: "#0f1629" }}
      aria-labelledby="help-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Headline */}
        <motion.h2
          id="help-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-[40px] md:text-[72px] font-extrabold leading-[1.1] tracking-tight mb-6"
        >
          <span className="text-white">WHAT WE </span>
          <span style={{ color: "#ACFCE3" }}>HELP</span>
          <span className="text-white"> YOU WITH</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-[20px] leading-relaxed max-w-[600px] mx-auto mb-[72px]"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          We build the systems that keep you organized, accountable, and funder-ready.
        </motion.p>

        {/* Cards Grid - 4-3 Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* First row - 4 cards */}
          {cards.slice(0, 4).map((card, index) => (
            <Card key={card.title} card={card} index={index} isInView={isInView} />
          ))}
        </div>
        
        {/* Second row - 3 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[calc(75%+12px)] lg:max-w-[calc(75%-6px)] mx-auto mb-16">
          {cards.slice(4, 7).map((card, index) => (
            <Card key={card.title} card={card} index={index + 4} isInView={isInView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <a
            href={CALENDLY_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 text-[16px] font-semibold text-white rounded-lg transition-all duration-300 hover:-translate-y-1"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
          >
            See How We Can Help
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Card({ 
  card, 
  index, 
  isInView 
}: { 
  card: { label: string; title: string; description: string }; 
  index: number; 
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
      className="group rounded-2xl transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        padding: "40px 32px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
        e.currentTarget.style.borderColor = "rgba(172,252,227,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      {/* Label */}
      <p 
        className="text-[14px] font-medium mb-2"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        {card.label}
      </p>
      
      {/* Title */}
      <h3 className="text-[24px] font-bold text-white mb-4">
        {card.title}
      </h3>
      
      {/* Description */}
      <p 
        className="text-[16px] leading-[1.6] mb-6"
        style={{ color: "rgba(255,255,255,0.6)" }}
      >
        {card.description}
      </p>
      
      {/* Link */}
      <a
        href="#"
        className="inline-flex items-center gap-1 text-[14px] font-semibold transition-all duration-300"
        style={{ color: "#ACFCE3" }}
      >
        Learn more
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </motion.div>
  );
}
