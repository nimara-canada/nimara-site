import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ClipboardList,
  DollarSign,
  Users,
  BarChart3,
  Heart,
  HandHelping,
  FolderOpen,
  LucideIcon,
  ArrowRight,
} from "lucide-react";

interface CardData {
  id: number;
  title: string;
  icon: LucideIcon;
  shortDesc: string;
  color: string;
  textColor: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Board & Governance",
    icon: ClipboardList,
    shortDesc: "Meetings, decisions, approvals",
    color: "bg-[#1e1b4b]",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Money & Grants",
    icon: DollarSign,
    shortDesc: "Spending, receipts, grant records",
    color: "bg-[#22c55e]",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "People",
    icon: Users,
    shortDesc: "Roles, contracts, onboarding",
    color: "bg-[#f97316]",
    textColor: "text-white",
  },
  {
    id: 4,
    title: "Programs",
    icon: BarChart3,
    shortDesc: "Services, outcomes, tracking",
    color: "bg-white",
    textColor: "text-foreground",
  },
  {
    id: 5,
    title: "Fundraising",
    icon: Heart,
    shortDesc: "Donor records, giving history",
    color: "bg-[#7c3aed]",
    textColor: "text-white",
  },
  {
    id: 6,
    title: "Volunteers",
    icon: HandHelping,
    shortDesc: "Onboarding, tracking, records",
    color: "bg-[#06b6d4]",
    textColor: "text-white",
  },
  {
    id: 7,
    title: "Tools & Files",
    icon: FolderOpen,
    shortDesc: "Folders, templates, routines",
    color: "bg-[#ec4899]",
    textColor: "text-white",
  },
];

// Individual card component
function MarqueeCard({ card }: { card: CardData }) {
  const Icon = card.icon;

  return (
    <div
      className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[200px] sm:h-[240px] md:h-[280px] rounded-3xl shadow-xl ${card.color} overflow-hidden relative group transition-transform duration-300 hover:scale-[1.02]`}
    >
      {/* Corner icon */}
      <div className="absolute top-5 right-5">
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
            card.color === "bg-white" ? "bg-primary/10" : "bg-white/20"
          }`}
        >
          <Icon
            className={`w-5 h-5 sm:w-6 sm:h-6 ${
              card.color === "bg-white" ? "text-primary" : "text-white"
            }`}
          />
        </div>
      </div>

      {/* Card content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
        <h3
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 ${card.textColor}`}
        >
          {card.title}
        </h3>
        <p
          className={`text-sm sm:text-base ${
            card.color === "bg-white" ? "text-muted-foreground" : "text-white/80"
          }`}
        >
          {card.shortDesc}
        </p>
      </div>

      {/* Subtle gradient overlay for depth */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          card.color === "bg-white"
            ? "bg-gradient-to-t from-white/50 to-transparent"
            : "bg-gradient-to-t from-black/10 to-transparent"
        }`}
      />
    </div>
  );
}

export default function HelpOrbitCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate cards for seamless infinite scroll
  const duplicatedCards = [...cards, ...cards];

  return (
    <section
      ref={sectionRef}
      id="what-we-help-with"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#f5f5f0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 md:mb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
            What we{" "}
            <span className="relative inline-block">
              help
              <svg
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 Q25,0 50,8 T100,8"
                  stroke="#a78bfa"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            you with
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From messy spreadsheets to streamlined systems. We handle the
            operational heavy lifting so you can focus on mission.
          </p>
        </motion.div>
      </div>

      {/* Marquee container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-[#f5f5f0] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-[#f5f5f0] to-transparent z-10 pointer-events-none" />

        {/* Scrolling cards */}
        <div
          className="flex gap-4 sm:gap-6 md:gap-8"
          style={{
            animation: `marquee-scroll 45s linear infinite`,
            animationPlayState: isPaused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {duplicatedCards.map((card, index) => (
            <MarqueeCard key={`${card.id}-${index}`} card={card} />
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-10 sm:mt-12 md:mt-16"
      >
        <a
          href="/start-here"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-foreground font-semibold hover:gap-3 transition-all duration-300 group"
        >
          See how we can help
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>

      {/* CSS Animation */}
      <style>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .flex[style*="animation"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
