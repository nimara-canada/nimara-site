import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip To Content
      </a>

      <header
        className={`fixed left-0 right-0 w-full border-b border-border/50 transition-all duration-300 ${
          isScrolled ? "shadow-sm" : ""
        }`}
        style={{
          top: "var(--announcement-height, 0px)",
          backgroundColor: "hsl(var(--background))",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          zIndex: 9999,
          isolation: "isolate",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}>
            {/* Logo */}
            <a
              href="/"
              className="flex items-center min-h-[44px]"
              aria-label="Nimara home"
            >
              <img
                src={nimaraLogo}
                alt="Nimara"
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"
                }`}
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
                  aria-current={item.href === activeRoute ? "page" : undefined}
                  className={`group relative px-4 py-2 text-sm font-medium transition-colors min-h-[44px] inline-flex items-center ${
                    item.href === activeRoute
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  <span className="relative">
                    {item.name}
                    <span 
                      className={`absolute left-0 -bottom-0.5 h-px bg-primary transition-all duration-300 ${
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
                className="group text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="relative">
                  For Consultants
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
              <a
                href="/book-a-call"
                className="group text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="relative">
                  Book a call
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
              <motion.a
                href="/#hero-form"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 h-11 px-6 bg-primary text-primary-foreground text-sm font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <span>Start the free check</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </motion.a>
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
                        <motion.a
                          key={item.name}
                          href={item.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          aria-current={item.href === activeRoute ? "page" : undefined}
                          className={`block py-4 text-lg font-medium transition-colors ${
                            item.href === activeRoute
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </motion.a>
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
                      href="/#hero-form"
                      className="flex items-center justify-center gap-2 w-full h-14 bg-primary text-primary-foreground font-medium rounded-full transition-all hover:shadow-lg hover:shadow-primary/20"
                      onClick={() => setIsOpen(false)}
                    >
                      Start the free check
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="/book-a-call"
                      className="flex items-center justify-center text-sm text-muted-foreground hover:text-foreground transition-colors"
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
            href="/#hero-form"
            className="flex-1 flex items-center justify-center gap-2 h-12 bg-primary text-primary-foreground font-medium rounded-full transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Start the free check
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/book-a-call"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            Book a call
          </a>
        </div>
      </div>
    </>
  );
};
