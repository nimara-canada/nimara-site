import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Import logos
import slackLogo from "@/assets/integrations/slack.webp";
import quickbooksLogo from "@/assets/integrations/quickbooks.svg";
import mondayLogo from "@/assets/integrations/monday.svg";
import googleWorkspaceLogo from "@/assets/integrations/google-workspace.png";
import asanaLogo from "@/assets/integrations/asana.svg";
import docusignLogo from "@/assets/integrations/docusign.webp";
import salesforceLogo from "@/assets/integrations/salesforce.svg";
import zoomLogo from "@/assets/integrations/zoom.svg";
import sageLogo from "@/assets/integrations/sage.svg";
import xeroLogo from "@/assets/integrations/xero.svg";
import mailchimpLogo from "@/assets/integrations/mailchimp.png";
import notionLogo from "@/assets/integrations/notion.svg";
import surveymonkeyLogo from "@/assets/integrations/surveymonkey.webp";
import blackbaudLogo from "@/assets/integrations/blackbaud.webp";
import microsoft365Logo from "@/assets/integrations/microsoft-365.svg";
import dextLogo from "@/assets/integrations/dext.png";
import plootoLogo from "@/assets/integrations/plooto-new.png";
import canadahelpsLogo from "@/assets/integrations/canadahelps-new.png";
import keelaLogo from "@/assets/integrations/keela-new.png";
import betterImpactLogo from "@/assets/integrations/better-impact.svg";
import diligentLogo from "@/assets/integrations/diligent.png";

// Tool data - only tools with working logos
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
];

// Split tools into two rows for marquee
const topRow = tools.slice(0, 5);
const bottomRow = tools.slice(5);

const LogoOrb = ({ 
  tool, 
  index,
  isLoaded,
  onLoad
}: { 
  tool: typeof tools[0]; 
  index: number;
  isLoaded: boolean;
  onLoad: () => void;
}) => {
  return (
    <div 
      className="group relative flex-shrink-0"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-150" />
        
        {/* Main container */}
        <div className={cn(
          "relative w-full h-full rounded-full bg-white shadow-lg shadow-black/5 border border-border/30",
          "flex items-center justify-center overflow-hidden",
          "transition-all duration-500 ease-out",
          "group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:border-primary/20 group-hover:scale-105"
        )}>
          {/* Inner gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-muted/20 opacity-50" />
          
          {/* Skeleton loader */}
          {!isLoaded && (
            <div className="absolute inset-4 bg-muted animate-pulse rounded-full" />
          )}
          
          {/* Logo */}
          <div className={cn(
            "relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center transition-all duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            "group-hover:scale-110"
          )}>
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
      <div className={cn(
        "absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",
        "text-xs font-medium text-muted-foreground",
        "opacity-0 group-hover:opacity-100 transition-all duration-300",
        "translate-y-1 group-hover:translate-y-0"
      )}>
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
  offset = 0
}: { 
  tools: typeof topRow;
  direction?: "left" | "right";
  speed?: number;
  loadedLogos: Set<number>;
  onLogoLoad: (index: number) => void;
  offset?: number;
}) => {
  // Duplicate for seamless loop
  const duplicatedTools = [...tools, ...tools, ...tools];
  
  return (
    <div className="relative overflow-hidden py-4">
      <motion.div 
        className="flex gap-6 sm:gap-8 lg:gap-10"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedTools.map((tool, index) => (
          <LogoOrb 
            key={`${tool.name}-${index}`}
            tool={tool}
            index={index}
            isLoaded={loadedLogos.has((index % tools.length) + offset)}
            onLoad={() => onLogoLoad((index % tools.length) + offset)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const IntegrationsSection = () => {
  const [loadedLogos, setLoadedLogos] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const parallaxScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  const handleLogoLoad = (index: number) => {
    setLoadedLogos(prev => new Set(prev).add(index));
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-36 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden" 
      aria-labelledby="integrations-heading"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          style={{ opacity: parallaxOpacity, scale: parallaxScale }}
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
        </motion.div>

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
          />
          
          {/* Bottom row - moves right */}
          <MarqueeRow 
            tools={bottomRow}
            direction="right"
            speed={30}
            loadedLogos={loadedLogos}
            onLogoLoad={handleLogoLoad}
            offset={11}
          />
        </div>

        {/* CTA */}
        <motion.div 
          className="flex flex-col items-center gap-4 mt-16 lg:mt-20"
          style={{ opacity: parallaxOpacity }}
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
        </motion.div>
      </div>

      {/* Legal Footnote */}
      <p className="text-center text-[11px] text-muted-foreground/50 mt-16 lg:mt-20">
        All product names and logos are trademarks of their respective owners.
      </p>
    </section>
  );
};
