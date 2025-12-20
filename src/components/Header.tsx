import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import nimaraLogo from "@/assets/nimara-logo.png";

const navigation = [
  { name: "For Nonprofits", href: "/" },
  { name: "How It Works", href: "/how-nimara-works" },
  { name: "About", href: "/company" },
  { name: "Resources", href: "/resources" },
];

interface HeaderProps {
  activeRoute?: string;
}

export const Header = ({ activeRoute = "/" }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip To Content
      </a>

      <header
        className={`fixed left-0 right-0 w-full transition-all duration-200 ${
          isScrolled ? "border-b border-border/60 shadow-xs" : "border-b border-transparent"
        }`}
        style={{
          top: "var(--announcement-height, 0px)",
          backgroundColor: isScrolled ? "hsl(var(--background) / 0.98)" : "hsl(var(--background))",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
          zIndex: 9999,
          isolation: "isolate",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className={`flex items-center justify-between transition-all duration-200 ${
            isScrolled ? "h-16" : "h-18"
          }`}>
            {/* Logo */}
            <a
              href="/"
              className="flex items-center min-h-[48px]"
              aria-label="Nimara home"
            >
              <img
                src={nimaraLogo}
                alt="Nimara"
                className={`w-auto transition-all duration-200 ${
                  isScrolled ? "h-9 md:h-10" : "h-10 md:h-11"
                }`}
                fetchPriority="high"
                width="120"
                height="44"
              />
            </a>

            {/* Desktop Navigation */}
            <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.href === activeRoute ? "page" : undefined}
                  className={`group relative px-4 py-2 text-sm font-medium transition-colors duration-150 min-h-[44px] inline-flex items-center ${
                    item.href === activeRoute
                      ? "text-foreground"
                      : "text-body-muted hover:text-foreground"
                  }`}
                >
                  <span className="relative">
                    {item.name}
                    <span 
                      className={`absolute left-0 -bottom-0.5 h-[2px] bg-primary transition-all duration-200 ${
                        item.href === activeRoute ? "w-full" : "w-0 group-hover:w-full"
                      }`} 
                    />
                  </span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="/partners"
                className="text-sm font-medium text-body-muted hover:text-foreground transition-colors duration-150"
              >
                For Consultants
              </a>
              <a
                href="/book-a-call"
                className="text-sm font-medium text-body-muted hover:text-foreground transition-colors duration-150"
              >
                Book a call
              </a>
              <a
                href="/#hero-form"
                className="inline-flex items-center gap-2 h-10 px-5 bg-primary text-primary-foreground text-sm font-semibold rounded-[10px] transition-all duration-200 hover:bg-primary/90 hover:shadow-md group"
              >
                <span>Start free check</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
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
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[360px] p-0 border-l border-border">
                <div className="flex flex-col h-full bg-background">
                  {/* Mobile nav header */}
                  <div className="p-6 border-b border-border">
                    <img src={nimaraLogo} alt="Nimara" className="h-9" />
                  </div>

                  {/* Mobile nav links */}
                  <nav aria-label="Mobile navigation" className="flex-1 p-6">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          aria-current={item.href === activeRoute ? "page" : undefined}
                          className={`block py-3 text-base font-semibold transition-colors duration-150 ${
                            item.href === activeRoute
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-border">
                      <span className="text-xs font-semibold tracking-[0.1em] uppercase text-body-muted mb-4 block">
                        Join Our Team
                      </span>
                      <a
                        href="/partners"
                        className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors duration-150 group"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>For Consultants</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </nav>

                  {/* Mobile nav footer */}
                  <div className="p-6 border-t border-border bg-muted/50 space-y-3">
                    <a
                      href="/#hero-form"
                      className="flex items-center justify-center gap-2 w-full h-12 bg-primary text-primary-foreground font-semibold rounded-[10px] transition-all duration-200 hover:bg-primary/90 hover:shadow-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Start free check
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="/book-a-call"
                      className="flex items-center justify-center text-sm font-medium text-body-muted hover:text-foreground transition-colors duration-150"
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
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-4 bg-background/98 backdrop-blur-md border-t border-border">
        <div className="flex items-center gap-3">
          <a
            href="/#hero-form"
            className="flex-1 flex items-center justify-center gap-2 h-12 bg-primary text-primary-foreground font-semibold rounded-[10px] transition-all duration-200 hover:bg-primary/90 hover:shadow-md"
          >
            Start free check
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/book-a-call"
            className="text-sm font-medium text-body-muted hover:text-foreground transition-colors duration-150 whitespace-nowrap px-2"
          >
            Book a call
          </a>
        </div>
      </div>
    </>
  );
};
