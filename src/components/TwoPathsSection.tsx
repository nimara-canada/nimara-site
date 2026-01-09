import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { TYPEFORM_HEALTH_CHECK_URL, TYPEFORM_GRANT_TRACKER_URL } from "@/constants/urls";

const TwoPathsSection = () => {
  const paths = [
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
        label: "Get Started",
        to: "/organization-check",
      },
      isPrimary: false,
    },
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
        "Ongoing support included",
        "Funder-ready documentation",
      ],
      primaryCta: {
        label: "Start now",
        to: "/capacity-buildout",
      },
      isPrimary: true,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Header - Left aligned like reference */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-14 md:mb-16">
          <div>
            <h2 className="heading-2 text-foreground mb-0 leading-tight">
              Pick a starting point.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-body-muted mb-4">
              We help Canadian nonprofits set up simple systems for boards, grants, teams, and files — so you're ready when funders ask.
            </p>
            <a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base font-medium text-foreground transition-colors duration-200 hover:text-primary group w-fit"
            >
              Book a free call
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {paths.map((path) => (
            <div
              key={path.id}
              className={`
                relative rounded-2xl p-8 lg:p-10 transition-all duration-300
                ${path.isPrimary 
                  ? 'bg-foreground text-background shadow-2xl' 
                  : 'bg-card border border-border'
                }
              `}
            >
              {/* Badge */}
              {path.badge && (
                <div className="mb-6">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide bg-accent text-accent-foreground">
                    {path.badge}
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className={`text-2xl lg:text-3xl font-semibold mb-6 ${path.isPrimary ? 'text-background' : 'text-foreground'}`}>
                {path.title}
              </h3>

              {/* Checklist */}
              <ul className={`space-y-4 mb-10 ${path.isPrimary ? 'grid grid-cols-1' : ''}`}>
                {path.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    {path.isPrimary ? (
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-accent">
                        <Check className="w-3 h-3 text-accent-foreground" />
                      </div>
                    ) : (
                      <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-base ${path.isPrimary ? 'text-background/90' : 'text-muted-foreground'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Timeline & CTA */}
              <div className="flex items-center justify-between gap-4 pt-6 border-t border-border/20">
                <span className={`text-lg font-medium ${path.isPrimary ? 'text-background/70' : 'text-muted-foreground'}`}>
                  {path.timeline}
                </span>
                <Link
                  to={path.primaryCta.to}
                  className={`
                    inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
                    transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]
                    ${path.isPrimary 
                      ? 'bg-accent text-accent-foreground hover:opacity-90' 
                      : 'bg-foreground text-background hover:opacity-90'
                    }
                  `}
                >
                  {path.primaryCta.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Escape Hatch */}
        <div className="mt-12 pt-10 text-center">
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
            <span className="hidden sm:block text-muted-foreground">|</span>
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