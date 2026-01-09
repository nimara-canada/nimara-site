import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: 1,
    title: "Start",
    subtitle: "Book a Fit Call",
    description: "20 minutes. No pressure. We figure out if we're the right fit.",
  },
  {
    number: 2,
    title: "Discover",
    subtitle: "We meet your team",
    description: "90 minutes. We learn how your org works. We find the gaps together.",
  },
  {
    number: 3,
    title: "Build",
    subtitle: "We install what you need",
    description: "You pick the areas. We build the systems. We train your team.",
  },
  {
    number: 4,
    title: "Run",
    subtitle: "You're proof-ready",
    description: "Clear records. Easy reporting. Add more areas when you're ready to grow.",
  },
];

export function HowItWorksTimeline() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#6945D8] mb-4"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1A1A1A] mb-5 leading-tight"
          >
            Scattered to strong in 4 steps.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#4B5563] max-w-xl mx-auto"
          >
            Simple systems. Clear proof. No more guessing.
          </motion.p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline connector - continuous line through all circles */}
          <div className="absolute top-[30px] left-[12.5%] right-[12.5%] h-1 rounded-full bg-gradient-to-r from-[#6945D8] to-[#ACFCE3] z-0" />
          
          {/* Steps */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Step number circle */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-[60px] h-[60px] rounded-full bg-[#ACFCE3] border-[3px] border-white shadow-[0_4px_12px_rgba(105,69,216,0.15)] flex items-center justify-center"
                >
                  <span className="text-2xl font-bold text-[#202654]">{step.number}</span>
                </motion.div>
                
                {/* Step content - tighter grouping */}
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-[#1A1A1A]">
                    {step.title}
                  </h3>
                  <p className="text-[15px] font-medium text-[#6945D8] mt-1">
                    {step.subtitle}
                  </p>
                  <p className="text-[15px] text-[#4B5563] mt-3 max-w-[220px] mx-auto leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          {/* Vertical timeline connector - continuous line */}
          <div className="absolute left-[30px] top-[30px] bottom-[30px] w-1 rounded-full bg-gradient-to-b from-[#6945D8] to-[#ACFCE3] z-0" />
          
          {/* Steps */}
          <div className="space-y-10 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5"
              >
                {/* Step number circle */}
                <div className="w-[60px] h-[60px] rounded-full bg-[#ACFCE3] border-[3px] border-white shadow-[0_4px_12px_rgba(105,69,216,0.15)] flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-[#202654]">{step.number}</span>
                </div>
                
                {/* Step content */}
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-[#1A1A1A]">
                    {step.title}
                  </h3>
                  <p className="text-[15px] font-medium text-[#6945D8] mt-1">
                    {step.subtitle}
                  </p>
                  <p className="text-[15px] text-[#4B5563] mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16 md:mt-20 pt-10 border-t border-[#E5E7EB]"
        >
          <p className="text-xl font-medium text-[#1A1A1A] mb-5">
            Ready to start?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#6945D8] hover:bg-[#5835C8] text-white px-8 py-6 text-base font-medium rounded-lg group w-full sm:w-auto shadow-lg shadow-[#6945D8]/20 hover:shadow-xl hover:shadow-[#6945D8]/30 transition-all duration-200"
            >
              <a href="https://calendly.com/nimara-benard/discovery-call" target="_blank" rel="noopener noreferrer">
                Book a 20-min Fit Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Link
              to="/free-check"
              className="inline-flex items-center text-[#4B5563] hover:text-[#6945D8] transition-colors font-medium group"
            >
              Take the Free Health Check first
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}