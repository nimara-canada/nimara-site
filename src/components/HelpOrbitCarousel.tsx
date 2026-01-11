import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  DollarSign,
  Users,
  BarChart3,
  Heart,
  HandHelping,
  FolderOpen,
  LucideIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
    shortDesc: "Meetings, decisions, approvals",
    longDesc:
      "Your board meets, makes decisions, and approves things. We help you track it all — so nothing gets lost and everything holds up when funders ask.",
  },
  {
    id: 2,
    title: "Money & Grants",
    icon: DollarSign,
    shortDesc: "Spending, receipts, grant records",
    longDesc:
      "Grant tracking, proof of payment, budget vs. actual — all in one place. When accountability is due, your proof is ready.",
  },
  {
    id: 3,
    title: "People",
    icon: Users,
    shortDesc: "Roles, contracts, onboarding",
    longDesc:
      "Clear job descriptions, contractor vs. employee clarity, and simple onboarding steps your team can follow.",
  },
  {
    id: 4,
    title: "Programs",
    icon: BarChart3,
    shortDesc: "Services, outcomes, tracking",
    longDesc:
      "What you deliver, who you serve, and how you measure it — documented so you can report with confidence.",
  },
  {
    id: 5,
    title: "Fundraising",
    icon: Heart,
    shortDesc: "Donor records, giving history",
    longDesc:
      "Track who gave, when, and how much. No more digging through spreadsheets before a campaign.",
  },
  {
    id: 6,
    title: "Volunteers",
    icon: HandHelping,
    shortDesc: "Onboarding, tracking, records",
    longDesc:
      "Know who's helping, what they signed, and when they started. Simple records that protect your org.",
  },
  {
    id: 7,
    title: "Tools & Files",
    icon: FolderOpen,
    shortDesc: "Folders, templates, routines",
    longDesc:
      "A file system that makes sense. Templates your team will actually use. Routines that keep it clean.",
  },
];

export default function HelpOrbitCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCard = cards[activeIndex];
  const ActiveIcon = activeCard.icon;

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section
      id="what-we-help-with"
      className="relative py-20 md:py-28 bg-primary/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container */}
        <div className="bg-white rounded-3xl shadow-xl shadow-black/5 p-8 md:p-12 lg:p-16">
          {/* Featured Card */}
          <div className="flex justify-center mb-10 md:mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full max-w-lg aspect-[16/10] bg-nim-navy rounded-2xl overflow-hidden flex items-center justify-center"
              >
                {/* Decorative background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
                </div>

                {/* Card content */}
                <div className="relative z-10 text-center p-8">
                  {/* Category pill */}
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <ActiveIcon className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">
                      {activeCard.shortDesc}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {activeCard.title}
                  </h3>

                  {/* Nimara badge */}
                  <div className="mt-8 flex items-center justify-center gap-2">
                    <div className="w-5 h-5 bg-nim-mint rounded-full flex items-center justify-center">
                      <span className="text-nim-navy text-xs font-bold">N</span>
                    </div>
                    <span className="text-white/60 text-sm">Nimara</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={goPrev}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="flex gap-1.5">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Description text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                {activeCard.longDesc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold"
            >
              <a href="/start-here">See how we can help</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
