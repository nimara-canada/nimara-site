import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User } from 'lucide-react';

const bullets = [
  'Answer a few questions',
  'Share what you already have',
  "Tell us what's not working",
];

const YourPartSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 lg:py-20 bg-muted/30 overflow-hidden"
      aria-labelledby="your-part-heading"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
          <h2 
            id="your-part-heading"
            className="text-2xl sm:text-3xl font-light tracking-tight"
          >
            Your <span className="font-semibold text-primary">part</span>
          </h2>
        </motion.div>

        <ul className="space-y-3" role="list">
          {bullets.map((bullet, index) => (
            <motion.li
              key={bullet}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              className="flex items-center gap-3 text-lg text-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {bullet}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default YourPartSection;
