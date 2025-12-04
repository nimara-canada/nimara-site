import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Zap, Layers } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const highlightVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  pulse: {
    boxShadow: [
      "inset 0 0 0 2px currentColor",
      "inset 0 0 20px 2px currentColor",
      "inset 0 0 0 2px currentColor"
    ],
    transition: { duration: 1.5, repeat: 1, ease: "easeInOut" }
  }
};

interface ComparisonRow {
  feature: string;
  pathA: boolean | string;
  pathB: boolean | string;
}

const comparisonData: ComparisonRow[] = [
  { feature: "Timeline", pathA: "1–4 weeks", pathB: "8–12 weeks" },
  { feature: "Health Check scope", pathA: "Single area", pathB: "Full organization" },
  { feature: "Deliverables", pathA: "1–3 focused", pathB: "Full system package" },
  { feature: "Mini Acceptance Bundle", pathA: true, pathB: true },
  { feature: "Full Acceptance Bundle", pathA: false, pathB: true },
  { feature: "NOHC Score included", pathA: false, pathB: true },
  { feature: "3-month support included", pathA: true, pathB: true },
  { feature: "Optional 12-month follow-up", pathA: false, pathB: true },
  { feature: "Money-back guarantee", pathA: true, pathB: true },
  { feature: "Dedicated Practice Partner", pathA: true, pathB: true },
];

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

  return (
    <section id="path-comparison" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
            Compare Options
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Path A vs Path B
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not sure which path fits? Here's a side-by-side breakdown.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-secondary-background text-primary-foreground">
            <div className="p-4 sm:p-6 font-semibold text-sm sm:text-base">
              Feature
            </div>
            <div className="relative p-4 sm:p-6 text-center border-l border-primary-foreground/20">
              <AnimatePresence>
                {highlightedPath === "a" && (
                  <motion.div
                    className="absolute inset-0 bg-accent/20 ring-2 ring-inset ring-accent"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-accent/10"
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 1.2, repeat: 1, ease: "easeInOut" }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="relative flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span className="font-bold text-sm sm:text-base">Path A</span>
              </div>
              <span className="relative text-xs text-primary-foreground/70">Fast Help</span>
            </div>
            <div className="relative p-4 sm:p-6 text-center border-l border-primary-foreground/20">
              <AnimatePresence>
                {highlightedPath === "b" && (
                  <motion.div
                    className="absolute inset-0 bg-primary/20 ring-2 ring-inset ring-primary"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/10"
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 1.2, repeat: 1, ease: "easeInOut" }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="relative flex items-center justify-center gap-2">
                <Layers className="w-4 h-4 text-accent" />
                <span className="font-bold text-sm sm:text-base">Path B</span>
              </div>
              <span className="relative text-xs text-primary-foreground/70">System Build</span>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-border">
            {comparisonData.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="grid grid-cols-3 hover:bg-muted/50 transition-colors"
              >
                <div className="p-4 sm:p-5 text-sm sm:text-base text-foreground font-medium">
                  {row.feature}
                </div>
                <div className="relative p-4 sm:p-5 flex items-center justify-center border-l border-border">
                  <AnimatePresence>
                    {highlightedPath === "a" && (
                      <motion.div
                        className="absolute inset-0 bg-accent/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative">
                    {typeof row.pathA === "boolean" ? (
                      row.pathA ? (
                        <Check className="w-5 h-5 text-accent" aria-label="Included" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/40" aria-label="Not included" />
                      )
                    ) : (
                      <span className="text-sm text-muted-foreground text-center">{row.pathA}</span>
                    )}
                  </span>
                </div>
                <div className="relative p-4 sm:p-5 flex items-center justify-center border-l border-border">
                  <AnimatePresence>
                    {highlightedPath === "b" && (
                      <motion.div
                        className="absolute inset-0 bg-primary/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative">
                    {typeof row.pathB === "boolean" ? (
                      row.pathB ? (
                        <Check className="w-5 h-5 text-primary" aria-label="Included" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/40" aria-label="Not included" />
                      )
                    ) : (
                      <span className="text-sm text-muted-foreground text-center">{row.pathB}</span>
                    )}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="grid grid-cols-3 border-t border-border bg-muted/30">
            <div className="p-4 sm:p-6" />
            <div className="relative p-4 sm:p-6 flex justify-center border-l border-border">
              <AnimatePresence>
                {highlightedPath === "a" && (
                  <motion.div
                    className="absolute inset-0 bg-accent/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  />
                )}
              </AnimatePresence>
              <Link
                to="/path-a"
                className="relative px-6 py-2.5 bg-accent text-accent-foreground font-semibold rounded-xl hover:opacity-90 transition-all text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 min-h-[44px] flex items-center"
              >
                Start Path A
              </Link>
            </div>
            <div className="relative p-4 sm:p-6 flex justify-center border-l border-border">
              <AnimatePresence>
                {highlightedPath === "b" && (
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  />
                )}
              </AnimatePresence>
              <Link
                to="/path-b"
                className="relative px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-[#5835B8] transition-all text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 min-h-[44px] flex items-center"
              >
                Start Path B
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
