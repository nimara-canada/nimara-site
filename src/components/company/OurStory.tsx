import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OurStory = () => {
  return (
    <section id="founding-story" className="py-24 md:py-36 lg:py-44 bg-background relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-muted/50 via-background to-background" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.p 
          className="text-sm tracking-widest text-muted-foreground uppercase mb-8" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.p>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Big statement */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-foreground leading-[1.1] tracking-tight">
              Why we started{' '}
              <span className="italic text-muted-foreground">Nimara.</span>
            </h2>
          </motion.div>

          {/* Right column - Details + CTA */}
          <motion.div 
            className="flex flex-col justify-between lg:pt-4" 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
                We built Nimara because strong nonprofits were losing time and trust due to messy basics.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                The work was real — but records, approvals, and files were scattered. Then reporting season came, and everything turned into a scramble.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Nimara exists to make the back-end simple, clear, and easy to run.
              </p>
              
              <div className="border-l-2 border-foreground/20 pl-6 py-2">
                <p className="text-xl md:text-2xl font-serif font-medium text-foreground tracking-tight">
                  Good work isn't enough. Funders need working systems.
                </p>
              </div>
            </div>

            <Link 
              to="/how-nimara-works" 
              className="group inline-flex items-center gap-3 text-foreground font-medium mt-12 text-sm uppercase tracking-widest"
            >
              <span className="relative">
                See how we work
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-foreground/20 group-hover:bg-foreground transition-colors duration-300" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
