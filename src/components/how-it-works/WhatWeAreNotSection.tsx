import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { X } from 'lucide-react';

const notList = [
  'Not an audit firm',
  'Not grant writers',
  'We set up systems your team runs',
];

const WhatWeAreNotSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: '#faf8f5' }}
      aria-labelledby="what-we-are-not-heading"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4"
          >
            Good to know
          </motion.p>
          <motion.h2 
            id="what-we-are-not-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[2.25rem] sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] text-foreground"
          >
            What we are <span className="text-muted-foreground">not</span>
          </motion.h2>
        </div>

        <div className="max-w-xl mx-auto space-y-4">
          {notList.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-4 bg-white rounded-xl p-5 border border-border"
            >
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <X className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-lg text-foreground font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeAreNotSection;
