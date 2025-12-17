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
              Project Types
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-10"
            >
              What Kinds Of <span className="italic font-light">Work?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/50 text-base leading-relaxed font-light"
            >
              Projects are time-bounded, scoped, and PM-supported. You focus on delivery—we handle 
              intake, payment, and client ops.
            </motion.p>
          </div>
          
          {/* Right column */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5"
            >
              {workTypes.map((type, index) => (
                <div 
                  key={index}
                  className="flex items-baseline gap-5"
                >
                  <span className="text-white/20 text-xs font-light tracking-wider w-5 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-white/70 text-base leading-relaxed font-light">
                    {type}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
