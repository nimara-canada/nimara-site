import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import nimaraLogo from "@/assets/nimara-logo.png";

const navigation = [
  { name: "For Nonprofits", href: "/" },
  { name: "For Consultants", href: "/consultants" },
  { name: "Company", href: "/company" },
];

interface HeaderProps {
  activeRoute?: string;
}

export const Header = ({ activeRoute = "/" }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToForm = () => {
    const form = document.getElementById("form_3quotes");
    form?.scrollIntoView({ behavior: "smooth" });
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
            <a href="/" className="flex items-center space-x-2">
              <img 
                src={nimaraLogo} 
                alt="Nimara" 
                className="h-10 md:h-12 w-auto" 
                fetchPriority="high"
              />
            </a>

            {/* Desktop Navigation */}
            <nav aria-label="Primary" className="hidden md:flex items-center space-x-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.href === activeRoute ? "page" : undefined}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${
                    item.href === activeRoute
                      ? "text-primary"
                      : "text-foreground hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button onClick={scrollToForm} size="default" className="min-h-[44px]">
                Get 3 free quotes
              </Button>
              <Button variant="link" asChild className="min-h-[44px]">
                <a href="/signin">{t('nav.signin')}</a>
              </Button>
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
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
                      className={`text-base font-medium py-2.5 px-4 rounded-lg min-h-[44px] flex items-center transition-colors ${
                        item.href === activeRoute ? "text-primary" : "text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4 space-y-3">
                    <Button onClick={scrollToForm} className="w-full min-h-[44px]">
                      Get 3 free quotes
                    </Button>
                    <Button variant="link" asChild className="min-h-[44px]">
                      <a href="/signin">{t('nav.signin')}</a>
                    </Button>
                    <LanguageSwitcher />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Mobile Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-4 bg-background/95 backdrop-blur border-t border-border">
        <Button onClick={scrollToForm} className="w-full min-h-[44px]">
          Get 3 free quotes
        </Button>
      </div>
    </>
  );
};
