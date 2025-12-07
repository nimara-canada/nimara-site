import React, { useEffect, useState, useRef } from "react";
const HeroSectionLuxe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const words = ["Fundable", "Audit-Ready", "Sustainable", "Efficient", "Compliant"];

  // Chart animation states
  const [chartValues, setChartValues] = useState([0, 0, 0]);

  // Typing animation effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = 100;
    const deleteSpeed = 60;
    const pauseTime = 2000;
    let timeout: NodeJS.Timeout;
    if (!isDeleting) {
      // Typing
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Move to next word
        setIsDeleting(false);
        setWordIndex(prev => (prev + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);
  useEffect(() => {
    // Smooth entrance
    const timer = setTimeout(() => setIsVisible(true), 100);

    // Animate charts after delay
    const chartTimer = setTimeout(() => {
      setChartValues([98, 92, 88]);
    }, 1200);
    return () => {
      clearTimeout(timer);
      clearTimeout(chartTimer);
    };
  }, []);
  return <section className="relative min-h-[90vh] flex items-center bg-secondary-background overflow-hidden pt-20 md:pt-24 pb-16 md:pb-24">

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Premium content */}
          <div className="max-w-xl">
            {/* Animated badge */}
            <div className={`inline-block mb-8 transition-all duration-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
                </div>
                <span className="text-xs font-semibold text-accent tracking-widest uppercase">
                  Built for Canadian Nonprofits
                </span>
              </div>
            </div>

            {/* Premium headline with word rotation */}
            <h1 className={`text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] tracking-tight mb-6 sm:mb-8 transition-all duration-1200 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Keep Your Nonprofit<br />
              <span className="relative inline-flex items-baseline">
                <span key={wordIndex} className="text-accent transition-all duration-300 animate-fade-in">
                  {displayText}
                  <span className="animate-pulse ml-0.5 inline-block w-[3px] h-[1em] bg-accent align-middle" />
                </span>
              </span>
            </h1>

            {/* Refined description */}
            <p className={`text-base sm:text-xl text-white/60 mb-8 sm:mb-12 leading-relaxed font-light transition-all duration-1200 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              We help small and mid-size nonprofits in Canada fix urgent problems fast, then install the files that keep funders and auditors happy—
              <span className="text-white/90 font-normal">board rules</span>,{" "}
              <span className="text-white/90 font-normal">money tracking</span>,{" "}
              <span className="text-white/90 font-normal">staff folders</span>.
            </p>

            {/* Premium CTA buttons */}
            <div className={`space-y-4 mb-10 sm:mb-16 transition-all duration-1200 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="/path-a" className="group relative px-6 sm:px-8 py-3.5 sm:py-4 overflow-hidden rounded-xl bg-accent text-accent-foreground font-semibold shadow-soft transition-all duration-500 hover:shadow-lg hover:scale-[1.02] text-sm sm:text-base" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    I have an urgent problem
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>

                <a href="/health-score" className="group px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur text-primary-foreground font-semibold transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:shadow-lg text-sm sm:text-base">
                  <span className="flex items-center justify-center gap-2">
                    Get Your Health Score
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
              <p className="text-xs sm:text-sm text-white/50 text-center sm:text-left">
                Not sure where to start? We'll help you choose on the first call.
              </p>
            </div>

            {/* Elegant stats */}
            <div className={`flex items-center gap-4 sm:gap-8 transition-all duration-1200 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="text-2xl sm:text-3xl font-extralight text-primary-foreground">1–4</span>
                  <span className="text-xs sm:text-sm font-medium text-white/50 uppercase tracking-wider">weeks</span>
                </div>
                <span className="text-[10px] sm:text-xs text-white/40">Fast fixes</span>
              </div>
              <div className="w-px h-10 sm:h-12 bg-white/20" />
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="text-2xl sm:text-3xl font-extralight text-primary-foreground">8–12</span>
                  <span className="text-xs sm:text-sm font-medium text-white/50 uppercase tracking-wider">weeks</span>
                </div>
                <span className="text-[10px] sm:text-xs text-white/40">Full systems</span>
              </div>
              <div className="w-px h-10 sm:h-12 bg-white/20" />
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="text-2xl sm:text-3xl font-extralight text-primary-foreground">100%</span>
                  <span className="text-xs sm:text-sm font-medium text-white/50 uppercase tracking-wider">guarantee</span>
                </div>
                <span className="text-[10px] sm:text-xs text-white/40">Money-back</span>
              </div>
            </div>
          </div>

          {/* Right: Path comparison preview */}
          <div ref={cardRef} className={`relative transition-all duration-1500 delay-600 ${isVisible ? "opacity-100 translate-y-0 animate-float-subtle" : "opacity-0 translate-y-8"}`}>
            {/* Main card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer group/card">
              <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none shadow-2xl" />
              {/* Card header */}
              <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6 border-b border-gray-100/60 bg-gradient-to-b from-gray-50/30 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-10 h-10 bg-secondary-background rounded-xl flex items-center justify-center">
                        <span className="text-white font-medium text-base">N</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-800 tracking-tight">Two paths to choose from</h3>
                      <p className="text-[10px] text-gray-400 font-normal mt-0.5 tracking-wide uppercase">Pick what fits your need</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card body - Two paths */}
              <div className="px-5 sm:px-8 py-6 sm:py-8">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {/* Path A */}
                  <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-semibold text-accent uppercase tracking-wider">Fast Help</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">1–4 weeks</p>
                    <ul className="space-y-2">
                      {["Policy quick-fix", "Audit prep file", "Board template"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] text-gray-600">
                          <svg className="w-3 h-3 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Path B */}
                  <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-primary text-white text-[8px] font-semibold rounded-full uppercase tracking-wider">
                      Popular
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">Full System</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">8–12 weeks</p>
                    <ul className="space-y-2">
                      {["Full governance kit", "Finance & HR setup", "3-month support"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] text-gray-600">
                          <svg className="w-3 h-3 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA hint */}
                <div className="mt-6 pt-5 border-t border-gray-100/60 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[11px] text-gray-400">Not sure? Start with a Health Score</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>;
};
export { HeroSectionLuxe as HeroSection };
export default HeroSectionLuxe;