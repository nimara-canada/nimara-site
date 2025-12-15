import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [primaryEmail, setPrimaryEmail] = useState("");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const words = ["Fundable", "Sustainable", "Efficient"];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(words[0]);
      return;
    }
    const currentWord = words[wordIndex];
    const typeSpeed = 150;
    const deleteSpeed = 90;
    const pauseTime = 2000;
    let timeout: NodeJS.Timeout;
    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex(prev => (prev + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, prefersReducedMotion]);

  const handleStartCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (primaryEmail) {
      window.location.href = `/book-a-call?email=${encodeURIComponent(primaryEmail)}`;
    }
  };

  return (
    <section className="relative bg-hero-background text-white overflow-hidden" aria-labelledby="hero-heading">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px),
                           linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>
      
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Content */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-10"
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/50">
                Capacity Building for Canadian Nonprofits
              </span>
              <div className="h-px w-16 bg-white/20" />
            </motion.div>

            {/* H1 with typing animation */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              id="hero-heading" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-6 text-white"
            >
              Keep Your Nonprofit
              <br />
              <span className="relative inline-flex items-baseline">
                <span className="font-normal italic text-accent" aria-live="polite" aria-atomic="true">
                  {displayText || words[0]}
                  {!prefersReducedMotion && (
                    <span 
                      className="animate-pulse ml-0.5 inline-block w-[3px] h-[0.85em] bg-accent align-middle" 
                      aria-hidden="true" 
                    />
                  )}
                </span>
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed max-w-xl"
            >
              Nimara helps you set up simple systems for your board, money, staff, and 
              programs—so your team spends less time fixing problems and more time doing the work.
            </motion.p>

            {/* Ready for... */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 mb-12"
            >
              {["Ready for grants", "Ready to grow", "Ready for audits"].map((item, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center gap-2 text-sm text-white/70"
                >
                  <span className="w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-8"
            >
              <a
                href="/book-a-call"
                className="group inline-flex items-center gap-3 text-white font-medium"
              >
                <span className="group-hover:text-accent transition-colors">Start the free check</span>
                <span className="w-8 h-px bg-white group-hover:w-12 group-hover:bg-accent transition-all duration-300" />
              </a>

              <a
                href="/book-a-call"
                className="group inline-flex items-center gap-3 text-white/60 font-medium"
              >
                <span className="group-hover:text-accent transition-colors">Have an urgent problem?</span>
                <span className="w-8 h-px bg-white/40 group-hover:w-12 group-hover:bg-accent transition-all duration-300" />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="p-8 lg:p-10 border border-white/10 bg-white/[0.03]">
              <h2 className="text-xl font-medium text-white mb-2">
                Start the free 4-minute check
              </h2>
              <p className="text-sm text-white/50 mb-8">
                See where your systems stand—no commitment required.
              </p>

              <form onSubmit={handleStartCheck} className="space-y-6">
                <div>
                  <label htmlFor="primary-email" className="block text-sm text-white/70 mb-2">
                    Email (where we can reach you)
                  </label>
                  <Input 
                    id="primary-email" 
                    type="email" 
                    placeholder="name@gmail.com or name@yourorg.ca" 
                    value={primaryEmail} 
                    onChange={e => setPrimaryEmail(e.target.value)} 
                    required 
                    className="w-full h-12 bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-accent focus:ring-accent text-base" 
                    aria-describedby="primary-email-hint" 
                  />
                  <p id="primary-email-hint" className="text-xs text-white/40 mt-2">
                    No domain email yet? That's okay — use your best contact email.
                  </p>
                </div>

                <button 
                  type="submit" 
                  className="w-full h-14 bg-accent text-hero-background font-medium hover:bg-accent/90 transition-colors"
                >
                  Start the check
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>

                <p className="text-xs text-white/40 text-center">
                  We'll reach out by email within 2 business days.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: "1–4 weeks", label: "Fast Fixes" },
              { value: "8–12 weeks", label: "Full Setup" },
              { value: "Guaranteed", label: "If we can't help, you don't pay" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-light text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-white/40 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { HeroSection };
export default HeroSection;
