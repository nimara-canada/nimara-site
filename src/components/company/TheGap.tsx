import { motion } from 'framer-motion';

const bullets = [
  "Many orgs are asked to be audit-ready while running on volunteer systems.",
  "Funders pay for short pilots and reports, not lasting backbone.",
  "Consultants do great one-off work, but there is no shared install-and-maintain system.",
  "Leaders are burning out trying to manage finance, HR, fundraising, and tech late at night."
];

export const TheGap = () => {
  return (
    <section className="py-24 md:py-36 lg:py-44 bg-muted/30 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background via-muted/30 to-muted/30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
          <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
              The Problem
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground leading-[1.1] mb-6">
              The Gap No One Is Paid To Fix
            </h2>

            <p className="text-lg text-body leading-relaxed">
              Nonprofits are asked to do big work with weak systems. 
              Most leaders are trying to keep the mission alive while their basic 
              operations are shaky.
            </p>
          </motion.div>

          {/* Bullet points */}
          <div className="space-y-0 mb-12">
            {bullets.map((bullet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 py-4 border-b border-border/50 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 group-hover:scale-150 transition-transform duration-300" />
                <p className="text-body leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {bullet}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pl-6 border-l-2 border-primary"
          >
            <p className="text-xl md:text-2xl font-serif font-medium text-foreground leading-snug">
              Nimara exists to own this gap as our whole job.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
