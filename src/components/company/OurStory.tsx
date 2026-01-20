import { motion, useInView } from 'framer-motion';
import { ArrowRight, BookOpen, Heart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

// Premium floating visual component
const StoryVisual = ({ isInView }: { isInView: boolean }) => (
  <div className="relative h-full w-full flex items-center justify-center p-6 lg:p-8">
    {/* Large rounded panel - light purple with texture */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative w-full h-full min-h-[360px] lg:min-h-[440px] rounded-[2rem] overflow-hidden"
      style={{ backgroundColor: 'hsl(262, 60%, 88%)' }}
    >
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Geometric lines */}
      <svg className="absolute inset-0 w-full h-full opacity-25" preserveAspectRatio="none">
        <line x1="0%" y1="20%" x2="100%" y2="60%" stroke="hsl(262, 50%, 50%)" strokeWidth="1" />
        <line x1="20%" y1="0%" x2="80%" y2="100%" stroke="hsl(262, 50%, 50%)" strokeWidth="1" />
        <line x1="60%" y1="0%" x2="100%" y2="40%" stroke="hsl(262, 50%, 50%)" strokeWidth="1" />
      </svg>
      
      {/* Floating white card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-5 lg:p-6 w-[75%] sm:w-[70%] max-w-[280px]"
      >
        {/* Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-nim-purple/15 flex items-center justify-center flex-shrink-0">
            <Heart className="w-4 h-4 text-nim-purple" />
          </div>
          <span className="text-sm sm:text-base font-semibold text-nim-navy">Our Why:</span>
        </div>
        
        {/* Quote */}
        <p className="text-nim-navy text-sm sm:text-base font-medium mb-3 sm:mb-4 leading-snug italic">
          "Good work isn't enough. Funders need working systems."
        </p>
        
        {/* Stats box */}
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-nim-mint flex items-center justify-center">
              <Target className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-nim-navy" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-nim-navy">Our Focus</span>
          </div>
          <p className="text-xs text-gray-600">Simple basics that stick.</p>
        </div>
      </motion.div>
    </motion.div>
  </div>
);

export const OurStory = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      id="founding-story" 
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#faf8f5' }}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            {/* Label */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4"
            >
              Our Story
            </motion.p>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight mb-6"
            >
              Why we started <span className="text-primary">Nimara</span>
            </motion.h2>

            {/* Body */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-5 mb-8"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                We built Nimara because strong nonprofits were losing time and trust due to messy basics.
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                The work was real — but records, approvals, and files were scattered. Then reporting season came, and everything turned into a scramble.
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                Nimara exists to make the back-end simple, clear, and easy to run.
              </p>
            </motion.div>

            {/* Quote block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-nim-mint/20 rounded-2xl p-6 border border-nim-mint/30 mb-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-nim-mint flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4 text-nim-navy" />
                </div>
                <p className="text-nim-navy font-medium text-lg">
                  Good work isn't enough. Funders need working systems.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                to="/how-nimara-works" 
                className="inline-flex items-center gap-2 text-primary font-medium group"
              >
                <span className="relative">
                  See how we work
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Premium Visual */}
          <div className="hidden lg:block">
            <StoryVisual isInView={isInView} />
          </div>
        </div>
      </div>
    </section>
  );
};
