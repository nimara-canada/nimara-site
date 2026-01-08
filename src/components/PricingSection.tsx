import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const tiers = [
  {
    name: "2 Areas",
    price: "$13,998",
    outcome: "Fix your two biggest problem areas.",
    highlight: false,
  },
  {
    name: "3 Areas",
    price: "$17,500",
    outcome: "Cover the essentials. Includes 90-day support.",
    highlight: false,
  },
  {
    name: "5 Areas",
    price: "$27,500",
    outcome: "Full operational foundation. Most clients choose this.",
    highlight: true,
  },
  {
    name: "7 Areas",
    price: "$37,500",
    outcome: "Complete back-office buildout. Everything covered.",
    highlight: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white" aria-labelledby="pricing-heading">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-nim-purple text-sm font-medium tracking-wide mb-4"
          >
            Pricing
          </motion.span>
          
          <motion.h2 
            id="pricing-heading" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-nim-navy tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pick your starting point
          </motion.h2>
          
          <motion.p 
            className="text-lg text-nim-slate max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Choose how many areas you need. We'll discuss the details on the call.
          </motion.p>
        </div>

        {/* Pricing Tiers - clean list style */}
        <div className="space-y-4 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className={`group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 lg:p-6 rounded-xl border transition-all duration-200 ${
                tier.highlight 
                  ? 'bg-nim-mint/5 border-nim-mint/40 hover:border-nim-mint' 
                  : 'bg-nim-cloud border-nim-mist hover:border-nim-slate/30'
              }`}
            >
              {/* Name + Badge */}
              <div className="flex items-center gap-3 sm:w-40 flex-shrink-0">
                <h3 className="text-lg font-semibold text-nim-navy">
                  {tier.name}
                </h3>
                {tier.highlight && (
                  <span className="px-2 py-0.5 bg-nim-mint text-nim-navy text-[10px] font-bold uppercase tracking-wide rounded">
                    Popular
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="sm:w-32 flex-shrink-0">
                <span className="text-2xl font-bold text-nim-navy">{tier.price}</span>
                <span className="text-sm text-nim-slate ml-1">CAD</span>
              </div>

              {/* Outcome */}
              <p className="text-sm text-nim-slate flex-1">
                {tier.outcome}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Simple footer notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <p className="text-nim-slate">
            50% to start. 50% at delivery. Often covered by grants.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CALENDLY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-nim-purple text-white font-medium rounded-xl hover:bg-nim-purple/90 transition-colors group"
            >
              Book a Fit Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            
            <a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-nim-slate hover:text-nim-navy transition-colors group"
            >
              <span className="underline underline-offset-2">Not sure? Take the Health Check</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
