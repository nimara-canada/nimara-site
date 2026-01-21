import { motion } from "framer-motion";

const features = [
  "A project board with clear scopes and timelines",
  "Standard templates you can reuse",
  "Short training guides (Grant Setup + Organization Check)",
  "Quality checks that help you deliver faster",
  "A referral loop for repeat work"
];

export const NewComingSoon = () => {
  return (
    <section className="bg-background py-28 md:py-36 border-t border-border/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start">
          {/* Left column */}
          <div className="lg:col-span-5">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-muted-foreground/60 uppercase tracking-[0.25em] text-xs mb-6"
            >
              Coming Soon
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-[-0.03em]"
            >
              Coming <span className="italic font-light">Soon</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground/70 mt-10 text-base font-light"
            >
              We're building a simple consultant experience.
            </motion.p>
          </div>
          
          {/* Right column */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-baseline gap-5"
                >
                  <span className="text-muted-foreground/25 text-xs font-light tracking-wider w-5 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-foreground/80 text-base font-light">{feature}</p>
                </div>
              ))}
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-muted-foreground/50 text-sm mt-10 font-light"
            >
              Want early access?{" "}
              <a 
                href="mailto:hello@nimara.ca" 
                className="text-foreground/70 hover:text-foreground border-b border-foreground/30 hover:border-foreground/50 transition-colors"
              >
                Email hello@nimara.ca
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
