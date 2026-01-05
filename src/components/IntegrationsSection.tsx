import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollReveal, useMotionPreferences, TIMING, DROPBOX_EASING_CSS } from "@/hooks/use-scroll-reveal";

// Import logos
import googleWorkspaceLogo from "@/assets/integrations/google-workspace.webp";
import quickbooksLogo from "@/assets/integrations/quickbooks.svg";
import xeroLogo from "@/assets/integrations/xero.svg";
import microsoft365Logo from "@/assets/integrations/microsoft-365.png";

// Core tools we actually work with
const tools = [
  { name: "Google Workspace", logo: googleWorkspaceLogo },
  { name: "QuickBooks", logo: quickbooksLogo },
  { name: "Xero", logo: xeroLogo },
  { name: "Microsoft 365", logo: microsoft365Logo },
];

const LogoOrb = ({ 
  tool, 
  index,
  isLoaded,
  onLoad,
  isVisible,
  staggerDelay,
  reducedMotion,
}: { 
  tool: typeof tools[0]; 
  index: number;
  isLoaded: boolean;
  onLoad: () => void;
  isVisible: boolean;
  staggerDelay: number;
  reducedMotion: boolean;
}) => {
  const revealStyle: React.CSSProperties = reducedMotion 
    ? { opacity: 1, transform: 'none' }
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.95)',
        transition: `opacity ${TIMING.reveal}ms ${DROPBOX_EASING_CSS} ${staggerDelay}ms, transform ${TIMING.reveal}ms ${DROPBOX_EASING_CSS} ${staggerDelay}ms`,
      };

  return (
    <div 
      className="group relative flex-shrink-0"
      style={revealStyle}
    >
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
        {/* Outer glow ring */}
        <div 
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 blur-xl scale-150 pointer-events-none" 
          style={{ transition: `opacity 500ms ${DROPBOX_EASING_CSS}` }}
        />
        
        {/* Main container */}
        <div 
          className={cn(
            "relative w-full h-full rounded-full bg-white shadow-lg shadow-black/5 border border-border/30",
            "flex items-center justify-center overflow-hidden",
          )}
          style={{ 
            transition: `transform 300ms ${DROPBOX_EASING_CSS}, box-shadow 300ms ${DROPBOX_EASING_CSS}, border-color 300ms ${DROPBOX_EASING_CSS}` 
          }}
          onMouseEnter={(e) => {
            if (!reducedMotion) {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 40px -10px hsl(var(--primary) / 0.15)';
              e.currentTarget.style.borderColor = 'hsl(var(--primary) / 0.2)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05)';
            e.currentTarget.style.borderColor = 'hsl(var(--border) / 0.3)';
          }}
        >
          {/* Inner gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-muted/20 opacity-50" />
          
          {/* Skeleton loader */}
          {!isLoaded && (
            <div className="absolute inset-4 bg-muted animate-pulse rounded-full" />
          )}
          
          {/* Logo */}
          <div 
            className={cn(
              "relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center",
              isLoaded ? "opacity-100" : "opacity-0",
            )}
            style={{ transition: `opacity 300ms ${DROPBOX_EASING_CSS}, transform 300ms ${DROPBOX_EASING_CSS}` }}
          >
            <img 
              src={tool.logo} 
              alt={tool.name}
              className="w-full h-full object-contain"
              onLoad={onLoad}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
      {/* Tool name tooltip */}
      <div 
        className={cn(
          "absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",
          "text-xs font-medium text-white/70",
          "opacity-0 group-hover:opacity-100",
        )}
        style={{ transition: `opacity 200ms ${DROPBOX_EASING_CSS}, transform 200ms ${DROPBOX_EASING_CSS}` }}
      >
        {tool.name}
      </div>
    </div>
  );
};

export const IntegrationsSection = () => {
  const [loadedLogos, setLoadedLogos] = useState<Set<number>>(new Set());
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();
  const { reducedMotion } = useMotionPreferences();

  const handleLogoLoad = (index: number) => {
    setLoadedLogos(prev => new Set(prev).add(index));
  };

  // Header reveal style
  const headerStyle: React.CSSProperties = reducedMotion 
    ? {} 
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity ${TIMING.reveal}ms ${DROPBOX_EASING_CSS}, transform ${TIMING.reveal}ms ${DROPBOX_EASING_CSS}`,
      };

  // CTA reveal style with delay
  const ctaStyle: React.CSSProperties = reducedMotion 
    ? {} 
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity ${TIMING.reveal}ms ${DROPBOX_EASING_CSS} 600ms, transform ${TIMING.reveal}ms ${DROPBOX_EASING_CSS} 600ms`,
      };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-36 overflow-hidden" 
      aria-labelledby="integrations-heading"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className="text-center mb-16 lg:mb-20"
          style={headerStyle}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent/50" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent">
              Integrations
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent/50" />
          </div>
          
          <h2
            id="integrations-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.1] mb-6 text-white"
          >
            Works with the tools
            <br />
            <span className="font-normal text-white/80">
              you already use
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            We don't make you switch software. We set up a simple system inside the tools you already have.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16 mb-10">
          {tools.map((tool, index) => {
            const staggerDelay = 100 + index * TIMING.stagger;
            
            return (
              <LogoOrb 
                key={tool.name}
                tool={tool}
                index={index}
                isLoaded={loadedLogos.has(index)}
                onLoad={() => handleLogoLoad(index)}
                isVisible={isVisible}
                staggerDelay={staggerDelay}
                reducedMotion={reducedMotion}
              />
            );
          })}
        </div>

        {/* Microcopy */}
        <p 
          className="text-center text-sm text-white/60 max-w-xl mx-auto mb-12"
          style={ctaStyle}
        >
          We don't do bookkeeping. We organize files and tracking so it's easy to show what happened.
        </p>

        {/* CTA */}
        <div 
          className="flex flex-col items-center gap-4"
          style={ctaStyle}
        >
          <Button 
            asChild
            size="lg"
            className="group px-8 h-12 text-base bg-white text-secondary-background hover:bg-white/90"
          >
            <Link to="/start-here">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Link 
            to="/how-nimara-works"
            className="text-sm text-white/60 hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            See how it works →
          </Link>
        </div>
      </div>

      {/* Legal Footnote */}
      <p 
        className="text-center text-[11px] text-white/40 mt-16 lg:mt-20"
        style={ctaStyle}
      >
        All product names and logos are trademarks of their respective owners.
      </p>
    </section>
  );
};