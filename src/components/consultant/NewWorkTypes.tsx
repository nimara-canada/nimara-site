import { motion } from "framer-motion";

const workTypes = [
  "Budgeting, forecasting, CRA-ready finance",
  "Grant tracking & fundraising systems",
  "Operational workflows and tool setup",
  "Strategic planning, evaluation frameworks",
  "Board governance and policy",
  "HR and role design",
  "Compliance and risk processes",
  "Data and metrics dashboards"
];

export const NewWorkTypes = () => {
  return (
    <section className="bg-secondary-background py-24 md:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left column */}
          <div className="lg:col-span-5">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/50 uppercase tracking-[0.2em] text-sm mb-4"
            >
              Project Types
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8"
            >
              What kinds of <span className="italic font-normal">work?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg leading-relaxed"
            >
              Projects are time-bounded, scoped, and PM-supported. You focus on delivery—we handle 
              intake, payment, and client ops.
            </motion.p>
          </div>
          
          {/* Right column - Work types grid */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
            >
              {workTypes.map((type, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-baseline gap-4"
                >
                  <span className="text-white/30 text-xs font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-white/80 text-base leading-relaxed">
                    {type}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
