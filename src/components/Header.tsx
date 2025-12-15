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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        Skip to content
      </a>

      <header
        className={`fixed left-0 right-0 z-[70] w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-white shadow-sm border-b border-slate-200" 
            : "bg-white/95 backdrop-blur-md"
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
                  className={`group relative px-4 py-2 text-sm font-medium transition-colors min-h-[44px] inline-flex items-center ${
                    item.href === activeRoute
                      ? "text-purple-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="relative">
                    {item.name}
                    <span 
                      className={`absolute left-0 -bottom-0.5 h-px bg-purple-600 transition-all duration-300 ${
                        item.href === activeRoute ? "w-full" : "w-0 group-hover:w-full"
                      }`} 
                    />
                  </span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="https://www.notion.so/Consultant-Hire-2bb227f1ee3a8018b693d47e9610c583?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                <span className="relative">
                  For consultants
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-slate-900 transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
              <motion.a
                href="/book-a-call"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 h-11 px-6 bg-purple-600 text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200 group"
              >
                <span>Schedule a Call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </motion.a>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="min-w-[48px] min-h-[48px] text-slate-900"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96 p-0 border-l border-slate-200">
                <div className="flex flex-col h-full bg-white">
                  {/* Mobile nav header */}
                  <div className="p-6 border-b border-slate-200">
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
                              ? "text-purple-600"
                              : "text-slate-900 hover:text-purple-600"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </motion.a>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-200">
                      <span className="text-xs font-medium tracking-[0.15em] uppercase text-slate-500 mb-4 block">
                        Join Our Team
                      </span>
                      <a
                        href="https://www.notion.so/Consultant-Hire-2bb227f1ee3a8018b693d47e9610c583?source=copy_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-slate-900 hover:text-purple-600 transition-colors group"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>For consultants</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </nav>

                  {/* Mobile nav footer */}
                  <div className="p-6 border-t border-slate-200 bg-slate-50">
                    <a
                      href="/book-a-call"
                      className="flex items-center justify-center gap-2 w-full h-14 bg-purple-600 text-white font-medium rounded-full transition-all hover:bg-purple-700 hover:shadow-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Schedule a Call
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
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-4 bg-white/98 backdrop-blur-md border-t border-slate-200">
        <a
          href="/book-a-call"
          className="flex items-center justify-center gap-2 w-full h-12 bg-purple-600 text-white font-medium rounded-full transition-all hover:bg-purple-700 hover:shadow-lg"
        >
          Schedule a Call
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </>
  );
};
