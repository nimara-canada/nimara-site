import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers } from 'lucide-react';

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
      className="relative py-16 lg:py-24 bg-background overflow-hidden"
      aria-labelledby="where-we-work-heading"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Layers className="w-5 h-5 text-primary" />
          </div>
          <h2 
            id="where-we-work-heading"
            className="text-2xl sm:text-3xl font-light tracking-tight"
          >
            Where we <span className="font-semibold text-primary">work</span>
          </h2>
        </motion.div>

        {/* Area chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-6"
          role="list"
          aria-label="Service areas"
        >
          {areas.map((area, index) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
              className="px-4 py-2.5 rounded-full bg-primary/5 border border-primary/20 text-foreground font-medium"
              role="listitem"
            >
              {area}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground italic"
        >
          We start with what's breaking first.
        </motion.p>
      </div>
    </section>
  );
};

export default WhereWeWorkSection;
