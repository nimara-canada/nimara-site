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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip to content
      </a>

      <header
        className={`fixed left-0 right-0 z-[70] w-full transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
            : "bg-transparent"
        }`}
        style={{ top: "var(--announcement-height, 0px)" }}
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
                  className={`relative px-4 py-2 text-sm font-medium transition-colors min-h-[44px] inline-flex items-center ${
                    item.href === activeRoute
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {item.href === activeRoute && (
                    <span className="absolute bottom-1 left-4 right-4 h-px bg-primary" />
                  )}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="https://www.notion.so/Consultant-Hire-2bb227f1ee3a8018b693d47e9610c583?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                For consultants
              </a>
              <a
                href="/book-a-call"
                className="inline-flex items-center gap-2 h-11 px-6 bg-secondary-background text-white text-sm font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-secondary-background/20"
              >
                Book a Call
                <ArrowRight className="w-4 h-4" />
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
              <SheetContent side="right" className="w-full sm:w-96 p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile nav header */}
                  <div className="p-6 border-b border-border">
                    <img src={nimaraLogo} alt="Nimara" className="h-10" />
                  </div>

                  {/* Mobile nav links */}
                  <nav aria-label="Mobile navigation" className="flex-1 p-6">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          aria-current={item.href === activeRoute ? "page" : undefined}
                          className={`block py-4 text-lg font-medium transition-colors ${
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

                    <div className="mt-8 pt-8 border-t border-border space-y-4">
                      <a
                        href="https://www.notion.so/Consultant-Hire-2bb227f1ee3a8018b693d47e9610c583?source=copy_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        For consultants →
                      </a>
                    </div>
                  </nav>

                  {/* Mobile nav footer */}
                  <div className="p-6 border-t border-border">
                    <a
                      href="/book-a-call"
                      className="flex items-center justify-center gap-2 w-full h-12 bg-secondary-background text-white font-medium rounded-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Book a Call
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Mobile Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-4 bg-background/95 backdrop-blur-md border-t border-border">
        <a
          href="/book-a-call"
          className="flex items-center justify-center gap-2 w-full h-12 bg-secondary-background text-white font-medium rounded-full"
        >
          Book a Call
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </>
  );
};
