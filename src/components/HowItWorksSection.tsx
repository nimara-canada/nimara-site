import { CheckCircle2 } from "lucide-react";

const consultantFeatures = [
  "Vetted for nonprofit experience (3–10+ years)",
  "Trained for audit-ready, EDI-informed delivery",
  "Based in Canada, bilingual where needed"
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted" aria-labelledby="how-works-heading">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center space-y-10">
          {/* Header */}
          <div className="space-y-5">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-primary">
              No Strings Attached
            </span>
            <h2 
              id="how-works-heading" 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1]"
            >
              Why it's free
            </h2>
            <p className="text-lg text-body max-w-2xl mx-auto leading-relaxed">
              We don't do vague "consultation" calls. You get <strong className="text-foreground font-semibold">real scoping, timelines, and options from real experts</strong> who specialize in nonprofit strategic planning, CRA compliance, and program evaluation.
            </p>
          </div>

          {/* Feature Card */}
          <article className="bg-card rounded-xl p-8 lg:p-10 border border-border shadow-sm text-left">
            <h3 className="text-xl font-bold tracking-tight mb-6">Our consultants are:</h3>
            <ul className="space-y-4">
              {consultantFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-base text-body leading-relaxed">{feature}</p>
                </li>
              ))}
            </ul>
          </article>

          {/* Closing statement */}
          <p className="text-lg text-body">
            You keep the quotes. We hope you choose Nimara — but <strong className="text-foreground font-semibold">you don't have to.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};