import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, FileText } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const notices = [
  "Data stored in Canada",
  "Records kept at least 7 years",
  "Built to align with typical Canadian funder requirements",
];

export const SmallPrint = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-secondary-background"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Editorial Header */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-12">
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-4 block">
                Legal
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white leading-[1.1]">
                Small print{" "}
                <span className="italic text-white/80">— Because it still matters</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-7 lg:pt-8">
              <p className="text-white/70 text-lg leading-relaxed">
                Nimara is a national capacity-building operator. We connect nonprofits with 
                vetted independent consultants ("Practice Partners") and provide shared tools, 
                templates, and project coordination. We are not a law, accounting, audit, or 
                funding body and do not provide legal, tax, or investment advice. Final decisions 
                always stay with your leadership and board.
              </p>
            </motion.div>
          </div>

          {/* Notices */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {notices.map((notice, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white/70 text-sm border border-white/10"
                >
                  {notice}
                </span>
              ))}
            </div>
            
            <a 
              href="https://www.notion.so/Nimara-Terms-of-Use-2bd227f1ee3a80a2a3ddd8a5ddb9dcd8?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors group"
            >
              <FileText className="w-4 h-4" />
              <span className="relative">
                View engagement terms
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
