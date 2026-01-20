import { useRef, useState } from "react";
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
  subtitle: string;
  icon: LucideIcon;
  gradient: string;
  imagePattern: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Board & Governance",
    subtitle: "Organized For",
    icon: ClipboardList,
    gradient: "from-indigo-600 via-indigo-500 to-violet-600",
    imagePattern: "radial-gradient(circle at 30% 40%, rgba(99,102,241,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(139,92,246,0.3) 0%, transparent 40%)",
  },
  {
    id: 2,
    title: "Money & Grants",
    subtitle: "Tracked For",
    icon: DollarSign,
    gradient: "from-emerald-600 via-emerald-500 to-teal-600",
    imagePattern: "radial-gradient(circle at 40% 30%, rgba(16,185,129,0.4) 0%, transparent 50%), radial-gradient(circle at 60% 70%, rgba(20,184,166,0.3) 0%, transparent 40%)",
  },
  {
    id: 3,
    title: "People & HR",
    subtitle: "Systems For",
    icon: Users,
    gradient: "from-orange-500 via-orange-400 to-amber-500",
    imagePattern: "radial-gradient(circle at 35% 45%, rgba(249,115,22,0.4) 0%, transparent 50%), radial-gradient(circle at 65% 55%, rgba(245,158,11,0.3) 0%, transparent 40%)",
  },
  {
    id: 4,
    title: "Programs & Services",
    subtitle: "Delivered With",
    icon: BarChart3,
    gradient: "from-sky-500 via-sky-400 to-cyan-500",
    imagePattern: "radial-gradient(circle at 45% 35%, rgba(14,165,233,0.4) 0%, transparent 50%), radial-gradient(circle at 55% 65%, rgba(6,182,212,0.3) 0%, transparent 40%)",
  },
  {
    id: 5,
    title: "Fundraising & Donors",
    subtitle: "Connected With",
    icon: Heart,
    gradient: "from-purple-600 via-purple-500 to-fuchsia-600",
    imagePattern: "radial-gradient(circle at 30% 50%, rgba(147,51,234,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(192,38,211,0.3) 0%, transparent 40%)",
  },
  {
    id: 6,
    title: "Volunteers",
    subtitle: "Supported With",
    icon: HandHelping,
    gradient: "from-cyan-500 via-cyan-400 to-teal-500",
    imagePattern: "radial-gradient(circle at 40% 40%, rgba(6,182,212,0.4) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(20,184,166,0.3) 0%, transparent 40%)",
  },
  {
    id: 7,
    title: "Tools & Files",
    subtitle: "Organized With",
    icon: FolderOpen,
    gradient: "from-rose-500 via-rose-400 to-pink-500",
    imagePattern: "radial-gradient(circle at 35% 55%, rgba(244,63,94,0.4) 0%, transparent 50%), radial-gradient(circle at 65% 45%, rgba(236,72,153,0.3) 0%, transparent 40%)",
  },
];

// Individual card component styled like the reference
function MarqueeCard({ card }: { card: CardData }) {
  const Icon = card.icon;

  return (
    <div
      className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] h-[320px] sm:h-[360px] md:h-[400px] rounded-2xl overflow-hidden relative group transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
      style={{
        background: `linear-gradient(135deg, rgba(30,41,59,0.95) 0%, rgba(15,23,42,0.98) 100%)`,
        border: "1px solid rgba(99,102,241,0.2)",
      }}
    >
      {/* Image area with gradient pattern */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-20`}
        style={{
          backgroundImage: card.imagePattern,
        }}
      />
      
      {/* Centered icon as visual placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${card.gradient} opacity-30 blur-xl absolute inset-0`} />
          <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center relative`}>
            <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Bottom text overlay with gradient */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-transparent pt-16">
        <p className="text-white/60 text-sm sm:text-base font-medium mb-1">
          {card.subtitle}
        </p>
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight">
          {card.title}
        </h3>
      </div>

      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/10 transition-colors duration-300 pointer-events-none" />
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
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#0a0f1a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 md:mb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            What We{" "}
            <span className="text-nim-mint">Help</span>{" "}
            You With
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
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
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-40 bg-gradient-to-r from-[#0a0f1a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-40 bg-gradient-to-l from-[#0a0f1a] to-transparent z-10 pointer-events-none" />

        {/* Scrolling cards */}
        <div
          className="flex gap-4 sm:gap-5 md:gap-6 pl-4"
          style={{
            animation: `marquee-scroll 50s linear infinite`,
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
          className="inline-flex items-center gap-2 text-sm sm:text-base text-white font-semibold hover:gap-3 transition-all duration-300 group hover:text-nim-mint"
        >
          See How We Can Help
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
