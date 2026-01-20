import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const bullets = [
  'We look across 7 areas',
  'We set up simple tools and routines',
  'We connect proof to the deliverable',
];

const OurPartSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: '#faf8f5' }}
      aria-labelledby="our-part-heading"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative order-2 lg:order-1"
          >
            <div 
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden min-h-[240px] sm:min-h-[280px]"
              style={{ backgroundColor: 'hsl(262, 60%, 88%)' }}
            >
              {/* Noise texture */}
              <div 
                className="absolute inset-0 opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />
              
              {/* Geometric lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
                <line x1="100%" y1="20%" x2="0%" y2="80%" stroke="hsl(262, 50%, 50%)" strokeWidth="1" />
                <line x1="70%" y1="0%" x2="30%" y2="100%" stroke="hsl(262, 50%, 50%)" strokeWidth="1" />
              </svg>

              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xl w-[85%] sm:w-[80%] max-w-[280px]">
                <p className="text-nim-navy font-medium text-sm sm:text-base leading-relaxed">
                  "We build the system, train your team, and support you for 90 days."
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3">— The Nimara commitment</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 bg-nim-purple/10 text-nim-purple"
            >
              Our role
            </motion.span>
            
            <motion.h2 
              id="our-part-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-8"
            >
              Our <span className="text-primary">part</span>
            </motion.h2>

            <ul className="space-y-4" role="list">
              {bullets.map((bullet, index) => (
                <motion.li
                  key={bullet}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-nim-mint flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-nim-navy" strokeWidth={3} />
                  </div>
                  <span className="text-lg text-foreground">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartSection;
