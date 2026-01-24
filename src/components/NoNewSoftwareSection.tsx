import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NoNewSoftwareSection = () => {
  const tools = [
    "Google Workspace",
    "Microsoft 365",
    "QuickBooks",
    "Xero",
    "Drive/SharePoint",
    "Sheets/Excel",
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[#0a0f1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Section Label */}
        <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#ACFCE3] mb-6">
          No New Software
        </p>

        {/* Headline */}
        <h2 className="text-[clamp(2rem,6.4vw,5.6rem)] font-black tracking-[-0.04em] text-white leading-[0.95] mb-6 uppercase">
          WORKS WITH THE TOOLS YOU ALREADY USE
        </h2>

        {/* Body */}
        <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
          We set up funder-ready workflows inside your current tools — finance, files, board docs, reporting — so your team can run them without a rebuild.
        </p>

        {/* Proof Line */}
        <p className="text-base sm:text-lg text-white/60 italic mb-10">
          No rip-and-replace. No "new platform." Just clean systems and an evidence trail funders trust.
        </p>

        {/* Tool Pills */}
        <div className="mb-6">
          <p className="text-sm text-white/50 mb-3">
            Common stacks we work within:
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base text-white/90 bg-white/5 border border-white/10 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-white/40 mb-10">
          Integrations vary by tool. Where needed, we use exports/imports and standard templates — not custom connectors.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <Button
            asChild
            size="lg"
            className="bg-[#ACFCE3] text-[#0a0f1a] hover:bg-[#8CFCD3] font-semibold px-6 py-3 h-auto"
          >
            <Link to="/book-a-call">
              Book a call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <span className="text-sm text-white/50">
            We'll confirm your stack + what we'll install.
          </span>
        </div>
      </div>
    </section>
  );
};

export default NoNewSoftwareSection;
