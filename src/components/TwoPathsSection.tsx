import { Link } from "react-router-dom";
import { Check, Clock, ArrowRight } from "lucide-react";
import { TYPEFORM_HEALTH_CHECK_URL, TYPEFORM_GRANT_TRACKER_URL } from "@/constants/urls";

const TwoPathsSection = () => {
  const cards = [
    {
      id: "capacity",
      timeBadge: "4–8 weeks",
      badgeStyle: { backgroundColor: '#ACFCE3', color: '#1A1A1A' },
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
      buttonStyle: { backgroundColor: '#6945D8' },
      isPrimary: true,
    },
    {
      id: "healthcheck",
      timeBadge: "2 weeks",
      badgeStyle: { backgroundColor: '#F3F4F6', color: '#1A1A1A' },
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
      buttonStyle: { backgroundColor: '#1A1A1A' },
      isPrimary: false,
    },
  ];

  return (
    <section 
      className="py-20 md:py-28"
      style={{ backgroundColor: '#F8F9FC' }}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5"
            style={{ color: '#1A1A1A' }}
          >
            Pick a starting point.
          </h2>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#6B7280' }}
          >
            We help Canadian nonprofits set up simple systems for boards, grants, teams, and files — so you're ready when funders ask.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
              style={{ 
                border: '1px solid #E5E7EB',
                boxShadow: card.isPrimary 
                  ? '0 4px 6px -1px rgba(105, 69, 216, 0.1), 0 2px 4px -1px rgba(105, 69, 216, 0.06)'
                  : '0 1px 3px rgba(0,0,0,0.05)',
              }}
            >
              {/* Time Badge */}
              <div 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium w-fit"
                style={card.badgeStyle}
              >
                <Clock className="w-4 h-4" />
                {card.timeBadge}
              </div>

              {/* Title */}
              <h3 
                className="text-2xl font-bold mt-5"
                style={{ color: '#1A1A1A' }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p 
                className="text-base mt-3 leading-relaxed"
                style={{ color: '#6B7280' }}
              >
                {card.description}
              </p>

              {/* Checklist */}
              <ul className="mt-6 space-y-3 flex-1">
                {card.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: card.isPrimary ? '#ACFCE3' : '#F3F4F6' }}
                    >
                      <Check 
                        className="w-3 h-3" 
                        style={{ color: card.isPrimary ? '#6945D8' : '#1A1A1A' }}
                      />
                    </div>
                    <span 
                      className="text-base"
                      style={{ color: '#1A1A1A' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Primary CTA */}
              <Link
                to={card.primaryCta.to}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-white font-semibold mt-8 transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                style={card.buttonStyle}
              >
                {card.primaryCta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary CTA */}
              <Link
                to={card.secondaryCta.to}
                className="flex items-center justify-center gap-1.5 mt-4 text-sm transition-colors duration-200 hover:text-[#6945D8] group"
                style={{ color: '#6B7280' }}
              >
                {card.secondaryCta.label}
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Escape Hatch */}
        <div 
          className="mt-12 pt-10 text-center"
          style={{ borderTop: '1px solid #E5E7EB' }}
        >
          <p 
            className="text-base mb-4"
            style={{ color: '#6B7280' }}
          >
            Not ready yet? Try the free check or get our free tracker.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base font-medium transition-colors duration-200 hover:text-[#6945D8] group"
              style={{ color: '#1A1A1A' }}
            >
              Try the free check
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <span className="hidden sm:block text-gray-300">|</span>
            <a
              href={TYPEFORM_GRANT_TRACKER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base font-medium transition-colors duration-200 hover:text-[#6945D8] group"
              style={{ color: '#1A1A1A' }}
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
