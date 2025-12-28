import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ROTATING_WORDS = ["Funder-Ready", "Audit-Ready", "Report-Ready", "Board-Ready", "Grant-Ready"];

const NimaraHeroPremium = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Rotate words
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      aria-label="Hero section - Get your nonprofit systems ready"
      className="min-h-screen bg-secondary-background text-white relative overflow-hidden"
    >
      {/* Subtle grid pattern - decorative */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 flex flex-col">
          
          {/* Two Column Layout */}
          <div className="flex-1 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left - Headlines */}
            <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-6"}`}>
              
              {/* Main Headline - Bold, large, clean */}
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
                Build systems that make your nonprofit{" "}
                <span className="relative inline-block">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="inline-block text-accent"
                    >
                      {ROTATING_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                  <span>.</span>
                </span>
              </h1>

              {/* Subheadline - Clean, muted */}
              <p className="text-lg md:text-xl leading-relaxed text-white/60 max-w-xl mb-10">
                We help Canadian nonprofits set up clear systems for board, money, people, and reporting so funding is easier to win and manage.
              </p>

              {/* CTAs - Primary button + Secondary text link */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {/* Primary CTA Button */}
                <a
                  href="/health-score"
                  className="inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary-background"
                >
                  Get Free Health Check
                  <span className="text-lg" aria-hidden="true">→</span>
                </a>

                {/* Secondary CTA - text link */}
                <a
                  href="/book-a-call"
                  className="group inline-flex items-center gap-2 text-base text-white/60 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary-background rounded"
                >
                  Need urgent help? Book a call
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </a>
              </div>

              {/* Mobile Dashboard Preview - Simplified */}
              <div className={`mt-10 lg:hidden transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-6"}`}>
                <div className="relative bg-[#0a0a0f] border border-white/10 rounded-xl overflow-hidden shadow-xl">
                  {/* Compact Window Header */}
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-white/[0.02]">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                    <span className="text-[10px] text-white/40 font-medium ml-auto">Health Score</span>
                  </div>

                  {/* Compact Dashboard Content */}
                  <div className="p-4">
                    {/* Score Row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-bold text-white">78</span>
                        <span className="text-sm text-white/40">/100</span>
                      </div>
                      <span className="px-2 py-1 bg-accent/20 text-accent text-[10px] font-medium rounded-full">
                        Tier 3 — Strong
                      </span>
                    </div>

                    {/* Mini Progress Bars */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {[
                        { label: "Governance", value: 85 },
                        { label: "Finance", value: 72 },
                        { label: "Programs", value: 80 },
                        { label: "Operations", value: 68 },
                      ].map((item) => (
                        <div key={item.label} className="space-y-1">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-white/60">{item.label}</span>
                            <span className="text-white/40">{item.value}%</span>
                          </div>
                          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${item.value}%` }}
                              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Premium Dashboard Mockup (Desktop) */}
            <div className={`hidden lg:block transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-6"}`}>
              <div className="relative py-8">
                {/* Main Dashboard Window */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative bg-[#0a0a0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
                >
                  {/* Window Header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-xs text-white/40 font-medium">Health Score Dashboard</span>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 space-y-4">
                    {/* Score Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Overall Score</p>
                        <div className="flex items-baseline gap-2">
                          <motion.span 
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-4xl font-bold text-white"
                          >
                            78
                          </motion.span>
                          <span className="text-lg text-white/40">/100</span>
                        </div>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        className="px-3 py-1.5 bg-accent/20 text-accent text-xs font-medium rounded-full"
                      >
                        Tier 3 — Strong
                      </motion.div>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-3 pt-2">
                      {[
                        { label: "Governance", value: 85, delay: 0.9 },
                        { label: "Finance", value: 72, delay: 1.0 },
                        { label: "Programs", value: 80, delay: 1.1 },
                        { label: "Operations", value: 68, delay: 1.2 },
                      ].map((item) => (
                        <div key={item.label} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-white/70">{item.label}</span>
                            <span className="text-white/50">{item.value}%</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${item.value}%` }}
                              transition={{ duration: 0.8, delay: item.delay, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card - Top Fixes */}
                <motion.div 
                  initial={{ opacity: 0, x: 20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="absolute -right-4 top-2 w-52 bg-white rounded-xl shadow-xl shadow-black/20 p-4 border border-gray-100 z-10"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-xs font-semibold text-gray-900">Top 3 Fixes</span>
                  </div>
                  <div className="space-y-2">
                    {["Board manual", "Monthly reviews", "HR policies"].map((fix, i) => (
                      <motion.div 
                        key={fix}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <span className="w-4 h-4 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        {fix}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Floating Card - Status */}
                <motion.div 
                  initial={{ opacity: 0, x: -20, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="absolute -left-4 bottom-2 bg-white rounded-xl shadow-xl shadow-black/20 p-3 border border-gray-100 z-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900">Funder Ready</p>
                      <p className="text-[10px] text-gray-500">All docs prepared</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Section */}
          <div 
            className={`mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/10 transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            role="region"
            aria-label="Service timelines"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-white mb-1">1–4 weeks</span>
                <span className="text-xs uppercase tracking-[0.15em] text-white/60">Fast Fixes</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-white mb-1">8–12 weeks</span>
                <span className="text-xs uppercase tracking-[0.15em] text-white/60">Full Setup</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-white mb-1">Guaranteed</span>
                <span className="text-xs uppercase tracking-[0.15em] text-white/60">If We Can't Help, You Don't Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NimaraHeroPremium;