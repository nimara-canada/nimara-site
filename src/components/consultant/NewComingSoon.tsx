import { motion } from "framer-motion";

const perks = [
  "Peer learning sessions",
  "Shared resources (templates, tools)",
  "Preferred vendor access",
  "Co-branded proposal support"
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
              className="font-sans text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight"
            >
              Consultant Packages & <span className="italic font-light">Perks</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground/70 mt-10 text-base font-light"
            >
              Want in early? Now's the time to apply.
            </motion.p>
          </div>
          
          {/* Right column */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {perks.map((perk, index) => (
                <div 
                  key={index}
                  className="flex items-baseline gap-5"
                >
                  <span className="text-muted-foreground/25 text-xs font-light tracking-wider w-5 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-foreground/80 text-base font-light">{perk}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
