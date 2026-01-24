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
      className="fixed bottom-0 left-0 right-0 z-[1000] md:hidden bg-nim-navy p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.2)] transform transition-transform duration-300"
      style={{ transform: isVisible ? 'translateY(0)' : 'translateY(100%)' }}
    >
      <Button 
        size="lg" 
        className="w-full bg-[#3ECFB2] hover:bg-[#35b89d] text-nim-navy rounded-xl py-4 text-base font-bold shadow-[0_8px_30px_rgba(62,207,178,0.4)] transition-all hover:-translate-y-0.5" 
        asChild
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          {label}
          <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
        </a>
      </Button>
    </div>
  );
};

export default StickyMobileCTA;
