import { motion } from "framer-motion";

const fitCriteria = [
  "You have 3–10+ years of experience in nonprofit, public, or consulting work",
  "You're independent, but collaborative",
  "You have deep subject-matter expertise (and can explain it in plain language)",
  "You deliver audit-ready work—not vibes",
  "You care about EDI in practice, not just in theory"
];

const notForCriteria = [
  "If you're new to consulting and figuring it out",
  "If you ghost clients, overpromise, or can't hit deadlines",
  "If you think 'mission' excuses poor execution"
];

export const NewWhoWeWant = () => {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mb-16"
        >
          <p className="text-muted-foreground uppercase tracking-[0.2em] text-sm mb-4">
            Who We Want
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            This bench is built for people who want to do the work—
            <span className="italic font-normal">and do it well.</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Good fit */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-8 pb-4 border-b border-border">
              You might be a fit if
            </h3>
            <div className="space-y-6">
              {fitCriteria.map((criterion, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-6"
                >
                  <span className="text-muted-foreground/40 text-sm font-mono flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-foreground/80 leading-relaxed">{criterion}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Not for */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-8 pb-4 border-b border-border">
              Who this is not for
            </h3>
            <div className="space-y-6">
              {notForCriteria.map((criterion, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-6"
                >
                  <span className="text-muted-foreground/40 text-sm font-mono flex-shrink-0">
                    —
                  </span>
                  <p className="text-muted-foreground leading-relaxed">{criterion}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
