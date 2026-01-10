import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { useMotionPreferences, DROPBOX_EASING_CSS } from "@/hooks/use-scroll-reveal";
import { TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";
const ROTATING_WORDS = ["Proof-Ready", "Grant-Ready", "Fund-Ready", "Board-Ready", "Report-Ready"];
const NimaraHeroPremium = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const {
    reducedMotion
  } = useMotionPreferences();

  // Scroll-linked animations
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring for parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: reducedMotion ? 1000 : 100,
    damping: reducedMotion ? 100 : 30,
    restDelta: 0.001
  });

  // Main container transforms
  const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, reducedMotion ? 1 : 0]);
  const heroY = useTransform(smoothProgress, [0, 1], [0, reducedMotion ? 0 : 100]);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Rotate words
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Reveal animation styles with Dropbox easing
  const revealStyle = (delay: number = 0): React.CSSProperties => reducedMotion ? {
    opacity: 1,
    transform: 'none'
  } : {
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 700ms ${DROPBOX_EASING_CSS} ${delay}ms, transform 700ms ${DROPBOX_EASING_CSS} ${delay}ms`
  };

  // Progress bar data
  const progressBars = [{
    domain: "Board",
    score: 85,
    color: "mint"
  }, {
    domain: "Money & Grants",
    score: 72,
    color: "gradient"
  }, {
    domain: "Programs",
    score: 80,
    color: "mint"
  }, {
    domain: "Tools & Files",
    score: 68,
    color: "gradient"
  }];
  return <section ref={heroRef} id="hero" aria-label="Hero section - Build systems that make your nonprofit Proof-Ready" className="min-h-screen relative overflow-hidden" style={{
    backgroundColor: '#0F1219'
  }}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true" style={{
      backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
      backgroundSize: '80px 80px'
    }} />

      {/* Main Content */}
      <motion.div className="relative z-10 min-h-screen flex flex-col" style={{
      opacity: heroOpacity,
      y: heroY
    }}>
        <div className="flex-1 w-full max-w-3xl mx-auto px-6 lg:px-12 py-20 lg:py-28 flex flex-col justify-center">
          
          {/* Single Column - Clean Copy */}
          <div className="text-center">
            {/* Main Headline */}
            <h1 style={revealStyle(100)} className="mb-6 text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight">
              Be ready when a funder asks.
            </h1>

            {/* Subheadline */}
            <p style={{
            ...revealStyle(200),
            color: '#A0A0A0'
          }} className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              ​We set up simple systems for board, money, and files — so reporting feels easy, not stressful.


            </p>

            {/* Bullets */}
            <ul style={revealStyle(250)} className="space-y-3 mb-10 max-w-xl mx-auto text-left">
              <li className="flex items-start gap-3" style={{
              color: '#A0A0A0'
            }}>
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{
                color: '#ACFCE3'
              }} />
                <span>Proof-of-payment and grant tracking you can pull in minutes</span>
              </li>
              <li className="flex items-start gap-3" style={{
              color: '#A0A0A0'
            }}>
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{
                color: '#ACFCE3'
              }} />
                <span>Clear board notes and approvals (so decisions don't disappear)</span>
              </li>
              <li className="flex items-start gap-3" style={{
              color: '#A0A0A0'
            }}>
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{
                color: '#ACFCE3'
              }} />
                <span>Simple files and routines your team will actually use</span>
              </li>
            </ul>

            {/* CTAs */}
            <div style={revealStyle(300)} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* Primary CTA */}
              <Link to="/capacity-buildout" className="inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-lg select-none transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" style={{
              backgroundColor: '#6945D8',
              color: '#FFFFFF'
            }}>
                Book a 20-minute call
                <span className="text-lg" aria-hidden="true">→</span>
              </Link>

              {/* Secondary CTA */}
              <a href={TYPEFORM_HEALTH_CHECK_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-base text-white hover:opacity-80 select-none transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded">
                Take the free 6-minute check
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </div>

            {/* Trust line */}
            <div style={revealStyle(400)} className="mt-6">
              <p className="text-sm" style={{
              color: '#A0A0A0'
            }}>
                Built for nonprofits with 0–50 staff in Canada. Not an audit firm.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div style={revealStyle(600)} className="mt-16 md:mt-20 pt-10 md:pt-12 border-t" role="region" aria-label="Service timelines">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center">
              <div className="relative sm:border-r sm:border-white/10">
                <span className="block text-2xl md:text-3xl font-bold text-white italic mb-2">4–8 weeks</span>
                <span className="text-xs uppercase tracking-[0.2em]" style={{
                color: '#A0A0A0'
              }}>
                  CAPACITY INSTALL
                </span>
              </div>
              <div className="relative sm:border-r sm:border-white/10">
                <span className="block text-2xl md:text-3xl font-bold text-white italic mb-2">2 weeks</span>
                <span className="text-xs uppercase tracking-[0.2em]" style={{
                color: '#A0A0A0'
              }}>
                  HEALTH CHECK
                </span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-white italic mb-2">Built once. Use again.</span>
                <span className="text-xs uppercase tracking-[0.2em]" style={{
                color: '#A0A0A0'
              }}>
                  WORKS FOR EVERY FUNDER
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{
      opacity: useTransform(smoothProgress, [0, 0.15], [1, 0])
    }}>
        <span style={{
        ...revealStyle(800),
        color: '#A0A0A0'
      }} className="text-[11px] uppercase tracking-[0.2em]">
          SCROLL
        </span>
        <motion.div animate={reducedMotion ? {} : {
        y: [0, 6, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}>
          <ChevronDown className="w-5 h-5" style={{
          color: '#A0A0A0'
        }} />
        </motion.div>
      </motion.div>
    </section>;
};

// Desktop Dashboard Component
interface DashboardProps {
  isLoaded: boolean;
  revealStyle: (delay: number) => React.CSSProperties;
  progressBars: Array<{
    domain: string;
    score: number;
    color: string;
  }>;
}
const DesktopDashboard = ({
  isLoaded,
  revealStyle,
  progressBars
}: DashboardProps) => {
  return <div className="relative py-4">
      {/* Main Dashboard Card */}
      <div style={{
      ...revealStyle(400),
      backgroundColor: '#1E2130'
    }} className="relative rounded-2xl overflow-hidden shadow-2xl border">
        <div className="rounded-2xl" style={{
        backgroundColor: '#1E2130'
      }}>
          {/* Window Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b" style={{
          borderColor: 'rgba(255,255,255,0.08)'
        }}>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full" style={{
              backgroundColor: '#FF5F57'
            }} />
              <div className="w-3 h-3 rounded-full" style={{
              backgroundColor: '#FEBC2E'
            }} />
              <div className="w-3 h-3 rounded-full" style={{
              backgroundColor: '#28C840'
            }} />
            </div>
            <div className="flex-1 text-center pr-12">
              <span className="text-xs font-medium" style={{
              color: '#A0A0A0'
            }}>
                Health Score Dashboard
              </span>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 space-y-6">
            {/* Score Header */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] mb-2" style={{
                color: '#A0A0A0'
              }}>
                  OVERALL SCORE
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">78</span>
                  <span className="text-xl" style={{
                  color: '#A0A0A0'
                }}>/100</span>
                </div>
              </div>
              <div className="px-4 py-2 rounded-lg text-xs font-semibold" style={{
              backgroundColor: '#ACFCE3',
              color: '#0F1219'
            }}>
                Tier 3 — Strong
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4 pt-2">
              {progressBars.map((item, index) => <div key={item.domain} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white">{item.domain}</span>
                    <span style={{
                  color: '#A0A0A0'
                }}>{item.score}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{
                backgroundColor: 'rgba(255,255,255,0.1)'
              }}>
                    <div className="h-full rounded-full transition-all duration-1000" style={{
                  width: isLoaded ? `${item.score}%` : '0%',
                  background: item.color === 'mint' ? '#ACFCE3' : 'linear-gradient(90deg, #6945D8, #ACFCE3)',
                  transitionDelay: `${500 + index * 100}ms`
                }} />
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card - Top 3 Fixes */}
      <div style={revealStyle(600)} className="absolute -right-6 -top-16 z-20 w-48 bg-white rounded-xl shadow-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="w-3 h-3 text-green-600" />
          </div>
          <span className="text-xs font-semibold text-gray-900">Top 3 Fixes</span>
        </div>
        <div className="space-y-2.5">
          {[{
          label: "Board minutes template",
          color: "#28C840"
        }, {
          label: "Month-end routine",
          color: "#FEBC2E"
        }, {
          label: "Role clarity docs",
          color: "#FEBC2E"
        }].map(fix => <div key={fix.label} className="flex items-center gap-2 text-xs text-gray-600">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{
            backgroundColor: fix.color
          }} />
              {fix.label}
            </div>)}
        </div>
      </div>

    </div>;
};

// Mobile Dashboard Component
interface MobileDashboardProps {
  isLoaded: boolean;
  progressBars: Array<{
    domain: string;
    score: number;
    color: string;
  }>;
}
const MobileDashboard = ({
  isLoaded,
  progressBars
}: MobileDashboardProps) => {
  return <div className="relative rounded-xl overflow-hidden border" style={{
    backgroundColor: '#1E2130',
    borderColor: 'rgba(255,255,255,0.1)'
  }}>
      {/* Compact Window Header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b" style={{
      borderColor: 'rgba(255,255,255,0.08)'
    }}>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full" style={{
          backgroundColor: '#FF5F57'
        }} />
          <div className="w-2 h-2 rounded-full" style={{
          backgroundColor: '#FEBC2E'
        }} />
          <div className="w-2 h-2 rounded-full" style={{
          backgroundColor: '#28C840'
        }} />
        </div>
        <span className="text-[10px] ml-auto" style={{
        color: '#A0A0A0'
      }}>Health Score</span>
      </div>

      {/* Compact Dashboard Content */}
      <div className="p-4">
        {/* Score Row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-white">78</span>
            <span className="text-sm" style={{
            color: '#A0A0A0'
          }}>/100</span>
          </div>
          <span className="px-2 py-1 text-[10px] font-semibold rounded-full" style={{
          backgroundColor: '#ACFCE3',
          color: '#0F1219'
        }}>
            Tier 3 — Strong
          </span>
        </div>

        {/* Mini Progress Bars */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          {progressBars.map((item, i) => <div key={item.domain} className="space-y-1">
              <div className="flex items-center justify-between text-[10px]">
                <span style={{
              color: 'rgba(255,255,255,0.7)'
            }}>{item.domain}</span>
                <span style={{
              color: '#A0A0A0'
            }}>{item.score}%</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{
            backgroundColor: 'rgba(255,255,255,0.1)'
          }}>
                <div className="h-full rounded-full" style={{
              width: isLoaded ? `${item.score}%` : '0%',
              background: item.color === 'mint' ? '#ACFCE3' : 'linear-gradient(90deg, #6945D8, #ACFCE3)',
              transition: `width 800ms ease-out ${600 + i * 100}ms`
            }} />
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
export default NimaraHeroPremium;