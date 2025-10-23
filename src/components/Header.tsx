import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


import nimaraLogo from "@/assets/nimara-logo.png";

const navigation = [
  { name: "For Nonprofits", href: "/" },
  { name: "For Consultants", href: "/consultants" },
  { name: "Company", href: "/company" },
  { name: "Free Resources", href: "/resources" },
];

interface HeaderProps {
  activeRoute?: string;
}

export const Header = ({ activeRoute = "/" }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToGetInTouch = () => {
    // First, try to find form by ID
    const form = document.getElementById('form_3quotes');
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
      // Focus the first input field after scrolling
      setTimeout(() => {
        const emailField = document.getElementById('q_email') as HTMLInputElement;
        emailField?.focus();
      }, 500);
    } else {
      // Fallback: look for section containing "Talk to the Nimara team"
      const getInTouchSection = Array.from(document.querySelectorAll('section')).find(
        section => section.textContent?.includes('Talk to the Nimara team') || section.textContent?.includes('Get in touch!')
      );
      getInTouchSection?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Skip to content link */}
      <a 
        href="#main" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 min-h-[44px]" aria-label="Nimara home">
              <img 
                src={nimaraLogo} 
                alt="Nimara - Canadian Nonprofit Consulting Platform for Governance, Finance, and Compliance" 
                className="h-16 md:h-20 w-auto" 
                fetchPriority="high"
                width="120"
                height="48"
              />
            </a>

            {/* Desktop Navigation */}
            <nav aria-label="Primary" className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.href === activeRoute ? "page" : undefined}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors min-h-[44px] inline-flex items-center justify-center ${
                    item.href === activeRoute
                      ? "text-primary"
                      : "text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop Utilities */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button onClick={scrollToGetInTouch} size="default" className="min-h-[44px]">
                Schedule A Call
              </Button>
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
                  <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96">
                <nav aria-label="Mobile navigation" className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.href === activeRoute ? "page" : undefined}
                      className={`text-base font-medium py-3 px-4 rounded-lg min-h-[44px] flex items-center transition-colors ${
                        item.href === activeRoute ? "text-primary bg-muted" : "text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4 space-y-3 border-t border-border">
                    <Button onClick={scrollToGetInTouch} className="w-full min-h-[44px]">
                      Schedule A Call
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Mobile Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-4 bg-background/95 backdrop-blur border-t border-border">
        <Button onClick={scrollToGetInTouch} className="w-full min-h-[44px]">
          Schedule A Call
        </Button>
      </div>
    </>
  );
};
