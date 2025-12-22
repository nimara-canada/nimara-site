import { useCallback, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoplayPlugin from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Import logos
import slackLogo from "@/assets/integrations/slack.svg";
import quickbooksLogo from "@/assets/integrations/quickbooks.svg";
import mondayLogo from "@/assets/integrations/monday.svg";
import googleLogo from "@/assets/integrations/google.svg";
import asanaLogo from "@/assets/integrations/asana.svg";
import docusignLogo from "@/assets/integrations/docusign.svg";
import salesforceLogo from "@/assets/integrations/salesforce.svg";
import zoomLogo from "@/assets/integrations/zoom.svg";
import sageLogo from "@/assets/integrations/sage50.svg";
import xeroLogo from "@/assets/integrations/xero.svg";
import mailchimpLogo from "@/assets/integrations/mailchimp.svg";
import notionLogo from "@/assets/integrations/notion.svg";
import surveymonkeyLogo from "@/assets/integrations/surveymonkey.svg";
import blackbaudLogo from "@/assets/integrations/blackbaud.svg";
import microsoftLogo from "@/assets/integrations/microsoft-icon.png";
import dextLogo from "@/assets/integrations/dext.svg";
import plootoLogo from "@/assets/integrations/plooto.svg";
import canadahelpsLogo from "@/assets/integrations/canadahelps.svg";
import keelaLogo from "@/assets/integrations/keela.svg";
import betterImpactLogo from "@/assets/integrations/better-impact.svg";
import diligentLogo from "@/assets/integrations/diligent.svg";

// Tool data with categories - 20 nonprofit tools
const tools = [
  { name: "Microsoft 365", logo: microsoftLogo, category: "Productivity" },
  { name: "Google Workspace", logo: googleLogo, category: "Productivity" },
  { name: "Zoom", logo: zoomLogo, category: "Communication" },
  { name: "Diligent Boards", logo: diligentLogo, category: "Governance" },
  { name: "DocuSign", logo: docusignLogo, category: "Governance" },
  { name: "QuickBooks", logo: quickbooksLogo, category: "Accounting" },
  { name: "Sage", logo: sageLogo, category: "Accounting" },
  { name: "Xero", logo: xeroLogo, category: "Accounting" },
  { name: "Dext", logo: dextLogo, category: "Expense" },
  { name: "Plooto", logo: plootoLogo, category: "Payments" },
  { name: "CanadaHelps", logo: canadahelpsLogo, category: "Donations" },
  { name: "Keela", logo: keelaLogo, category: "CRM" },
  { name: "Salesforce", logo: salesforceLogo, category: "CRM" },
  { name: "Blackbaud", logo: blackbaudLogo, category: "Fundraising" },
  { name: "Mailchimp", logo: mailchimpLogo, category: "Marketing" },
  { name: "Notion", logo: notionLogo, category: "Knowledge" },
  { name: "Asana", logo: asanaLogo, category: "Projects" },
  { name: "monday.com", logo: mondayLogo, category: "Projects" },
  { name: "SurveyMonkey", logo: surveymonkeyLogo, category: "Surveys" },
  { name: "Better Impact", logo: betterImpactLogo, category: "Volunteers" },
  { name: "Slack", logo: slackLogo, category: "Communication" },
];

// Duplicate for infinite loop effect
const duplicatedTools = [...tools, ...tools];

const LogoChip = ({ 
  tool, 
  isLoaded, 
  onLoad 
}: { 
  tool: typeof tools[0]; 
  isLoaded: boolean;
  onLoad: () => void;
}) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-center p-4 sm:p-5 lg:p-6 rounded-xl bg-white border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] h-[100px] sm:h-[110px] lg:h-[120px]"
      title={tool.name}
    >
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 bg-muted animate-pulse rounded-lg" />
        </div>
      )}
      
      {/* Logo */}
      <div className={cn(
        "w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-opacity duration-300",
        isLoaded ? "opacity-100" : "opacity-0"
      )}>
        <img 
          src={tool.logo} 
          alt={`Logo: ${tool.name}`}
          className="w-full h-full object-contain"
          onLoad={onLoad}
          loading="lazy"
        />
      </div>
      
      {/* Tool name - visible on hover */}
      <span className={cn(
        "absolute bottom-2 left-0 right-0 text-center text-[10px] sm:text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        isLoaded ? "block" : "hidden"
      )}>
        {tool.name}
      </span>
    </div>
  );
};

export const IntegrationsSection = () => {
  const [loadedLogos, setLoadedLogos] = useState<Set<number>>(new Set());
  const [isPaused, setIsPaused] = useState(false);

  const autoplayOptions = useMemo(
    () => [
      AutoplayPlugin({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      dragFree: true,
    },
    autoplayOptions
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleLogoLoad = (index: number) => {
    setLoadedLogos(prev => new Set(prev).add(index));
  };

  // Pause autoplay on interaction
  useEffect(() => {
    if (!emblaApi) return;

    const onPointerDown = () => setIsPaused(true);
    const onPointerUp = () => {
      setIsPaused(false);
      // Resume autoplay via emblaApi
      const autoplay = emblaApi.plugins()?.autoplay;
      if (autoplay) autoplay.play();
    };

    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);

    return () => {
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
    };
  }, [emblaApi]);

  return (
    <section 
      className="relative py-16 md:py-24 lg:py-32 bg-background overflow-hidden" 
      aria-labelledby="integrations-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12 mb-12 lg:mb-16">
          {/* Left: Heading + Body */}
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Integrations
            </span>
            <h2
              id="integrations-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.15] mb-4"
            >
              Works with the tools
              <br className="hidden sm:block" />
              <span className="font-normal italic text-muted-foreground"> nonprofits already use</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              We build funder-ready systems on top of your current stack — governance, finance, fundraising, delivery, and reporting.
            </p>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col items-start lg:items-end gap-3">
            <Button 
              asChild
              size="lg"
              className="group"
            >
              <Link to="/integrations">
                Explore more tools
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

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Previous tools"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Next tools"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Carousel */}
          <div 
            className="overflow-hidden mx-8 sm:mx-16 lg:mx-20" 
            ref={emblaRef}
          >
            <div className="flex gap-3 sm:gap-4 lg:gap-5">
              {duplicatedTools.map((tool, index) => (
                <div 
                  key={`${tool.name}-${index}`} 
                  className="flex-shrink-0"
                >
                  <LogoChip 
                    tool={tool} 
                    isLoaded={loadedLogos.has(index % tools.length)}
                    onLoad={() => handleLogoLoad(index % tools.length)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Footnote */}
        <p className="text-center text-[11px] text-muted-foreground/60 mt-8 lg:mt-12">
          All product names and logos are trademarks of their respective owners.
        </p>
      </div>
    </section>
  );
};
