const navigation = [
  { name: "For Nonprofits", href: "/" },
  { name: "For Funders", href: "/#funders" },
  { name: "How Nimara Works", href: "/how-nimara-works" },
  { name: "Resources", href: "/resources" },
  { name: "Become a Consultant", href: "https://www.notion.so/Consultant-Hire-2bb227f1ee3a8018b693d47e9610c583?source=copy_link", external: true },
];

const legalLinks = [
  { name: "Privacy Policy", href: "https://www.notion.so/Nimara-Privacy-Policy-2bd227f1ee3a802389c1d58346f61ff7?source=copy_link", external: true },
  { name: "Terms of Service", href: "/terms" },
  { name: "Refund Policy", href: "https://www.notion.so/Nimara-Refund-Policy-2bc227f1ee3a80f299fbc42501d338ac?source=copy_link", external: true },
  { name: "Accessibility Statement", href: "/accessibility" },
  { name: "Contact", href: "mailto:hello@nimara.ca" },
];

export const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--nimara-navy))] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Navigation Links */}
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-16">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-sm sm:text-base text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[hsl(var(--nimara-navy))] rounded px-2 py-1"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Large Logo */}
        <div className="flex justify-center mb-16 sm:mb-20">
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white">
            Nimara
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Nimara. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {legalLinks.map((item, index) => (
                <span key={item.name} className="flex items-center gap-4 sm:gap-6">
                  <a
                    href={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[hsl(var(--nimara-navy))] rounded px-2 py-1"
                  >
                    {item.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-white/30 hidden sm:inline">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
