import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

export const TwoWaysSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [clickedButton, setClickedButton] = useState<number | null>(null);
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const orbY1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-50, 150]);
  const svgY1 = useTransform(scrollYProgress, [0, 1], [50, -80]);
  const svgY2 = useTransform(scrollYProgress, [0, 1], [-30, 100]);
  const svgRotate1 = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const svgRotate2 = useTransform(scrollYProgress, [0, 1], [15, -10]);

  const handleNavigate = (path: string, buttonId: number) => {
    setClickedButton(buttonId);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        navigate(path);
      }, 150);
    }, 200);
  };

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6 bg-background overflow-hidden">
      {/* Sophisticated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient orbs - very light for premium feel */}
        <motion.div 
          className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-gradient-to-br from-primary/5 via-primary/[0.02] to-transparent rounded-full blur-3xl"
          style={{ y: orbY1 }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-accent/10 via-accent/5 to-transparent rounded-full blur-3xl"
          style={{ y: orbY2 }}
        />
        
        {/* Very subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
        
        {/* Decorative line elements with parallax */}
        <motion.svg 
          className="absolute top-20 left-10 w-64 h-64 text-border opacity-60" 
          viewBox="0 0 200 200" 
          fill="none"
          style={{ y: svgY1, rotate: svgRotate1 }}
        >
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" />
        </motion.svg>
        
        <motion.svg 
          className="absolute bottom-20 right-10 w-48 h-48 text-border opacity-60" 
          viewBox="0 0 200 200" 
          fill="none"
          style={{ y: svgY2, rotate: svgRotate2 }}
        >
          <rect x="40" y="40" width="120" height="120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" transform="rotate(15 100 100)" />
        </motion.svg>

        {/* Floating sparkle particles - reduced on mobile */}
        {[...Array(isMobile ? 4 : 10)].map((_, i) => {
          const size = 3 + (i % 3);
          const positions = [
            { left: '15%', top: '20%' },
            { left: '80%', top: '15%' },
            { left: '25%', top: '70%' },
            { left: '75%', top: '80%' },
            { left: '10%', top: '45%' },
            { left: '90%', top: '50%' },
            { left: '50%', top: '10%' },
            { left: '45%', top: '85%' },
            { left: '60%', top: '35%' },
            { left: '35%', top: '55%' },
          ];
          const pos = positions[i] || positions[0];
          const delay = i * 0.5;
          const duration = 5 + (i % 3) * 2;
          const isAccent = i % 3 === 0;
          
          return (
            <motion.div
              key={i}
              className={`absolute rounded-full ${isAccent ? 'bg-accent' : 'bg-primary'}`}
              style={{
                width: size,
                height: size,
                left: pos.left,
                top: pos.top,
              }}
              animate={{
                y: [-15, 15, -15],
                x: [-8, 8, -8],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Shimmer sparkles - hidden on mobile for performance */}
        {!isMobile && [...Array(5)].map((_, i) => {
          const positions = [
            { left: '20%', top: '25%' },
            { left: '70%', top: '20%' },
            { left: '85%', top: '60%' },
            { left: '30%', top: '75%' },
            { left: '55%', top: '45%' },
          ];
          const pos = positions[i];
          const delay = i * 0.8;
          
          return (
            <motion.div
              key={`shimmer-${i}`}
              className="absolute"
              style={{ left: pos.left, top: pos.top }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + i * 0.5,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 12 12" className="text-primary/30">
                <path
                  d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
          );
        })}
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Refined pill badge */}
          <motion.div 
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card border border-border shadow-sm mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
              Choose Your Path
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
            Two ways to work
            <br />
            <span className="relative">
              with{' '}
              <span className="relative inline-block">
                Nimara
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/40" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 9 Q50 0 100 6 T200 3" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you need rapid response or systematic transformation, 
            we meet you where you are.
          </p>
        </motion.div>

        {/* Cards container */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Fast Help - Mint accent */}
          <motion.div
            className="group relative"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {/* Hover glow - Mint */}
            <div className={`absolute -inset-4 bg-gradient-to-br from-accent/40 via-accent/20 to-transparent rounded-[2rem] blur-2xl transition-all duration-700 ${hoveredCard === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} />
            
            <div className="relative h-full bg-card rounded-2xl border border-border shadow-lg p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:border-accent/50 hover:-translate-y-1">
              
              {/* Timeline badge */}
              <div className="absolute -top-3 left-8">
                <div className="px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent-foreground text-xs font-bold tracking-wide shadow-sm">
                  1–4 weeks
                </div>
              </div>
              
              {/* Top accent line - Mint */}
              <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              
              {/* Icon - Mint themed */}
              <div className="relative mb-8 inline-block">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title block */}
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 tracking-tight">
                  Fast Help
                </h3>
                <p className="text-accent-foreground text-sm uppercase tracking-[0.15em] font-semibold">
                  1–4 weeks • Single problem • No NOHC
                </p>
              </div>

              {/* Content */}
              <div className="space-y-5 mb-8">
                <p className="text-muted-foreground text-base leading-relaxed">
                  For when one thing is on fire — a scary email, an audit, 
                  a funder deadline, a policy gap.
                </p>
                
                <div className="pl-5 border-l-2 border-accent/50 space-y-3">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We keep it small and clear: one problem, one mini-bundle, 
                    fast turnaround.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    No big diagnostic. No health check required.
                  </p>
                </div>
              </div>

              {/* Info badge */}
              <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border">
                <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-muted-foreground">No NOHC needed — we go straight to fixing</span>
              </div>

              {/* CTA Button - Mint */}
              <button 
                onClick={() => handleNavigate('/path-a', 1)}
                className={`group/btn relative w-full py-4 px-8 rounded-full bg-accent text-accent-foreground font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center ${clickedButton === 1 ? 'scale-95 opacity-80' : ''}`}
              >
                <span className="relative flex items-center justify-center gap-3">
                  Get fast help
                  <svg className={`w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 ${clickedButton === 1 ? 'translate-x-2' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </button>
            </div>
          </motion.div>

          {/* Card 2: Health Check & System Installs - Purple accent */}
          <motion.div
            className="group relative"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          >
            {/* Hover glow - Purple */}
            <div className={`absolute -inset-4 bg-gradient-to-br from-primary/30 via-primary/15 to-transparent rounded-[2rem] blur-2xl transition-all duration-700 ${hoveredCard === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} />
            
            <div className="relative h-full bg-card rounded-2xl border border-primary/30 shadow-lg p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
              
              {/* Top accent line - Purple */}
              <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              
              {/* Timeline badge - left side */}
              <div className="absolute -top-3 left-8">
                <div className="px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold tracking-wide shadow-sm">
                  8–12 weeks
                </div>
              </div>
              
              {/* Most Popular Badge - Purple themed - right side */}
              <div className="absolute -top-3 right-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-40" />
                  <div className="relative px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide shadow-lg">
                    Most Popular
                  </div>
                </div>
              </div>

              {/* Icon - Purple themed */}
              <div className="relative mb-8 inline-block">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title block */}
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 tracking-tight">
                  Health Check & Systems
                </h3>
                <p className="text-primary text-sm uppercase tracking-[0.15em] font-semibold">
                  8–12 weeks • NOHC + Bundles
                </p>
              </div>

              {/* Content */}
              <div className="space-y-5 mb-8">
                <p className="text-muted-foreground text-base leading-relaxed">
                  For when the whole system feels messy — finance, 
                  governance, HR, or delivery.
                </p>
                
                <div className="pl-5 border-l-2 border-primary/40 space-y-3">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We start with the Nimara Organizational Health Check (NOHC) 
                    to see where each system is.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Then we pick 1–2 Bundles to move those systems up a Tier.
                  </p>
                </div>
              </div>

              {/* Info badge */}
              <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-primary">NOHC required — we build on diagnosis</span>
              </div>

              {/* CTA Button - Purple */}
              <button 
                onClick={() => handleNavigate('/health-score', 2)}
                className={`group/btn relative w-full py-4 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center ${clickedButton === 2 ? 'scale-95 opacity-80' : ''}`}
              >
                <span className="relative flex items-center justify-center gap-3">
                  Start with a health check
                  <svg className={`w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 ${clickedButton === 2 ? 'translate-x-2' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom section - help CTA */}
        <motion.div 
          className="mt-20 md:mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Not sure where to start? We'll help you choose on the first call.
          </p>
          <button 
            onClick={() => handleNavigate('/book-a-call', 3)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-semibold text-base transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            Talk to the team
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoWaysSection;
