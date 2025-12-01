import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const FunderWaitlist = () => {
  return (
    <section 
      id="funder-waitlist"
      className="py-16 md:py-24 lg:py-32 bg-accent/10"
    >
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            For funders: we're building with you
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Nimara is being built so funders can run capacity-building programs through one shared operator instead of many separate, one-off projects.
            </p>
            
            <p>
              With Nimara, you will be able to back clear bundles of support, see simple data on organizational health, and lower the admin load on smaller grantees.
            </p>
          </div>

          <ul className="space-y-4">
            {[
              "Support standard capacity-building bundles across many grantees",
              "Get simple before-and-after views of organizational health",
              "Reduce reporting and paperwork for smaller organizations"
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-lg text-muted-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>

          <div className="pt-4">
            <p className="text-sm text-muted-foreground mb-4">
              We are still in build and pilot mode for funders.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg"
                asChild
                className="mb-3"
              >
                <a href="/funder-waitlist">
                  Join the funder waitlist
                </a>
              </Button>
            </motion.div>
            
            <p className="text-sm text-muted-foreground">
              We'll only email when we have real pilots, tools, or data to share.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
