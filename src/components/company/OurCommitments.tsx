import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const commitments = [
  {
    title: "Simple over fancy",
    description: "We build what works, not what looks impressive."
  },
  {
    title: "Build it so your team can run it",
    description: "We set up systems people will actually use."
  },
  {
    title: "No shame, no blame",
    description: "We meet you where you are, not where you should be."
  },
  {
    title: "Clear scope and clear pricing",
    description: "You know what you're getting before we start."
  },
  {
    title: "Reusable systems you can keep using",
    description: "What we build works for the next grant too."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export const OurCommitments = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-background"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-[1.1]">
              What we{" "}
              <span className="italic">stand for</span>
            </h2>
          </motion.div>

          {/* Commitment cards */}
          <motion.div 
            variants={containerVariants} 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
          >
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {commitment.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {commitment.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Small note */}
          <motion.p 
            variants={itemVariants}
            className="text-center text-muted-foreground italic"
          >
            If we can't help, we'll tell you early.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
