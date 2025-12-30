import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import nimaraLogo from "@/assets/nimara-logo.png";
import { useMotionPreferences, DROPBOX_EASING_CSS } from "@/hooks/use-scroll-reveal";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const navigation = [
  { name: "For Nonprofits", href: "/" },
  { name: "How It Works", href: "/how-nimara-works" },
  { name: "About", href: "/company" },
  { name: "Resources", href: "/resources" },
];

interface HeaderProps {
  activeRoute?: string;
}

// Helper function to check if a route is active (simple exact match)
const isRouteActive = (navHref: string, currentRoute: string) => {
  return navHref === currentRoute;
};

export const Header = ({ activeRoute = "/" }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollState, setScrollState] = useState({
    isScrolled: false,
    isHidden: false,
  });
  
  const { stickyHeaderAutoHide, reducedMotion } = useMotionPreferences();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 40;
      const scrollingDown = currentScrollY > lastScrollY.current;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      
      // Auto-hide: hide when scrolling down fast (>15px), show on scroll up or near top
      const shouldHide = 
        stickyHeaderAutoHide && 
        isScrolled && 
        scrollingDown && 
        scrollDelta > 15;
      
      const shouldShow = !scrollingDown || currentScrollY < 100;

      setScrollState(prev => ({
        isScrolled,
        isHidden: shouldHide ? true : shouldShow ? false : prev.isHidden,
      }));

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScrollState);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stickyHeaderAutoHide]);

  const { isScrolled, isHidden } = scrollState;

  // Transition styles
  const transitionStyle = reducedMotion 
    ? {} 
    : { 
        transition: `transform 350ms ${DROPBOX_EASING_CSS}, height 350ms ${DROPBOX_EASING_CSS}, box-shadow 350ms ${DROPBOX_EASING_CSS}, background-color 350ms ${DROPBOX_EASING_CSS}` 
      };

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip To Content
      </a>

      <header
        className={cn(
          "fixed left-0 right-0 w-full border-b",
          isScrolled 
            ? "border-border/50 shadow-sm" 
            : "border-transparent"
        )}
        style={{
          top: "var(--announcement-height, 0px)",
          backgroundColor: isScrolled 
            ? "hsl(var(--background))" 
            : "hsl(var(--background) / 0.8)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          zIndex: 9999,
          isolation: "isolate",
          transform: isHidden ? "translateY(-100%)" : "translateY(0)",
          ...transitionStyle,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div 
            className="flex items-center justify-between"
            style={{
              height: isScrolled ? "64px" : "80px",
              ...transitionStyle,
            }}
          >
            {/* Logo */}
            <a
              href="/"
              className="flex items-center min-h-[44px]"
              aria-label="Nimara home"
            >
              <img
                src={nimaraLogo}
                alt="Nimara"
                className="w-auto"
                style={{
                  height: isScrolled ? "40px" : "48px",
                  ...transitionStyle,
                }}
                fetchPriority="high"
                width="120"
                height="48"
              />
            </a>

            {/* Desktop Navigation */}
            <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={isRouteActive(item.href, activeRoute) ? "page" : undefined}
                  className={cn(
                    "group relative px-4 py-2 text-sm font-medium min-h-[44px] inline-flex items-center select-none",
                    "transition-all duration-150 ease-[cubic-bezier(0.65,0,0.45,1)]",
                    "active:translate-y-[-1px] active:opacity-85",
                    isRouteActive(item.href, activeRoute)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  <span className="relative">
                    {item.name}
                    <span 
                      className={cn(
                        "absolute left-0 -bottom-0.5 h-px bg-primary",
                        isRouteActive(item.href, activeRoute) ? "w-full" : "w-0 group-hover:w-full"
                      )} 
                      style={{ transition: `width 200ms ${DROPBOX_EASING_CSS}` }}
                    />
                  </span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="/partners"
                className="group text-sm text-muted-foreground hover:text-foreground transition-all duration-150 ease-[cubic-bezier(0.65,0,0.45,1)] active:opacity-70 select-none"
              >
                <span className="relative">
                  For Consultants
                  <span 
                    className="absolute left-0 -bottom-0.5 w-0 h-px bg-foreground group-hover:w-full" 
                    style={{ transition: `width 200ms ${DROPBOX_EASING_CSS}` }}
                  />
                </span>
              </a>
              <a
                href={CALENDLY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-sm text-muted-foreground hover:text-foreground transition-all duration-150 ease-[cubic-bezier(0.65,0,0.45,1)] active:opacity-70 select-none"
              >
                <span className="relative">
                  Book a call
                  <span 
                    className="absolute left-0 -bottom-0.5 w-0 h-px bg-foreground group-hover:w-full" 
                    style={{ transition: `width 200ms ${DROPBOX_EASING_CSS}` }}
                  />
                </span>
              </a>
              <a
                href={TYPEFORM_HEALTH_CHECK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 bg-primary text-primary-foreground text-sm font-medium rounded-full select-none transition-all duration-150 ease-[cubic-bezier(0.65,0,0.45,1)] hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span>Start the free check</span>
                <ArrowRight 
                  className="w-4 h-4 transition-transform duration-150 ease-[cubic-bezier(0.65,0,0.45,1)] group-hover:translate-x-0.5" 
                />
              </a>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="min-w-[48px] min-h-[48px]"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96 p-0 border-l border-border/50">
                <div className="flex flex-col h-full bg-background">
                  {/* Mobile nav header */}
                  <div className="p-6 border-b border-border/50">
                    <img src={nimaraLogo} alt="Nimara" className="h-10" />
                  </div>

                  {/* Mobile nav links */}
                  <nav aria-label="Mobile navigation" className="flex-1 p-6">
                    <div className="space-y-1">
                      {navigation.map((item, index) => (
                        <a
                          key={item.name}
                          href={item.href}
                          aria-current={isRouteActive(item.href, activeRoute) ? "page" : undefined}
                          className={cn(
                            "block py-4 text-lg font-medium transition-colors",
                            isRouteActive(item.href, activeRoute)
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          )}
                          style={{
                            opacity: reducedMotion ? 1 : 0,
                            transform: reducedMotion ? 'none' : 'translateX(-10px)',
                            animation: reducedMotion ? 'none' : `slideIn 300ms ${DROPBOX_EASING_CSS} ${index * 50}ms forwards`,
                          }}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-border/50">
                      <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-4 block">
                        Join Our Team
                      </span>
                      <a
                        href="/partners"
                        className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>For Consultants</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </nav>

                  {/* Mobile nav footer */}
                  <div className="p-6 border-t border-border/50 bg-muted/30 space-y-3">
                    <a
                      href={TYPEFORM_HEALTH_CHECK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full h-14 bg-primary text-primary-foreground font-medium rounded-full select-none transition-all duration-150 ease-[cubic-bezier(0.65,0,0.45,1)] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] active:translate-y-px"
                      onClick={() => setIsOpen(false)}
                    >
                      Start the free check
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={CALENDLY_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-sm text-muted-foreground hover:text-foreground transition-all duration-150 active:opacity-70 select-none"
                      onClick={() => setIsOpen(false)}
                    >
                      Book a call
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Mobile Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-4 bg-background/98 backdrop-blur-md border-t border-border/50">
        <div className="flex items-center gap-3">
          <a
            href={TYPEFORM_HEALTH_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 h-12 bg-primary text-primary-foreground font-medium rounded-full select-none transition-all duration-150 ease-[cubic-bezier(0.65,0,0.45,1)] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] active:translate-y-px"
          >
            Start the free check
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={CALENDLY_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-all duration-150 whitespace-nowrap active:opacity-70 select-none"
          >
            Book a call
          </a>
        </div>
      </div>

      {/* Keyframes for mobile menu animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};
