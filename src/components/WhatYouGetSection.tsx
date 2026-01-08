import { Search, Wrench, Presentation, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const inclusions = [
  {
    icon: Search,
    title: "Review & Diagnosis",
    description: "We look at what exists, what's missing, and what's broken — before we build anything.",
  },
  {
    icon: Wrench,
    title: "Custom Build",
    description: "Every template, tracker, and system is built for your org. Not generic downloads.",
  },
  {
    icon: Presentation,
    title: "Training",
    description: "1 live session per area. Recorded so your team can rewatch. Written guide so nothing gets lost.",
  },
  {
    icon: MessageCircle,
    title: "30-Day Support",
    description: "Questions answered. Problems fixed. We don't disappear after handoff.",
  },
  {
    icon: ShieldCheck,
    title: "90-Day Ops Insurance",
    description: "Free support for 90 days after install — so it actually sticks. Included with 3+ areas.",
    note: "Available as $1,500 add-on for 2-area purchases.",
    badge: "INCLUDED WITH 3+ AREAS",
  },
];

export const WhatYouGetSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="what-you-get-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#6945D8] mb-4"
          >
            WHAT YOU GET
          </motion.span>
          
          <motion.h2 
            id="what-you-get-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202654] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What's included in every install
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            This isn't a report you'll never read. It's a working system your team can run.
          </motion.p>
        </div>

        {/* Inclusions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
          {inclusions.map((item, index) => {
            const Icon = item.icon;
            const isInsurance = item.badge;
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col items-center text-center p-6 lg:p-8 rounded-xl border border-border/60 bg-[#F8F9FC]/50 hover:shadow-md transition-shadow ${
                  isInsurance ? 'ring-1 ring-[#ACFCE3]' : ''
                }`}
              >
                {/* Badge for 90-Day Ops Insurance */}
                {isInsurance && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-wider bg-[#ACFCE3] text-[#202654] px-3 py-1 rounded-full whitespace-nowrap">
                    {item.badge}
                  </span>
                )}
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-[#ACFCE3]/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#202654]" strokeWidth={1.75} />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-[#202654] mb-2">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                
                {/* Small Note */}
                {item.note && (
                  <p className="text-xs text-muted-foreground/70 mt-3 italic">
                    {item.note}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Closing Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-[#ACFCE3]/10 border-l-4 border-[#6945D8] rounded-r-xl px-8 py-6">
            <p className="text-lg md:text-xl font-medium text-[#202654] text-center md:text-left">
              Most consultants hand you a report and leave. We hand you a working back office — and train your team to run it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
