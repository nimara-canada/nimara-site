import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [email, setEmail] = useState("");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  const words = ["Fundable", "Sustainable", "Audit Ready", "Efficient"];

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Typing animation effect (disabled for reduced motion)
  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(words[0]);
      return;
    }

    const currentWord = words[wordIndex];
    const typeSpeed = 100;
    const deleteSpeed = 60;
    const pauseTime = 2000;
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, prefersReducedMotion]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleStartCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Navigate to health check with email prefilled
      window.location.href = `/organizational-health-check?email=${encodeURIComponent(email)}`;
    }
  };

  return (
    <section 
      className="relative min-h-[90vh] flex items-center bg-secondary-background overflow-hidden pt-8 md:pt-12 pb-16 md:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center">
          {/* Eyebrow */}
          <div 
            className={`mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-xs sm:text-sm font-semibold text-accent tracking-widest uppercase">
              Capacity Building for Canadian Nonprofits
            </span>
          </div>

          {/* H1 with typing animation */}
          <h1 
            id="hero-heading"
            className={`text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] tracking-tight mb-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Keep Your Nonprofit
            <br />
            <span className="relative inline-flex items-baseline min-h-[1.2em]">
              <span 
                className="text-accent"
                aria-live="polite"
                aria-atomic="true"
              >
                {displayText || words[0]}
                {!prefersReducedMotion && (
                  <span 
                    className="animate-pulse ml-0.5 inline-block w-[3px] h-[0.9em] bg-accent align-middle" 
                    aria-hidden="true"
                  />
                )}
              </span>
            </span>
          </h1>

          {/* Helper line */}
          <p 
            className={`text-sm sm:text-base text-white/70 italic mb-6 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Ready for grants. Ready for growth. Ready for audits.
          </p>

          {/* Subhead */}
          <p 
            className={`text-base sm:text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Nimara helps you set up simple systems for your board, money, staff, and programs—so your team spends less time fixing problems and more time doing the work.
          </p>

          {/* Primary action - Email form */}
          <div 
            className={`max-w-md mx-auto mb-8 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <form onSubmit={handleStartCheck} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="hero-email" className="sr-only">
                  Work email
                </label>
                <Input
                  id="hero-email"
                  type="email"
                  placeholder="name@nonprofit.ca"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent"
                  aria-describedby="email-hint"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="h-12 px-6 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold whitespace-nowrap min-h-[48px]"
                >
                  Start my free check
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
              <p 
                id="email-hint" 
                className="text-xs sm:text-sm text-white/70"
              >
                Takes 4 minutes. You'll see what's working, what's missing, and the next step. No spam.
              </p>
            </form>
          </div>

          {/* Secondary action */}
          <div 
            className={`mb-12 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a 
              href="/path-a" 
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary-background rounded-sm"
            >
              I have an urgent problem
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="text-xs sm:text-sm text-white/60 mt-2">
              Tell us what's going on. We'll point you to the fastest fix.
            </p>
          </div>

          {/* Proof chips */}
          <div 
            className={`flex flex-wrap justify-center gap-3 sm:gap-4 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            aria-label="Service guarantees"
          >
            {[
              { label: "Fast fixes", value: "1–4 weeks" },
              { label: "Full setup", value: "8–12 weeks" },
              { label: "Money-back guarantee", value: null },
            ].map((chip, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-medium text-white">
                  {chip.value ? `${chip.label}: ${chip.value}` : chip.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
export default HeroSection;
