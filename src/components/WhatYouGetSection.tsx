import { Search, Wrench, Presentation, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const inclusions = [
  {
    icon: Search,
    title: "Review & Diagnosis",
    outcome: "We look at what exists, what's missing, and what's broken — before we build anything.",
  },
  {
    icon: Wrench,
    title: "Custom Build",
    outcome: "Every template, tracker, and system is built for your org. Not generic downloads.",
  },
  {
    icon: Presentation,
    title: "Training",
    outcome: "Live sessions, recordings, and written guides so your team can run it.",
  },
  {
    icon: MessageCircle,
    title: "30-Day Support",
    outcome: "Questions answered. Problems fixed. We don't disappear after handoff.",
  },
  {
    icon: ShieldCheck,
    title: "90-Day Ops Insurance",
    outcome: "Free support for 90 days after install — so it actually sticks.",
    highlight: true,
  },
];

export const WhatYouGetSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-nim-cloud" aria-labelledby="what-you-get-heading">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-nim-purple text-sm font-medium tracking-wide mb-4"
          >
            What You Get
          </motion.span>
          
          <motion.h2 
            id="what-you-get-heading" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-nim-navy tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What's included in every install
          </motion.h2>
          
          <motion.p 
            className="text-lg text-nim-slate max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            This isn't a report you'll never read. It's a working system your team can run.
          </motion.p>
        </div>

        {/* Inclusions List - matching domains style */}
        <div className="space-y-4">
          {inclusions.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className={`group flex items-center gap-4 lg:gap-6 p-5 lg:p-6 rounded-xl border transition-all duration-200 ${
                  item.highlight 
                    ? 'bg-nim-mint/5 border-nim-mint/40 hover:border-nim-mint' 
                    : 'bg-white border-nim-mist hover:border-nim-slate/30'
                }`}
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  item.highlight ? 'bg-nim-mint/30' : 'bg-nim-cloud'
                }`}>
                  <Icon className="w-5 h-5 text-nim-navy" strokeWidth={1.75} />
                </div>

                {/* Title + Outcome */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-nim-navy">
                      {item.title}
                    </h3>
                    {item.highlight && (
                      <span className="px-2 py-0.5 bg-nim-mint text-nim-navy text-[10px] font-bold uppercase tracking-wide rounded">
                        Included
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-nim-slate">
                    {item.outcome}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-lg md:text-xl font-medium text-nim-navy mt-16 max-w-2xl mx-auto"
        >
          Most consultants hand you a report and leave. We hand you a working back office — and train your team to run it.
        </motion.p>
      </div>
    </section>
  );
};
