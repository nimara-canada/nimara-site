import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

const benefits = [
  "Support standard capacity-building bundles across many grantees",
  "Get simple before-and-after views of organizational health",
  "Reduce reporting and paperwork for smaller organizations",
];

export const FunderWaitlist = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      id="funder-waitlist"
      className="py-20 sm:py-24 lg:py-32 bg-accent/5"
    >
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
                For Funders
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-[1.1]">
                We're building{" "}
                <span className="italic">with you</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-7 lg:pt-8">
              <div className="space-y-5 text-body-muted text-lg leading-relaxed">
                <p>
                  Nimara is being built so funders can run capacity-building programs through 
                  one shared operator instead of many separate, one-off projects.
                </p>
                <p>
                  With Nimara, you will be able to back clear bundles of support, see simple 
                  data on organizational health, and lower the admin load on smaller grantees.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Benefits List */}
          <motion.div variants={containerVariants} className="mb-16">
            <div className="grid md:grid-cols-3 gap-4">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <span className="text-lg font-serif font-medium text-primary">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-body-muted leading-relaxed">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-sm text-muted-foreground mb-6">
              We are still in build and pilot mode for funders.
            </p>
            
            <Button 
              size="lg"
              asChild
              className="group"
            >
              <a href="/funder-waitlist" className="gap-2">
                Join the funder waitlist
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              We'll only email when we have real pilots, tools, or data to share.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
