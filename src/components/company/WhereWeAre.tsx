import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Laptop, FileSpreadsheet } from "lucide-react";

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

const features = [
  { icon: Globe, label: "Canada-wide" },
  { icon: Laptop, label: "Remote-first" },
  { icon: FileSpreadsheet, label: "Works in Google tools" },
];

export const WhereWeAre = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Editorial Header */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
                Location
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-[1.1]">
                Where we{" "}
                <span className="italic">work</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-7 lg:pt-8">
              <p className="text-lg text-body-muted leading-relaxed">
                We support Canadian nonprofits across the country. Most work is done remotely, with clear handover and simple training.
              </p>
            </motion.div>
          </div>

          {/* Feature badges */}
          <motion.div variants={containerVariants} className="mb-10">
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-muted border border-border"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Email link */}
          <motion.div variants={itemVariants}>
            <a 
              href="mailto:hello@nimara.ca"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Prefer email? <span className="underline underline-offset-4">hello@nimara.ca</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
