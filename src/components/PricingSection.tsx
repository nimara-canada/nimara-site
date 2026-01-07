import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface PricingSectionProps {
  onOpenPackagesWaitlist?: () => void;
}

const AnimatedCheck = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    initial={{ scale: 0, rotate: -180 }}
    whileInView={{ scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ 
      type: "spring", 
      stiffness: 260, 
      damping: 20, 
      delay 
    }}
    className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
  >
    <motion.div
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay + 0.2, duration: 0.3 }}
    >
      <Check className="w-4 h-4 text-primary" aria-hidden="true" />
    </motion.div>
  </motion.div>
);

export const PricingSection = ({
  onOpenPackagesWaitlist
}: PricingSectionProps) => {
  const coverageItems = [
    "Briefing + consultant matching",
    "Light project management (oversight, check-ins)",
    "Secure payment + records keeping",
    "Final delivery confirmation"
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-background" aria-labelledby="pricing-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            id="pricing-heading" 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pricing, made simple — and auditable
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <strong>Quotes are free.</strong> You only pay if you move forward with a project.
          </motion.p>

          <motion.p 
            className="text-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            When you do, your proposal includes one clear line for <strong>Nimara's platform and project oversight fee</strong> — so delivery is <strong>transparent, trackable, and audit-friendly.</strong>
          </motion.p>

          {/* Single-category projects card */}
          <motion.article 
            className="relative border border-border/50 rounded-2xl p-8 mb-8 bg-gradient-to-br from-background to-muted/30 overflow-hidden group cursor-default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 blur-xl" />
            </div>
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 blur-sm" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-2">Single-category projects</h3>
              
              <p className="text-muted-foreground mb-6">
                (That's one area like Finance, Systems, or Strategy)
              </p>

              <ul className="space-y-4">
                <motion.li 
                  className="flex items-center gap-3 text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <AnimatedCheck delay={0.4} />
                  <span><strong>Nimara project minimum cap:</strong> $1,250</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-3 text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <AnimatedCheck delay={0.5} />
                  <span><strong>Platform & PM fee:</strong> 22–28%</span>
                </motion.li>
              </ul>
            </div>
          </motion.article>

          {/* What the fee covers card */}
          <motion.article 
            className="relative border border-border/50 rounded-2xl p-8 bg-gradient-to-br from-background to-muted/30 overflow-hidden group cursor-default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 blur-xl" />
            </div>
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 blur-sm" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                >
                  <Check className="w-6 h-6 text-primary" aria-hidden="true" />
                </motion.div>
                <h3 className="text-xl font-semibold">What the Nimara fee covers:</h3>
              </div>
              
              <ul className="space-y-4">
                {coverageItems.map((item, index) => (
                  <motion.li 
                    key={item}
                    className="flex items-center gap-3 text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <AnimatedCheck delay={0.7 + index * 0.1} />
                    <span><strong>{item}</strong></span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};