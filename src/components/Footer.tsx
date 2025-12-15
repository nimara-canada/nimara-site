import { ArrowRight } from "lucide-react";

const navigation = [
  { name: "For Nonprofits", href: "/" },
  { name: "How It Works", href: "/how-nimara-works" },
  { name: "About", href: "/company" },
  { name: "Resources", href: "/resources" },
];

const legalLinks = [
  { name: "Privacy", href: "https://www.notion.so/Nimara-Privacy-Policy-2bd227f1ee3a802389c1d58346f61ff7", external: true },
  { name: "Terms", href: "https://www.notion.so/Nimara-Terms-of-Use-2bd227f1ee3a80a2a3ddd8a5ddb9dcd8", external: true },
  { name: "Refunds", href: "https://www.notion.so/Nimara-Refund-Policy-2bc227f1ee3a80f299fbc42501d338ac", external: true },
  { name: "Accessibility", href: "https://www.notion.so/Nimara-Accessibility-Statement-2bd227f1ee3a80f5bf6dd91113380f98", external: true },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary-background relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-24">
          {/* Left - Brand */}
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] mb-6">
              Nimara
            </h2>
            <p className="text-white/50 leading-relaxed max-w-sm mb-8">
              Helping Canadian nonprofits build the core systems funders expect—so you can focus on your mission.
            </p>
            <a
              href="/book-a-call"
              className="group inline-flex items-center gap-2 text-white font-medium"
            >
              <span className="relative">
                Book a discovery call
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-white/30 group-hover:bg-white transition-colors duration-300" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right - Navigation */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Column 1 - Main nav */}
              <div>
                <p className="text-xs tracking-widest text-white/40 uppercase mb-5">
                  Navigation
                </p>
                <ul className="space-y-3">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-white/70 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 - Connect */}
              <div>
                <p className="text-xs tracking-widest text-white/40 uppercase mb-5">
                  Connect
                </p>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://www.notion.so/Consultant-Hire-2bb227f1ee3a8018b693d47e9610c583"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      For Consultants
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@nimara.ca"
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      hello@nimara.ca
                    </a>
                  </li>
                  <li>
                    <a
                      href="/book-a-call"
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      Book a Call
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 - Legal */}
              <div>
                <p className="text-xs tracking-widest text-white/40 uppercase mb-5">
                  Legal
                </p>
                <ul className="space-y-3">
                  {legalLinks.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-white/70 hover:text-white transition-colors duration-200"
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
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Nimara. All rights reserved.
            </p>
            <p className="text-sm text-white/40">
              Made in Canada 🍁
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
