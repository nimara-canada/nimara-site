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
  Check,
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
    color: "bg-[#1e1b4b]", // Dark navy
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Money & Grants",
    icon: DollarSign,
    shortDesc: "Spending, receipts, grant records",
    color: "bg-[#22c55e]", // Green
    textColor: "text-white",
  },
  {
    id: 3,
    title: "People",
    icon: Users,
    shortDesc: "Roles, contracts, onboarding",
    color: "bg-[#f97316]", // Orange/coral
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
    color: "bg-[#7c3aed]", // Purple
    textColor: "text-white",
  },
  {
    id: 6,
    title: "Volunteers",
    icon: HandHelping,
    shortDesc: "Onboarding, tracking, records",
    color: "bg-[#06b6d4]", // Cyan
    textColor: "text-white",
  },
  {
    id: 7,
    title: "Tools & Files",
    icon: FolderOpen,
    shortDesc: "Folders, templates, routines",
    color: "bg-[#ec4899]", // Pink
    textColor: "text-white",
  },
];

export default function HelpOrbitCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Display cards for the stacked visual (showing top 4)
  const displayCards = cards.slice(0, 4);

  return (
    <section
      id="what-we-help-with"
      className="relative py-20 md:py-28 lg:py-32 bg-[#f5f5f0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Headline and description */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
              What we{" "}
              <span className="relative inline-block">
                help
                <svg
                  className="absolute -bottom-2 left-0 w-full"
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

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              From messy spreadsheets to streamlined systems. We handle the operational heavy lifting so you can focus on mission.
            </p>

            {/* Quick list */}
            <div className="space-y-4 mb-10">
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  className="flex items-center gap-3 cursor-pointer group"
                  onMouseEnter={() => setHoveredIndex(card.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      hoveredIndex === card.id ? card.color : "bg-muted"
                    }`}
                  >
                    <card.icon
                      className={`w-4 h-4 transition-colors duration-300 ${
                        hoveredIndex === card.id ? card.textColor : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      hoveredIndex === card.id ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {card.title}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-all duration-300 ${
                      hoveredIndex === card.id
                        ? "opacity-100 translate-x-0 text-foreground"
                        : "opacity-0 -translate-x-2"
                    }`}
                  />
                </motion.div>
              ))}
            </div>

            <a
              href="/start-here"
              className="inline-flex items-center gap-2 text-foreground font-semibold hover:gap-3 transition-all duration-300"
            >
              See how we can help
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right side - Stacked cards */}
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px]">
            {displayCards.map((card, index) => {
              const Icon = card.icon;
              const isTop = index === displayCards.length - 1;
              const offset = (displayCards.length - 1 - index) * 20;
              const scale = 1 - (displayCards.length - 1 - index) * 0.03;

              return (
                <motion.div
                  key={card.id}
                  className={`absolute inset-x-0 rounded-3xl shadow-xl ${card.color} overflow-hidden`}
                  style={{
                    top: offset,
                    zIndex: index,
                    height: "85%",
                  }}
                  initial={{ scale, y: offset }}
                  animate={{
                    scale: hoveredIndex === card.id ? 1.02 : scale,
                    y: hoveredIndex === card.id ? offset - 10 : offset,
                  }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredIndex(card.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Corner icon */}
                  <div className="absolute top-6 right-6">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        card.color === "bg-white"
                          ? "bg-primary/10"
                          : "bg-white/20"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          card.color === "bg-white"
                            ? "text-primary"
                            : "text-white"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3
                      className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 ${card.textColor}`}
                    >
                      {card.title.split(" ")[0]}
                    </h3>
                    <p
                      className={`text-lg ${
                        card.color === "bg-white"
                          ? "text-muted-foreground"
                          : "text-white/80"
                      }`}
                    >
                      {card.shortDesc}
                    </p>
                  </div>

                  {/* Check icon for completed feel */}
                  {index < displayCards.length - 1 && (
                    <div className="absolute top-6 right-24">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
