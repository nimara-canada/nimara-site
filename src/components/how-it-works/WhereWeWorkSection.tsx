import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const areas = [
  'Board / governance',
  'Money & grants',
  'People & HR',
  'Programs',
  'Fundraising & donors',
  'Volunteers',
  'Tools & files',
];

const WhereWeWorkSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
      aria-labelledby="where-we-work-heading"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4"
          >
            7 Areas
          </motion.p>
          <motion.h2 
            id="where-we-work-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
          >
            Where we <span className="text-primary">work</span>
          </motion.h2>
        </div>

        {/* Area chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-10"
          role="list"
          aria-label="Service areas"
        >
          {areas.map((area, index) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.25 + index * 0.06 }}
              className="px-6 py-3 rounded-full bg-nim-purple/10 border border-nim-purple/20 text-nim-navy font-semibold text-base hover:bg-nim-purple/15 transition-colors cursor-default"
              role="listitem"
            >
              {area}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-muted-foreground italic text-lg"
        >
          We start with what's breaking first.
        </motion.p>
      </div>
    </section>
  );
};

export default WhereWeWorkSection;
