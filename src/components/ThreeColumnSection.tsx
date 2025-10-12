import { CircleDot } from "lucide-react";

const needs = [
  {
    problem: "RFPs take too long",
    solution: (
      <>
        Share one outcome. We turn it into a short brief and get up to{" "}
        <span className="text-primary font-semibold">3 quotes in 72 hours</span>.
      </>
    ),
  },
  {
    problem: "Not sure what we need",
    solution: (
      <>
        Choose <span className="text-primary font-semibold">Not sure / Other</span> and write one sentence. We'll route it to the right experts.
      </>
    ),
  },
  {
    problem: "Worried about audits and funder rules",
    solution: (
      <>
        Clear "what done looks like," organized files,{" "}
        <span className="text-primary font-semibold">data in Canada</span>, records kept{" "}
        <span className="text-primary font-semibold">7 years</span>.
      </>
    ),
  },
  {
    problem: "Projects drift and never finish",
    solution: (
      <>
        A Nimara <span className="text-primary font-semibold">PM</span> runs one checklist with weekly check-ins and acceptance.
      </>
    ),
  },
  {
    problem: "Picked the wrong consultant before",
    solution: (
      <>
        <span className="text-primary font-semibold">Vetted Canadian experts.</span> Proposals use the same format so you can compare.
      </>
    ),
  },
  {
    problem: "Small team; we need simple",
    solution: "Right-sized scope, quick wins, templates you can reuse.",
  },
  {
    problem: "CRM isn't used",
    solution: "Setup that fits, two short trainings, simple acceptance (logins + basic use).",
  },
  {
    problem: "Month-end is messy",
    solution: "A simple close checklist and a small view of what matters. Files ready for review.",
  },
];

export const ThreeColumnSection = () => {
  const scrollToForm = () => {
    const form = document.getElementById("form_3quotes");
    form?.scrollIntoView({ behavior: "smooth" });
    
    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'needs_help_link_click', {
        target: 'quotes'
      });
    }
  };

  const handleEmailClick = () => {
    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'needs_help_link_click', {
        target: 'email'
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          What we hear from nonprofits (and how we help)
        </h2>
        <p className="text-center text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
          Tell us what's hard. We'll make a simple plan and get you moving.
        </p>

        {/* Definition list with card grid */}
        <dl className="grid sm:grid-cols-2 gap-4 lg:gap-6 mb-8">
          {needs.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-5 lg:p-6 shadow-[0_8px_24px_rgba(32,38,84,0.08)]"
            >
              <dt className="flex items-start gap-2 font-semibold text-foreground mb-2 text-base lg:text-lg">
                <CircleDot 
                  className="h-5 w-5 mt-0.5 flex-shrink-0 text-foreground" 
                  aria-hidden="true"
                />
                <span className="max-w-[60ch]">{item.problem}</span>
              </dt>
              <dd className="text-foreground/90 leading-relaxed ml-7 text-base">
                <span className="font-medium">We help: </span>
                {item.solution}
              </dd>
            </div>
          ))}
        </dl>

        {/* Helper row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-border">
          <button
            onClick={scrollToForm}
            className="text-primary font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm min-h-[44px] inline-flex items-center"
          >
            Get 3 free quotes
          </button>
          <p className="text-sm text-muted-foreground max-w-md">
            Don't see your area—or not sure what to pick?{" "}
            <a
              href="mailto:hello@nimara.ca"
              onClick={handleEmailClick}
              className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
            >
              Email hello@nimara.ca
            </a>{" "}
            and we'll help.
          </p>
        </div>
      </div>
    </section>
  );
};
