import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StickyMobileCTAProps {
  href: string;
  label?: string;
}

export const StickyMobileCTA = ({ href, label = "Apply Now" }: StickyMobileCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (90vh)
      const heroHeight = window.innerHeight * 0.9;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-[1000] md:hidden bg-[#0f1629] shadow-[0_-4px_20px_rgba(0,0,0,0.3)] transform transition-transform duration-300"
      style={{ 
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        paddingBottom: 'max(16px, env(safe-area-inset-bottom))',
        paddingTop: '16px',
        paddingLeft: '16px',
        paddingRight: '16px'
      }}
      role="complementary"
      aria-label="Quick apply action"
    >
      <Button 
        size="lg" 
        className="w-full min-h-[48px] bg-[#6945D8] hover:bg-[#5835C0] text-white rounded-lg py-4 text-base font-semibold shadow-[0_4px_20px_rgba(105,69,216,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6945D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1629]" 
        asChild
      >
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`${label} - opens application form in new tab`}
        >
          {label}
          <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
        </a>
      </Button>
    </div>
  );
};

export default StickyMobileCTA;
