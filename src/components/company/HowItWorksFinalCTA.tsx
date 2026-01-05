import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const HowItWorksFinalCTA: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-secondary-background text-white overflow-hidden"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-8 text-white">
            Ready to get started?
          </h2>
          
          {/* Primary CTA */}
          <Link
            to="/start-here"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-secondary-background font-medium rounded-full hover:bg-accent/90 transition-colors text-lg mb-8"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          {/* Secondary links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors underline underline-offset-4"
            >
              Try the free check →
            </a>
            
            <a 
              href="mailto:hello@nimara.ca"
              className="text-white/60 hover:text-white transition-colors"
            >
              Prefer email? <span className="underline underline-offset-4">hello@nimara.ca</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksFinalCTA;
