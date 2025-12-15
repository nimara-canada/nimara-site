import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

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

const roadmapItems = [
  "Stronger national data on organizational health",
  "Better tools for funders to design capacity programs",
  "A growing bench of trained Practice Partners",
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
                Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-[1.1]">
                Where Nimara Is{" "}
                <span className="italic">Going Next</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-7 lg:pt-8">
              <p className="text-lg text-body-muted leading-relaxed">
                We are starting with small and mid-size nonprofits across Canada and a clear 
                way of working together. Over time, Nimara will add deeper tools for funders, 
                better data on what fixes actually work, and stronger support for the people 
                doing the work on the ground.
              </p>
            </motion.div>
          </div>

          {/* Roadmap Items */}
          <motion.div variants={containerVariants} className="mb-16">
            <div className="grid md:grid-cols-3 gap-4">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Button 
              size="lg"
              asChild
              className="group"
            >
              <a href="/roadmap" className="gap-2">
                View The Nimara Roadmap
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
