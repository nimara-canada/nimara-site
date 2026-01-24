import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    step: 1,
    title: "Diagnose",
    description: "We find the gaps that make funding stressful. We review your finance flow, board decisions, files, and reporting—then give you a simple scorecard and the exact order to fix it.",
    tools: ["Google Drive", "Microsoft 365", "Sheets", "Excel"],
    kidLine: "We look for the mess.",
    bgClass: "bg-[hsl(var(--nim-navy))]",
    textClass: "text-white",
    subtextClass: "text-white/80",
    borderClass: "border-white/20",
    poster: {
      bg: "hsl(165, 45%, 85%)",
      label: "Nonprofit Health Check",
      accentColor: "hsl(var(--nim-navy))",
      mainText: "NOHC",
      stats: ["Tier 0 → 4", "1 Scorecard"],
      pattern: "circles"
    }
  },
  {
    step: 2,
    title: "Install",
    description: "We don't teach. We install. We build the system inside your tools—approvals, trackers, board templates, source-of-truth folders, and a proof dashboard your team can actually run.",
    tools: ["Google Drive", "Microsoft 365", "Templates", "Dashboards"],
    kidLine: "We build the helper machine.",
    bgClass: "bg-[hsl(var(--nim-purple))]",
    textClass: "text-white",
    subtextClass: "text-white/80",
    borderClass: "border-white/20",
    poster: {
      bg: "hsl(var(--nim-navy))",
      label: "System Install",
      accentColor: "hsl(var(--nim-purple))",
      mainText: "4 Engines",
      subTexts: ["Money", "Leadership", "Memory", "Trust"],
      timeline: "6 Weeks",
      timelineDesc: "Mock Audit",
      pattern: "dots"
    }
  },
  {
    step: 3,
    title: "Maintain",
    description: "We keep it from falling apart. You get a simple playbook, checklists, and a maintenance rhythm—so when staff change, the system still works.",
    tools: ["Checklists", "Monthly rhythm", "Quarterly tune-up"],
    kidLine: "We help you keep it tidy.",
    bgClass: "bg-[hsl(var(--nim-mint))]",
    textClass: "text-[hsl(var(--nim-navy))]",
    subtextClass: "text-[hsl(var(--nim-navy))]/70",
    borderClass: "border-[hsl(var(--nim-navy))]/20",
    poster: {
      bg: "hsl(30, 30%, 95%)",
      label: "Maintenance Rhythm",
      accentColor: "hsl(var(--nim-mint-dark))",
      stats: [
        { value: "30 min", label: "/ month" },
        { value: "1", label: "Playbook" },
        { value: "Q4", label: "Check" }
      ],
      pattern: "calendar"
    }
  }
];

