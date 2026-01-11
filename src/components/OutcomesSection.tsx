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
          
          {/* Card 1 - Clear Tracking */}
          <motion.li
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full"
          >
            <article className="h-full rounded-3xl bg-gradient-to-br from-teal-400 via-teal-500 to-cyan-600 p-6 lg:p-8 relative overflow-hidden min-h-[380px] flex flex-col">
              {/* Mock UI Element */}
              <div className="flex-1 flex items-center justify-end">
                <div className="relative">
                  {/* Side list */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 space-y-3">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                        <FileText className="w-3 h-3 text-teal-600" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Board</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <Users className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">People</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                        <FolderOpen className="w-3 h-3 text-purple-600" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Files</span>
                    </div>
                  </div>
                  
                  {/* Main card */}
                  <div className="bg-white rounded-2xl shadow-2xl p-4 ml-16">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wide">Tasks Due</span>
                      <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                        <AlertTriangle className="w-3 h-3 text-orange-500" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">7</div>
                    <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-teal-500 rounded-full" />
                    </div>
                    <div className="flex -space-x-2 mt-3">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white" />
                      ))}
                      <div className="w-6 h-6 rounded-full bg-teal-500 border-2 border-white flex items-center justify-center">
                        <span className="text-[8px] font-bold text-white">+3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mt-6">
                Clear tracking you can actually see
              </h3>
            </article>
          </motion.li>

          {/* Card 2 - Fast Proof */}
          <motion.li
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full"
          >
            <article className="h-full rounded-3xl bg-gradient-to-br from-orange-400 via-coral-500 to-rose-500 p-6 lg:p-8 relative overflow-hidden min-h-[380px] flex flex-col" style={{ background: 'linear-gradient(135deg, #f97316, #fb7185, #f43f5e)' }}>
              {/* Mock UI Element */}
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-2xl p-4 w-full max-w-[220px]">
                  <div className="flex items-center gap-2 bg-rose-50 text-rose-600 rounded-lg px-3 py-1.5 mb-4">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">2 items need attention</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Q3 Report</p>
                        <p className="text-[10px] text-gray-500">Due in 3 days</p>
                      </div>
                      <button className="text-[10px] font-medium text-gray-500 border border-gray-200 rounded-md px-2 py-1 hover:bg-gray-50">
                        Review
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-xs font-bold">
                        CB
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Grant proof</p>
                        <p className="text-[10px] text-gray-500">Funder request</p>
                      </div>
                      <button className="text-[10px] font-medium text-gray-500 border border-gray-200 rounded-md px-2 py-1 hover:bg-gray-50">
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

          {/* Card 3 - Team Routine */}
          <motion.li
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full"
          >
            <article className="h-full rounded-3xl bg-gradient-to-br from-violet-400 via-purple-500 to-fuchsia-500 p-6 lg:p-8 relative overflow-hidden min-h-[380px] flex flex-col">
              {/* Mock UI Element */}
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-2xl p-4 w-full max-w-[220px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-500" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Team Lead</p>
                      <p className="text-[10px] text-gray-500">Program Manager</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border border-green-100 rounded-xl p-3">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-900">
                          Monthly checklist complete
                        </p>
                        <p className="text-[10px] text-gray-500 mt-0.5">
                          Based on your routine setup
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-[10px] text-gray-500">Next check: Feb 1st</span>
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
