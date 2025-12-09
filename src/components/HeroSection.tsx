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
  return <section className="relative min-h-[90vh] flex items-center bg-secondary-background overflow-hidden pt-8 md:pt-12 pb-16 md:pb-24">

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
                  ​Capacity building for nonprofits

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
            <p className={`text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed transition-all duration-1200 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Nimara helps Canadian nonprofits build the core systems funders expect. We install right-sized{" "}
              <span className="text-white font-medium">governance</span>,{" "}
              <span className="text-white font-medium">finance</span>,{" "}
              <span className="text-white font-medium">HR</span>, and{" "}
              <span className="text-white font-medium">program systems</span>—so you can focus on your mission, not your filing cabinets.
            </p>

            {/* Premium CTA buttons */}
            <div className={`space-y-4 mb-10 sm:mb-16 transition-all duration-1200 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <p className="text-sm sm:text-base text-white/90 font-medium mb-2">
                Two ways to start: fix one urgent problem, or get an NOHC Snapshot.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="/path-a" className="group relative px-6 sm:px-8 py-3.5 sm:py-4 overflow-hidden rounded-xl bg-accent text-accent-foreground font-semibold shadow-soft transition-all duration-500 hover:shadow-lg hover:scale-[1.02] text-sm sm:text-base whitespace-nowrap" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    ​I have an urgent problem
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>

                <a href="/health-score" className="group px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur text-primary-foreground font-semibold transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:shadow-lg text-sm sm:text-base whitespace-nowrap">
                  <span className="flex items-center justify-center gap-2">
                    ​Talk about your systems
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
              <p className="text-xs sm:text-sm text-white/80 text-center sm:text-left">
                Not sure where to start? We'll help you choose on the first call.
              </p>
            </div>

            {/* Elegant stats */}
            <div className={`flex items-center gap-4 sm:gap-8 transition-all duration-1200 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="text-2xl sm:text-3xl font-extralight text-primary-foreground">1–4</span>
                  <span className="text-xs sm:text-sm font-medium text-white/70 uppercase tracking-wider">weeks</span>
                </div>
                <span className="text-[10px] sm:text-xs text-white/60">Fast fixes</span>
              </div>
              <div className="w-px h-10 sm:h-12 bg-white/20" />
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="text-2xl sm:text-3xl font-extralight text-primary-foreground">8–12</span>
                  <span className="text-xs sm:text-sm font-medium text-white/70 uppercase tracking-wider">weeks</span>
                </div>
                <span className="text-[10px] sm:text-xs text-white/60">Full systems</span>
              </div>
              <div className="w-px h-10 sm:h-12 bg-white/20" />
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="text-2xl sm:text-3xl font-extralight text-primary-foreground">100%</span>
                  <span className="text-xs sm:text-sm font-medium text-white/70 uppercase tracking-wider">guarantee</span>
                </div>
                <span className="text-[10px] sm:text-xs text-white/60">Money-back</span>
              </div>
            </div>
          </div>

          {/* Right: NOHC Result Dashboard */}
          <div ref={cardRef} className={`relative transition-all duration-1500 delay-600 ${isVisible ? "opacity-100 translate-y-0 animate-float-subtle" : "opacity-0 translate-y-8"}`}>
            {/* Main card - slightly smaller */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-white/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer group/card max-w-sm lg:max-w-md">
              <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none shadow-2xl" />
              {/* Card header */}
              <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b border-gray-100/60 bg-gradient-to-b from-gray-50/30 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-9 h-9 bg-secondary-background rounded-lg flex items-center justify-center">
                        <span className="text-white font-medium text-sm">N</span>
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-accent rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-800 tracking-tight">NOHC Results</h3>
                      <p className="text-[10px] text-gray-500 font-normal mt-0.5 tracking-wide uppercase">NOHC Snapshot Outcome</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] text-gray-500 tracking-wider">SAMPLE</span>
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="px-4 sm:px-6 py-4 sm:py-6">
                {/* Metrics */}
                <div className="space-y-5">
                {[{
                  label: "Governance & Board",
                  value: chartValues[0],
                  color: "from-teal-400/80 to-teal-500/80"
                }, {
                  label: "Financial Systems",
                  value: chartValues[1],
                  color: "from-slate-400/80 to-slate-500/80"
                }, {
                  label: "HR & Compliance",
                  value: chartValues[2],
                  color: "from-violet-400/80 to-violet-500/80"
                }].map((item, i) => <div key={i} className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-normal text-gray-600 tracking-tight">{item.label}</span>
                        <span className="text-xs font-medium text-gray-700 tabular-nums" style={{
                      opacity: chartValues[i] > 0 ? 1 : 0,
                      transition: "opacity 0.5s ease-out",
                      transitionDelay: `${1200 + i * 200}ms`
                    }}>
                          {item.value}%
                        </span>
                      </div>
                      <div className="relative h-2 bg-gray-100/80 rounded-full overflow-hidden">
                        <div className={`absolute inset-y-0 left-0 bg-gradient-to-r ${item.color} rounded-full transition-all duration-2000 ease-out`} style={{
                      width: `${item.value}%`,
                      transitionDelay: `${1200 + i * 200}ms`
                    }} />
                      </div>
                    </div>)}
                </div>

                {/* Overall score */}
                <div className="mt-6 pt-5 border-t border-gray-100/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-normal text-gray-400 uppercase tracking-widest mb-2">NOHC Score</p>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs font-normal text-gray-600">Funding Ready</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="relative overflow-hidden" style={{
                      transform: chartValues[0] > 0 ? "translateY(0)" : "translateY(20px)",
                      opacity: chartValues[0] > 0 ? 1 : 0,
                      transition: "all 0.8s ease-out",
                      transitionDelay: "1800ms"
                    }}>
                        <div className="bg-nimara-purple rounded-lg px-3 py-2 animate-pulse-glow">
                          <span className="text-2xl font-semibold text-white block">92</span>
                          <span className="text-[10px] text-white/80 font-medium">NOHC</span>
                        </div>
                      </div>
                    </div>
                  </div>
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