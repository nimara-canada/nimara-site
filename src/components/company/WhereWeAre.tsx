import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const WhereWeAre = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Where Nimara is going next
          </h2>
          
          <p className="text-lg text-muted-foreground">
            We are starting with small and mid-size nonprofits across Canada and a clear way of working together. Over time, Nimara will add deeper tools for funders, better data on what fixes actually work, and stronger support for the people doing the work on the ground.
          </p>

          <ul className="space-y-3 text-lg text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Stronger national data on organizational health</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Better tools for funders to design capacity programs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>A growing bench of trained Practice Partners</span>
            </li>
          </ul>

          <div className="pt-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg"
                asChild
                className="group"
              >
                <a href="/roadmap" className="gap-2">
                  View the Nimara Roadmap
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};