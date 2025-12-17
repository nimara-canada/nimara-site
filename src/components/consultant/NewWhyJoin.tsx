import { motion } from "framer-motion";

const benefits = [
  "You get real projects—not 'maybe' calls or endless RFPs.",
  "We scope and vet all briefs before they reach you.",
  "You only take on what fits your skills and schedule.",
  "You stay freelance—but never alone.",
  "You join a bench of people who care about quality and equity."
];

export const NewWhyJoin = () => {
  return (
    <section id="why-join" className="bg-background py-28 md:py-36">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          {/* Left column */}
          <div className="lg:col-span-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-muted-foreground/60 uppercase tracking-[0.25em] text-xs mb-6"
            >
              Why Join
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight"
            >
              Why Join The <span className="italic font-light">Nimara Bench?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground/70 mt-10 text-base leading-relaxed font-light"
            >
              This is not a staffing agency. It's a curated platform for real consultants who actually deliver.
            </motion.p>
          </div>
          
          {/* Right column */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="border-t border-border/50 py-8 first:border-t-0 first:pt-0"
                >
                  <div className="flex gap-10 items-baseline">
                    <span className="text-muted-foreground/30 text-xs font-light tracking-wider w-6 flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-foreground/80 text-lg md:text-xl leading-relaxed font-light">
                      {benefit}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
