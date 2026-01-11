import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { TYPEFORM_HEALTH_CHECK_URL, CALENDLY_BOOKING_URL } from '@/constants/urls';
import { Check, FileText, Users, FolderOpen, AlertTriangle, Calendar } from 'lucide-react';

const OutcomesSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
            Where your system works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Real systems that keep your organization running smoothly. Every buildout delivers working tools you'll actually use — not reports that collect dust.
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
              Get started
            </a>
          </motion.div>
        </header>

        {/* Cards Grid - Colorful gradient cards with mock UIs */}
        <ul className="grid md:grid-cols-3 gap-6 lg:gap-8" role="list" aria-label="What you get">
          
          {/* Card 1 - Clear Tracking - Mint gradient */}
          <motion.li
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full"
          >
            <article className="h-full rounded-3xl p-6 lg:p-8 relative overflow-hidden min-h-[380px] flex flex-col" style={{ background: 'linear-gradient(135deg, hsl(162 91% 83%), hsl(162 75% 65%), hsl(165 70% 50%))' }}>
              {/* Mock UI Element */}
              <div className="flex-1 flex items-center justify-end">
                <div className="relative">
                  {/* Side list */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 space-y-3">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="w-5 h-5 rounded-full bg-nim-mint/50 flex items-center justify-center">
                        <FileText className="w-3 h-3 text-nim-navy" />
                      </div>
                      <span className="text-xs font-medium text-nim-navy">Board</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="w-5 h-5 rounded-full bg-nim-purple/20 flex items-center justify-center">
                        <Users className="w-3 h-3 text-nim-purple" />
                      </div>
                      <span className="text-xs font-medium text-nim-navy">People</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="w-5 h-5 rounded-full bg-nim-navy/10 flex items-center justify-center">
                        <FolderOpen className="w-3 h-3 text-nim-navy" />
                      </div>
                      <span className="text-xs font-medium text-nim-navy">Files</span>
                    </div>
                  </div>
                  
                  {/* Main card */}
                  <div className="bg-white rounded-2xl shadow-2xl p-4 ml-16">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-semibold text-nim-purple uppercase tracking-wide">Tasks Due</span>
                      <div className="w-5 h-5 rounded-full bg-nim-purple/10 flex items-center justify-center">
                        <AlertTriangle className="w-3 h-3 text-nim-purple" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-nim-navy mb-2">7</div>
                    <div className="w-20 h-1.5 bg-nim-mist rounded-full overflow-hidden">
                      <div className="w-3/4 h-full rounded-full" style={{ background: 'hsl(162 91% 83%)' }} />
                    </div>
                    <div className="flex -space-x-2 mt-3">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-nim-mist to-nim-cloud border-2 border-white" />
                      ))}
                      <div className="w-6 h-6 rounded-full bg-nim-purple border-2 border-white flex items-center justify-center">
                        <span className="text-[8px] font-bold text-white">+3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-nim-navy mt-6">
                Clear tracking you can actually see
              </h3>
            </article>
          </motion.li>

          {/* Card 2 - Fast Proof - Purple gradient */}
          <motion.li
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full"
          >
            <article className="h-full rounded-3xl p-6 lg:p-8 relative overflow-hidden min-h-[380px] flex flex-col" style={{ background: 'linear-gradient(135deg, hsl(262 82% 68%), hsl(262 82% 58%), hsl(262 82% 48%))' }}>
              {/* Mock UI Element */}
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-2xl p-4 w-full max-w-[220px]">
                  <div className="flex items-center gap-2 bg-nim-purple/10 text-nim-purple rounded-lg px-3 py-1.5 mb-4">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">2 items need attention</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 hover:bg-nim-cloud rounded-lg transition-colors">
                      <div className="w-8 h-8 rounded-full" style={{ background: 'linear-gradient(135deg, hsl(262 82% 68%), hsl(262 82% 58%))' }} />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-nim-navy">Q3 Report</p>
                        <p className="text-[10px] text-nim-slate">Due in 3 days</p>
                      </div>
                      <button className="text-[10px] font-medium text-nim-slate border border-nim-mist rounded-md px-2 py-1 hover:bg-nim-cloud">
                        Review
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-3 p-2 hover:bg-nim-cloud rounded-lg transition-colors">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, hsl(162 91% 70%), hsl(162 75% 50%))' }}>
                        CB
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-nim-navy">Grant proof</p>
                        <p className="text-[10px] text-nim-slate">Funder request</p>
                      </div>
                      <button className="text-[10px] font-medium text-nim-slate border border-nim-mist rounded-md px-2 py-1 hover:bg-nim-cloud">
                        Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mt-6">
                Pull proof fast when funders ask
              </h3>
            </article>
          </motion.li>

          {/* Card 3 - Team Routine - Navy gradient */}
          <motion.li
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full"
          >
            <article className="h-full rounded-3xl p-6 lg:p-8 relative overflow-hidden min-h-[380px] flex flex-col" style={{ background: 'linear-gradient(135deg, hsl(220 53% 20%), hsl(220 53% 12%), hsl(220 53% 8%))' }}>
              {/* Mock UI Element */}
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-2xl p-4 w-full max-w-[220px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full" style={{ background: 'linear-gradient(135deg, hsl(262 82% 68%), hsl(262 82% 58%))' }} />
                    <div>
                      <p className="text-sm font-semibold text-nim-navy">Team Lead</p>
                      <p className="text-[10px] text-nim-slate">Program Manager</p>
                    </div>
                  </div>
                  
                  <div className="rounded-xl p-3" style={{ background: 'hsl(162 91% 93%)' }}>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'hsl(162 75% 40%)' }}>
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-nim-navy">
                          Monthly checklist complete
                        </p>
                        <p className="text-[10px] text-nim-slate mt-0.5">
                          Based on your routine setup
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <Calendar className="w-3.5 h-3.5 text-nim-slate" />
                    <span className="text-[10px] text-nim-slate">Next check: Feb 1st</span>
                  </div>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mt-6">
                A routine your team actually follows
              </h3>
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
