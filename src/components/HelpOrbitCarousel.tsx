import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Import stock photos
import boardGovernanceImg from "@/assets/help-cards/board-governance.jpg";
import moneyGrantsImg from "@/assets/help-cards/money-grants.jpg";
import peopleHrImg from "@/assets/help-cards/people-hr.jpg";
import programsServicesImg from "@/assets/help-cards/programs-services.jpg";
import fundraisingDonorsImg from "@/assets/help-cards/fundraising-donors.jpg";
import volunteersImg from "@/assets/help-cards/volunteers.jpg";
import toolsFilesImg from "@/assets/help-cards/tools-files.jpg";

interface CardData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Board & Governance",
    subtitle: "Organized For",
    image: boardGovernanceImg,
  },
  {
    id: 2,
    title: "Money & Grants",
    subtitle: "Tracked For",
    image: moneyGrantsImg,
  },
  {
    id: 3,
    title: "People & HR",
    subtitle: "Systems For",
    image: peopleHrImg,
  },
  {
    id: 4,
    title: "Programs & Services",
    subtitle: "Delivered With",
    image: programsServicesImg,
  },
  {
    id: 5,
    title: "Fundraising & Donors",
    subtitle: "Connected With",
    image: fundraisingDonorsImg,
  },
  {
    id: 6,
    title: "Volunteers",
    subtitle: "Supported With",
    image: volunteersImg,
  },
  {
    id: 7,
    title: "Tools & Files",
    subtitle: "Organized With",
    image: toolsFilesImg,
  },
];

// Individual card component with stock photo
function MarqueeCard({ card }: { card: CardData }) {
  return (
    <div
      className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] h-[320px] sm:h-[360px] md:h-[400px] rounded-2xl overflow-hidden relative group transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
      style={{
        border: "1px solid hsl(var(--border) / 0.2)",
      }}
    >
      {/* Stock photo image */}
      <img 
        src={card.image} 
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-slate-900/20" />

      {/* Bottom text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <p className="text-white/70 text-sm sm:text-base font-medium mb-1">
          {card.subtitle}
        </p>
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight">
          {card.title}
        </h3>
      </div>

      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-colors duration-300 pointer-events-none" />
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
          <h2 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-[-0.03em] text-white leading-[1.05] mb-4 sm:mb-6">
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
