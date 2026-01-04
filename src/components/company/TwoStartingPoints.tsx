import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TwoStartingPoints: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-muted/30 overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

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
              Choose Your Path
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6"
          >
            Pick a <span className="font-normal italic text-muted-foreground">starting point</span>
          </motion.h2>
        </div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Card A - Grant Setup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-background p-8 lg:p-10 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-accent/10 text-accent rounded-full">
                About 2 weeks
              </span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
              Grant Setup
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Best if reporting feels stressful or receipts and files are hard to find.
            </p>
            
            <Link
              to="/grant-setup"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors"
            >
              Book a Grant Setup
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Card B - Organization Check */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group bg-background p-8 lg:p-10 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-muted text-muted-foreground rounded-full">
                2–4 weeks
              </span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
              Organization Check
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Best if you want a clear plan for the whole organization.
            </p>
            
            <Link
              to="/organization-check"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors"
            >
              Book an Organization Check
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Small line under cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground">
            Not sure?{' '}
            <Link 
              to="/start-here" 
              className="text-foreground font-medium hover:text-primary transition-colors underline underline-offset-4"
            >
              Start with Get Started
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoStartingPoints;
