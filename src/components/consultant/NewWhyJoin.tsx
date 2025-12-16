import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    text: "You get real projects—not 'maybe' calls or endless RFPs."
  },
  {
    number: "02", 
    text: "We scope and vet all briefs before they reach you."
  },
  {
    number: "03",
    text: "You only take on what fits your skills and schedule."
  },
  {
    number: "04",
    text: "You stay freelance—but never alone."
  },
  {
    number: "05",
    text: "You join a bench of people who care about quality and equity."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const NewWhyJoin = () => {
  return (
    <section id="why-join" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left column - Title */}
          <div className="lg:col-span-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground uppercase tracking-[0.2em] text-sm mb-4"
            >
              Why Join
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground leading-tight"
            >
              Why join the Nimara bench?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mt-8 text-lg leading-relaxed"
            >
              This is not a staffing agency. It's a curated platform for real consultants who actually deliver.
            </motion.p>
          </div>
          
          {/* Right column - Benefits */}
          <div className="lg:col-span-8">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-0"
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group border-t border-border py-8 first:border-t-0 first:pt-0"
                >
                  <div className="flex gap-8 items-baseline">
                    <span className="text-muted-foreground/50 text-sm font-mono tracking-wider">
                      {benefit.number}
                    </span>
                    <p className="text-foreground text-lg md:text-xl leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
