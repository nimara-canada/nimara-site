import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const OurPromise: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-24 bg-background overflow-hidden"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-4">
            Our promise
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6">
            If we can't help you, we'll tell you early.
          </p>
          
          <Link 
            to="/refunds" 
            className="text-sm text-foreground hover:text-primary transition-colors underline underline-offset-4"
          >
            See refund policy →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPromise;
