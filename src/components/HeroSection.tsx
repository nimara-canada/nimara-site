import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Zap, Clock, ShieldCheck } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [primaryEmail, setPrimaryEmail] = useState("");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const words = ["Fundable", "Sustainable", "Efficient"];

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Typing animation effect (disabled for reduced motion)
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
      window.location.href = `/check?email=${encodeURIComponent(primaryEmail)}`;
    }
  };

  const stats = [
    {
      icon: Zap,
      value: "1–4 weeks",
      label: "Fast Fixes",
    },
    {
      icon: Clock,
      value: "8–12 weeks",
      label: "Full Setup",
    },
    {
      icon: ShieldCheck,
      value: "Guaranteed",
      label: "If we can't help, you don't pay",
    },
  ];

  return (
    <section className="relative bg-secondary-background overflow-hidden" aria-labelledby="hero-heading">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
      
      {/* Main Hero Content */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Editorial Layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left Column - Content */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <motion.div variants={itemVariants} className="mb-6">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
                  Capacity Building for Canadian Nonprofits
                </span>
              </motion.div>

              {/* H1 with typing animation */}
              <motion.h1 
                variants={itemVariants}
                id="hero-heading" 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-white leading-[1.05] tracking-tight mb-6"
              >
                Keep Your Nonprofit
                <br />
                <span className="relative inline-flex items-baseline">
                  <span className="text-accent italic" aria-live="polite" aria-atomic="true">
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

              {/* Domain pills */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
                {["Board", "Money", "People", "Programs"].map((domain, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium tracking-wide"
                  >
                    {domain}
                  </span>
                ))}
              </motion.div>

              {/* Subhead */}
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-xl"
              >
                Nimara helps you set up simple systems for your board, money, staff, and 
                programs—so your team spends less time fixing problems and more time doing the work.
              </motion.p>

              {/* Ready for... badges */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
                {["Ready for grants", "Ready to grow", "Ready for audits"].map((item, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center gap-2 text-sm text-white/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                <h2 className="text-lg font-semibold text-white mb-2">
                  Start the free 4-minute check
                </h2>
                <p className="text-sm text-white/60 mb-6">
                  See where your systems stand—no commitment required.
                </p>

                <form onSubmit={handleStartCheck} className="space-y-4">
                  <div>
                    <label htmlFor="primary-email" className="block text-sm text-white/80 mb-2">
                      Email (where we can reach you)
                    </label>
                    <Input 
                      id="primary-email" 
                      type="email" 
                      placeholder="name@gmail.com or name@yourorg.ca" 
                      value={primaryEmail} 
                      onChange={e => setPrimaryEmail(e.target.value)} 
                      required 
                      className="w-full h-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-accent focus:ring-accent text-base rounded-xl" 
                      aria-describedby="primary-email-hint" 
                    />
                    <p id="primary-email-hint" className="text-xs text-white/50 mt-2">
                      No domain email yet? That's okay — use your best contact email.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 bg-accent text-secondary-background hover:bg-accent/90 font-semibold text-base rounded-xl"
                  >
                    Start the check
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <p className="text-xs text-white/50 text-center">
                    We'll reach out by email within 2 business days.
                  </p>
                </form>

                <div className="h-px bg-white/10 my-6" />

                <a 
                  href="https://nimara.ca/book-a-call" 
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group"
                >
                  <span className="relative">
                    Have an urgent problem? Book a call instead
                    <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats Section */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12" 
            aria-label="Service guarantees"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-serif font-medium text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-white/50 uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
export default HeroSection;
