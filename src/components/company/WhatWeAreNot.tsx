import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { X } from 'lucide-react';

const notList = [
  "Not bookkeeping or taxes",
  "Not an audit",
  "Not a long report you won't use",
];

const WhatWeAreNot: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-muted/30 overflow-hidden"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Good to know
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6"
          >
            What Nimara <span className="font-normal italic text-muted-foreground">is not</span>
          </motion.h2>
        </div>

        {/* Not list */}
        <div className="space-y-4 mb-12">
          {notList.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-4 p-5 bg-background rounded-xl border border-border"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                <X className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-foreground text-lg">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-foreground font-medium"
        >
          We build working basics your team can run.
        </motion.p>
      </div>
    </section>
  );
};

export default WhatWeAreNot;