const StepCardsStack = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate Y transforms for each card based on scroll progress
  const card2Y = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);
  const card3Y = useTransform(scrollYProgress, [0.5, 1], ["100%", "0%"]);

  // Reduced motion fallback
  if (prefersReducedMotion) {
    return (
      <section className="bg-background">
        {cards.map((card, index) => (
          <div key={index} className={`${card.bgClass} min-h-[80vh] flex items-center px-6 lg:px-12 py-16 lg:py-24`}>
            <FullScreenCard card={card} />
          </div>
        ))}
      </section>
    );
  }

  return (
    <section 
      ref={containerRef} 
      className="relative bg-background" 
      style={{ height: `${cards.length * 100}vh` }}
    >
      {/* Sticky container that pins during scroll */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative h-full w-full">
          {/* Card 1 - Diagnose (Base layer) */}
          <div className="absolute inset-0" style={{ zIndex: 1 }}>
            <FullScreenCard card={cards[0]} />
          </div>

          {/* Card 2 - Install (Slides up) */}
          {isMounted && (
            <motion.div 
              className="absolute inset-0" 
              style={{ zIndex: 2, y: card2Y, willChange: "transform" }}
            >
              <FullScreenCard card={cards[1]} />
            </motion.div>
          )}

          {/* Card 3 - Maintain (Slides up) */}
          {isMounted && (
            <motion.div 
              className="absolute inset-0" 
              style={{ zIndex: 3, y: card3Y, willChange: "transform" }}
            >
              <FullScreenCard card={cards[2]} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

interface CardData {
  step: number;
  title: string;
  description: string;
  tools: string[];
  kidLine: string;
  bgClass: string;
  textClass: string;
  subtextClass: string;
  borderClass: string;
  poster: {
    bg: string;
    label: string;
    accentColor: string;
    mainText?: string;
    subTexts?: string[];
    stats?: any;
    timeline?: string;
    timelineDesc?: string;
    pattern: string;
  };
}

const FullScreenCard = ({ card }: { card: CardData }) => {
  return (
    <div className={`h-full w-full ${card.bgClass} flex items-center px-6 lg:px-12`}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-between relative z-10">
            {/* Top: Step Number + Description */}
            <div>
              {/* Step Number */}
              <div className={`w-12 h-12 rounded-full border-2 ${card.borderClass} flex items-center justify-center mb-8`}>
                <span className={`text-lg font-medium ${card.textClass}`}>{card.step}</span>
              </div>

              {/* Description */}
              <p className={`text-lg lg:text-xl ${card.subtextClass} leading-relaxed max-w-md mb-8`}>
                {card.description}
              </p>

              {/* Tool Icons Row */}
              <div className={`flex flex-wrap items-center gap-3 text-sm ${card.subtextClass} opacity-60`}>
                {card.tools.map((tool, i) => (
                  <span key={i} className="flex items-center gap-3">
                    {tool}
                    {i < card.tools.length - 1 && (
                      <span className={`w-1 h-1 rounded-full ${card.bgClass === "bg-[hsl(var(--nim-mint))]" ? "bg-[hsl(var(--nim-navy))]/30" : "bg-white/30"}`} />
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom: Big Word + Learn More */}
            <div className="mt-auto pt-12 lg:pt-20">
              {/* Big Word */}
              <h2 
                className={`text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-black leading-[0.85] tracking-[-0.04em] uppercase ${card.textClass}`}
                style={{ fontWeight: 900 }}
              >
                {card.title}
              </h2>

              {/* Learn More Link */}
              <div className={`mt-8 pt-6 border-t ${card.borderClass} max-w-md`}>
                <a 
                  href="/how-nimara-works" 
                  className="inline-flex items-center justify-between w-full group"
                >
                  <span className={`text-lg ${card.subtextClass} group-hover:opacity-100 transition-opacity`}>
                    Learn more
                  </span>
                  <ArrowUpRight className={`w-5 h-5 ${card.subtextClass} group-hover:translate-x-1 group-hover:-translate-y-1 transition-all`} />
                </a>
              </div>

              {/* Kid-language sub-line */}
              <p className={`text-sm ${card.subtextClass} opacity-50 mt-4 italic`}>
                {card.kidLine}
              </p>
            </div>
          </div>

          {/* Right Column - Poster Card */}
          <div className="flex items-center justify-center lg:justify-end">
            <PosterCard card={card} />
          </div>
        </div>
      </div>
    </div>
  );
};

const PosterCard = ({ card }: { card: CardData }) => {
  const { poster } = card;

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]">
      <div 
        className="relative rounded-xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: poster.bg, aspectRatio: '3/4' }}
      >
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Top label */}
        <div className="absolute top-5 left-5 right-5">
          <span 
            className="text-[10px] uppercase tracking-[0.2em] font-semibold"
            style={{ color: card.step === 2 ? 'rgba(255,255,255,0.7)' : 'rgba(20,26,58,0.7)' }}
          >
            {poster.label}
          </span>
        </div>

        {/* Corner accent */}
        <div 
          className="absolute top-5 right-5 w-5 h-5 rounded-full"
          style={{ backgroundColor: poster.accentColor }}
        />

        {/* Pattern based on card type */}
        <div className="absolute inset-0 flex items-center justify-center">
          {poster.pattern === "circles" && (
            <svg width="140" height="140" viewBox="0 0 140 140" className="opacity-30">
              <circle cx="70" cy="70" r="60" fill="none" stroke="hsl(var(--nim-navy))" strokeWidth="1" strokeDasharray="3 5" />
              <circle cx="70" cy="70" r="45" fill="none" stroke="hsl(var(--nim-navy))" strokeWidth="1" strokeDasharray="3 5" />
              <circle cx="70" cy="70" r="30" fill="none" stroke="hsl(var(--nim-navy))" strokeWidth="1" strokeDasharray="3 5" />
              <circle cx="70" cy="70" r="12" fill="hsl(var(--nim-navy))" opacity="0.3" />
            </svg>
          )}
          {poster.pattern === "dots" && (
            <svg width="160" height="160" viewBox="0 0 160 160" className="opacity-20">
              {[...Array(7)].map((_, row) => (
                [...Array(7)].map((_, col) => (
                  <circle key={`${row}-${col}`} cx={20 + col * 20} cy={20 + row * 20} r="2" fill="white" />
                ))
              ))}
            </svg>
          )}
          {poster.pattern === "calendar" && (
            <svg width="160" height="120" viewBox="0 0 160 120" className="opacity-20">
              {[...Array(4)].map((_, row) => (
                [...Array(7)].map((_, col) => (
                  <g key={`${row}-${col}`}>
                    <rect 
                      x={10 + col * 20} 
                      y={10 + row * 25} 
                      width="16" 
                      height="20" 
                      fill="none" 
                      stroke="hsl(var(--nim-navy))" 
                      strokeWidth="1"
                      rx="2"
                    />
                    {(row * 7 + col) % 3 === 0 && (
                      <path 
                        d={`M${14 + col * 20},${20 + row * 25} L${18 + col * 20},${24 + row * 25} L${24 + col * 20},${16 + row * 25}`}
                        fill="none"
                        stroke="hsl(var(--nim-navy))"
                        strokeWidth="1.5"
                      />
                    )}
                  </g>
                ))
              ))}
            </svg>
          )}
        </div>

        {/* Bottom stats - varies by card */}
        <div className="absolute bottom-5 left-5 right-5">
          {card.step === 1 && (
            <div className="flex items-end justify-between gap-4">
              <span 
                className="text-4xl sm:text-5xl font-black tracking-tight"
                style={{ color: 'hsl(var(--nim-navy))' }}
              >
                {poster.mainText}
              </span>
              <div className="text-right">
                <p className="text-[10px] sm:text-xs leading-tight font-medium" style={{ color: 'rgba(20,26,58,0.6)' }}>
                  {poster.stats?.[0]}<br />
                  {poster.stats?.[1]}
                </p>
              </div>
            </div>
          )}
          
          {card.step === 2 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/20">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  {poster.mainText}
                </span>
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  {poster.timeline}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {poster.subTexts?.map((text, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider text-white/60 font-medium">
                      {text}{i < (poster.subTexts?.length || 0) - 1 ? " •" : ""}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium">
                  {poster.timelineDesc}
                </span>
              </div>
            </div>
          )}
          
          {card.step === 3 && (
            <div className="space-y-2">
              {poster.stats?.map((stat: { value: string; label: string }, i: number) => (
                <div key={i} className="flex items-baseline justify-between">
                  <span 
                    className="text-xl sm:text-2xl font-black tracking-tight"
                    style={{ color: 'hsl(var(--nim-navy))' }}
                  >
                    {stat.value}
                  </span>
                  <span 
                    className="text-[10px] uppercase tracking-wider font-medium"
                    style={{ color: 'rgba(20,26,58,0.6)' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepCardsStack;
