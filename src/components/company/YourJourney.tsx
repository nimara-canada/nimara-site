import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const YourJourney: React.FC = () => {
  const sectionRef = useRef(null);
  const addOnsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const addOnsInView = useInView(addOnsRef, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98] as const
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1] as const,
        delay: 0.3
      }
    }
  };

  const steps = [
    {
      number: 1,
      title: "Start the Organizational Health Check",
      description: "You complete a short online check about your team, money, systems, and risks. This gives us a clear picture of what is strong and what is fragile."
    },
    {
      number: 2,
      title: "Confirm your tier and path",
      description: "Together we confirm your tier (0–4) and decide whether you need a fast fix (Path A) or a deeper package (Path B). This keeps the work at the right size and price."
    },
    {
      number: 3,
      title: "Match with a Practice Partner",
      description: "We match you with a Nimara Practice Partner who has the right skills and context. We agree on scope, timelines, and deliverables in a simple Statement of Work (SOW)."
    },
    {
      number: 4,
      title: "Delivery with clear check-ins",
      description: "The Practice Partner runs the work using Nimara tools and templates. Your team stays involved. We check progress against the SOW, not vague goals."
    },
    {
      number: 5,
      title: "Handover, support, and learning",
      description: "We close out the project with a handover and next steps. For about three months, we are available for light support and questions. We also ask for feedback so we can improve the Nimara model."
    }
  ];

  const addOns = [
    {
      title: "12-month evaluation & support",
      description: "For a small add-on fee, our team stays close for up to 12 months. We check in at agreed points, help you see what is working, and adjust tools or processes where needed. You also get light evaluation support so you can show funders how the changes are landing.",
      color: "from-[#ACFCE3]/20 to-[#ACFCE3]/5 border-[#4CBFA6]"
    },
    {
      title: "Fractional Partner (ongoing)",
      description: "For organizations that need more hands-on help, you can hire a Nimara Fractional Partner on an ongoing basis. This person helps manage and update the systems we installed, supports your team, and keeps the day-to-day operations of those systems on track. Ideal for growing nonprofits with ongoing capacity building needs needs but not enough for a full-time staff",
      color: "from-[#6945D8]/10 to-[#6945D8]/5 border-[#6945D8]"
    }
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-slate-50">{/* Changed from bg-white */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Your journey with Nimara
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Most projects follow the same basic path. The details change by organization, 
            but these are the main steps from 'we need help' to 'this is working in real life.'
          </p>
        </motion.div>

        <div ref={sectionRef} className="mb-24">
          <div className="hidden lg:block relative">
            <motion.div 
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={lineVariants}
              className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6945D8]/20 via-[#6945D8]/40 to-[#6945D8]/20 -translate-y-1/2 origin-left"
              style={{ zIndex: 0 }}
            />

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="relative z-10"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  } mb-24 last:mb-0`}
                >
                  <div className={`flex items-start gap-6 max-w-xl ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6945D8] to-[#6945D8]/80 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                        {step.number}
                      </div>
                    </motion.div>

                    <motion.div 
                      whileHover={{ x: index % 2 === 0 ? 5 : -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm hover:shadow-xl transition-shadow ${
                        index % 2 === 0 ? 'text-left' : 'text-right'
                      }`}
                    >
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="lg:hidden relative"
          >
            <motion.div 
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
              className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#6945D8]/20 via-[#6945D8]/40 to-[#6945D8]/20 origin-top"
              style={{ zIndex: 0 }}
            />

            <div className="relative z-10">
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="flex gap-6 mb-12 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6945D8] to-[#6945D8]/80 text-white flex items-center justify-center text-xl font-bold shadow-lg"
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  <div className="flex-1 pb-2">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div ref={addOnsRef} className="relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          
          <motion.div
            initial="hidden"
            animate={addOnsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="pt-16 pb-8 px-8 bg-slate-50/50 rounded-3xl"
          >
            <motion.div variants={itemVariants} className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 mb-3">
                Optional add-ons after your project
              </div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Some organizations want deeper follow-up. These add-ons are optional and come with a separate, simple fee.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6"
            >
              {addOns.map((addon) => (
                <motion.div
                  key={addon.title}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  className="group"
                >
                  <div className={`h-full p-8 rounded-2xl bg-gradient-to-br border-2 transition-all hover:shadow-2xl ${addon.color}`}>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {addon.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {addon.description}
                    </p>
                    
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YourJourney;
