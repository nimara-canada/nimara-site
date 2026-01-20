import { ArrowRight } from "lucide-react";
import { CALENDLY_BOOKING_URL, EXTERNAL_URLS } from "@/constants/urls";

const navigation = [
  { name: "Start Here", href: "/start-here" },
  { name: "For Nonprofits", href: "/" },
  { name: "How It Works", href: "/how-nimara-works" },
  { name: "About", href: "/company" },
  { name: "Resources", href: "/resources" },
];

const legalLinks = [
  { name: "Privacy", href: EXTERNAL_URLS.privacy, external: true },
  { name: "Terms", href: EXTERNAL_URLS.terms, external: true },
  { name: "Refunds", href: EXTERNAL_URLS.refunds, external: true },
  { name: "Accessibility", href: EXTERNAL_URLS.accessibility, external: true },
];

export const Footer = () => {
  return (
    <footer className="bg-nim-navy relative overflow-hidden pb-20 md:pb-0">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-28">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12 md:mb-24">
          {/* Left - Brand */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] mb-4 md:mb-6">
              Nimara
            </h2>
            <p className="text-white/50 leading-relaxed max-w-sm mb-6 md:mb-8 text-sm sm:text-base">
              Simple systems for money, files, and reporting — so funding is easier to win and manage.
            </p>
            <a
              href="/start-here"
              className="group inline-flex items-center gap-2 min-h-[48px] text-white font-medium select-none transition-all duration-150 active:opacity-70"
            >
              <span className="relative">
                Get Started
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-white/30 group-hover:bg-white transition-colors duration-150" />
              </span>
              <ArrowRight className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right - Navigation */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {/* Column 1 - Main nav */}
              <div>
                <p className="text-xs tracking-widest text-white/40 uppercase mb-4 md:mb-5">
                  Navigation
                </p>
                <ul className="space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="inline-flex items-center min-h-[44px] text-white/70 hover:text-white transition-all duration-150 active:opacity-70 select-none"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 - Connect */}
              <div>
                <p className="text-xs tracking-widest text-white/40 uppercase mb-4 md:mb-5">
                  Connect
                </p>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="/partners"
                      className="inline-flex items-center min-h-[44px] text-white/70 hover:text-white transition-all duration-150 active:opacity-70 select-none"
                    >
                      For Consultants
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@nimara.ca"
                      className="inline-flex items-center min-h-[44px] text-white/70 hover:text-white transition-all duration-150 active:opacity-70 select-none"
                    >
                      hello@nimara.ca
                    </a>
                  </li>
                  <li>
                    <a
                      href="/start-here"
                      className="inline-flex items-center min-h-[44px] text-white/70 hover:text-white transition-all duration-150 active:opacity-70 select-none"
                    >
                      Start Here
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 - Legal */}
              <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
                <p className="text-xs tracking-widest text-white/40 uppercase mb-4 md:mb-5">
                  Legal
                </p>
                <ul className="flex flex-wrap md:flex-col gap-x-6 gap-y-1">
                  {legalLinks.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center min-h-[44px] text-white/70 hover:text-white transition-all duration-150 active:opacity-70 select-none"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-xs sm:text-sm text-white/40">
              © {new Date().getFullYear()} Nimara. All Rights Reserved.
            </p>
            <p className="text-xs sm:text-sm text-white/40">
              Made In Canada 🍁
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
