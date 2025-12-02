import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const QualityAndRefundsAlt: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98] as const
      }
    }
  };

  const guardrails = [
    {
      label: "Standard scopes",
      description: "Every project uses a written Statement of Work (SOW) with clear deliverables, timelines, and fees."
    },
    {
      label: "Fix-first approach",
      description: "If a deliverable is off, we try to fix it first. If we cannot fix it, we may refund the fee for that part of the work."
    },
    {
      label: "14-day review + 3-month support",
      description: "You have 14 days after project completion to flag issues, plus about three months of light support so systems do not die on day one."
    },
    {
      label: "Plain-language Refund Policy",
      description: "We publish a public refund and fix policy so nonprofits, funders, and partners know what to expect."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full py-20 sm:py-24 lg:py-32"
    >
      <div className="bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-slate-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="bg-white rounded-3xl border border-slate-200/50 shadow-sm p-8 sm:p-12"
          >
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                How we manage quality, risk, and refunds
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                We design Nimara so that support is clear, fair, and safe for organizations, funders, and our Practice Partners.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="space-y-4 mb-10"
            >
              {guardrails.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 8,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  className="group"
                >
                  <div className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-[#6945D8]/20 hover:shadow-md transition-all">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 h-6 rounded-full bg-[#6945D8]/10 flex items-center justify-center group-hover:bg-[#6945D8]/20 transition-colors">
                        <CheckCircle className="w-4 h-4 text-[#6945D8]" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-[#6945D8] transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0 self-center">
                      <span className="text-3xl font-bold text-slate-200 group-hover:text-[#6945D8]/20 transition-colors">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex justify-center pt-4"
            >
              <Link
                to="/refund-policy"
                className="inline-flex items-center gap-2 bg-[#6945D8] text-white px-8 py-4 rounded-xl font-medium transition-all hover:bg-[#5a38c7] hover:shadow-xl hover:scale-[1.02] group"
              >
                Read the full refund policy
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualityAndRefundsAlt;
