import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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

// Individual card component with its own scroll-based animation
function StackingCard({
  card,
  index,
  totalCards,
  scrollProgress,
}: {
  card: CardData;
  index: number;
  totalCards: number;
  scrollProgress: ReturnType<typeof useSpring>;
}) {
  const Icon = card.icon;

  // Each card appears at a specific scroll threshold
  // Card 0: 0%, Card 1: ~14%, Card 2: ~28%, etc.
  const cardStart = index / totalCards;
  const cardEnd = (index + 1) / totalCards;

  // Transform for y position - card slides up from below
  const y = useTransform(
    scrollProgress,
    [cardStart, cardEnd],
    ["100%", "0%"]
  );

  // Opacity for smooth fade in
  const opacity = useTransform(
    scrollProgress,
    [cardStart, cardStart + 0.05],
    [0, 1]
  );

  // Calculate stacking offset and scale
  const stackOffset = index * 12;
  const scale = 1 - (totalCards - 1 - index) * 0.02;

  return (
    <motion.div
      className={`absolute inset-x-4 md:inset-x-0 rounded-3xl shadow-2xl ${card.color} overflow-hidden`}
      style={{
        y,
        opacity,
        zIndex: index + 1,
        top: stackOffset,
        height: "calc(100% - 60px)",
        scale,
      }}
    >
      {/* Corner icon */}
      <div className="absolute top-6 right-6">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            card.color === "bg-white" ? "bg-primary/10" : "bg-white/20"
          }`}
        >
          <Icon
            className={`w-6 h-6 ${
              card.color === "bg-white" ? "text-primary" : "text-white"
            }`}
          />
        </div>
      </div>

      {/* Card content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <h3
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 ${card.textColor}`}
        >
          {card.title.split(" ")[0]}
        </h3>
        <p
          className={`text-base md:text-lg ${
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
    </motion.div>
  );
}

export default function HelpOrbitCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth the progress for premium feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate active card index for left side highlighting
  const activeIndex = useTransform(smoothProgress, [0, 1], [0, cards.length - 1]);

  return (
    <section
      ref={containerRef}
      id="what-we-help-with"
      className="relative bg-[#f5f5f0]"
      style={{ minHeight: "350vh" }}
    >
      {/* Sticky content wrapper */}
      <div className="sticky top-0 min-h-screen flex items-center py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Headline and description */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 md:mb-8">
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

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-10 max-w-lg">
                From messy spreadsheets to streamlined systems. We handle the
                operational heavy lifting so you can focus on mission.
              </p>

              {/* Progress list that highlights as cards stack */}
              <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {cards.map((card, index) => (
                  <CardListItem
                    key={card.id}
                    card={card}
                    index={index}
                    activeIndex={activeIndex}
                  />
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

            {/* Right side - Stacking cards */}
            <div className="order-1 lg:order-2 relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
              {cards.map((card, index) => (
                <StackingCard
                  key={card.id}
                  card={card}
                  index={index}
                  totalCards={cards.length}
                  scrollProgress={smoothProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        {cards.map((_, index) => (
          <ScrollDot key={index} index={index} activeIndex={activeIndex} />
        ))}
      </motion.div>
    </section>
  );
}

// Card list item with scroll-based highlighting
function CardListItem({
  card,
  index,
  activeIndex,
}: {
  card: CardData;
  index: number;
  activeIndex: ReturnType<typeof useTransform<number, number>>;
}) {
  const isActive = useTransform(activeIndex, (latest: number) => Math.round(latest) >= index);

  return (
    <motion.div
      className="flex items-center gap-3 group"
      style={{
        opacity: useTransform(isActive, (active: boolean) => (active ? 1 : 0.4)),
      }}
    >
      <motion.div
        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-500`}
        style={{
          backgroundColor: useTransform(isActive, (active: boolean) =>
            active ? card.color.replace("bg-", "").replace("[", "").replace("]", "") : "hsl(var(--muted))"
          ),
        }}
        animate={{
          scale: 1,
        }}
      >
        <card.icon className="w-4 h-4 text-white" />
      </motion.div>
      <span className="font-medium text-sm md:text-base text-foreground">
        {card.title}
      </span>
    </motion.div>
  );
}

// Scroll progress dot indicator
function ScrollDot({
  index,
  activeIndex,
}: {
  index: number;
  activeIndex: ReturnType<typeof useTransform<number, number>>;
}) {
  const isActive = useTransform(activeIndex, (latest: number) => Math.round(latest) === index);
  const isPast = useTransform(activeIndex, (latest: number) => Math.round(latest) > index);

  return (
    <motion.div
      className="w-2 h-2 rounded-full transition-all duration-300"
      style={{
        backgroundColor: useTransform(
          [isActive, isPast] as any,
          ([active, past]: [boolean, boolean]) =>
            active ? "hsl(var(--primary))" : past ? "hsl(var(--primary) / 0.5)" : "hsl(var(--muted))"
        ),
        scale: useTransform(isActive, (active: boolean) => (active ? 1.5 : 1)),
      }}
    />
  );
}
