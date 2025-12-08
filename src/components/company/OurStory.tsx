import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const OurStory = () => {
  const steps = [
    {
      number: "01",
      heading: "The pattern we kept seeing",
      text: "We worked with small and mid-size nonprofits where one tired person was holding everything together. The board, the books, HR, fundraising, and tech all lived in a few people's heads and messy spreadsheets. Every 2–3 years, the same problems came back, even after 'capacity-building' projects."
    },
    {
      number: "02",
      heading: "The breaking point",
      text: "At some point, it became clear that one-off consulting and short grants were not enough. Funders kept running new pilots. Consultants kept building new tools. But there was no shared operator whose job was to install and maintain the basic systems every org needs."
    },
    {
      number: "03",
      heading: "The decision to build Nimara",
      text: "We decided to stop treating this as a side problem and build a national operator. Nimara uses clear tiers, standard bundles, and a shared bench of operators so we can install working systems, not just deliver reports."
    }
  ];

  return (
    <section 
      id="founding-story" 
      className="bg-[hsl(var(--nimara-bg))] px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <h2 className="heading-2 text-foreground mb-6">
            Our founding story: why we built Nimara
          </h2>
          <p className="text-subtitle">
            Nimara did not start as a brand idea. It started as a problem we kept seeing inside real nonprofits.
          </p>
        </div>

        {/* 2-column layout: Content + Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Story blocks */}
          <div className="lg:col-span-7 space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-3 text-foreground mb-3">
                      {step.heading}
                    </h3>
                    <p className="text-body">
                      {step.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Visual timeline */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

              {/* Timeline nodes */}
              <div className="relative space-y-32 py-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
                    className="relative flex items-center justify-center"
                  >
                    {/* Node circle */}
                    <div className="w-16 h-16 rounded-full bg-primary shadow-lg flex items-center justify-center relative z-10">
                      <span className="text-primary-foreground font-bold text-lg">{step.number}</span>
                    </div>

                    {/* Pulse effect */}
                    <motion.div
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                      className="absolute inset-0 w-16 h-16 rounded-full bg-primary/30"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Closing statement + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-8 max-w-3xl mx-auto">
            Nimara is our answer: one shared backbone instead of 100 disconnected projects.
          </p>
          
          <Button
            size="lg"
            variant="outline"
            className="shadow-md text-base px-8"
            asChild
          >
            <a href="/how-nimara-works">See how the Nimara model works</a>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};