import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Zap, Layers, Info, Printer, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
const highlightVariants = {
  initial: {
    opacity: 0,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  pulse: {
    boxShadow: ["inset 0 0 0 2px currentColor", "inset 0 0 20px 2px currentColor", "inset 0 0 0 2px currentColor"],
    transition: {
      duration: 1.5,
      repeat: 1,
      ease: "easeInOut"
    }
  }
};
interface ComparisonRow {
  feature: string;
  tooltip: string;
  pathA: boolean | string;
  pathB: boolean | string;
}
const comparisonData: ComparisonRow[] = [{
  feature: "Timeline",
  tooltip: "How long the engagement typically takes from start to finish",
  pathA: "1–4 weeks",
  pathB: "8–12 weeks"
}, {
  feature: "Health Check scope",
  tooltip: "The breadth of organizational assessment included",
  pathA: "Single area",
  pathB: "Full organization"
}, {
  feature: "Deliverables",
  tooltip: "Tangible outputs you receive at the end of the engagement",
  pathA: "1–3 focused",
  pathB: "Full system package"
}, {
  feature: "Mini Acceptance Bundle",
  tooltip: "A lite handover package with key documentation and training",
  pathA: true,
  pathB: true
}, {
  feature: "Full Acceptance Bundle",
  tooltip: "Comprehensive handover including policies, SOPs, templates, and staff training",
  pathA: false,
  pathB: true
}, {
  feature: "NOHC Score included",
  tooltip: "Nimara Organizational Health Check score—a benchmark of your nonprofit's operational maturity",
  pathA: false,
  pathB: true
}, {
  feature: "3-month support included",
  tooltip: "Post-delivery support to help your team adopt and troubleshoot new systems",
  pathA: true,
  pathB: true
}, {
  feature: "Optional 12-month follow-up",
  tooltip: "Extended support and check-ins to ensure long-term success",
  pathA: "Add on",
  pathB: "Add on"
}, {
  feature: "Money-back guarantee",
  tooltip: "If deliverables don't meet agreed standards, we fix them or refund that portion",
  pathA: true,
  pathB: true
}, {
  feature: "Dedicated Practice Partner",
  tooltip: "A single point of contact who manages your engagement end-to-end",
  pathA: true,
  pathB: true
}];
export const PathComparison = () => {
  const location = useLocation();
  const [highlightedPath, setHighlightedPath] = useState<"a" | "b" | null>(null);
  useEffect(() => {
    const hash = location.hash;
    if (hash.includes("highlight=a")) {
      setHighlightedPath("a");
    } else if (hash.includes("highlight=b")) {
      setHighlightedPath("b");
    } else {
      setHighlightedPath(null);
    }
  }, [location]);
  return <section id="path-comparison" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-12" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
            Compare Options
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Path A vs Path B
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Not sure which path fits? Here's a side-by-side breakdown.
          </p>
          
        </motion.div>

        {/* Comparison Table */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="bg-card rounded-2xl border border-border shadow-soft overflow-visible pt-4">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-secondary-background text-primary-foreground">
            <div className="p-4 sm:p-6 font-semibold text-sm sm:text-base">
              Feature
            </div>
            <div className="relative p-4 sm:p-6 text-center border-l border-primary-foreground/20">
              <AnimatePresence>
                {highlightedPath === "a" && <>
                    <motion.div className="absolute inset-0 bg-accent/20 ring-2 ring-inset ring-accent" initial={{
                  opacity: 0,
                  scale: 0.98
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} exit={{
                  opacity: 0
                }} transition={{
                  duration: 0.4,
                  ease: "easeOut"
                }}>
                      <motion.div className="absolute inset-0 bg-accent/10" animate={{
                    opacity: [0, 0.5, 0]
                  }} transition={{
                    duration: 1.2,
                    repeat: 1,
                    ease: "easeInOut"
                  }} />
                    </motion.div>
                    <motion.span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-accent text-accent-foreground text-[10px] font-semibold rounded-full whitespace-nowrap shadow-md" initial={{
                  opacity: 0,
                  y: 10,
                  scale: 0.8
                }} animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1
                }} exit={{
                  opacity: 0,
                  y: -5
                }} transition={{
                  duration: 0.3,
                  delay: 0.2
                }}>
                      You are here
                    </motion.span>
                  </>}
              </AnimatePresence>
              <div className="relative flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span className="font-bold text-sm sm:text-base">Path A</span>
              </div>
              <span className="relative text-xs text-primary-foreground/70">Fast Help</span>
            </div>
            <div className="relative p-4 sm:p-6 text-center border-l border-primary-foreground/20 bg-primary/10">
              {/* Most Popular Badge */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wide rounded-full whitespace-nowrap shadow-md z-10">
                Most Popular
              </span>
              <AnimatePresence>
                {highlightedPath === "b" && <>
                    <motion.div className="absolute inset-0 bg-primary/20 ring-2 ring-inset ring-primary" initial={{
                  opacity: 0,
                  scale: 0.98
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} exit={{
                  opacity: 0
                }} transition={{
                  duration: 0.4,
                  ease: "easeOut"
                }}>
                      <motion.div className="absolute inset-0 bg-primary/10" animate={{
                    opacity: [0, 0.5, 0]
                  }} transition={{
                    duration: 1.2,
                    repeat: 1,
                    ease: "easeInOut"
                  }} />
                    </motion.div>
                    <motion.span className="absolute top-5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-accent text-accent-foreground text-[10px] font-semibold rounded-full whitespace-nowrap shadow-md z-20" initial={{
                  opacity: 0,
                  y: 10,
                  scale: 0.8
                }} animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1
                }} exit={{
                  opacity: 0,
                  y: -5
                }} transition={{
                  duration: 0.3,
                  delay: 0.2
                }}>
                      You are here
                    </motion.span>
                  </>}
              </AnimatePresence>
              <div className="relative flex items-center justify-center gap-2 mt-2">
                <Layers className="w-4 h-4 text-accent" />
                <span className="font-bold text-sm sm:text-base">Path B</span>
              </div>
              <span className="relative text-xs text-primary-foreground/70">System Build</span>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-border">
            {comparisonData.map((row, index) => <motion.div key={row.feature} initial={{
            opacity: 0,
            x: -10
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.3,
            delay: index * 0.05
          }} className="grid grid-cols-3 hover:bg-muted/50 transition-colors">
                <div className="p-4 sm:p-5 text-sm sm:text-base text-foreground font-medium">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="inline-flex items-center gap-1.5 cursor-help">
                        {row.feature}
                        <Info className="w-3.5 h-3.5 text-muted-foreground/60 hover:text-primary transition-colors" />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="max-w-[200px] text-xs">
                      {row.tooltip}
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="relative p-4 sm:p-5 flex items-center justify-center border-l border-border">
                  <AnimatePresence>
                    {highlightedPath === "a" && <motion.div className="absolute inset-0 bg-accent/10" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} exit={{
                  opacity: 0
                }} transition={{
                  duration: 0.3,
                  delay: index * 0.03
                }} />}
                  </AnimatePresence>
                  <span className="relative">
                    {typeof row.pathA === "boolean" ? row.pathA ? <Check className="w-5 h-5 text-emerald-500" aria-label="Included" /> : <X className="w-5 h-5 text-red-500" aria-label="Not included" /> : <span className="text-sm text-muted-foreground text-center">{row.pathA}</span>}
                  </span>
                </div>
                <div className="relative p-4 sm:p-5 flex items-center justify-center border-l border-border bg-primary/5">
                  <AnimatePresence>
                    {highlightedPath === "b" && <motion.div className="absolute inset-0 bg-primary/10" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} exit={{
                  opacity: 0
                }} transition={{
                  duration: 0.3,
                  delay: index * 0.03
                }} />}
                  </AnimatePresence>
                  <span className="relative">
                    {typeof row.pathB === "boolean" ? row.pathB ? <Check className="w-5 h-5 text-emerald-500" aria-label="Included" /> : <X className="w-5 h-5 text-red-500" aria-label="Not included" /> : <span className="text-sm text-muted-foreground text-center">{row.pathB}</span>}
                  </span>
                </div>
              </motion.div>)}
          </div>

          {/* CTA Row */}
          <div className="grid grid-cols-3 border-t border-border bg-muted/30">
            <div className="p-4 sm:p-6" />
            <div className="relative p-4 sm:p-6 flex justify-center border-l border-border">
              <AnimatePresence>
                {highlightedPath === "a" && <motion.div className="absolute inset-0 bg-accent/10" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} transition={{
                duration: 0.3,
                delay: 0.3
              }} />}
              </AnimatePresence>
              <Link to="/path-a" className="relative px-6 py-2.5 bg-accent text-accent-foreground font-semibold rounded-xl hover:opacity-90 transition-all text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 min-h-[44px] flex items-center">
                Start Path A
              </Link>
            </div>
            <div className="relative p-4 sm:p-6 flex justify-center border-l border-border bg-primary/5">
              <AnimatePresence>
                {highlightedPath === "b" && <motion.div className="absolute inset-0 bg-primary/10" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} transition={{
                duration: 0.3,
                delay: 0.3
              }} />}
              </AnimatePresence>
              <Link to="/path-b" className="relative px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-[#5835B8] transition-all text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 min-h-[44px] flex items-center">
                Start Path B
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Not sure link */}
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.4,
        delay: 0.3
      }} className="text-center mt-8">
          <Link to="/health-score" className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
            <span>Not sure which path?</span>
            <span className="font-medium text-primary underline underline-offset-2">Take our health score assessment</span>
            <motion.span className="inline-flex" animate={{
            x: [0, 4, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}>
              <ArrowRight className="w-4 h-4 text-primary" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>;
};