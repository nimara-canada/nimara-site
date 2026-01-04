import { motion } from "framer-motion";

const fitCriteria = [
  "You've worked inside nonprofits (ops, admin, finance support, programs, HR support, project work)",
  "You can take messy info and turn it into a clean, usable system",
  "You write in plain language (teams can follow it)",
  "You keep scope tight and ship deliverables",
  "You're comfortable working remotely with deadlines"
];

const niceToHave = [
  "Comfortable with Google Drive/Sheets and simple tool setup",
  "Experience with multi-grant reporting and document tracking",
  "Ability to train a team quickly (short handover)"
];

export const NewWhoWeWant = () => {
  return (
    <section className="bg-background py-28 md:py-36">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-muted-foreground/60 uppercase tracking-[0.25em] text-xs mb-6">
            Who We're Looking For
          </p>
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6">
            Who We're <span className="italic font-light">Looking For</span>
          </h2>
          <p className="text-muted-foreground/70 text-base leading-relaxed font-light">
            We want people who can make things simple and finish the work.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Must have */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="font-sans text-sm font-medium text-foreground/80 mb-10 pb-5 border-b border-border/50 tracking-wide">
              You Might Be A Fit If
            </h3>
            <div className="space-y-7">
              {fitCriteria.map((criterion, index) => (
                <div 
                  key={index}
                  className="flex gap-8"
                >
                  <span className="text-muted-foreground/25 text-xs font-light tracking-wider w-5 flex-shrink-0 pt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-foreground/70 leading-relaxed font-light">{criterion}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Nice to have */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-sans text-sm font-medium text-foreground/80 mb-10 pb-5 border-b border-border/50 tracking-wide">
              Nice To Have
            </h3>
            <div className="space-y-7">
              {niceToHave.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-8"
                >
                  <span className="text-muted-foreground/25 text-xs font-light tracking-wider w-5 flex-shrink-0 pt-1">
                    +
                  </span>
                  <p className="text-muted-foreground/60 leading-relaxed font-light">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
