import { motion } from "framer-motion";

const perks = [
  "Peer learning sessions",
  "Shared resources (templates, tools)",
  "Preferred vendor access",
  "Co-branded proposal support"
];

export const NewComingSoon = () => {
  return (
    <section className="bg-background py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left column */}
          <div className="lg:col-span-5">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground uppercase tracking-[0.2em] text-sm mb-4"
            >
              Coming Soon
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground leading-tight"
            >
              Consultant packages & <span className="italic font-normal">perks</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mt-8 text-lg"
            >
              Want in early? Now's the time to apply.
            </motion.p>
          </div>
          
          {/* Right column - Perks */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {perks.map((perk, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-baseline gap-4"
                >
                  <span className="text-muted-foreground/30 text-sm font-mono flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-foreground text-lg">{perk}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
