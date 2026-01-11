import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { TYPEFORM_HEALTH_CHECK_URL, CALENDLY_BOOKING_URL } from '@/constants/urls';
import { Check, FileText, Users, FolderOpen, AlertTriangle, Calendar } from 'lucide-react';

const OutcomesSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Stagger animation variants for UI elements
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const sideItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      aria-labelledby="outcomes-heading"
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-16 lg:mb-20">
          <motion.h2
            id="outcomes-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 text-foreground"
          >
            Where Nimara installs systems that stick
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Real working tools and routines—so you can track, prove, and report without scrambling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <a
              href={CALENDLY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full border border-border bg-background text-foreground hover:bg-muted transition-all duration-200"
            >
              See what's included
            </a>
          </motion.div>
        </header>

        {/* Cards Grid - Flat Nimara colors with mock UIs */}
        <ul className="grid md:grid-cols-3 gap-6 lg:gap-8" role="list" aria-label="What you get">
          
          {/* Card 1 - Clear Tracking - Mint */}
          <motion.li
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full"
          >
            <article className="h-full rounded-3xl p-6 lg:p-8 relative overflow-hidden min-h-[380px] flex flex-col bg-nim-mint">
              {/* Mock UI Element */}
              <motion.div 
                className="flex-1 flex items-center justify-end"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <div className="relative">
                  {/* Side list */}
                  <motion.div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 space-y-3"
                    variants={containerVariants}
                  >
                    <motion.div 
                      variants={sideItemVariants}
                      className="flex items-center gap-2 bg-white rounded-lg px-3 py-2"
                    >
                      <div className="w-5 h-5 rounded-full bg-nim-mint flex items-center justify-center">
                        <FileText className="w-3 h-3 text-nim-navy" />
                      </div>
                      <span className="text-xs font-medium text-nim-navy">Board</span>
                    </motion.div>
                    <motion.div 
                      variants={sideItemVariants}
                      className="flex items-center gap-2 bg-white rounded-lg px-3 py-2"
                    >
                      <div className="w-5 h-5 rounded-full bg-nim-purple/20 flex items-center justify-center">
                        <Users className="w-3 h-3 text-nim-purple" />
                      </div>
                      <span className="text-xs font-medium text-nim-navy">People</span>
                    </motion.div>
                    <motion.div 
                      variants={sideItemVariants}
                      className="flex items-center gap-2 bg-white rounded-lg px-3 py-2"
                    >
                      <div className="w-5 h-5 rounded-full bg-nim-mist flex items-center justify-center">
                        <FolderOpen className="w-3 h-3 text-nim-navy" />
                      </div>
                      <span className="text-xs font-medium text-nim-navy">Files</span>
                    </motion.div>
                  </motion.div>
                  
                  {/* Main card */}
                  <motion.div 
                    variants={itemVariants}
                    className="bg-white rounded-2xl p-4 ml-16"
                  >
                    <motion.div 
                      variants={listItemVariants}
                      className="flex items-center justify-between mb-3"
                    >
                      <span className="text-[10px] font-semibold text-nim-purple uppercase tracking-wide">Tasks Due</span>
                      <div className="w-5 h-5 rounded-full bg-nim-purple/10 flex items-center justify-center">
                        <AlertTriangle className="w-3 h-3 text-nim-purple" />
                      </div>
                    </motion.div>
                    <motion.div 
                      variants={listItemVariants}
                      className="text-4xl font-bold text-nim-navy mb-2"
                    >
                      7
                    </motion.div>
                    <motion.div 
                      variants={listItemVariants}
                      className="w-20 h-1.5 bg-nim-mist rounded-full overflow-hidden"
                    >
                      <motion.div 
                        className="h-full rounded-full bg-nim-purple"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '75%' } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                      />
                    </motion.div>
                    <motion.div 
                      variants={listItemVariants}
                      className="flex -space-x-2 mt-3"
                    >
                      {[...Array(4)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="w-6 h-6 rounded-full bg-nim-mist border-2 border-white"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.9 + i * 0.08 }}
                        />
                      ))}
                      <motion.div 
                        className="w-6 h-6 rounded-full bg-nim-purple border-2 border-white flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 1.2 }}
                      >
                        <span className="text-[8px] font-bold text-white">+3</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Title */}
              <div className="mt-6">
                <motion.h3 
                  className="text-xl font-bold text-nim-navy"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Clear decisions and ownership
                </motion.h3>
                <motion.p
                  className="text-sm text-nim-navy/70 mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.65 }}
                >
                  Board records, roles, and files organized so work doesn't depend on one person.
                </motion.p>
              </div>
            </article>
          </motion.li>

          {/* Card 2 - Fast Proof - Purple */}
          <motion.li
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full"
          >
            <article className="h-full rounded-3xl p-6 lg:p-8 relative overflow-hidden min-h-[380px] flex flex-col bg-nim-purple">
              {/* Mock UI Element */}
              <motion.div 
                className="flex-1 flex items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div 
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-4 w-full max-w-[220px]"
                >
                  <motion.div 
                    variants={listItemVariants}
                    className="flex items-center gap-2 bg-nim-purple/10 text-nim-purple rounded-lg px-3 py-1.5 mb-4"
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">2 items need attention</span>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-3"
                    variants={containerVariants}
                  >
                    <motion.div 
                      variants={listItemVariants}
                      className="flex items-center gap-3 p-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-nim-purple" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-nim-navy">Q3 Report</p>
                        <p className="text-[10px] text-nim-slate">Due in 3 days</p>
                      </div>
                      <button className="text-[10px] font-medium text-nim-navy border border-nim-mist rounded-md px-2 py-1">
                        Review
                      </button>
                    </motion.div>
                    
                    <motion.div 
                      variants={listItemVariants}
                      className="flex items-center gap-3 p-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-nim-mint flex items-center justify-center text-nim-navy text-xs font-bold">
                        CB
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-nim-navy">Grant proof</p>
                        <p className="text-[10px] text-nim-slate">Funder request</p>
                      </div>
                      <button className="text-[10px] font-medium text-nim-navy border border-nim-mist rounded-md px-2 py-1">
                        Review
                      </button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Title */}
              <div className="mt-6">
                <motion.h3 
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Clean tracking across your work
                </motion.h3>
                <motion.p
                  className="text-sm text-white/70 mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.75 }}
                >
                  Budgets, spending, donors, volunteers, and activities kept current—so nothing gets lost.
                </motion.p>
              </div>
            </article>
          </motion.li>

          {/* Card 3 - Team Routine - Navy */}
          <motion.li
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full"
          >
            <article className="h-full rounded-3xl p-6 lg:p-8 relative overflow-hidden min-h-[380px] flex flex-col bg-nim-navy">
              {/* Mock UI Element */}
              <motion.div 
                className="flex-1 flex items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div 
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-4 w-full max-w-[220px]"
                >
                  <motion.div 
                    variants={listItemVariants}
                    className="flex items-center gap-3 mb-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-nim-purple" />
                    <div>
                      <p className="text-sm font-semibold text-nim-navy">Team Lead</p>
                      <p className="text-[10px] text-nim-slate">Program Manager</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={listItemVariants}
                    className="rounded-xl p-3 bg-nim-mint/30"
                  >
                    <div className="flex items-start gap-2">
                      <motion.div 
                        className="w-4 h-4 rounded-full bg-nim-mint flex items-center justify-center flex-shrink-0 mt-0.5"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 1.0, type: "spring", stiffness: 300 }}
                      >
                        <Check className="w-2.5 h-2.5 text-nim-navy" />
                      </motion.div>
                      <div>
                        <p className="text-xs font-medium text-nim-navy">
                          Monthly checklist complete
                        </p>
                        <p className="text-[10px] text-nim-slate mt-0.5">
                          Based on your routine setup
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={listItemVariants}
                    className="flex items-center gap-2 mt-4"
                  >
                    <Calendar className="w-3.5 h-3.5 text-nim-slate" />
                    <span className="text-[10px] text-nim-slate">Next check: Feb 1st</span>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Title */}
              <div className="mt-6">
                <motion.h3 
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Proof tied to the deliverable
                </motion.h3>
                <motion.p
                  className="text-sm text-white/70 mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.85 }}
                >
                  A simple trail from decision → spend → deliverable → report, ready when asked.
                </motion.p>
              </div>
            </article>
          </motion.li>
        </ul>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Examples only. We cover board, money & grants, people, programs, fundraising, volunteers, tools & files.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/capacity-buildout"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
            >
              Book a free 20-minute call
              <span aria-hidden="true">→</span>
            </Link>
            
            <a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Take the free 6-minute check
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OutcomesSection;
