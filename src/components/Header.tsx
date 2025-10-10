import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Nonprofits", href: "/" },
  { name: "Funders", href: "/funders" },
  { name: "Consultants", href: "/consultants" },
  { name: "Resources", href: "/resources" },
  { name: "Company", href: "/company" },
];

interface HeaderProps {
  activeRoute?: string;
}

export const Header = ({ activeRoute = "/" }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToForm = () => {
    const form = document.getElementById("form_3quotes");
    form?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-foreground">Nimara</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.href === activeRoute
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button onClick={scrollToForm} size="default">
                Get 3 free quotes
              </Button>
              <Button variant="link" asChild>
                <a href="/book-a-call">Book a call</a>
              </Button>
              <Button variant="link" asChild>
                <a href="/signin">Sign in</a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96">
                <nav className="flex flex-col space-y-4 mt-8">
                  <a href="#main-content" className="text-sm text-muted-foreground hover:text-foreground">
                    Skip to content
                  </a>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`text-base font-medium ${
                        item.href === activeRoute ? "text-primary" : "text-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4 space-y-3">
                    <Button onClick={scrollToForm} className="w-full">
                      Get 3 free quotes
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <a href="/book-a-call">Book a call</a>
                    </Button>
                    <Button variant="link" asChild>
                      <a href="/signin">Sign in</a>
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
        <Button onClick={scrollToForm} className="w-full">
          Get 3 free quotes
        </Button>
      </div>
    </>
  );
};
