import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Play, Check, ArrowRight, X } from 'lucide-react';

const fitCriteria = [
  {
    id: 'size',
    text: 'You are a nonprofit or charity with 2–100 staff, or a very active ED with at least 4 active board members.'
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
    text: 'You want clear, plain-language policies and tools your team will actually use, not just another binder.'
  },
  {
    id: 'partner',
    text: 'You would like a partner who will help install systems and stay for a while, not just run a workshop and leave.'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const FitCheck = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  const matchCount = checkedItems.length;
  const isGoodFit = matchCount >= 2;

  return (
    <section
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-background"
      aria-labelledby="fit-check-heading"
      id="fit-check"
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-[hsl(var(--nimara-purple))]/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-[hsl(var(--nimara-mint))]/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT – WHO NIMARA IS FOR */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            {/* Label */}
            <span className="text-xs font-semibold tracking-widest text-[hsl(var(--nimara-purple))] uppercase mb-4 block">
              Who Nimara Is For
            </span>

            <h2
              id="fit-check-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight"
            >
              Is Nimara right for{' '}
              <span className="relative inline-block">
                <span className="relative z-10">your nonprofit?</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-[hsl(var(--nimara-purple))]/20 -rotate-1 rounded" aria-hidden="true" />
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              We help nonprofits and charities that do strong work in the community but feel messy on the inside. If the "back-end" keeps you up at night, this is for you.
            </p>

            {/* Interactive Checklist */}
            <div className="bg-muted/50 rounded-2xl border border-border p-6 lg:p-8 mb-8">
              {/* Header with counter */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm font-semibold text-foreground">
                  Check what applies to you:
                </p>
                <AnimatePresence mode="wait">
                  {matchCount > 0 && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-300 ${
                        isGoodFit 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {isGoodFit && <Check size={12} strokeWidth={3} />}
                      {matchCount}/{fitCriteria.length} selected
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Checklist items */}
              <motion.div 
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {fitCriteria.map((item) => {
                  const isChecked = checkedItems.includes(item.id);
                  return (
                    <motion.div 
                      key={item.id} 
                      variants={itemVariants}
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        className={`
                          w-full flex items-start gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left
                          focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                          ${isChecked
                            ? 'bg-[hsl(var(--nimara-purple))]/5 border-[hsl(var(--nimara-purple))]/30 shadow-sm'
                            : 'bg-background border-border hover:border-[hsl(var(--nimara-purple))]/20 hover:shadow-sm'
                          }
                        `}
                        aria-pressed={isChecked}
                      >
                        {/* Checkbox */}
                        <div className={`
                          flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center 
                          transition-all duration-200
                          ${isChecked
                            ? 'bg-[hsl(var(--nimara-purple))] border-[hsl(var(--nimara-purple))] shadow-sm shadow-[hsl(var(--nimara-purple))]/20'
                            : 'border-border bg-background'
                          }
                        `}>
                          <motion.div
                            initial={false}
                            animate={{ scale: isChecked ? 1 : 0 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          >
                            <Check size={14} className="text-white" strokeWidth={3} />
                          </motion.div>
                        </div>
                        
                        {/* Text */}
                        <span className={`text-sm leading-relaxed transition-colors duration-200 ${
                          isChecked ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {item.text}
                        </span>
                      </button>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Result message */}
              <div className="mt-6 pt-6 border-t border-border">
                <AnimatePresence mode="wait">
                  {isGoodFit ? (
                    <motion.div 
                      key="good-fit"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                        <Check size={20} className="text-emerald-600" strokeWidth={3} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-emerald-700">
                          Great match!
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Nimara is likely a good fit for your organization.
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.p 
                      key="no-fit"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-muted-foreground"
                    >
                      Select two or more to see if we're a good fit.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setShowVideoModal(true)}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[hsl(var(--nimara-purple))]/90 text-primary-foreground px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[44px]"
              >
                <Play size={18} fill="currentColor" />
                Watch 2-minute intro
              </button>
              <a
                href="#health-check"
                className="inline-flex items-center justify-center gap-2 text-foreground hover:text-primary px-4 py-3.5 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl min-h-[44px]"
              >
                Skip to free Health Check
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT – VIDEO TILE */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            {/* Decorative layers */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-[hsl(var(--nimara-purple))]/10" aria-hidden="true" />
            <div className="absolute -z-20 -bottom-8 -right-8 w-full h-full rounded-2xl bg-muted" aria-hidden="true" />
            
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10 bg-foreground"
              onMouseEnter={() => setIsVideoHovered(true)}
              onMouseLeave={() => setIsVideoHovered(false)}
            >
              {/* Video Thumbnail */}
              <button
                type="button"
                onClick={() => setShowVideoModal(true)}
                className="relative aspect-video w-full cursor-pointer group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                aria-label="Play Nimara intro video"
              >
                {/* Background Image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1600&q=80")'
                  }}
                  animate={{ scale: isVideoHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-foreground/20" />

                {/* Duration Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    1 min intro
                  </span>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative"
                    animate={{ scale: isVideoHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Outer ring */}
                    <div className="absolute inset-0 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm" />
                    
                    {/* Pulse animation */}
                    <motion.div
                      className="absolute inset-0 w-20 h-20 rounded-full border-2 border-white/30"
                      animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                    />
                    
                    {/* Inner button */}
                    <div className="relative w-20 h-20 rounded-full flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl">
                        <Play size={24} className="text-[hsl(var(--nimara-purple))] ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold mb-1">See how Nimara works</p>
                  <p className="text-gray-300 text-sm">
                    Who we help, what we install, and what working together feels like.
                  </p>
                </div>
              </button>
            </div>

            {/* Floating testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 lg:-left-12 max-w-xs bg-background rounded-xl shadow-lg border border-border p-4 hidden lg:block"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--nimara-purple))]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[hsl(var(--nimara-purple))] font-bold text-sm">ED</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    "Finally, someone who gets what we actually need."
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-1">— Executive Director, Community Nonprofit</p>
                </div>
              </div>
            </motion.div>
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
              className="relative w-full max-w-4xl bg-foreground rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white min-h-[44px] min-w-[44px]"
                aria-label="Close video"
              >
                <X size={20} />
              </button>
              
              {/* Video placeholder */}
              <div className="aspect-video bg-muted/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                    <Play size={32} className="text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                  <p className="text-white font-semibold mb-1">Video Player</p>
                  <p className="text-gray-400 text-sm">Replace with your video embed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
