import React, { useEffect, useState, useRef } from "react";
import { Leaf } from "lucide-react";
const HeroSectionLuxe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const words = ["Fundable", "Audit-Ready", "Compliant", "Sustainable"];

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
  return <section className="relative min-h-screen flex items-center bg-secondary-background overflow-hidden">

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Premium content */}
          <div className="max-w-xl">
            {/* Animated badge */}
            <div className={`inline-block mb-8 transition-all duration-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                <Leaf className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-medium text-white/70 tracking-wide">
                  BUILT FOR CANADIAN NONPROFITS AND CHARITIES
                </span>
              </div>
            </div>

            {/* Premium headline with word rotation */}
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] tracking-tight mb-8 transition-all duration-1200 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              On a Mission to Keep Nonprofits
              <br />
              <span className="relative inline-flex items-baseline">
                <span className="font-normal text-accent">
                  {displayText}
                  <span className="animate-pulse ml-0.5 inline-block w-[3px] h-[1em] bg-accent align-middle" />
                </span>
              </span>
            </h1>

            {/* Refined description */}
            <p className={`text-xl text-white/60 mb-12 leading-relaxed font-light transition-all duration-1200 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              We install the files that pass audits and satisfy funders—
              <span className="text-white/90 font-normal">board rules</span>,{" "}
              <span className="text-white/90 font-normal">money tracking</span>,{" "}
              <span className="text-white/90 font-normal">staff folders</span>.
            </p>

            {/* Premium CTA buttons */}
            <div className={`space-y-4 mb-16 transition-all duration-1200 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 overflow-hidden rounded-2xl bg-accent text-accent-foreground font-medium shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Your Health Score
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>

                <button className="group px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur text-primary-foreground font-medium transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:shadow-lg">
                  <span className="flex items-center justify-center gap-2">
                    <div className="relative w-5 h-5">
                      <div className="absolute inset-0 bg-accent rounded-full opacity-30 animate-ping" />
                      <svg className="relative w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Watch Overview
                  </span>
                </button>
              </div>
            </div>

            {/* Elegant stats */}
            <div className={`flex items-center gap-8 transition-all duration-1200 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extralight text-primary-foreground">6</span>
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider">weeks</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extralight text-primary-foreground">100%</span>
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider">guarantee</span>
              </div>
            </div>
          </div>

          {/* Right: Ultra-premium dashboard */}
          <div ref={cardRef} className={`relative transition-all duration-1500 delay-600 ${isVisible ? "opacity-100 translate-y-0 animate-float-subtle" : "opacity-0 translate-y-8"}`}>
            {/* Main card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer group/card">
              <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none shadow-2xl" />
              {/* Card header */}
              <div className="px-10 pt-10 pb-7 border-b border-gray-100/60 bg-gradient-to-b from-gray-50/30 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <div className="w-12 h-12 bg-secondary-background rounded-xl flex items-center justify-center">
                        <span className="text-white font-medium text-lg">N</span>
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-accent rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-800 tracking-tight">Health Dashboard</h3>
                      <p className="text-[11px] text-gray-400 font-normal mt-1 tracking-wide uppercase">Live monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400 tracking-wider">LIVE</span>
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="px-10 py-9">
                {/* Metrics */}
                <div className="space-y-7">
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
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[13px] font-normal text-gray-600 tracking-tight">{item.label}</span>
                        <span className="text-[13px] font-medium text-gray-700 tabular-nums" style={{
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
                <div className="mt-10 pt-8 border-t border-gray-100/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-normal text-gray-400 uppercase tracking-widest mb-2.5">Overall Score</p>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[13px] font-normal text-gray-600">Funding Ready</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="relative overflow-hidden">
                        <span className="text-5xl font-extralight text-gray-800 inline-block tracking-tight" style={{
                        transform: chartValues[0] > 0 ? "translateY(0)" : "translateY(20px)",
                        opacity: chartValues[0] > 0 ? 1 : 0,
                        transition: "all 0.8s ease-out",
                        transitionDelay: "1800ms"
                      }}>
                          92
                        </span>
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