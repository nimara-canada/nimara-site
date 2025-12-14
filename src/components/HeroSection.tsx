import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Zap, Clock, ShieldCheck } from "lucide-react";
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [primaryEmail, setPrimaryEmail] = useState("");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const words = ["Fundable", "Sustainable", "Efficient"];

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
    const typeSpeed = 150;
    const deleteSpeed = 90;
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
        setWordIndex(prev => (prev + 1) % words.length);
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
    if (primaryEmail) {
      window.location.href = `/check?email=${encodeURIComponent(primaryEmail)}`;
    }
  };
  return <section className="relative bg-secondary-background overflow-hidden" aria-labelledby="hero-heading">
      {/* Main Hero Content */}
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="text-center">
          {/* Eyebrow Badge */}
          <div className={`mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="inline-block text-xs sm:text-sm font-semibold text-secondary-background bg-accent px-4 py-2 rounded-full tracking-wide uppercase">
              Capacity Building for Canadian Nonprofits
            </span>
          </div>

          {/* H1 with typing animation */}
          <h1 id="hero-heading" className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] tracking-tight mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Keep Your Nonprofit
            <br />
            <span className="relative inline-flex items-baseline min-h-[1.2em]">
              <span className="text-accent" aria-live="polite" aria-atomic="true">
                {displayText || words[0]}
                {!prefersReducedMotion && <span className="animate-pulse ml-0.5 inline-block w-[3px] h-[0.9em] bg-accent align-middle" aria-hidden="true" />}
              </span>
            </span>
          </h1>

          {/* Domain pills */}
          <p className={`text-xs sm:text-sm text-white/50 tracking-[0.2em] uppercase mb-6 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Board • Money • People • Programs
          </p>

          {/* Ready for... line with dots */}
          <div className={`flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {["Ready for grants", "Ready to grow", "Ready for audits"].map((item, index) => <span key={index} className="inline-flex items-center gap-2 text-sm sm:text-base text-white/80">
                <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </span>)}
          </div>

          {/* Subhead */}
          <p className={`text-base sm:text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-250 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Nimara helps you set up simple systems for your board, money, staff, and programs—so your team spends less time fixing problems and more time doing the work.
          </p>

          {/* Email Capture Form */}
          <div className={`max-w-xl mx-auto mb-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <form onSubmit={handleStartCheck} className="space-y-4">
              {/* Primary Email - Required */}
              <div className="text-left">
                <label htmlFor="primary-email" className="block text-sm text-white/80 mb-2">
                  Email (where we can reach you)
                </label>
                <Input id="primary-email" type="email" placeholder="name@gmail.com or name@yourorg.ca" value={primaryEmail} onChange={e => setPrimaryEmail(e.target.value)} required className="w-full h-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-accent focus:ring-accent text-base" aria-describedby="primary-email-hint" />
                <p id="primary-email-hint" className="text-xs text-white/50 mt-1.5">
                  No domain email yet? That's okay — use your best contact email.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button type="submit" size="lg" className="flex-1 h-14 px-8 bg-accent text-secondary-background hover:bg-accent/90 font-semibold min-h-[56px] text-base">
                  ​Start the 4-minute check
                </Button>
                <a href="/path-a" className="inline-flex items-center justify-center gap-2 h-14 px-6 bg-white/5 border border-white/20 text-white hover:bg-white/10 font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary-background whitespace-nowrap min-h-[56px]">
                  I have an urgent problem
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              {/* Subtext under CTA */}
              <p className="text-sm text-white/50 text-center">
                We'll reach out by email within 2 business days.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} aria-label="Service guarantees">
            {/* 1-4 weeks */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">1–4 weeks</p>
                <p className="text-xs sm:text-sm text-white/50 uppercase tracking-wide">Fast Fixes</p>
              </div>
            </div>

            {/* 8-12 weeks */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">8–12 weeks</p>
                <p className="text-xs sm:text-sm text-white/50 uppercase tracking-wide">Full Setup</p>
              </div>
            </div>

            {/* Guaranteed */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">Guaranteed</p>
                <p className="text-xs sm:text-sm text-white/50 uppercase tracking-wide">If we can't help, you don't pay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export { HeroSection };
export default HeroSection;