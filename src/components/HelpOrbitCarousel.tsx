import { useState } from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  DollarSign,
  Users,
  BarChart3,
  Heart,
  HandHelping,
  FolderOpen,
  LucideIcon,
} from "lucide-react";

interface CardData {
  id: number;
  title: string;
  icon: LucideIcon;
  shortDesc: string;
  longDesc: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Board & Governance",
    icon: ClipboardList,
    shortDesc: "Meetings, decisions, and approvals you can find later.",
    longDesc:
      "Your board meets, makes decisions, and approves things. We help you track it all — so nothing gets lost and everything holds up when funders ask.",
  },
  {
    id: 2,
    title: "Money & Grants",
    icon: DollarSign,
    shortDesc: "Spending, receipts, and grant records that hold up.",
    longDesc:
      "Grant tracking, proof of payment, budget vs. actual — all in one place. When accountability is due, your proof is ready.",
  },
  {
    id: 3,
    title: "People",
    icon: Users,
    shortDesc: "Roles, contracts, and onboarding basics.",
    longDesc:
      "Clear job descriptions, contractor vs. employee clarity, and simple onboarding steps your team can follow.",
  },
  {
    id: 4,
    title: "Programs",
    icon: BarChart3,
    shortDesc: "Clear services, outcomes, and delivery tracking.",
    longDesc:
      "What you deliver, who you serve, and how you measure it — documented so you can report with confidence.",
  },
  {
    id: 5,
    title: "Fundraising",
    icon: Heart,
    shortDesc: "Donor records and giving history in one place.",
    longDesc:
      "Track who gave, when, and how much. No more digging through spreadsheets before a campaign.",
  },
  {
    id: 6,
    title: "Volunteers",
    icon: HandHelping,
    shortDesc: "Simple onboarding and tracking for volunteers.",
    longDesc:
      "Know who's helping, what they signed, and when they started. Simple records that protect your org.",
  },
  {
    id: 7,
    title: "Tools & Files",
    icon: FolderOpen,
    shortDesc: "Folders, templates, and routines your team will use.",
    longDesc:
      "A file system that makes sense. Templates your team will actually use. Routines that keep it clean.",
  },
];

const brandColors = [
  { bg: "bg-nim-mint/90", shadow: "shadow-nim-mint/30" },
  { bg: "bg-nim-sky/90", shadow: "shadow-nim-sky/30" },
  { bg: "bg-nim-coral/90", shadow: "shadow-nim-coral/30" },
  { bg: "bg-nim-gold/90", shadow: "shadow-nim-gold/30" },
  { bg: "bg-nim-lavender/90", shadow: "shadow-nim-lavender/30" },
  { bg: "bg-nim-mint/90", shadow: "shadow-nim-mint/30" },
  { bg: "bg-nim-sky/90", shadow: "shadow-nim-sky/30" },
];

function getCardColor(index: number, isActive: boolean) {
  const color = brandColors[index % brandColors.length];
  return {
    bg: isActive ? color.bg : "bg-white/10",
    shadow: isActive ? `shadow-xl ${color.shadow}` : "shadow-lg shadow-black/10",
  };
}

export default function HelpOrbitCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeCard = cards[activeIndex];
  const ActiveIcon = activeCard.icon;

  // Duplicate cards for seamless infinite scroll
  const duplicatedCards = [...cards, ...cards];

  return (
    <section
      id="what-we-help-with"
      className="relative py-16 md:py-24 bg-nim-navy overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-nim-navy via-nim-navy/95 to-nim-navy pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What we help with
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            From messy spreadsheets to streamlined systems — we handle the operational heavy lifting.
          </p>
        </div>

        {/* Infinite Marquee */}
        <div
          className="relative mb-12 md:mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-nim-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-nim-navy to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              style={{
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {duplicatedCards.map((card, index) => {
                const realIndex = index % cards.length;
                const isActive = realIndex === activeIndex;
                const colors = getCardColor(realIndex, isActive);
                const Icon = card.icon;

                return (
                  <motion.button
                    key={`${card.title}-${index}`}
                    onClick={() => setActiveIndex(realIndex)}
                    className={`
                      flex-shrink-0 w-[200px] md:w-[240px] p-5 md:p-6 rounded-2xl
                      cursor-pointer transition-all duration-500 ease-out
                      ${colors.bg} ${colors.shadow}
                      ${isActive ? "scale-105 ring-2 ring-white/30" : "hover:scale-102 hover:bg-white/15"}
                    `}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex flex-col items-start gap-3">
                      <div
                        className={`
                          p-2.5 rounded-xl transition-colors duration-300
                          ${isActive ? "bg-nim-navy/20" : "bg-white/10"}
                        `}
                      >
                        <Icon
                          className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${
                            isActive ? "text-nim-navy" : "text-white"
                          }`}
                        />
                      </div>
                      <div className="text-left">
                        <h3
                          className={`font-semibold text-sm md:text-base transition-colors duration-300 ${
                            isActive ? "text-nim-navy" : "text-white"
                          }`}
                        >
                          {card.title}
                        </h3>
                        <p
                          className={`text-xs md:text-sm mt-1 transition-colors duration-300 ${
                            isActive ? "text-nim-navy/70" : "text-white/60"
                          }`}
                        >
                          {card.shortDesc}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Content Panel */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/10 mb-6">
            <ActiveIcon className="w-8 h-8 text-nim-mint" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {activeCard.title}
          </h3>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
            {activeCard.longDesc}
          </p>
          <a
            href="/start-here"
            className="inline-flex items-center gap-2 text-nim-mint hover:text-nim-mint/80 font-medium transition-colors"
          >
            See how we can help
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
