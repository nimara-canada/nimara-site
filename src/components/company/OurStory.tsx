import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    heading: "The pattern we kept seeing",
    text: "We worked with small and mid-size nonprofits where one tired person was holding everything together. The board, the books, HR, fundraising, and tech all lived in a few people's heads and messy spreadsheets. Every 2–3 years, the same problems came back."
  },
  {
    number: "02",
    heading: "The breaking point",
    text: "At some point, it became clear that one-off consulting and short grants were not enough. Funders kept running new pilots. Consultants kept building new tools. But there was no shared operator whose job was to install and maintain the basic systems every org needs."
  },
  {
    number: "03",
    heading: "The decision to build Nimara",
    text: "We decided to stop treating this as a side problem and build a national operator. Nimara uses clear tiers, standard bundles, and a shared bench of operators so we can install working systems—not just deliver reports."
  }
];

export const OurStory = () => {
  return (
    <section
      id="founding-story"
      className="py-24 md:py-36 lg:py-44 bg-background relative overflow-hidden"
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-muted/50 via-background to-background" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
            Our story
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground leading-[1.1] mb-6">
            Why we built Nimara
          </h2>

          <p className="text-lg text-body leading-relaxed">
            Nimara didn't start as a brand idea. It started as a problem we kept seeing inside real nonprofits.
          </p>
        </motion.div>

        {/* Story steps */}
        <div className="max-w-4xl">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className={`flex gap-6 py-8 ${
                index !== steps.length - 1 ? 'border-b border-border/50' : ''
              }`}>
                {/* Number */}
                <span className="text-4xl md:text-5xl font-light text-primary/40 tabular-nums group-hover:text-primary transition-colors duration-500">
                  {step.number}
                </span>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.heading}
                  </h3>
                  <p className="text-body leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-20 max-w-3xl"
        >
          <p className="text-2xl md:text-3xl font-serif font-medium text-foreground leading-snug mb-8">
            Nimara is our answer: one shared backbone instead of 100 disconnected projects.
          </p>

          <a
            href="/how-nimara-works"
            className="group inline-flex items-center gap-2 text-foreground font-medium"
          >
            <span className="relative">
              See how the Nimara model works
              <span className="absolute left-0 -bottom-0.5 w-full h-px bg-foreground/30 group-hover:bg-foreground transition-colors duration-300" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
