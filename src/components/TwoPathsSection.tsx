import { Link } from "react-router-dom";
import { Check, ArrowRight, Clock } from "lucide-react";
import { TYPEFORM_HEALTH_CHECK_URL, TYPEFORM_GRANT_TRACKER_URL } from "@/constants/urls";

const TwoPathsSection = () => {
  const paths = [
    {
      id: "capacity",
      badge: "Recommended",
      timeline: "4–8 weeks",
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
      isPrimary: true,
    },
    {
      id: "healthcheck",
      badge: null,
      timeline: "2 weeks",
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
      isPrimary: false,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-nim-cloud">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="heading-2 text-foreground mb-5">
            Pick a starting point.
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            We help Canadian nonprofits set up simple systems for boards, grants, teams, and files — so you're ready when funders ask.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {paths.map((path) => (
            <div
              key={path.id}
              className={`
                relative rounded-2xl p-8 
                border-l-4 transition-all duration-300 
                hover:shadow-xl hover:-translate-y-1
                ${path.isPrimary 
                  ? 'bg-gradient-to-br from-sky-50 to-emerald-50/50 border-l-emerald-500' 
                  : 'bg-gradient-to-br from-rose-50 to-purple-50/50 border-l-purple-400'
                }
              `}
            >
              {/* Recommended Badge */}
              {path.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground">
                    {path.badge}
                  </span>
                </div>
              )}

              {/* Timeline Badge */}
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">
                  {path.timeline}
                </span>
              </div>

              {/* Title */}
              <h3 className="heading-card mb-3">
                {path.title}
              </h3>

              {/* Description */}
              <p className="text-body-muted mb-6">
                {path.description}
              </p>

              {/* Checklist */}
              <ul className="space-y-3 mb-8">
                {path.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className={`
                      w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                      ${path.isPrimary ? 'bg-accent' : 'bg-muted'}
                    `}>
                      <Check className={`w-3 h-3 ${path.isPrimary ? 'text-accent-foreground' : 'text-foreground'}`} />
                    </div>
                    <span className="text-body text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Primary CTA */}
              <Link
                to={path.primaryCta.to}
                className={`
                  w-full inline-flex items-center justify-center gap-2 
                  px-6 py-4 rounded-lg font-semibold
                  transition-all duration-200 
                  hover:scale-[1.02] active:scale-[0.98]
                  ${path.isPrimary 
                    ? 'bg-primary text-primary-foreground hover:opacity-90' 
                    : 'bg-foreground text-background hover:opacity-90'
                  }
                `}
              >
                {path.primaryCta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary CTA */}
              <Link
                to={path.secondaryCta.to}
                className="flex items-center justify-center gap-1.5 mt-4 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary group"
              >
                {path.secondaryCta.label}
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Escape Hatch */}
        <div className="mt-12 pt-10 text-center border-t border-border">
          <p className="text-body-muted mb-4">
            Not ready yet? Try the free check or get our free tracker.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base font-medium text-foreground transition-colors duration-200 hover:text-primary group"
            >
              Try the free check
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <span className="hidden sm:block text-border">|</span>
            <a
              href={TYPEFORM_GRANT_TRACKER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base font-medium text-foreground transition-colors duration-200 hover:text-primary group"
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