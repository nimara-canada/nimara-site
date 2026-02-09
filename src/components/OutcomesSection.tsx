import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { TYPEFORM_HEALTH_CHECK_URL, CALENDLY_BOOKING_URL } from '@/constants/urls';
import { FileText, Users, FolderOpen, TrendingUp, MessageCircle, CheckCircle2 } from 'lucide-react';

// Decorative wavy lines SVG component
const WavyLines = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 50 Q 25 30, 50 50 T 100 50 T 150 50 T 200 50" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3"/>
    <path d="M0 60 Q 25 40, 50 60 T 100 60 T 150 60 T 200 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.2"/>
    <path d="M0 70 Q 25 50, 50 70 T 100 70 T 150 70 T 200 70" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.15"/>
  </svg>
);

const OutcomesSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      aria-labelledby="outcomes-heading"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-purple-section-bg"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Category label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6 text-purple-section-label"
          >
            Systems & Outcomes
          </motion.p>

          <motion.h2
            id="outcomes-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[clamp(2.2rem,6vw,5rem)] font-black tracking-[-0.03em] leading-[1.05] mb-4 sm:mb-6 text-foreground uppercase"
          >
            WHERE NIMARA INSTALLS SYSTEMS THAT STICK
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8"
          >
            Real working tools and routines—so you can track, prove, and report without scrambling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <a
              href={CALENDLY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium rounded-full bg-white text-foreground hover:bg-white/90 transition-all duration-200 shadow-sm"
            >
              See what's included
            </a>
          </motion.div>
        </header>

        {/* Cards Grid */}
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" role="list" aria-label="What you get">
          
          {/* Card 1 - Clear decisions and ownership */}
          <motion.li
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full sm:col-span-2 md:col-span-1"
          >
            <article 
              className="h-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 relative overflow-hidden min-h-[320px] sm:min-h-[380px] md:min-h-[420px] flex flex-col border bg-purple-section-card border-purple-section-border"
            >
              {/* Decorative wavy lines */}
              <WavyLines className="absolute inset-0 w-full h-full text-nim-purple pointer-events-none" />
              
              {/* Visual area */}
              <div className="flex-1 flex items-center justify-center relative z-10 mb-6">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {/* Central icon/shape */}
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: 'hsl(270, 60%, 60%)' }}
                  >
                    <FolderOpen className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div 
                    className="absolute -top-4 -right-8 bg-white rounded-xl p-2 shadow-lg"
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-nim-mint flex items-center justify-center">
                        <Users className="w-3 h-3 text-nim-navy" />
                      </div>
                      <span className="text-xs font-medium text-nim-navy">Roles</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-4 -left-8 bg-white rounded-xl p-2 shadow-lg"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-nim-purple/20 flex items-center justify-center">
                        <FileText className="w-3 h-3 text-nim-purple" />
                      </div>
                      <span className="text-xs font-medium text-nim-navy">Board</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-8 -left-12 bg-white rounded-xl p-2 shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-nim-mint" />
                      <span className="text-xs font-medium text-nim-navy">Files</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Title and description */}
              <div className="relative z-10 mt-auto">
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-foreground mb-1.5 sm:mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Clear decisions and ownership
                </motion.h3>
                <motion.p
                  className="text-xs sm:text-sm text-muted-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.55 }}
                >
                  Board records, roles, and files organized so work doesn't depend on one person.
                </motion.p>
              </div>
            </article>
          </motion.li>

          {/* Card 2 - Clean tracking */}
          <motion.li
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full"
          >
            <article 
              className="h-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 relative overflow-hidden min-h-[320px] sm:min-h-[380px] md:min-h-[420px] flex flex-col border"
              style={{ 
                backgroundColor: 'hsl(270, 50%, 95%)',
                borderColor: 'hsl(270, 40%, 85%)'
              }}
            >
              {/* Decorative wavy lines */}
              <WavyLines className="absolute inset-0 w-full h-full text-nim-purple pointer-events-none" />
              
              {/* Visual area - Chart mockup */}
              <div className="flex-1 flex items-center justify-center relative z-10 mb-6">
                <motion.div 
                  className="bg-white rounded-2xl p-5 shadow-lg w-full max-w-[240px]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <p className="text-sm font-medium text-nim-navy mb-4">
                    Budget tracking stayed current through Q3 reporting.
                  </p>
                  
                  {/* Simple chart lines */}
                  <div className="h-20 relative">
                    <svg className="w-full h-full" viewBox="0 0 200 80" fill="none">
                      <motion.path 
                        d="M0 60 Q 30 50, 50 40 T 100 35 T 150 25 T 200 20" 
                        stroke="hsl(270, 60%, 60%)" 
                        strokeWidth="3" 
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                      />
                      <motion.path 
                        d="M0 70 Q 30 65, 50 55 T 100 50 T 150 40 T 200 35" 
                        stroke="hsl(165, 50%, 55%)" 
                        strokeWidth="3" 
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                      />
                      <motion.path 
                        d="M0 65 Q 30 60, 50 50 T 100 48 T 150 45 T 200 42" 
                        stroke="hsl(40, 90%, 60%)" 
                        strokeWidth="3" 
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>
              
              {/* Title and description */}
              <div className="relative z-10 mt-auto">
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-foreground mb-1.5 sm:mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Clean tracking across your work
                </motion.h3>
                <motion.p
                  className="text-xs sm:text-sm text-muted-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.65 }}
                >
                  Budgets, spending, donors, volunteers, and activities kept current—so nothing gets lost.
                </motion.p>
              </div>
            </article>
          </motion.li>

          {/* Card 3 - Proof tied to deliverable */}
          <motion.li
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full sm:col-span-2 md:col-span-1"
          >
            <article 
              className="h-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 relative overflow-hidden min-h-[320px] sm:min-h-[380px] md:min-h-[420px] flex flex-col border"
              style={{ 
                backgroundColor: 'hsl(270, 50%, 95%)',
                borderColor: 'hsl(270, 40%, 85%)'
              }}
            >
              {/* Decorative wavy lines */}
              <WavyLines className="absolute inset-0 w-full h-full text-nim-purple pointer-events-none" />
              
              {/* Visual area - Chat/Support mockup */}
              <div className="flex-1 flex items-center justify-center relative z-10 mb-6">
                <div className="relative">
                  {/* Chat bubble */}
                  <motion.div 
                    className="bg-white rounded-2xl p-4 shadow-lg max-w-[220px] relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <p className="text-sm text-nim-navy mb-3">
                      Grant report ready: decision → spend → deliverable → proof.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-nim-purple flex items-center justify-center">
                        <span className="text-xs font-bold text-white">N</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Nimara System</span>
                    </div>
                    
                    {/* Speech bubble tail */}
                    <div 
                      className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45"
                      style={{ boxShadow: '2px 2px 4px rgba(0,0,0,0.05)' }}
                    />
                  </motion.div>
                  
                  {/* Floating chat icon */}
                  <motion.div 
                    className="absolute -bottom-8 right-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: 'hsl(270, 60%, 70%)' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
              </div>
              
              {/* Title and description */}
              <div className="relative z-10 mt-auto">
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-foreground mb-1.5 sm:mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Proof tied to the deliverable
                </motion.h3>
                <motion.p
                  className="text-xs sm:text-sm text-muted-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.75 }}
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
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            Examples only. We cover board, money & grants, people, programs, fundraising, volunteers, tools & files.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/capacity-buildout"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all duration-200"
            >
              Book a free 20-minute call
              <span aria-hidden="true">→</span>
            </Link>
            
            <a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
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