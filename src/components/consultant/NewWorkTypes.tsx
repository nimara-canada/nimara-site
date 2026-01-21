import { motion } from "framer-motion";

const workTypes = [
  {
    title: "Grant Setup support",
    description: "Help install folders, tracking, and simple routines that teams can follow."
  },
  {
    title: "Organization Check support",
    description: "Help review docs and workflows, then turn it into clear next steps."
  },
  {
    title: "Build bundles (after the check)",
    description: "Help implement policies, workflows, and tools across key areas."
  },
  {
    title: "Fix-and-finish projects",
    description: "Short projects to complete missing basics (templates, guides, file cleanup)."
  }
];

export const NewWorkTypes = () => {
  return (
    <section className="bg-secondary-background py-28 md:py-36">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          {/* Left column */}
          <div className="lg:col-span-5">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white/30 uppercase tracking-[0.25em] text-xs mb-6"
            >
              Types of Work
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-10"
            >
              Types Of <span className="italic font-light">Work</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/50 text-base leading-relaxed font-light"
            >
              Most work starts with one of these and grows from there.
            </motion.p>
          </div>
          
          {/* Right column */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              {workTypes.map((type, index) => (
                <div 
                  key={index}
                  className="border-b border-white/10 pb-8 last:border-b-0"
                >
                  <div className="flex items-baseline gap-5 mb-2">
                    <span className="text-white/20 text-xs font-light tracking-wider w-5 flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-white/90 text-lg font-medium">
                      {type.title}
                    </h3>
                  </div>
                  <p className="text-white/50 text-base leading-relaxed font-light pl-10">
                    {type.description}
                  </p>
                </div>
              ))}
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/30 text-sm mt-10 font-light"
            >
              We don't do bookkeeping or audits.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
