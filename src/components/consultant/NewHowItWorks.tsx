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
    <section className="bg-background py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left column */}
          <div className="lg:col-span-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground uppercase tracking-[0.2em] text-sm mb-4"
            >
              Process
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground leading-tight"
            >
              How it works
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mt-8 text-base leading-relaxed"
            >
              You decide what projects you take. No quotas. No hidden fees. No shady admin.
            </motion.p>
          </div>
          
          {/* Right column - Steps */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group grid grid-cols-12 gap-6 py-8 border-b border-border last:border-b-0"
                >
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-muted-foreground/30 text-4xl md:text-5xl font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-11 pt-2">
                    <h3 className="text-foreground font-semibold text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
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
