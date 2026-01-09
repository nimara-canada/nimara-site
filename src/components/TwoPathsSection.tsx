import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { TYPEFORM_HEALTH_CHECK_URL, TYPEFORM_GRANT_TRACKER_URL } from "@/constants/urls";

const TwoPathsSection = () => {
  const cards = [
    {
      id: "capacity",
      badge: "BUILD",
      timeBadge: "4–8 weeks",
      title: "Build My Capacity",
      description: "Best if you know things are messy and you're ready to fix them now.",
      checklist: [
        "Pick the areas you need most",
        "We build the systems for you",
        "Your team learns how to run them",
      ],
      primaryCta: {
        label: "Build My Capacity",
        to: "/capacity-buildout",
      },
      secondaryCta: {
        label: "See what's included",
        to: "/capacity-buildout#packages",
      },
      bgColor: "bg-gradient-to-br from-[#E0F7FA] to-[#E8F5E9]",
      borderColor: "border-l-[#6945D8]",
      checkColor: "#6945D8",
      isPrimary: true,
    },
    {
      id: "healthcheck",
      badge: "ASSESS",
      timeBadge: "2 weeks",
      title: "Organization Health Check",
      description: "Best if you want to know what's working and what to fix first.",
      checklist: [
        "We review your whole organization",
        "You see where the gaps are",
        "You get a clear plan to move forward",
      ],
      primaryCta: {
        label: "Get a Health Check",
        to: "/organization-check",
      },
      secondaryCta: {
        label: "What happens next?",
        to: "/organization-check#how-it-works",
      },
      bgColor: "bg-gradient-to-br from-[#FCE4EC] to-[#F3E5F5]",
      borderColor: "border-l-[#E91E63]",
      checkColor: "#E91E63",
      isPrimary: false,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8F9FC]">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-[#1A1A1A]">
            Pick a starting point.
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-[#6B7280]">
            We help Canadian nonprofits set up simple systems for boards, grants, teams, and files — so you're ready when funders ask.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col border-l-4 ${card.bgColor} ${card.borderColor}`}
            >
              {/* Top Row: Badge + Checklist */}
              <div className="flex flex-col lg:flex-row lg:gap-8">
                {/* Left Column */}
                <div className="lg:w-2/5 mb-6 lg:mb-0">
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-lg border-2 border-[#1A1A1A] bg-white/80 backdrop-blur-sm">
                    <span className="text-sm font-bold tracking-wide text-[#1A1A1A]">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold mt-5 text-[#1A1A1A]">
                    {card.title}
                  </h3>

                  {/* Time */}
                  <p className="text-base mt-2 text-[#6B7280]">
                    {card.timeBadge}
                  </p>
                </div>

                {/* Right Column - Checklist */}
                <div className="lg:w-3/5">
                  <p className="text-base leading-relaxed text-[#6B7280] mb-5">
                    {card.description}
                  </p>
                  <ul className="space-y-3">
                    {card.checklist.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div 
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: card.checkColor }}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-base text-[#1A1A1A]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Primary CTA */}
              <Link
                to={card.primaryCta.to}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold mt-8 transition-all duration-200 bg-[#1A1A1A] hover:bg-[#2A2A2A] hover:scale-[1.02] active:scale-[0.98]"
              >
                {card.primaryCta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary CTA */}
              <Link
                to={card.secondaryCta.to}
                className="flex items-center justify-center gap-1.5 mt-4 text-sm text-[#6B7280] transition-colors duration-200 hover:text-[#6945D8] group"
              >
                {card.secondaryCta.label}
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Escape Hatch */}
        <div className="mt-12 pt-10 text-center border-t border-[#E5E7EB]">
          <p className="text-base mb-4 text-[#6B7280]">
            Not ready yet? Try the free check or get our free tracker.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base font-medium text-[#1A1A1A] transition-colors duration-200 hover:text-[#6945D8] group"
            >
              Try the free check
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <span className="hidden sm:block text-gray-300">|</span>
            <a
              href={TYPEFORM_GRANT_TRACKER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base font-medium text-[#1A1A1A] transition-colors duration-200 hover:text-[#6945D8] group"
            >
              Get the free tracker
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoPathsSection;
