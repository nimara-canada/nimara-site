import { AlertCircle, Frown, Heart } from "lucide-react";

const fears = [
  "Funding rules that aren't clear",
  "Audits/clawbacks after the work is done",
  "Picking the wrong consultant",
  "Scope creep",
  "CRMs no one uses",
  "Month-end that never ties out",
];

const frustrations = [
  "Long RFPs",
  "Vague, non-comparable proposals",
  "\"We'll figure it out later\" plans",
  "Files everywhere",
  "Delays and rework",
  "No one owning the checklist",
];

const hopes = [
  "People who've fixed this in Canadian nonprofits",
  "A plain scope you can say yes to",
  "Clear \"what done looks like\"",
  "Fast start, clean handoff, no surprises",
];

export const ThreeColumnSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Speak to fears, frustrations, hopes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Fears */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <AlertCircle className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">What you're worried about</h3>
            </div>
            <ul className="space-y-3">
              {fears.map((fear, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-destructive mt-1">•</span>
                  <span>{fear}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Frustrations */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                <Frown className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold">What's been frustrating</h3>
            </div>
            <ul className="space-y-3">
              {frustrations.map((frustration, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                  <span>{frustration}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hopes */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">What you want next</h3>
            </div>
            <ul className="space-y-3">
              {hopes.map((hope, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>{hope}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
