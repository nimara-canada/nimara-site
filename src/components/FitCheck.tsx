import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, X } from 'lucide-react';

const fitCriteria = [
  {
    id: 'size',
    text: 'You are a nonprofit or charity with 2–100 staff, or a very active ED with at least 3 active board members.'
  },
  {
    id: 'messy',
    text: 'Your work in the community is strong, but your board, money, HR, or fundraising systems feel messy or unclear.'
  },
  {
    id: 'funder',
    text: 'You worry about being funder-ready, audit-ready, or keeping up with new fund rules.'
  },
  {
    id: 'tools',
    text: 'You want clear, plain-language policies and tools your team will actually use—not just another binder.'
  },
  {
    id: 'partner',
    text: 'You would like a partner who will help install systems and stay for a while, not just run a workshop and leave.'
  }
];

export const FitCheck = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const toggleItem = (id: string) => {
    setCheckedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const matchCount = checkedItems.length;
  const isGoodFit = matchCount >= 2;

  return (
    <section 
      className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden" 
      aria-labelledby="fit-check-heading" 
      id="fit-check"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN - Content */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Editorial header */}
            <p className="text-sm tracking-widest text-slate-500 uppercase mb-4">
              Who we work with
            </p>

            <h2 
              id="fit-check-heading" 
              className="text-4xl md:text-5xl font-serif font-medium text-slate-900 leading-[1.1] mb-6"
            >
              Is Nimara right for your nonprofit?
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-lg">
              We help nonprofits that do strong work in the community but feel messy on the inside. If the back-end keeps you up at night, this is for you.
            </p>

            {/* Interactive checklist */}
            <div className="mb-12">
              <p className="text-xs tracking-widest text-slate-500 uppercase mb-6">
                Check what sounds like you
              </p>

              <div className="space-y-4">
                {fitCriteria.map((item, index) => {
                  const isChecked = checkedItems.includes(item.id);
                  return (
                    <motion.button
                      key={item.id}
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className={`
                        w-full flex items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                        ${isChecked 
                          ? 'bg-slate-900 border-slate-900' 
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100'
                        }
                      `}
                      aria-pressed={isChecked}
                    >
                      {/* Custom checkbox */}
                      <div className={`
                        flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300
                        ${isChecked 
                          ? 'bg-[#ACFCE3] border-[#ACFCE3]' 
                          : 'border-slate-300 bg-white'
                        }
                      `}>
                        <motion.svg
                          initial={false}
                          animate={{ scale: isChecked ? 1 : 0, opacity: isChecked ? 1 : 0 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          className="w-3.5 h-3.5 text-slate-900"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </motion.svg>
                      </div>

                      <span className={`text-sm leading-relaxed transition-colors duration-300 ${
                        isChecked ? 'text-white' : 'text-slate-600'
                      }`}>
                        {item.text}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Result indicator */}
              <AnimatePresence mode="wait">
                {matchCount > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-8 flex items-center gap-4"
                  >
                    <div className={`text-sm font-medium transition-colors duration-300 ${
                      isGoodFit ? 'text-slate-900' : 'text-slate-500'
                    }`}>
                      {matchCount} of {fitCriteria.length} selected
                    </div>
                    {isGoodFit && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-sm text-emerald-600 font-medium"
                      >
                        — Looks like a good fit
                      </motion.span>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <button
                type="button"
                onClick={() => setShowVideoModal(true)}
                className="group inline-flex items-center gap-3 text-slate-900 font-medium"
              >
                <span className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Play size={18} className="text-white ml-0.5" fill="currentColor" />
                </span>
                <span className="relative">
                  Watch the 1-minute intro
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-slate-300 group-hover:bg-slate-900 transition-colors duration-300" />
                </span>
              </button>

              <a
                href="/book-a-call"
                className="group inline-flex items-center gap-2 text-slate-500 font-medium hover:text-slate-900 transition-colors duration-300"
              >
                Need urgent help?
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Video card */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Decorative offset */}
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl bg-[#ACFCE3]/30" aria-hidden="true" />
              
              {/* Video card */}
              <button
                type="button"
                onClick={() => setShowVideoModal(true)}
                className="relative block w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-4"
                aria-label="Play Nimara intro video"
              >
                {/* Background image */}
                <div className="aspect-[4/3] relative">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1600&q=80")'
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20" />

                  {/* Duration badge */}
                  <div className="absolute top-6 left-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ACFCE3]" />
                      1 min
                    </span>
                  </div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Play size={28} className="text-slate-900 ml-1" fill="currentColor" />
                    </motion.div>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-white font-medium text-lg mb-1">See how Nimara works</p>
                    <p className="text-white/60 text-sm">
                      Who we help, what we install, and what working together feels like.
                    </p>
                  </div>
                </div>
              </button>

              {/* Floating quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-12 -left-8 max-w-xs bg-white border border-slate-200 rounded-2xl p-5 shadow-xl hidden lg:block"
              >
                <p className="text-sm text-slate-600 italic leading-relaxed mb-3">
                  "Finally, someone who gets what we actually need."
                </p>
                <p className="text-xs text-slate-400">
                  — Executive Director, Community Nonprofit
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close video"
              >
                <X size={20} />
              </button>

              <div className="aspect-video bg-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#ACFCE3] flex items-center justify-center mx-auto mb-4">
                    <Play size={36} className="text-slate-900 ml-1" fill="currentColor" />
                  </div>
                  <p className="text-white font-medium text-lg mb-1">Video Player</p>
                  <p className="text-white/50 text-sm">Replace with your video embed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
