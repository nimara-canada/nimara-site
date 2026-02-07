import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROTATING_WORDS = [
  "governance",
  "finance",
  "HR",
  "operations",
  "fundraising",
  "volunteer",
  "systems"
];

export const FinalCTA = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 bg-nim-navy">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-[clamp(2rem,6.4vw,5.6rem)] font-black text-primary-foreground mb-6 sm:mb-8 md:mb-10 lg:mb-12 tracking-[-0.04em] leading-[0.95] uppercase">
          Let's build your next{" "}
          <span className="relative inline-block min-w-[4ch]">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-accent inline-block"
              >
                {ROTATING_WORDS[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>

        {/* Button */}
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="w-full sm:w-auto bg-white text-nim-navy hover:bg-white/90 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 lg:py-7 text-sm sm:text-base md:text-lg font-semibold rounded-full transition-all duration-300"
        >
          <a
            href={TYPEFORM_HEALTH_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Take the free check
            <ArrowRight
              className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5"
              aria-hidden="true"
            />
          </a>
        </Button>
      </div>
    </section>
  );
};
