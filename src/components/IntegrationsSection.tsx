import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollReveal, useMotionPreferences, TIMING, DROPBOX_EASING_CSS } from "@/hooks/use-scroll-reveal";

// Import logos
import slackLogo from "@/assets/integrations/slack.webp";
import quickbooksLogo from "@/assets/integrations/quickbooks.svg";
import asanaLogo from "@/assets/integrations/asana.svg";
import docusignLogo from "@/assets/integrations/docusign.webp";
import zoomLogo from "@/assets/integrations/zoom-new.png";
import sageLogo from "@/assets/integrations/sage.svg";
import xeroLogo from "@/assets/integrations/xero.svg";
import mailchimpLogo from "@/assets/integrations/mailchimp-new.webp";
import notionLogo from "@/assets/integrations/notion.svg";
import microsoft365Logo from "@/assets/integrations/microsoft-365.svg";
import canvaLogo from "@/assets/integrations/canva.avif";
import eventbriteLogo from "@/assets/integrations/eventbrite-new.png";
import bloomerangLogo from "@/assets/integrations/bloomerang.png";
import airtableLogo from "@/assets/integrations/airtable.webp";
import softrLogo from "@/assets/integrations/softr-icon.webp";
import salesforceLogo from "@/assets/integrations/salesforce-new.png";

// Tool data - tools with working logos
const tools = [
  { name: "Microsoft 365", logo: microsoft365Logo },
  { name: "Zoom", logo: zoomLogo },
  { name: "DocuSign", logo: docusignLogo },
  { name: "QuickBooks", logo: quickbooksLogo },
  { name: "Sage", logo: sageLogo },
  { name: "Xero", logo: xeroLogo },
  { name: "Mailchimp", logo: mailchimpLogo },
  { name: "Notion", logo: notionLogo },
  { name: "Asana", logo: asanaLogo },
  { name: "Slack", logo: slackLogo },
  { name: "Canva", logo: canvaLogo },
  { name: "Eventbrite", logo: eventbriteLogo },
  { name: "Bloomerang", logo: bloomerangLogo },
  { name: "Airtable", logo: airtableLogo },
  { name: "Softr", logo: softrLogo },
  { name: "Salesforce", logo: salesforceLogo },
];

// Split tools into two rows for marquee
const topRow = tools.slice(0, 8);
const bottomRow = tools.slice(8);

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
          "text-xs font-medium text-muted-foreground",
          "opacity-0 group-hover:opacity-100",
        )}
        style={{ transition: `opacity 200ms ${DROPBOX_EASING_CSS}, transform 200ms ${DROPBOX_EASING_CSS}` }}
      >
        {tool.name}
      </div>
    </div>
  );
};

const MarqueeRow = ({ 
  tools, 
  direction = "left",
  speed = 25,
  loadedLogos,
  onLogoLoad,
  offset = 0,
  isVisible,
  baseDelay,
  reducedMotion,
}: { 
  tools: typeof topRow;
  direction?: "left" | "right";
  speed?: number;
  loadedLogos: Set<number>;
  onLogoLoad: (index: number) => void;
  offset?: number;
  isVisible: boolean;
  baseDelay: number;
  reducedMotion: boolean;
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // Delay marquee animation until reveal is complete
  useEffect(() => {
    if (isVisible && !reducedMotion) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, baseDelay + tools.length * TIMING.stagger + TIMING.reveal);
      return () => clearTimeout(timer);
    } else if (reducedMotion) {
      setShouldAnimate(true);
    }
  }, [isVisible, baseDelay, tools.length, reducedMotion]);

  // Duplicate for seamless loop
  const duplicatedTools = [...tools, ...tools, ...tools];
  
  // Marquee animation style
  const marqueeStyle: React.CSSProperties = shouldAnimate && !reducedMotion
    ? {
        animation: `marquee-${direction} ${speed}s linear infinite`,
      }
    : {};
  
  return (
    <div className="relative overflow-hidden py-4">
      <div 
        className="flex gap-6 sm:gap-8 lg:gap-10"
        style={marqueeStyle}
      >
        {duplicatedTools.map((tool, index) => {
          const originalIndex = index % tools.length;
          const staggerDelay = baseDelay + originalIndex * TIMING.stagger;
          
          return (
            <LogoOrb 
              key={`${tool.name}-${index}`}
              tool={tool}
              index={index}
              isLoaded={loadedLogos.has(originalIndex + offset)}
              onLoad={() => onLogoLoad(originalIndex + offset)}
              isVisible={isVisible}
              staggerDelay={staggerDelay}
              reducedMotion={reducedMotion}
            />
          );
        })}
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
        transition: `opacity ${TIMING.reveal}ms ${DROPBOX_EASING_CSS} 800ms, transform ${TIMING.reveal}ms ${DROPBOX_EASING_CSS} 800ms`,
      };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-36 overflow-hidden" 
      aria-labelledby="integrations-heading"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className="text-center mb-16 lg:mb-20"
          style={headerStyle}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-primary">
              Integrations
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          
          <h2
            id="integrations-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.1] mb-6"
          >
            Connects with tools
            <br />
            <span className="font-normal bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text">
              nonprofits already trust
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We build funder-ready systems on your current stack — governance, finance, 
            fundraising, delivery, and reporting.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 lg:w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 lg:w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          {/* Top row - moves left */}
          <MarqueeRow 
            tools={topRow}
            direction="left"
            speed={35}
            loadedLogos={loadedLogos}
            onLogoLoad={handleLogoLoad}
            offset={0}
            isVisible={isVisible}
            baseDelay={100}
            reducedMotion={reducedMotion}
          />
          
          {/* Bottom row - moves right */}
          <MarqueeRow 
            tools={bottomRow}
            direction="right"
            speed={30}
            loadedLogos={loadedLogos}
            onLogoLoad={handleLogoLoad}
            offset={8}
            isVisible={isVisible}
            baseDelay={400}
            reducedMotion={reducedMotion}
          />
        </div>

        {/* CTA */}
        <div 
          className="flex flex-col items-center gap-4 mt-16 lg:mt-20"
          style={ctaStyle}
        >
          <Button 
            asChild
            size="lg"
            className="group px-8 h-12 text-base"
          >
            <Link to="/integrations">
              Explore all integrations
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Link 
            to="/how-nimara-works"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            See how we set this up
          </Link>
        </div>
      </div>

      {/* Legal Footnote */}
      <p 
        className="text-center text-[11px] text-muted-foreground/50 mt-16 lg:mt-20"
        style={ctaStyle}
      >
        All product names and logos are trademarks of their respective owners.
      </p>

      {/* Keyframes for marquee */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-33.33%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};
