import { motion } from "framer-motion";

const steps = [
  {
    title: "Apply",
    description: "Fill out a quick eligibility form"
  },
  {
    title: "Review", 
    description: "We review your experience and alignment"
  },
  {
    title: "Vetting",
    description: "If it's a fit, we set up a short vetting call"
  },
  {
    title: "Access",
    description: "Once onboarded, you get access to scoped project briefs"
  },
  {
    title: "Deliver",
    description: "If selected, you deliver. We back you up."
  }
];

export const NewHowItWorks = () => {
  return (
    <section className="bg-background py-28 md:py-36 border-t border-border/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          {/* Left column */}
          <div className="lg:col-span-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-muted-foreground/60 uppercase tracking-[0.25em] text-xs mb-6"
            >
              Process
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight"
            >
              How It <span className="italic font-light">Works</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground/70 mt-10 text-base leading-relaxed font-light"
            >
              You decide what projects you take. No quotas. No hidden fees. No shady admin.
            </motion.p>
          </div>
          
          {/* Right column */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="grid grid-cols-12 gap-8 py-8 border-b border-border/30 last:border-b-0"
                >
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-muted-foreground/15 text-4xl md:text-5xl font-light">
                      {index + 1}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-11 pt-2">
                    <h3 className="text-foreground/90 font-medium text-base mb-2 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground/60 leading-relaxed font-light text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
