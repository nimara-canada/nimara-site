import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NoNewSoftwareSection = () => {
  const tools = ["Google", "Microsoft 365", "QuickBooks", "Xero"];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-secondary-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        {/* Headline */}
        <h2 className="text-[clamp(1.75rem,5vw,4rem)] font-black tracking-[-0.03em] text-white leading-[1] mb-6 uppercase">
          We build inside <span className="text-accent">your tools</span>
        </h2>

        {/* One-liner */}
        <p className="text-base sm:text-lg text-white/60 mb-8 max-w-xl mx-auto">
          No new software. No rip-and-replace.
        </p>

        {/* Tool Pills - inline */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1.5 text-sm text-white/80 bg-white/5 border border-white/10 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link 
          to="/capacity-buildout"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
        >
          See how it works
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default NoNewSoftwareSection;
