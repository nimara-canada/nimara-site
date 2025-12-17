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
    <section className="bg-background py-28 md:py-36">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-muted-foreground/60 uppercase tracking-[0.25em] text-xs mb-6">
            Who We Want
          </p>
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight">
            This Bench Is Built For People Who Want To Do The Work—
            <span className="italic font-light">And Do It Well.</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Good fit */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="font-sans text-sm font-medium text-foreground/80 mb-10 pb-5 border-b border-border/50 tracking-wide">
              You Might Be A Fit If
            </h3>
            <div className="space-y-7">
              {fitCriteria.map((criterion, index) => (
                <div 
                  key={index}
                  className="flex gap-8"
                >
                  <span className="text-muted-foreground/25 text-xs font-light tracking-wider w-5 flex-shrink-0 pt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-foreground/70 leading-relaxed font-light">{criterion}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Not for */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-sans text-sm font-medium text-foreground/80 mb-10 pb-5 border-b border-border/50 tracking-wide">
              Who This Is Not For
            </h3>
            <div className="space-y-7">
              {notForCriteria.map((criterion, index) => (
                <div 
                  key={index}
                  className="flex gap-8"
                >
                  <span className="text-muted-foreground/25 text-xs font-light tracking-wider w-5 flex-shrink-0 pt-1">
                    —
                  </span>
                  <p className="text-muted-foreground/60 leading-relaxed font-light">{criterion}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
