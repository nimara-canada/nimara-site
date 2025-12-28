import { Check, Users } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    staffRange: "1–10 staff",
    price: "$2,500",
    priceNote: "Starting price",
    features: [
      "Full PIPEDA compliance audit",
      "Privacy policy review",
      "Consent flow analysis",
      "Third-party vendor assessment",
      "Data collection mapping",
      "Risk rating & prioritized findings",
      "Remediation roadmap",
      "30-day email support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    staffRange: "11–20 staff",
    price: "$5,000",
    priceNote: "Starting price",
    features: [
      "Everything in Starter, plus:",
      "Extended vendor review (up to 25)",
      "Staff training recommendations",
      "Internal policy templates",
      "Cross-border data flow analysis",
      "Board-ready summary report",
      "60-day email support",
      "1 follow-up check-in call",
    ],
    highlight: true,
  },
  {
    name: "Established",
    staffRange: "21+ staff",
    price: "$8,000+",
    priceNote: "Custom quote",
    features: [
      "Everything in Growth, plus:",
      "Unlimited vendor review",
      "Multi-property assessment",
      "Custom compliance workflows",
      "Stakeholder interview sessions",
      "Executive presentation deck",
      "90-day priority support",
      "Quarterly check-in calls",
    ],
    highlight: false,
  },
];

export function DeepCheckPricingTable() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Deep Check Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive privacy audits tailored to your organization's size and complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 md:p-8 ${
                tier.highlight
                  ? "bg-primary text-primary-foreground ring-2 ring-primary shadow-xl scale-[1.02]"
                  : "bg-card border border-border"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Common
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    tier.highlight ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {tier.name}
                </h3>
                <div
                  className={`flex items-center gap-2 text-sm mb-4 ${
                    tier.highlight
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  <Users className="w-4 h-4" />
                  {tier.staffRange}
                </div>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold ${
                      tier.highlight ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {tier.price}
                  </span>
                </div>
                <p
                  className={`text-sm mt-1 ${
                    tier.highlight
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {tier.priceNote}
                </p>
              </div>

              <ul className="space-y-3">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        tier.highlight
                          ? "text-primary-foreground"
                          : "text-primary"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        tier.highlight
                          ? "text-primary-foreground/90"
                          : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          Final pricing depends on the complexity of your tech stack, number of data collection points, and third-party vendors. 
          We'll provide a detailed quote after an initial consultation.
        </p>
      </div>
    </section>
  );
}
